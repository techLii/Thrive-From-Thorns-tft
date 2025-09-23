export function getClientIp(req: Request): string {
  // Next.js on Vercel: x-forwarded-for may contain a list
  const xf = req.headers.get("x-forwarded-for") || "";
  if (xf) return xf.split(",")[0].trim();
  const ip = req.headers.get("x-real-ip") || req.headers.get("client-ip") || "";
  if (ip) return ip;
  // As a fallback, combine few headers to reduce collisions
  const ua = req.headers.get("user-agent") || "unknown";
  return `${ua}`;
}
