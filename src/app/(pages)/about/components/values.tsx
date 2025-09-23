import { coreValues } from "../content/about-content";

export default function ValuesSection() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="py-24 px-4 md:px-8 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center mb-12 animate-fade-in max-w-3xl mx-auto">
          <h2
            id="values-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Core <span className="text-csag-primary">Values</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal" />
          <p className="text-gray-600 text-lg">
            At TFT, we hold a deep commitment to treating all children with
            utmost respect. This principle drives our transformative actions and
            practices.
          </p>
        </header>

        <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {coreValues.map((v, i) => (
            <li
              key={v.title}
              className="relative animate-slide-up"
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              <div className="pl-5 border-l-2 border-csag-primary/20 hover:border-csag-primary/40 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  <span className="mr-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-csag-primary/10 text-csag-primary text-xs font-bold align-middle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {v.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
                  {v.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
