import { Heart, Lightbulb, TrendingUp, Users } from "lucide-react";

export default function ApproachSection() {
  const hedecPathway = [
    {
      title: "Heal",
      text: "Addressing trauma, health challenges, and emotional and spiritual well-being to restore safety, dignity, and hope.",
      icon: Heart,
    },
    {
      title: "Discover",
      text: "Supporting individuals to uncover their purpose, identity, values, and talents, strengthening self-worth and direction.",
      icon: Users, // Using Users as a placeholder for Identity/Discovery
    },
    {
      title: "Empower",
      text: "Equipping participants through education, skills development, entrepreneurship, and income-generating opportunities.",
      icon: Lightbulb,
    },
    {
      title: "Contribute",
      text: "Enabling restored individuals to become leaders and change-makers who give back and transform their families and communities.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-csag-primary to-csag-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-csag-accent rounded-lg -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-csag-accent-light rounded-lg translate-x-12 translate-y-12" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Section Header: Our Approach */}
        <div className="text-center mb-16 animate-fade-in max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-csag-accent-light">Approach</span>
          </h2>
          <div className="w-24 h-1 bg-csag-accent-light mx-auto mb-8 rounded-minimal" />
          <p className="text-lg opacity-95 leading-relaxed">
            At Thrive from Thorns, our work is guided by a deeply human, trauma-informed, and community-rooted approach that addresses the whole person and the systems around them. Our interventions are designed to deliver measurable, long-term impact by restoring dignity, building resilience, and unlocking purpose across generations.
          </p>
        </div>

        {/* Sub-Section: The HEDEC Intervention */}
        <div className="text-center mb-16 animate-fade-in max-w-4xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-csag-accent-light">
            The HEDEC Intervention
          </h3>
          <p className="text-lg opacity-95 leading-relaxed">
            The HEDEC Intervention is Thrive from Thorns’ signature, human-centric and scalable initiative designed to raise safe, resilient, and purpose-driven young people who contribute positively to their communities. HEDEC serves children (6–12), adolescents (13–17), youth (18–30), and families, meeting individuals where they are—emotionally, spiritually, socially, and economically—through a structured four-step pathway.
          </p>
        </div>

        {/* Sub-Section: HEDEC Pathway (Cards) */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            The HEDEC Pathway
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {hedecPathway.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white/10 border border-white/15 rounded-lg p-6 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300 animate-slide-up flex flex-col"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && (
                    <span className="inline-flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-white/15 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                  )}
                  <h3 className="font-bold text-xl text-csag-accent-light">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sub-Section: HEDEC Impact */}
        <div className="text-center animate-fade-in max-w-4xl mx-auto bg-csag-accent/10 p-8 rounded-lg border border-csag-accent/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Sustainable Impact
          </h3>
          <p className="text-lg opacity-95 leading-relaxed">
            Through this integrated approach, HEDEC restores dignity, strengthens resilience, and delivers measurable, long-term impact. Individuals are equipped not only to thrive personally but to break cycles of poverty and despair, creating ripple effects of transformation across families, communities, and generations.
          </p>
        </div>

      </div>
    </section>
  );
}
