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
  "We dream of a world where every life is restored to dignity, strength and purpose.";

export const vision =
  "To empower every girl, boy and families through education, healthcare, economic empowerment and mentorship that restore purpose and transfrom lives.";

export const goals: IconEntry[] = [
  {
    title: "Integrity",
    text: "We uphold the highest ethical standards.",
    icon: School,
  },
  {
    title: "Compassion ",
    text: "We serve with empathy and dignity.",
    icon: BookOpen,
  },
  {
    title: "Innovation",
    text: "We build bold, creative, and sustainable solutions.",
    icon: Users,
  },
  {
    title: "Collaboration",
    text: "We walk with communities, not ahead of them.",
    icon: Heart,
  },
  {
    title: "Excellence ",
    text: "We pursue quality, results, and measurable impact.",
    icon: Handshake,
  },
];

export const approachPillars: IconEntry[] = [
  {
    title: "Education & Skills Development",
    text: "From classrooms to vocational training centers, we equip youth with tools for lifelong success and opportunity.",
    icon: Layers,
  },
  {
    title: "Health & Wellness",
    text: "We deliver trauma healing, clinical services, rescue programs, and psychosocial support for total well-being.",
    icon: Users,
  },
  {
    title: "Leadership & Empowerment",
    text: "We mentor young leaders and build life skills to spark bold, values-driven leadership from the inside out.",
    icon: Heart,
  },
  {
    title: "Family & Community Strengthening",
    text: "We restore homes and communities through parenting training, mental health services, and family-centered interventions.",
    icon: Heart,
  },
  {
    title: "Economic Empowerment",
    text: "We create access to entrepreneurship, vocational skill-building, and sustainable income-generating opportunities.",
    icon: Heart,
  },
];

export const reasons = [
  {
    title: "Integrity & Accountability",
    text: "We uphold the highest ethical standards, ensuring that all actions and resources are managed responsibly, transparently, and in the best interest of the communities we serve.",
  },
  {
    title: "Local Knowledge, Global Standards",
    text: "We combine deep local insights with internationally recognized best practices to deliver solutions that are both culturally relevant and globally competitive.",
  },
  {
    title: "Transparency in Action",
    text: "We operate with openness and clarity, providing stakeholders with real-time information, measurable results, and clear reporting on our programs and impact.",
  },
  {
    title: "Inclusive & Participatory Leadership",
    text: "We foster leadership that values every voice, encourages shared decision-making, and ensures communities are actively involved in shaping their future.",
  },

];

// Programs / What We Do
export const programmes: IconEntry[] = [
  {
    title: "Implement Evidence-Based, Scalable Programs",
    text: "We design and deliver programs grounded in data and proven best practices, ensuring they can be adapted and scaled to create lasting impact in diverse communities.",
  },
  {
    title: "Establish Purpose Centers (schools, health, rescue & vocational facilities)",
    text: "We set up multi-functional centers that provide quality education, healthcare, rescue services, and vocational training, creating safe spaces where children and communities can thrive.",
  },
  {
    title: "Deploy a Replicable Mentorship & Life-Skills Curriculum",
    text: "We develop and implement structured mentorship and life-skills programs that can be easily replicated, equipping young people with guidance, confidence, and essential skills for success.",
  },
  {
    title: "Strengthen Strategic Partnerships",
    text: "We collaborate with governments, organizations, and communities to build strong alliances that amplify our collective impact and drive sustainable change.",
  },
  {
    title: "Empower Communities Through Self-Led Restoration Tools",
    text: "We equip communities with practical tools, training, and resources that enable them to lead their own development, restore dignity, and sustain progress independently.",
  },
  {
    title: "Scale Our Model Across Africa and beyond",
    text: "We expand our proven approach to new regions, adapting to local contexts while maintaining core impact strategies to reach more children and communities across the continent.",
  },
  {
    title: "Mobilize Long-Term Resources for Sustainability",
    text: "We secure diversified, long-term funding and partnerships to ensure programs are not only launched but sustained and expanded for enduring community impact.",
  },
];

// Core Values
export const coreValues: IconEntry[] = [
  {
    title: "Results-Oriented",
    text: "We rise above challenges, persevering to achieve success in all our endeavors.",
  },
  {
    title: "Teamwork",
    text: "Collaboration is our cornerstone; we pool our efforts for the collective benefit.",
  },
  {
    title: "Community Engagement",
    text: "We establish partnerships with every community we serve, fostering meaningful collaboration.",
  },
  {
    title: "Child-Centered Approach",
    text: "Each child is unique, and we prioritize catering to their individual needs.",
  },
  {
    title: "Sustainability",
    text: "Through education and learning, we empower self-assurance and independence.",
  },
  {
    title: "Long-Term Focus",
    text: "Our solutions are geared towards enduring impact, steering clear of temporary fixes.",
  },
  {
    title: "Accountability",
    text: "Committing to responsible stewardship of resources and measuring impact.",
  },
  {
    title: "Integrity",
    text: "Upholding honesty and transparency in all actions.",
  },
  {
    title: "Collaboration",
    text: "Fostering strong partnerships with communities, organizations, and stakeholders.",
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
