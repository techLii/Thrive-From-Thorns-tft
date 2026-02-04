import Image from "next/image";
import Link from "next/link";

export default function TeamHero() {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/photoshoot/meet-our-team.jpg"
        alt="Teachers teaching in class"
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Meet Our <span className="text-csag-accent-light">Team</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed opacity-95">
              At Thrive from Thorns, our team is the heartbeat of the transformation we seek. We are a multidisciplinary group of educators, counselors, mentors, social workers, and community leaders united by a shared calling to restore dignity, strength, and purpose. Grounded in local realities and guided by professional excellence, our team walks closely with children, youth, and families—healing trauma, nurturing potential, and building resilience from within communities. More than implementers, we are trusted companions and accountable stewards of every investment, committed to delivering measurable, lasting impact.
            </p>
            <div className="flex flex-wrap gap-6 animate-slide-up">
              <Link
                href="#founder"
                className="bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-bold py-4 px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
              >
                Meet Our Founder
              </Link>
              <Link
                href="#team"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-10 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
              >
                View All Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
