import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Gift,
  Handshake,
  Megaphone,
  Package,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";

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

const DIRECT_EMAIL = "thrivefromthorns@gmail.com";

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
              economically viable future.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${DIRECT_EMAIL}?subject=Donation%20Inquiry`}
                className="bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-bold py-3 px-6 rounded-minimal transition-all duration-300 hover:translate-y-[-2px] inline-flex items-center"
              >
                Arrange a Direct Donation
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
              <a
                href={`mailto:${DIRECT_EMAIL}?subject=Monthly%20Giving%20Plan`}
                className="bg-white border border-gray-200 text-csag-primary font-bold py-3 px-6 rounded-minimal transition-colors hover:border-csag-primary/40 inline-flex items-center"
              >
                Discuss Monthly Giving
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600 italic">
              &quot;We value personal connection. Reach out to discuss how your gift can bridge the gap for a child today.&quot;
            </p>
          </div>
          <div className="relative aspect-[16/10] rounded-minimal overflow-hidden bg-gray-100 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/images/photoshoot/donate.jpg"
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
                  Our mission is to empower children, youth, and families through
                  education, healthcare, economic empowerment, and mentorship that
                  restore purpose and transform lives.
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
                title: "Donate",
                text: "One-time or monthly giving",
              },
              {
                icon: Gift,
                title: "Volunteer",
                text: "Local or remote support",
              },
              {
                icon: Package,
                title: "Mentor",
                text: "Empower a future leader",
              },
              {
                icon: Users,
                title: "Fundraise",
                text: "Mobilize your network",
              },
              {
                icon: Briefcase,
                title: "Collaborate",
                text: "Partner your organization or church",
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
                <a
                  href={`mailto:${DIRECT_EMAIL}?subject=Donation%20Inquiry`}
                  className="inline-flex items-center bg-white text-csag-primary font-semibold px-6 py-3 rounded-minimal hover:bg-gray-100 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  Make an Impact Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="hidden sm:block absolute -left-10 -top-10 w-40 h-40 bg-white rounded-full" />
              <div className="hidden sm:block absolute right-0 bottom-0 w-56 h-56 bg-white/70 rounded-full translate-x-16 translate-y-16" />
            </div>
          </div>
        </section>


      </div>
    </section>
  );
}
