import {
  ArrowRight,
  CalendarDays,
  GraduationCap,
  HandCoins,
  Megaphone,
  Quote,
  Stethoscope,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TEAM_MEMBERS } from "../team/content/team-content";
import VolunteerForm from "./components/volunteer-form";

export const metadata = {
  title: "Volunteer | Thrive From Thorns",
  description:
    "Volunteer with TFT to support education, health, and community development in rural kenya.",
  alternates: { canonical: "/volunteer" },
  openGraph: {
    title: "Volunteer with TFT",                                              
    description:
      "Share your skills to improve education and wellbeing in rural Kenya.",
    url: "/volunteer",
    images: [{ url: "/images/csag-logo-no-bg.webp", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer with TFT",
    description:
      "Share your skills to improve education and wellbeing in rural Kenya.",
    images: ["/images/csag-logo-no-bg.webp"],
  },
};

const PROGRAMS: { title: string; body: string }[] = [
  {
    title: "Program Support in Health",
    body: "Be a part of our team dedicated to improving the health and well-being of underserved communities. You'll work with healthcare professionals and community leaders to develop and implement programs that make an impact.",
  },
  {
    title: "Program Support in Education",
    body: "Help ensure every child can access quality education. Work with students, teachers, and staff to provide support where it's needed most and make a difference in the lives of young people.",
  },
  {
    title: "Communications and Outreach",
    body: "Help us spread our message and inspire others to join. Build strong relationships with our community and raise awareness about our mission.",
  },
  {
    title: "Fundraising",
    body: "Use your skills to help raise funds that power our programs. Identify new funding sources and build relationships with donors and sponsors committed to positive change.",
  },
  {
    title: "Event Planning and Coordination",
    body: "Join our team of event planners. Help organize impactful events that raise awareness about our mission and inspire others to get involved.",
  },
  {
    title: "Marketing",
    body: "Bring your creativity to develop campaigns that attract more volunteers and donors. Help us reach more people and change more lives.",
  },
];

// Pull 3 volunteer testimonials from the Team content
const VOLUNTEER_TESTIMONIALS = TEAM_MEMBERS.slice(0, 3);

const programIcon = (title: string) => {
  switch (title) {
    case "Program Support in Health":
      return Stethoscope;
    case "Program Support in Education":
      return GraduationCap;
    case "Communications and Outreach":
      return Megaphone;
    case "Fundraising":
      return HandCoins;
    case "Event Planning and Coordination":
      return CalendarDays;
    case "Marketing":
      return Target;
    default:
      return Target;
  }
};

export default function VolunteerPage() {
  return (
    <section>
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/photoshoot/meet-our-team.jpg"
            alt="Children in rural Kenya raising their hands"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={70}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
        <div className="relative px-4 md:px-8 pt-28 pb-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Volunteer with TFT
            </h1>
            <p className="mt-6 text-white/90 leading-relaxed text-lg md:text-xl">
              Join Thrive From Thorns Kenya in empowering young people through
              education and health. Volunteer with us to create real impact and
              be part of lasting change.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#apply"
                className="inline-flex items-center bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-semibold px-6 py-3 rounded-minimal transition-transform hover:-translate-y-0.5"
              >
                Become a Volunteer
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
              </a>
              <a
                href="#programs"
                // className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-minimal backdrop-blur border border-white/20"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold px-6 py-3 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
              >
                Explore Opportunities
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="px-4 md:px-8 py-14 bg-gray-50" id="programs">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-csag-primary">
              Volunteer Roles
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Where you can contribute
            </h2>
            <p className="mt-2 text-gray-600">
              Pick a focus that fits your skills and interests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((p) => {
              const Icon = programIcon(p.title);
              return (
                <div
                  key={p.title}
                  className="group rounded-lg p-6 bg-white transition duration-200 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-csag-primary/10 text-csag-primary transition-colors group-hover:bg-csag-primary/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-gray-700 leading-relaxed">{p.body}</p>
                  <div className="mt-5">
                    <a
                      href="#apply"
                      className="text-csag-primary font-semibold hover:underline"
                    >
                      Register now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-gray-600 text-sm">
            At Thrive From Thorns Kenya, we value diversity and inclusion,
            recognizing that they are essential to the success of our
            organization. We’re committed to a welcoming environment where
            discrimination has no place.
          </p>
        </div>
      </div>

      {/* Words from past volunteers */}
      <div className="px-4 md:px-8 py-14 bg-csag-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Words from Past Volunteers
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Hear how volunteering with TFT made a difference for them and
              their communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VOLUNTEER_TESTIMONIALS.map((m) => (
              <blockquote key={m.id} className="h-full rounded-lg bg-white p-6">
                <Quote aria-hidden className="h-8 w-8 text-csag-primary/60" />
                <p className="mt-3 text-gray-800 italic line-clamp-3">
                  {m.testimonial}
                </p>
                <footer className="mt-5 flex items-center gap-4 text-sm text-gray-600">
                  <Image
                    src={m.imageUrl}
                    alt={m.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-lg object-cover"
                    sizes="56px"
                    quality={70}
                  />
                  <div>
                    <span className="block font-semibold text-gray-900">
                      {m.name}
                    </span>
                    <span className="block">{m.designation}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              href="/team#team"
              className="inline-flex items-center text-csag-primary font-semibold hover:text-csag-primary-dark transition-colors group"
            >
              Read more from our team
              <span className="sr-only"> about their experiences</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="px-4 md:px-8 py-14 " id="apply">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Volunteer Registration Form
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Takes 3–5 minutes. We’ll get back within 5–7 days.
          </p>
          <VolunteerForm programTitles={PROGRAMS.map((p) => p.title)} />
        </div>
      </div>

      {/* FAQs */}
      {/* <div className="px-4 md:px-8 py-16 bg-white ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="mt-8 divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            {[
              {
                q: "What is the mission of thrive from Thorns Kenya (TFT)?",
                a: "TFT advances education, health, and wellbeing for children and communities in Kenya through programs, partnerships, and advocacy.",
              },
              {
                q: "How does TFT support education in Kenya?",
                a: "We support school infrastructure, provide learning materials, and facilitate programs that improve access and quality of education.",
              },
              {
                q: "What healthcare projects does TFT undertake?",
                a: "We run community health initiatives, awareness campaigns, and partner with local providers to improve access to basic healthcare.",
              },
              {
                q: "How can I donate or support TFT?",
                a: "You can donate via our Donate page, partner with us, or volunteer your time and skills.",
              },
              {
                q: "Can I volunteer with TFT?",
                a: "Yes. Use the registration form above to apply, and our team will follow up with you.",
              },
              {
                q: "What communities does TFT work with?",
                a: "We work with underserved and rural communities across Kenya, focusing on areas with the greatest need.",
              },
            ].map((item, idx) => (
              <details key={idx} className="group open:bg-gray-50">
                <summary className="flex w-full cursor-pointer list-none items-center justify-between px-4 py-4 text-left font-medium text-gray-900 hover:bg-gray-50">
                  <span>{item.q}</span>
                  <span className="ml-4 text-csag-primary group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-4 pb-4 text-gray-700">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
