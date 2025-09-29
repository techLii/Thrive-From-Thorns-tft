import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredPartner, supporters } from "../content/about-content";

export default function OurPartners() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        

        

        {/* Supporter Logos 
        
        <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center justify-center gap-2">
            <span className="text-csag-primary">Supporting</span> Organizations
          </h3>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            aria-label="Partner logos"
          >
            {supporters.slice(0, 6).map((p, i) => (
              <div
                key={p.name}
                className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-lg p-4 flex items-center justify-center h-28 hover:border-csag-primary/30 transition-all duration-300 hover:translate-y-[-2px]"
                style={{ animationDelay: `${0.2 + i * 0.035}s` }}
              >
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={140}
                  height={70}
                  loading="lazy"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 140px"
                  quality={70}
                  className="max-h-12 w-auto object-contain filter drop-shadow-[0_0_0.5px_rgba(0,0,0,0.35)] grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="sr-only">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        */}
        

        {/* CTA Banner */}
        <div
          className="mt-20 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="relative overflow-hidden rounded-lg border border-csag-primary/15 bg-gradient-to-r from-csag-primary to-csag-accent p-10 text-white">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Become a Partner
              </h3>
              <p className="text-base md:text-lg mb-6 opacity-95">
                Join us to extend quality education and opportunity to more
                rural learners across Kenya.
              </p>
              <Link
                href="/partnership"
                className="inline-flex items-center bg-white text-csag-primary font-semibold px-8 py-3 rounded-minimal hover:bg-gray-100 transition-all duration-300 hover:translate-y-[-2px] group"
              >
                Partner with us
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="hidden sm:block absolute -left-10 -top-10 w-40 h-40 bg-white rounded-full" />
              <div className="hidden sm:block absolute right-0 bottom-0 w-56 h-56 bg-white/70 rounded-full translate-x-16 translate-y-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
