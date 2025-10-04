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
                  Dr.{" "}
                  <span className="text-csag-accent">
                    Sylvester Odanga
                  </span>
                </h3>
                <p className="text-xl text-csag-primary font-semibold">
                  Founder & Executive Director
                </p>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Dr. Sylvester Odanga is a seasoned educator, counselor, and leadership mentor 
                  with over three decades of experience in education, faith-based leadership, and 
                  community development. As Board Chairperson at Thrive from Thrones, he provides 
                  strategic oversight, ethical governance, and value-based leadership to guide the 
                  organization’s mission of empowering communities through mental resilience, 
                  mentorship, and grassroots capacity building.

                  </p>
                  <p>
                  Dr. Odanga is the Founder and Director of Dexterity Lifeskills Institute, a 
                  transformative learning organization equipping young people with life skills 
                  that complement formal education. He also serves as Senior Pastor at Shalom 
                  Logos Church in Kisumu and a Lecturer in Educational Psychology at the University 
                  of Kabianga, integrating academic, spiritual, and psychosocial perspectives in 
                  his mentorship of youth and emerging leaders.
                  </p>
                  <p>
                  He holds a PhD in Educational Psychology, a Master’s in Guidance and Counselling, 
                  and is a certified Trainer of Trainers in Counseling. His career began in secondary 
                  education, where he taught from 1991 to 2019, nurturing thousands of students before 
                  transitioning into higher education, pastoral ministry, and organizational leadership.
                  Dr. Odanga’s work is grounded in values of service, integrity, and holistic transformation. 
                  He has trained hundreds of educators, counselors, and community leaders in emotional wellness, 
                  ethical leadership, and life skills. His contributions have shaped faith communities, schools, 
                  and organizations across western Kenya.
                </p>
                <p>
                  As Board Chairperson of Thrive from Thrones, Dr. Odanga brings deep experience in human 
                  development, strategic thinking, and community engagement—anchoring the organization’s 
                  vision with wisdom, compassion, and a passion for nurturing resilient, empowered leaders.
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
