import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/photoshoot/our-approach.jpg"
        alt="Children reading in library"
        className="w-full h-full object-cover"
        width={1920}
        height={600}
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
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Who We <span className="text-csag-accent-light">Are</span>
            </h1>
            <p className="text-lg md:text-2xl mb-6 md:mb-8 max-w-3xl leading-relaxed opacity-95">
              Thrive from Thorns is a registered nonprofit under the Kenya Companies Act,
              2015. We address the root causes of poverty, family breakdown, harmful cultural
              practices, poor education, violence, youth unemployment and  holistic mentorship.
              Through a holistic, trauma-informed approach, we empower people to not just survive—but thrive.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 animate-slide-up">
              <Link
                href="/donate"
                className="bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
                aria-label="Donate to support CSAG"
                title="Donate to CSAG"
              >
                DONATE NOW
              </Link>
              <Link
                href="#story"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
                aria-label="Learn more about CSAG’s story"
                title="Learn more about CSAG"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
