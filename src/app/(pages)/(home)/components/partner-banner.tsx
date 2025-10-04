"use client";
import Link from "next/link";

export default function PartnerBanner() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/photoshoot/homepage-hero.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-csag-primary/80 via-csag-primary/60 to-csag-accent/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="animate-fade-in">
          <span className="inline-block bg-csag-accent-dark text-white font-bold text-sm px-6 py-2 rounded-minimal mb-8">
            #WE NEED YOUR HELP
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8">
            Please join us to help rural children in Kenya to have a{" "}
            <span className="text-csag-accent-light">better life</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <Link
              href="/donate"
              className="bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-bold py-4 px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
              aria-label="Donate to support CSAG"
              title="Donate"
            >
              DONATE NOW
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-white hover:bg-white hover:text-csag-primary font-bold py-4 px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
            >
              BECOME A VOLUNTEER
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <div className="w-16 h-16 bg-csag-accent-light/20 rounded-lg animate-bounce-gentle"></div>
        </div>
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <div
            className="w-20 h-20 bg-csag-primary/20 rounded-lg animate-bounce-gentle"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
