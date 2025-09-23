import { Flag, Lightbulb, Target } from "lucide-react";
import { goals, mission, vision } from "../content/about-content";

export default function MissionVisionGoals() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-12">
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-csag-accent" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-csag-accent">Mission</span>
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{mission}</p>
              <p className="text-gray-600 text-sm mt-3">
                We connect schools with dedicated volunteers and practical
                learning materials so every child can grow.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-8 w-8 text-csag-accent" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-csag-accent">Vision</span>
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{vision}</p>
              <p className="text-gray-600 text-sm mt-3">
                We align with United Nations Sustainable Development Goals by
                advancing equitable education and community uplift.
              </p>
            </div>
          </div>
          <div
            className="lg:col-span-2 animate-slide-up"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Flag className="h-8 w-8 text-csag-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Goals
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {goals.map((g, i) => {
                const Icon = g.icon;
                return (
                  <div
                    key={g.title}
                    className="p-6 border border-gray-200 rounded-minimal bg-gray-50 hover:bg-white transition-colors duration-300 flex flex-col gap-3"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  >
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-csag-accent/10 text-csag-accent">
                          <Icon className="h-5 w-5" />
                        </span>
                      )}
                      <p className="text-sm font-semibold text-csag-accent">
                        {g.title}
                      </p>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {g.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
