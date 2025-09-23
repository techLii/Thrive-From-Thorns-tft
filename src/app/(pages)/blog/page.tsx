import Image from "next/image";
import Link from "next/link";
import Tags from "./components/tags";
import { getAllPosts } from "./lib/posts";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const sp = await searchParams;
  const pageParam =
    typeof sp?.page === "string"
      ? sp.page
      : Array.isArray(sp?.page)
      ? sp.page[0]
      : undefined;
  const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const suffix = page > 1 ? `?page=${page}` : "";
  const url = `/blog${suffix}`;
  return {
    title: "Blog & News | Thrive With Thorns",
    description:
      "Stories, updates, and impact from CSAG’s projects and communities across Ghana.",
    alternates: { canonical: url },
    openGraph: {
      title: "Blog & News | CSAG",
      description:
        "Stories, updates, and impact from CSAG’s projects and communities across Ghana.",
      url,
      images: [
        { url: "/images/csag-logo-no-bg.webp", width: 1200, height: 800 },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog & News | CSAG",
      description:
        "Stories, updates, and impact from CSAG’s projects and communities across Ghana.",
      images: ["/images/csag-logo-no-bg.webp"],
    },
  } as const;
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string | string[];
    tag?: string | string[];
    page?: string | string[];
  }>;
}) {
  const sp = await searchParams;
  const all = getAllPosts();
  const q = typeof sp?.q === "string" ? sp.q.trim() : "";
  const tag = typeof sp?.tag === "string" ? sp.tag.trim() : "";
  const pageParam =
    typeof sp?.page === "string"
      ? sp.page
      : Array.isArray(sp?.page)
      ? sp?.page[0]
      : undefined;
  const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);

  // Tag list for filter dropdown
  const allTags = Array.from(
    new Set(
      all.flatMap((p) => (p.data.tags ? p.data.tags.map((t) => t.trim()) : []))
    )
  ).sort((a, b) => a.localeCompare(b));

  // Filter by text and tag
  const filtered = all.filter((p) => {
    const matchTag = tag
      ? (p.data.tags || []).some((t) => t.toLowerCase() === tag.toLowerCase())
      : true;
    if (!q) return matchTag;
    const ql = q.toLowerCase();
    const hay = [
      p.data.title,
      p.data.excerpt || "",
      p.data.author || "",
      ...(p.data.tags || []),
    ]
      .join(" \n ")
      .toLowerCase();
    return matchTag && hay.includes(ql);
  });

  // Pagination
  const pageSize = 7; // lead + up to 6 headlines per page
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const sliceStart = (safePage - 1) * pageSize;
  const pageItems = filtered.slice(sliceStart, sliceStart + pageSize);
  const [lead, ...rest] = pageItems;

  const makeHref = (p: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (tag) params.set("tag", tag);
    if (p > 1) params.set("page", String(p));
    const qs = params.toString();
    return `/blog${qs ? `?${qs}` : ""}`;
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog <span className="text-csag-primary">& News</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read the latest stories from our work across Ghana.
          </p>
        </header>

        {/* Filters */}
        <form
          method="get"
          className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
        >
          <div className="md:col-span-2">
            <label
              htmlFor="q"
              className="block text-xs font-semibold tracking-wide text-gray-600 mb-1"
            >
              Search articles
            </label>
            <input
              id="q"
              name="q"
              defaultValue={q}
              placeholder="Search by title, author, or content..."
              className="w-full border border-gray-300 focus:border-csag-primary focus:ring-1 focus:ring-csag-primary rounded-minimal px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="tag"
              className="block text-xs font-semibold tracking-wide text-gray-600 mb-1"
            >
              Filter by tag
            </label>
            <select
              id="tag"
              name="tag"
              defaultValue={tag}
              className="w-full border border-gray-300 focus:border-csag-primary focus:ring-1 focus:ring-csag-primary rounded-minimal px-3 py-2 text-sm bg-white"
            >
              <option value="">All tags</option>
              {allTags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="inline-flex items-center bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-semibold px-4 py-2 rounded-minimal text-sm"
            >
              Apply
            </button>
            {(q || tag) && (
              <Link
                href="/blog"
                className="inline-flex items-center border border-gray-300 text-gray-700 hover:border-gray-400 px-4 py-2 rounded-minimal text-sm"
              >
                Clear
              </Link>
            )}
          </div>
        </form>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Lead story (prominent) */}
          {lead ? (
            <article className="lg:col-span-2">
              <div className="relative h-80 bg-gray-100 overflow-hidden">
                {lead.data.thumbnail && (
                  <Image
                    src={lead.data.thumbnail}
                    alt={lead.data.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    priority
                    quality={70}
                  />
                )}
              </div>
              <div className="pt-6">
                <Tags tags={lead.data.tags} />
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 mb-2 leading-tight">
                  <Link
                    href={`/blog/${lead.slug}`}
                    className="hover:underline underline-offset-4 decoration-2 decoration-csag-primary"
                  >
                    {lead.data.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500">
                  By{" "}
                  <span className="font-medium text-gray-700">
                    {lead.data.author}
                  </span>
                  <span className="mx-2">•</span>
                  <time dateTime={lead.data.date}>
                    {new Date(lead.data.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </p>
                {lead.data.excerpt && (
                  <p className="text-gray-700 mt-4 leading-relaxed text-lg">
                    {lead.data.excerpt}
                  </p>
                )}
              </div>
            </article>
          ) : (
            <div className="lg:col-span-2">
              <p className="text-gray-600">
                No articles found. Try adjusting your search or tag filter.
              </p>
            </div>
          )}

          {/* Right column: latest headlines with dividers */}
          <aside className="border-t border-gray-200 pt-4">
            {rest.map((p) => (
              <article
                key={p.slug}
                className="py-4 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex gap-4">
                  <div className="relative w-28 h-20 overflow-hidden bg-gray-100 flex-shrink-0">
                    {p.data.thumbnail && (
                      <Image
                        src={p.data.thumbnail}
                        alt={p.data.title}
                        fill
                        sizes="112px"
                        className="object-cover"
                        quality={70}
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <Tags tags={p.data.tags} />
                    <h3 className="text-base font-bold text-gray-900 leading-snug">
                      <Link
                        href={`/blog/${p.slug}`}
                        className="hover:underline underline-offset-4"
                      >
                        {p.data.title}
                      </Link>
                    </h3>
                    <p className="text-[12px] text-gray-500">
                      <time dateTime={p.data.date}>
                        {new Date(p.data.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </aside>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            className="mt-12 flex items-center justify-center gap-2"
            aria-label="Pagination"
          >
            <Link
              aria-disabled={safePage === 1}
              className={`px-3 py-1 rounded-minimal border text-sm ${
                safePage === 1
                  ? "pointer-events-none opacity-50 border-gray-200 text-gray-400"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              href={makeHref(Math.max(1, safePage - 1))}
            >
              Previous
            </Link>
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === safePage;
              return (
                <Link
                  key={p}
                  href={makeHref(p)}
                  className={`px-3 py-1 rounded-minimal border text-sm ${
                    active
                      ? "bg-csag-primary text-white border-csag-primary"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {p}
                </Link>
              );
            })}
            <Link
              aria-disabled={safePage === totalPages}
              className={`px-3 py-1 rounded-minimal border text-sm ${
                safePage === totalPages
                  ? "pointer-events-none opacity-50 border-gray-200 text-gray-400"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              href={makeHref(Math.min(totalPages, safePage + 1))}
            >
              Next
            </Link>
          </nav>
        )}
      </div>
    </section>
  );
}
