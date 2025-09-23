import { projects } from "@/app/(pages)/our-projects/content/projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// metadata is generated dynamically in generateMetadata below

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
  const url = `/our-projects${suffix}`;
  return {
    title: "Our Projects | Thrive From Thorns Kenya",
    description:
      "Browse completed and ongoing TFT initiatives advancing learning outcomes in rural Kenya.",
    alternates: { canonical: url },
    openGraph: {
      title: "Our Projects | TFT",
      description:
        "Browse completed and ongoing TFT initiatives advancing learning outcomes in rural Kenya.",
      url,
      images: [
        { url: "/images/TFT-logo-no-bg.webp", width: 1200, height: 800 },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Projects | TFT",
      description:
        "Browse completed and ongoing TFT initiatives advancing learning outcomes in rural Kenya.",
      images: ["/images/csag-logo-no-bg.webp"],
    },
  } as const;
}

export default async function OurProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const sp = await searchParams;
  // Ongoing projects first, then the rest by newest date
  const sorted = [...projects].sort((a, b) => {
    const pa = a.status === "Ongoing" ? 0 : 1;
    const pb = b.status === "Ongoing" ? 0 : 1;
    if (pa !== pb) return pa - pb;
    return b.date.localeCompare(a.date);
  });
  // Pagination params
  const pageParam =
    typeof sp?.page === "string"
      ? sp.page
      : Array.isArray(sp?.page)
      ? sp.page[0]
      : undefined;
  const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const sliceStart = (safePage - 1) * pageSize;
  const pageItems = sorted.slice(sliceStart, sliceStart + pageSize);
  const makeHref = (p: number) => {
    const params = new URLSearchParams();
    if (p > 1) params.set("page", String(p));
    const qs = params.toString();
    return `/our-projects${qs ? `?${qs}` : ""}`;
  };
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-csag-primary">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal" />
          <div className="max-w-4xl mx-auto space-y-8 text-left md:text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Through our dedicated efforts, we have made significant strides in
              improving educational outcomes for students in rural Kenya. Our
              initiatives continue to create lasting opportunities for brighter
              futures.
            </p>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {pageItems.map((w, i) => (
            <article
              key={w.slug}
              className="py-10 first:pt-0 flex flex-col md:flex-row gap-8 md:items-start animate-slide-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="relative w-full md:w-72 aspect-[4/3] overflow-hidden rounded-minimal bg-gray-100 flex-shrink-0">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 288px"
                  className="object-cover transition-transform duration-500"
                  quality={70}
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-minimal bg-white/85 backdrop-blur-sm text-csag-primary">
                  {w.status}
                </span>
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug hover:underline underline-offset-4 decoration-2 decoration-csag-primary transition-colors">
                  <Link href={`/our-projects/${w.slug}`}>{w.title}</Link>
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                  <time dateTime={w.date}>
                    {new Date(w.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span className="text-csag-accent/80">{w.sector}</span>
                </p>
                <p className="text-gray-700 leading-relaxed text-base max-w-2xl">
                  {w.excerpt}
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold tracking-wide text-gray-500">
                  {w.sponsor && (
                    <span className="inline-flex items-center gap-1">
                      <span className="text-gray-400">Sponsor:</span>
                      <span className="text-gray-700">{w.sponsor}</span>
                    </span>
                  )}
                  {w.partner && (
                    <span className="inline-flex items-center gap-1">
                      <span className="text-gray-400">Partner:</span>
                      <span className="text-gray-700">{w.partner}</span>
                    </span>
                  )}
                </div>

                <div>
                  <Link
                    href={`/our-projects/${w.slug}`}
                    className="inline-flex items-center text-csag-primary font-semibold text-sm hover:text-csag-primary-dark transition-colors group relative z-10 align-middle"
                    aria-label={`Read more about ${w.title}`}
                    title={`Read more about ${w.title}`}
                  >
                    <span>
                      Read more
                      <span className="sr-only"> about {w.title}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

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
