import { approachPillars } from "../content/about-content";

export default function ApproachSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-csag-primary to-csag-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-csag-accent rounded-lg -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-csag-accent-light rounded-lg translate-x-12 translate-y-12" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-csag-accent-light">Approach</span>
          </h2>
          <div className="w-24 h-1 bg-csag-accent-light mx-auto mb-8 rounded-minimal" />
          <p className="text-lg opacity-95">
            Focus on accessible education, active community involvement, and
            customized learning experiences to empower rural children.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {approachPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white/10 border border-white/15 rounded-lg p-6 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300 animate-slide-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {Icon && (
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/15 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="font-semibold text-lg text-white/95">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
