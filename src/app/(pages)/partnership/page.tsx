
import {
  Gift,
  Handshake,
  Megaphone,
  Package,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Become a Partner | Thrive From Thorns Kenya",
  description:
    "Collaborate with TFT to expand quality education for children in rural Kenya.",
  alternates: { canonical: "/partnership" },
  openGraph: {
    title: "Become a Partner | TFT",
    description:
      "Join TFT and help scale impact across rural communities in Kenya.",
    url: "/partnership",
    images: [{ url: "/images/TFT-logo-no-bg.webp", width: 800, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner | TFT",
    description:
      "Join TFT and help scale impact across rural communities in Kenya.",
    images: ["/images/TFT-logo-no-bg.webp"],
  },
};

export default function PartnershipPage() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Become a <span className="text-csag-primary">Partner</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-csag-primary to-csag-accent mb-8 rounded-minimal" />
            <p className="text-gray-700 text-lg leading-relaxed">
              Be the Difference Between Surviving and Thriving
              Partnering with Thrive from Thorns means joining a
              movement that delivers real, measurable transformation.
              You don&apos;t just fund aid—you fund futures.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Thrive From Thorns Kenya actively seeks partnerships with
              corporate entities, government agencies, churches, schools,
              universities, colleges, and individuals. Our mission revolves
              around empowering underprivileged boys and girls in rural Kenya,
              aiming to combat poverty and illiteracy through education.
              Together, we&apos;re driving positive change in Kenya.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="#how"
                className="bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-bold py-3 px-6 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
              >
                How to Partner
              </Link>
              <Link
                href="/donate"
                className="bg-white border border-gray-200 text-csag-primary font-bold py-3 px-6 rounded-minimal transition-colors hover:border-csag-primary/40"
              >
                Donate
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-minimal overflow-hidden bg-gray-100">
            <Image
              src="/images/photoshoot/partnership_with_australian_aid.webp"
              alt="A boy filled with joy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Why Partner */}
        <div id="why" className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Handshake className="h-8 w-8 text-csag-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Partner with Us?
            </h2>
          </div>

          <ul className="text-gray-700 text-lg leading-relaxed max-w-4xl list-disc pl-6">
            <li>100% of resources go to mission (no profits to members)</li>
            <li>Transparent and audited financial management</li>
            <li>Real-time impact tracking and updates</li>
            <li>Ethical governance and local leadership</li>
            <li>Long-term vision with short-term wins</li>
          </ul>

        </div>

        {/* How to partner */}
        <div id="how" className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How to Partner with Us
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Handshake,
                title: "Corporate & CSR Partnerships",
                text: "Collaborate with us through strategic CSR initiatives that align business goals with community impact, supporting sustainable programs that transform children’s lives.",
              },
              {
                icon: Users,
                title: "Institutional & NGO Collaborations",
                text: "Work together with like-minded organizations to share resources, co-design programs, and scale impact through joint initiatives and knowledge exchange.",
              },
              {
                icon: Gift,
                title: "Legacy Giving & Donor Circles",
                text: "Create a lasting impact by joining donor circles or setting up legacy gifts that ensure continued support for children’s programs for generations to come.",
              },
              {
                icon: Package,
                title: "Advisory, Mentorship, and Volunteer Expertises",
                text: "Offer your professional skills, mentorship, or strategic guidance to strengthen our operations and empower communities through expert volunteer contributions.",
              },
              {
                icon: Megaphone,
                title: "Government & Policy Partnerships",
                text: "Partner with government bodies to influence policy, co-develop impactful programs, and advocate for systemic changes that benefit rural children.",
              },


            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 border border-gray-200 rounded-minimal bg-white hover:border-csag-primary/30 transition-colors duration-300 animate-slide-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
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
        </div>

        {/* Partners logos - horizontal carousel
        
        <div id="partners" className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Meet Our Amazing Partners
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
            Thrive From Thorns Kenya is incredibly fortunate to have a wide
            range of partners whose support enables us to provide valuable
            educational opportunities and make an impact within our communities.
          </p>
          <div className="rounded-minimal border border-gray-200 bg-white p-4">
            <LogoCarousel items={supporters} speed="normal" />
          </div>
        </div>
        
        */}
        

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Ready to partner with us? Let’s start a conversation.
          </p>
          <Link
            href="/about#contact"
            className="inline-block bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-bold py-3 px-8 rounded-minimal transition-all duration-300 hover:translate-y-[-2px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
