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
            Meet Our <span className="text-csag-primary">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mx-auto mb-8 rounded-minimal"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Steering Vision. Safeguarding Integrity. Scaling Impact.
          </p>
          <br />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our Board is composed of diverse, values-driven professionals with
            decades of experience in health, education, community development,
            governance, and finance. Their role is to ensure we operate with
            accountability, sustainability, and mission alignment at all times.
          </p>
        </div>

        <div className="bg-white rounded-lg overflow-hidden animate-slide-up">
          <div className="lg:flex">
            <div className="lg:w-1/3">
              <div className="relative h-96 lg:h-full">
                <Image
                  src="/images/volunteers/rachael-onyango.jpg"
                  alt="Rachel Achieng Onyango"
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
                  Rachel <span className="text-csag-accent">Achieng Onyango</span>
                </h3>
                <p className="text-xl text-csag-primary font-semibold">
                  Founder & CEO
                </p>
                <p className="text-md text-gray-500 font-medium mt-1">
                  Sociologist | Counselor | Community Development Specialist
                </p>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Rachel Onyango is a visionary leader driving holistic community transformation. She leads Thrive From Thorns Kenya, empowering children, youth, and families through programs in education, health, economic empowerment, and family strengthening.
                </p>
                <p>
                  With over a decade of experience in strategic leadership, organizational development, and partnership management, Rachel has strengthened systems, expanded fundraising networks, and deepened impact across vulnerable communities.
                </p>
                <p>
                  She also serves as Country Director at Christ’s Hope International Kenya and Managing Partner at SCRIDE Consulting Agency, supporting organizations in planning, training, monitoring, and evaluation.
                </p>
                <p>
                  Rachel’s expertise spans child development, mentorship, program design, safeguarding, and ethical governance. Known for building high-performing teams and fostering inclusive, purpose-driven impact, she combines a strategic mindset with a heart for community resilience.
                </p>

                <div className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-csag-accent">
                  <h4 className="font-bold text-gray-900 mb-3">Education & Credentials</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-csag-primary flex-shrink-0"></span>
                      <span>Bachelor’s in Sociology with IT – Maseno University</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-csag-primary flex-shrink-0"></span>
                      <span>Pursuing Master’s in Social Development & Management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-csag-primary flex-shrink-0"></span>
                      <span>Advanced training in Leadership, Monitoring & Evaluation, Biblical Counseling, and Child Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
