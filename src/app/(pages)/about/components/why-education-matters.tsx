import { reasons } from "../content/about-content";

export default function WhyEducationMatters() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 animate-fade-in max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-csag-primary">Education</span> Matters in
            Rural Kenya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Education drives opportunity, health and lasting social progress.
            These are the core reasons we invest.
          </p>
        </div>
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 counter-reset-section">
          {reasons.map((r, i) => (
            <li
              key={r.title}
              className="relative pl-10 py-4 pr-4 bg-white border border-gray-200 rounded-minimal shadow-sm hover:shadow transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <span className="absolute left-3 top-4 w-6 h-6 rounded-full bg-gradient-to-br from-csag-primary to-csag-accent text-white text-xs flex items-center justify-center font-semibold">
                {i + 1}
              </span>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm tracking-wide uppercase">
                {r.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
