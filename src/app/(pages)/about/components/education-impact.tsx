import {
  ArrowUpRight,
  BarChart3,
  GraduationCap,
  HeartPulse,
  Languages,
  TrendingUp,
  Users,
  Venus,
} from "lucide-react";
import { reasons } from "../content/about-content";

export default function EducationImpact() {
  // Map reason titles to icons
  const reasonIcons: Record<string, React.ReactNode> = {
    Empowerment: <TrendingUp className="h-5 w-5" />,
    "Economic Development": <BarChart3 className="h-5 w-5" />,
    "Health Improvement": <HeartPulse className="h-5 w-5" />,
    "Social Change": <Users className="h-5 w-5" />,
    "Gender Equality": <Venus className="h-5 w-5" />,
    "Cultural Preservation": <Languages className="h-5 w-5" />,
    "Access to Opportunities": <ArrowUpRight className="h-5 w-5" />,
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education&apos;s Impact on{" "}
            <span className="text-csag-primary">Kenya</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Education is a powerful catalyst for positive change in rural Kenya,
            playing a vital role in transforming lives and communities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="relative group border border-gray-200 rounded-minimal bg-gray-50 hover:bg-white transition-colors p-6 animate-slide-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-csag-primary/10 text-csag-primary">
                  {reasonIcons[r.title] || (
                    <GraduationCap className="h-5 w-5" />
                  )}
                </span>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide uppercase text-gray-800 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    {r.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
          {values.map((v) => (
            <span
              key={v}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-minimal bg-gradient-to-r from-csag-primary/10 to-csag-accent/10 border border-csag-primary/15 text-sm font-medium text-gray-800 hover:from-csag-primary/20 hover:to-csag-accent/20 transition-colors"
            >
              <CheckCircle2 className="h-4 w-4 text-csag-primary" /> {v}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
