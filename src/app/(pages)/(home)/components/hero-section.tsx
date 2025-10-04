import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/photoshoot/homepage-hero.jpg"
        alt="New school building funded by New Zealand Embassy Fund"
        className="w-full h-full object-cover"
        width={1920}
        height={800}
        priority
        sizes="100vw"
        quality={70}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-csag-primary/80 via-csag-primary/60 to-csag-accent/40 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              WE DONT JUST
              <span className="block text-csag-accent-light">CHANGE LIVES</span>
              WE LAUNCH LEGACIES
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed opacity-95">
              Thrive from Thorns is an African-rooted, purpose-driven nonprofit restoring 
              dignity, strength, and purpose to vulnerable children, youth, and families 
              across Kenya—and beyond. We go beyond aid to deliver lasting wholeness through 
              education, health, economic empowerment, social and spiritual mentorship.
            </p>
            <div className="flex flex-wrap gap-6 animate-slide-up">
              <Link
                href="/partnership"
                className="bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-bold py-4 px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
              >
                PARTNER WITH US
              </Link>
              <Link
                href="/about"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
              >
                EXPLORE OUR MODEL
              </Link>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-10 hidden lg:block">
            <div className="w-20 h-20 bg-csag-accent-light/20 rounded-minimal animate-bounce-gentle"></div>
          </div>
          <div
            className="w-16 h-16 bg-csag-primary/20 rounded-minimal animate-bounce-gentle"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white rounded-minimal flex justify-center">
          <div className="w-1 h-3 bg-white rounded-minimal mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
