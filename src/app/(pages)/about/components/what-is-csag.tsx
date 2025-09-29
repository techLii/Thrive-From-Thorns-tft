import Image from "next/image";

export default function WhatIsCSAG() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is <span className="text-csag-primary">TFT</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Thrive From Thorns (TFT) is a non-profit NGO dedicated to
            enhancing educational opportunities for underprivileged children in
            rural Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-csag-accent">Story</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            
              Across Africa, millions live trapped in poverty, trauma, and broken systems. 
              But we believe every thorn—every pain—can become the root of transformation.
              We exist to turn generational wounds into generational strength.
            </p>

          </div>
          <div
            className="order-1 lg:order-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative overflow-hidden">
              <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 bg-csag-primary/20 rounded-lg opacity-60"></div>
              <Image
                src="/images/photoshoot/everyone-hands-up.webp"
                alt="Children in rural Kenya raising their hands"
                className="w-full h-auto rounded-lg relative z-10 hover:translate-y-[-2px] transition-transform duration-300"
                width={600}
                height={400}
              />
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 bg-csag-accent/30 rounded-lg opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
