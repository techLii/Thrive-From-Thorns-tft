import { ArrowRight, BookOpen, Building2, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { mission, vision } from "../../about/content/about-content";

export default function MissionSection() {
  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-br from-csag-primary/5 to-csag-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-csag-primary">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {mission}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg border border-gray-100 text-center hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up">
            <div className="bg-csag-primary/10 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
              <Building2 className="h-10 w-10 text-csag-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Empower</h3>
            <p className="text-gray-600 leading-relaxed">
              Free access, safe learning spaces and supportive adults accelerate
              literacy and confidence.
            </p>
          </div>

          <div
            className="bg-white p-8 rounded-lg border border-gray-100 text-center hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-csag-accent/10 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="h-10 w-10 text-csag-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Educate</h3>
            <p className="text-gray-600 leading-relaxed">
              Relevant books, digital tools, teacher coaching and community
              engagement strengthen classrooms.
            </p>
          </div>

          <div
            className="bg-white p-8 rounded-lg border border-gray-100 text-center hover:border-csag-primary/20 transition-all duration-300 hover:translate-y-[-2px] animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-gradient-to-br from-csag-primary/10 to-csag-accent/10 w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6">
              <Globe className="h-10 w-10 text-csag-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform</h3>
            <p className="text-gray-600 leading-relaxed">
              Sustained learning outcomes enable children to rise above poverty
              and contribute to thriving communities.
            </p>
          </div>
        </div>

        <div
          className="bg-white rounded-lg overflow-hidden animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="lg:flex">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-csag-accent-dark">Approach</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Our approach blends resource provision, educator empowerment and
                community mobilization. We co-design solutions with schools so
                interventions are practical and sustained.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Vision: {vision}
              </p>
              <Link
                href="/about#approach"
                className="inline-flex items-center text-csag-primary font-semibold hover:text-csag-primary-dark transition-colors group"
              >
                Learn more about our approach
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/photoshoot/children-in-a-classroom.webp"
                alt="Children in a classroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
