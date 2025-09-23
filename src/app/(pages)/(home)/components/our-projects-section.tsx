import { projects } from "@/app/(pages)/our-projects/content/projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OurWorkSection() {
  const latest = [...projects]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Glance at Our <span className="text-csag-primary">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our key initiatives that are making a difference in
            communities across Kenya.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((p, i) => (
            <article
              key={p.slug}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  quality={70}
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-minimal bg-white/85 backdrop-blur-sm text-csag-primary">
                  {p.status}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                  <Link
                    href={`/our-projects/${p.slug}`}
                    className="hover:underline underline-offset-4 decoration-2 decoration-csag-primary"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                  {p.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/our-projects/${p.slug}`}
                    className="inline-flex items-center text-csag-primary font-semibold hover:text-csag-primary-dark transition-colors group"
                    aria-label={`Read more about ${p.title}`}
                    title={`Read more about ${p.title}`}
                  >
                    Read more
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/our-projects"
            className="inline-flex items-center text-csag-primary font-semibold hover:text-csag-primary-dark transition-colors group"
          >
            Explore more about our work
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
