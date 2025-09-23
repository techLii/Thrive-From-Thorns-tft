import {
  BookOpen,
  Building2,
  Droplets,
  Library,
  School,
  Users,
} from "lucide-react";
import { programmes } from "../content/about-content";

// Map some keywords to icons for visual variety; defaults to BookOpen
const iconFor = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("girls")) return Users;
  if (t.includes("desk")) return School;
  if (t.includes("water") || t.includes("sanitation")) return Droplets;
  if (t.includes("computer") || t.includes("labs")) return Building2;
  if (t.includes("library") || t.includes("renovation")) return Library;
  return BookOpen;
};

export default function WhatWeDoSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in max-w-3xl mx-auto">
          <h2
            id="programmes-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What We <span className="text-csag-primary">Do</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal" />
          <p className="text-gray-600 text-lg">
            Our programmes strengthen schools, empower learners, and create
            inspiring places to learn by improving facilities, providing books
            and desks, supporting girls&apos; reading clubs, and expanding
            access to technology and teacher support in rural areas.
          </p>
        </div>

        {/* Alternating timeline without cards */}
        <div className="relative" aria-label="Our programmes timeline">
          {/* Center vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-csag-primary/30 via-csag-accent/30 to-transparent" />

          <ol className="space-y-10">
            {programmes.map((p, i) => {
              const Icon = iconFor(p.title);
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={p.title}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Marker (desktop) */}
                  <span className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-1 z-10">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-csag-primary/10 text-csag-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                    </span>
                  </span>

                  {/* Mobile layout: simple left-accent list */}
                  <div className="md:hidden pl-12">
                    <div className="absolute left-4 top-1 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-csag-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {p.text}
                    </p>
                  </div>

                  {/* Desktop layout: alternate sides */}
                  <div className="hidden md:block">
                    <div
                      className={[
                        "md:w-1/2",
                        isLeft
                          ? "pr-16 ml-0 text-right"
                          : "pl-16 ml-auto text-left",
                      ].join(" ")}
                    >
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {p.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
