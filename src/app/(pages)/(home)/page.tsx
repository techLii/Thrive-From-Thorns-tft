import React from "react";
import AboutSection from "./components/about-section";
import HeroSection from "./components/hero-section";
import MissionSection from "./components/mission-section";
import OurImpact from "./components/our-impact";
import OurProjectSection from "./components/our-projects-section";
import PartnerBanner from "./components/partner-banner";
import SponsorSection from "./components/sponsor-section";

export const metadata = {
  title: "Thrive From Thorns (TFT) | Transforming Pain Into Purpose. Building Generational Change",
  description:
    "TFT is a Kenyan non-profit improving access to quality education in rural communities through books, safe learning spaces, and community-driven programs.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Thrive From Thorns (TFT)",
    description:
      "Transforming Pain Into Purpose. Building Generational Change.",
    url: "/",
    images: [
      {
        url: "/images/photoshoot/everyone-hands-up.webp",
        width: 1200,
        height: 630,
        alt: "Children in rural Kenya raising their hands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thrive From Thorns (TFT)",
    description:
      "Expanding learning opportunities for children in rural Kenya through resources, trained educators, and supportive environments.",
    images: ["/images/photoshoot/everyone-hands-up.webp"],
  },
};

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* About */}
      <div id="about" aria-labelledby="about-heading">
        <AboutSection />
      </div>

      {/* Mission */}
      <div id="mission" aria-labelledby="mission-heading">
        <MissionSection />
      </div>

      {/* Causes Carousel */}
      {/* <div id="cause" aria-labelledby="cause-heading">
        <CauseCarousel />
      </div> */}

      {/* Impact Metrics */}
      {/* <div id="impact" aria-labelledby="impact-heading">
          <ImpactBanner />
        </div> */}

      {/* Impact Metrics */}
      <div id="impact" aria-labelledby="impact-heading">
        <OurImpact />
      </div>

      {/* Our Work */}
      <div id="work" aria-labelledby="work-heading">
        <OurProjectSection />
      </div>

      {/* Sponsors */}
      <div id="sponsors" aria-labelledby="sponsors-heading">
        <SponsorSection />
      </div>

      {/* Partners */}
      <div id="partners" aria-labelledby="partners-heading">
        <PartnerBanner />
      </div>
    </div>
  );
}

export default Home;
