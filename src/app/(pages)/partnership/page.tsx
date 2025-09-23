import LogoCarousel from "@/app/components/LogoCarousel";
import {
  Award,
  Briefcase,
  Gift,
  Handshake,
  Megaphone,
  Package,
  Share,
  Share2,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { supporters } from "../about/content/about-content";

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
              The bonds we&apos;ve established with organizations and
              individuals hold immense significance to us. These partners share
              our vision and values, uniting with us to enhance the educational
              prospects of young Kenyans, ultimately contributing to a more
              skilled workforce and a fortified nation.
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
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            We believe every child deserves an equal chance at a better future.
            Our educational programs provide vital learning support during
            critical developmental years, empowering children to dream bigger
            and reshape their lives. By partnering with us, you play a direct
            role in transforming these young lives.
          </p>
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
                title: "Corporate Partnerships",
                text: "Build long-term, mutually beneficial relationships that support our programs and initiatives and create sustained impact for children.",
              },
              {
                icon: Users,
                title: "Volunteer Programs",
                text: "Encourage employee participation in our initiatives, provide valuable human resources, and foster a culture of community engagement within your organization.",
              },
              {
                icon: Gift,
                title: "Donations",
                text: "Provide direct financial support to expand our reach and improve services for children. One-time gifts or monthly donations are welcome, no amount is too small.",
              },
              {
                icon: Package,
                title: "In-Kind Donations",
                text: "Contribute goods or professional services that meet operational needs, such as equipment, supplies, or pro bono expert work.",
              },
              {
                icon: Megaphone,
                title: "Advocacy Partnerships",
                text: "Collaborate on advocacy campaigns to raise awareness about the challenges rural children face and promote programs that support their development.",
              },
              {
                icon: Award,
                title: "Sponsorship",
                text: "Sponsor specific programs, events, or initiatives to gain prominent recognition and align your brand with our mission.",
              },
              {
                icon: Share2,
                title: "Co-branded Fundraising Campaigns",
                text: "Partner on joint fundraising efforts that combine reach and resources to maximize impact and donor engagement.",
              },
              {
                icon: Share,
                title: "Sponsored Social Media Initiatives",
                text: "Team up on social media campaigns to raise awareness, engage audiences, and drive support for our programs.",
              },
              {
                icon: Briefcase,
                title: "Expertise & Networks",
                text: "Share professional skills and connect us with your network of specialists and industry leaders to boost our operational capacity and program effectiveness.",
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

        {/* Partners logos - horizontal carousel */}
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
