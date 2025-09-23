import {
  ArrowRight,
  Briefcase,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Coins,
  Gift,
  HandHeart,
  Handshake,
  Hash,
  Landmark,
  Megaphone,
  Package,
  Quote,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Donate | Thrive From Thorns",
  description:
    "Every gift helps educate a child in rural Kenya. Donate once or monthly via GlobalGiving or use our bank transfer details.",
  alternates: { canonical: "/donate" },
  openGraph: {
    title: "Donate to TFT",
    description:
      "Your donation empowers learners with books, safe spaces, and trained educators.",
    url: "/donate",
    images: [
      {
        url: "/images/csag-logo-no-bg.webp",
        width: 1200,
        height: 630,
        alt: "Support education through TFT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate to TFT",
    description:
      "Your donation empowers learners with books, safe spaces, and trained educators.",
    images: ["/images/csag-logo-no-bg.webp"],
  },
};

const GLOBAL_GIVING_URL =
  "https://www.globalgiving.org/projects/";

export default function DonatePage() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Your donation is needed now more than ever
            </h1>
            <p className="text-lg md:text-xl text-csag-primary font-semibold">
              EVERY GIFT HELPS EDUCATE A CHILD
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mt-6 rounded-minimal" />
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
              With your financial support, students are empowered to pursue
              their dreams and pave a path toward a stable, secure and
              economically viable future. Please help us by making an online
              donation today. You can also contact us to make a donation by mail
              at Thrive From Thorns, P.O.Box 0000, Kisumu Estate. Kenya.
              
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={GLOBAL_GIVING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-bold py-3 px-6 rounded-minimal transition-all duration-300 hover:translate-y-[-2px] inline-flex items-center"
              >
                Donate Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href={GLOBAL_GIVING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 text-csag-primary font-bold py-3 px-6 rounded-minimal transition-colors hover:border-csag-primary/40 inline-flex items-center"
              >
                Give a Monthly Donation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              We partner with
              <Link
                href={"https://www.globalgiving.org/"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-csag-primary underline underline-offset-4 decoration-white/0 hover:decoration-csag-primary ml-1"
              >
                GlobalGiving
              </Link>
              <span className="ml-1">
                to provide a dedicated, secure donation portal.
              </span>
            </p>
          </div>
          <div className="relative aspect-[16/10] rounded-minimal overflow-hidden bg-gray-100">
            <Image
              src="/images/photoshoot/small-kid-looking-straight-into-eyes.webp"
              alt="Children learning in Kenya"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Narrative */}
        <section
          className="mb-16 animate-fade-in"
          aria-labelledby="narrative"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="relative overflow-hidden rounded-minimal border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-csag-primary/10 text-csag-primary">
                  <Quote className="h-5 w-5" />
                </span>
                <h3 id="narrative" className="text-2xl font-bold text-gray-900">
                  Our Story & Belief
                </h3>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Thrive From Thorns stands as a beacon of hope for
                  vulnerable children. As an African proverb reminds us,
                  &quot;It takes a village to raise a child.&quot; Embracing
                  this principle, we extend an invitation to you, our
                  compassionate partners, to join us in empowering these young
                  lives.
                </p>
                <p>
                  Embark on a transformative journey with our vibrant ,
                  dedicated to nurturing the hearts and minds of underprivileged
                  children in rural communities of Kenya. Driven by an
                  unwavering belief that every child deserves a warm embrace,
                  access to quality education, and a future filled with hope, we
                  invite you to join us in making a profound difference.
                </p>
                <p>
                  Our mission is simple yet profound: to eradicate educational
                  disparities and provide a nurturing environment where every
                  child can thrive. We envision a world where education
                  empowers, where love conquers fears, and where the smiles of
                  children illuminate our path.
                </p>
              </div>
            </div>
            <div className="relative rounded-minimal overflow-hidden border border-gray-200 bg-gray-50">
              <Image
                src="/images/photoshoot/a-girl-learning-numbers.webp"
                alt="Smiling students supported by TFT"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="mb-16 animate-slide-up" id="ways-to-get-involved">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="h-6 w-6 text-csag-accent" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ways to Get Involved
            </h3>
          </div>
          <p className="text-gray-700 mb-6">
            OTHER WAYS YOU CAN SUPPORT THRIVE FROM THORNS
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Megaphone,
                title: "Online Funding Programs",
                text: "Participate in our online crowdfunding campaigns to support our programs and initiatives that align with your missions and values.",
              },
              {
                icon: Gift,
                title: "Direct Donations",
                text: "Make a one-time or recurring donation through our secure online portal.",
              },
              {
                icon: Package,
                title: "In-Kind Donations",
                text: "Donate essential items, such as books and pencils supplies, to support our programs.",
              },
              {
                icon: Users,
                title: "Employee Engagement",
                text: "Encourage your employees to participate through payroll deductions or volunteer opportunities.",
              },
              {
                icon: Briefcase,
                title: "Corporate Partnerships",
                text: "Establish strategic partnerships with businesses that share our mission and values.",
              },
              {
                icon: Calendar,
                title: "Community Events",
                text: "Attend fundraising events and connect with like-minded supporters.",
              },
              {
                icon: HandHeart,
                title: "Volunteerism",
                text: "Lend your time and skills to contribute directly to our mission.",
              },
              {
                icon: Gift,
                title: "One-Time Gifts",
                text: "Make a single contribution of any amount to fund projects or operations.",
              },
              {
                icon: Coins,
                title: "Matching Gifts",
                text: "Double the impact of your donation when your employer matches your contribution.",
              },
              {
                icon: Clock,
                title: "One-Time Volunteering",
                text: "Engage in short-term projects or events that fit your schedule.",
              },
              {
                icon: CalendarCheck,
                title: "Long-Term Volunteering",
                text: "Commit to longer-term mentoring or community outreach initiatives.",
              },

              {
                icon: Wrench,
                title: "Skill-Based Volunteering",
                text: "Offer specialized skills or expertise in areas like education or project management.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 border border-gray-200 rounded-minimal bg-white hover:border-csag-primary/30 transition-colors duration-300"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-csag-accent/10 text-csag-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold text-csag-accent">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Promise */}
        <section
          className="mb-16 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
          aria-labelledby="our-promise"
        >
          <div className="relative overflow-hidden rounded-minimal border border-csag-primary/15 bg-gradient-to-r from-csag-primary to-csag-accent p-8 md:p-10 text-white">
            <div className="relative z-10 grid md:grid-cols-3 gap-6 md:gap-10 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/15">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <h3
                    id="our-promise"
                    className="text-2xl md:text-3xl font-bold"
                  >
                    Our Promise
                  </h3>
                </div>
                <p className="opacity-95 leading-relaxed mb-3">
                  We unequivocally pledge that all donations entrusted to us
                  will be meticulously directed towards the benefit of the
                  children we serve. Our unwavering commitment to transparency
                  and accountability ensures that every penny received will be
                  invested wisely in their future.
                </p>
                <p className="opacity-95 leading-relaxed">
                  The Power of Individual Contributions: We firmly believe that
                  every contribution, no matter how small, has the potential to
                  create a profound impact on the lives of these children. By
                  pooling our collective resources, we can generate a ripple
                  effect that will leave an indelible mark on their development
                  and well-being.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Accountability & transparency",
                  "Impact-minded spending",
                  "Child-first programming",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-white/90" />
                    <span className="text-white/95">{point}</span>
                  </li>
                ))}
              </ul>
              {/* Inline CTA Buttons merged here */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={GLOBAL_GIVING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-csag-primary font-semibold px-6 py-3 rounded-minimal hover:bg-gray-100 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Donate Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  href={GLOBAL_GIVING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/10 text-white font-semibold px-6 py-3 rounded-minimal hover:bg-white/15 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Give Monthly
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="hidden sm:block absolute -left-10 -top-10 w-40 h-40 bg-white rounded-full" />
              <div className="hidden sm:block absolute right-0 bottom-0 w-56 h-56 bg-white/70 rounded-full translate-x-16 translate-y-16" />
            </div>
          </div>
        </section>

        {/* Bank transfer details */}
        <section className="border border-gray-200 rounded-minimal bg-white p-6 md:p-8 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-csag-accent/10 text-csag-accent">
              <Landmark className="h-5 w-5" />
            </span>
            <h3 className="text-2xl font-bold text-gray-900">
              Bank Transfer Details
            </h3>
          </div>
          <p className="text-gray-700 mb-6">
            Thank you for supporting us and giving change a chance! If you would
            like to donate to us via bank transfer, please use our details
            below. We accept transfers internationally.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Landmark className="h-5 w-5 mt-0.5 text-csag-primary" />
                <p>
                  <span className="font-semibold">Bank Name:</span> Guaranty
                  Trust Bank (Kenya) Limited
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 mt-0.5 text-csag-primary" />
                <p>
                  <span className="font-semibold">Account Name:</span> Thrive From Thorns
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Hash className="h-5 w-5 mt-0.5 text-csag-primary" />
                <p>
                  <span className="font-semibold">Account Number:</span>{" "}
                  <span className="font-mono tracking-wide">3208002015161</span>{" "}
                  (DOLLAR)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Hash className="h-5 w-5 mt-0.5 text-csag-primary" />
                <p>
                  <span className="font-semibold">Account Number:</span>{" "}
                  <span className="font-mono tracking-wide">3208004031047</span>{" "}
                  (EURO)
                </p>
              </div>
            </div>
            
          </div>
          <p className="text-gray-700 mt-6">
            When making a donation via bank transfer please email us at
            <Link
              href="mailto:thrivefromthorns@gmail.com"
              className="font-semibold underline underline-offset-4 decoration-white/0 hover:decoration-csag-primary ml-1"
            >
              thrivefromthorns@gmail.com
            </Link>
            <span className="ml-1">
              with your contact details so that we can acknowledge receipt.
            </span>
          </p>
        </section>
      </div>
    </section>
  );
}
