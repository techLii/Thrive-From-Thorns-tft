// Simple in-memory rate limiter (per process). For distributed deploys,
// replace with a shared store (Redis, Upstash, etc.).

type Entry = { count: number; resetAt: number };
const store = new Map<string, Entry>();
let lastCleanup = 0;

function cleanup(now: number) {
  if (now - lastCleanup < 60_000) return; // once per minute
  for (const [k, v] of store) {
    if (v.resetAt <= now) store.delete(k);
  }
  lastCleanup = now;
}

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  resetAt: number;
};

export function rateLimit(
  key: string,
  max = 5,
  windowMs = 60 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  cleanup(now);
  const entry = store.get(key);
  if (!entry || entry.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: max - 1, resetAt: now + windowMs };
  }
  if (entry.count >= max) {
    return { ok: false, remaining: 0, resetAt: entry.resetAt };
  }
  entry.count += 1;
  return { ok: true, remaining: max - entry.count, resetAt: entry.resetAt };
}
