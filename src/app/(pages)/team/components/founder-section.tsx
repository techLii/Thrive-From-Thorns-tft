//import moment from "moment-timezone";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-csag-primary">Chairperson</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            The visionary leader who started it all and continues to inspire our
            mission.
          </p>
        </div>

        <div className="bg-white rounded-lg overflow-hidden animate-slide-up">
          <div className="lg:flex">
            <div className="lg:w-1/3">
              <div className="relative h-96 lg:h-full">
                <Image
                  src="/images/volunteers/odanga.jpg"
                  alt="TWT Chairperson"
                  className="w-full h-full object-cover"
                  width={400}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Mr.{" "}
                  <span className="text-csag-accent">
                    Dr. Sylvester Odanga
                  </span>
                </h3>
                <p className="text-xl text-csag-primary font-semibold">
                  Founder & Executive Director
                </p>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Dr. Sylvester Odanga is an expert in education and youth empowerment,
                   he provides visionary leadership and strategic guidance to 
                   ensure our programs remain innovative and scalable.
                </p>

                
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
