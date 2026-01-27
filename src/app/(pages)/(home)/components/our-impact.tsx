import { ArrowRight, BookOpen, School, Users } from "lucide-react";
import Link from "next/link";

export default function OurImpact() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-csag-primary to-csag-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="hidden sm:block absolute top-0 left-0 w-32 h-32 bg-csag-accent rounded-lg -translate-x-16 -translate-y-16"></div>
        <div className="hidden sm:block absolute bottom-0 right-0 w-24 h-24 bg-csag-accent-light rounded-lg translate-x-12 translate-y-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our <span className="text-csag-accent-light">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-csag-accent-light mx-auto mb-8 rounded-minimal"></div>
          <p className="text-lg leading-relaxed opacity-95">
            Together with our donors and partners, we are achieving tangible results
            through education, mentorship, and life skills programs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Row 1 */}
          <StatCard
            icon={<Users className="h-8 w-8 text-csag-accent-light" />}
            label="Lives Impacted"
            description="Children and youth reached through education, mentorship, and life skills programs."
            value="1,200+"
            delay="0s"
          />
          <StatCard
            icon={<BookOpen className="h-8 w-8 text-csag-accent-light" />}
            label="Children Supported"
            description="Direct sponsorship providing holistic care, education, and health support."
            value="30+"
            delay="0.05s"
          />
          <StatCard
            icon={<School className="h-8 w-8 text-csag-accent-light" />}
            label="Growth Observed"
            description="Regular evaluations confirming improvements in emotional well-being and purpose."
            value="100%"
            delay="0.1s"
          />
        </div>

        <div className="text-center">
          <Link
            href="/our-projects" // this is temporary, since we don't have a dedicated impact page yet
            className="inline-flex items-center bg-csag-accent-dark text-white font-semibold px-8 py-3 rounded-minimal hover:bg-csag-accent-darker transition-all duration-300 hover:translate-y-[-2px] group"
            aria-label="View our detailed impact report"
          >
            View our detailed impact report
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Reusable stat card component
const StatCard = ({
  icon,
  label,
  value,
  description,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description?: string;
  delay?: string;
}) => {
  return (
    <div
      className="bg-white/10 p-6 md:p-8 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up text-center"
      style={{ animationDelay: delay }}
    >
      <div className="bg-csag-accent/20 w-14 h-14 md:w-16 md:h-16 mx-auto rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-csag-accent-light">
        {value}
      </div>
      <p className="text-xs md:text-sm font-medium text-white/95 mb-1">
        {label}
      </p>
      {description && (
        <p className="text-[11px] md:text-xs text-white/70 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
