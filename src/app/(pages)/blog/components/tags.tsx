import Link from "next/link";

export default function Tags({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  const shown = tags.slice(0, 3);
  return (
    <p className="text-[12px] uppercase tracking-wide text-gray-500 break-words">
      {shown.map((t, i) => (
        <span key={t}>
          {i > 0 && <span className="mx-2">•</span>}
          <Link
            href={`/blog?tag=${encodeURIComponent(t)}`}
            className="hover:underline"
          >
            {t}
          </Link>
        </span>
      ))}
    </p>
  );
}
