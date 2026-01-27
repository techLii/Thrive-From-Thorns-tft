// Centralized content definitions for About page sections
// This allows potential future CMS integration by replacing these arrays.

import {
  BookOpen,
  Handshake,
  Heart,
  Layers,
  School,
  Users,
} from "lucide-react";

export interface IconEntry {
  title: string;
  text: string;
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

export const mission =
  "To empower children, youth, and families through education, healthcare, economic empowerment, and mentorship—restoring purpose and transforming lives.";

export const vision =
  "A world where every life is restored to dignity, strength, and purpose.";

export const coreValues: IconEntry[] = [
  {
    title: "Integrity",
    text: "Transparent, accountable, and ethical in all actions.",
    icon: School,
  },
  {
    title: "Compassion",
    text: "Serving with empathy and respect for human dignity.",
    icon: BookOpen,
  },
  {
    title: "Innovation",
    text: "Creating bold, sustainable solutions for complex challenges.",
    icon: Users,
  },
  {
    title: "Collaboration",
    text: "Working hand-in-hand with communities, government, and partners.",
    icon: Heart,
  },
  {
    title: "Excellence",
    text: "Pursuing quality, measurable results, and transformative outcomes.",
    icon: Handshake,
  },
];

export const approachPillars: IconEntry[] = [
  {
    title: "Education & Skills Development",
    text: "From classrooms to vocational training centers, we equip youth with the knowledge and skills they need for lifelong success.",
    icon: Layers,
  },
  {
    title: "Health & Wellness",
    text: "We provide trauma healing, clinical services, rescue programs, and psychosocial support, promoting total well-being.",
    icon: Users,
  },
  {
    title: "Leadership & Empowerment",
    text: "Through mentorship and life-skills development, we cultivate confident, values-driven leaders ready to shape their own future.",
    icon: Heart,
  },
  {
    title: "Family & Community Strengthening",
    text: "We restore homes and communities with parenting training, mental health support, and family-centered interventions.",
    icon: Heart,
  },
  {
    title: "Economic Empowerment",
    text: "We unlock sustainable livelihoods through entrepreneurship, vocational training, and income-generating opportunities.",
    icon: Heart,
  },
];

export const reasons = [
  {
    title: "Integrity & Accountability",
    text: "We uphold the highest ethical standards, managing resources responsibly and transparently in the best interest of our communities.",
  },
  {
    title: "Local Knowledge, Global Standards",
    text: "We combine deep local insights with international best practices, delivering solutions that are culturally relevant and globally competitive.",
  },
  {
    title: "Transparency in Action",
    text: "We operate openly, sharing real-time results, measurable impact, and clear reporting with all stakeholders.",
  },
  {
    title: "Inclusive & Participatory Leadership",
    text: "We value every voice, encourage shared decision-making, and ensure communities actively shape their own future.",
  },
];

// Programs / What We Do
export const programmes: IconEntry[] = [
  {
    title: "Evidence-Based, Scalable Programs",
    text: "We design programs grounded in research and proven best practices, ensuring they can be replicated to reach more communities.",
  },
  {
    title: "Purpose Centers",
    text: "Multi-functional centers providing education, healthcare, and rescue services—safe spaces where children and communities can thrive.",
  },
  {
    title: "Mentorship & Life-Skills Curriculum",
    text: "Structured mentorship programs that empower youth with guidance, confidence, and essential skills for success.",
  },
  {
    title: "Strategic Partnerships",
    text: "Collaborating with governments and organizations to amplify impact and drive sustainable change across Africa.",
  },
  {
    title: "Community-Led Restoration Tools",
    text: "Equipping communities with the tools and training to lead their own development and sustain progress independently.",
  },
  {
    title: "Scaling Across Africa",
    text: "Expanding our proven model to new regions, adapting to local contexts while maintaining core strategy for maximum impact.",
  },
  {
    title: "Sustainable Resources",
    text: "Securing long-term funding and partnerships to ensure programs are sustained and expanded for lasting change.",
  },
];

// Central partner data for easier maintenance / future CMS hookup
export const featuredPartner = {
  name: "Government of Kenya",
  highlight: "Kenya",
  logo: "/images/partners/australian_ai.webp",
  description:
    "The Government of Kenya, through the Australian High Commission's Direct Aid Program (DAP), funded key improvements at Kisumu D/A and R/C Basic Schools.",
  link: "",
};

export const supporters: { name: string; logo: string }[] = [
  {
    name: "African Library Project",
    logo: "/images/partners/african_library_project.webp",
  },
  {
    name: "Anike Foundation",
    logo: "/images/partners/anike_foundation.webp",
  },

];
