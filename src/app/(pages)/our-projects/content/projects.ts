export interface ProjectItem {
  slug: string;
  title: string;
  date: string; // ISO date
  sector: string; // e.g. Education, Infrastructure, Health Literacy
  status: "Completed" | "Ongoing" | "Planned";
  sponsor?: string;
  partner?: string;
  contributors?: string[];
  image: string; // path under /public
  excerpt: string;
  location?: string; // e.g. City, Country
  description: string[]; // paragraphs
}

export const projects: ProjectItem[] = [
  {
    slug: "kenya-education-service-kisumu-west-donation",
    title: "Kenya Education Service Kisumu West Donation",
    date: "2024-11-15",
    sector: "Education",
    status: "Completed",
    sponsor: "Footprint Possibilities Inc.",
    partner: "Book For Africa",
    contributors: ["Kenya Book Trust"],
    image: "/images/projects/kenya-education-service-kisumu-west-donation.webp",
    excerpt:
      "Providing diverse books to inspire lifelong reading habits, enrich students' educational experiences in Tema West, and foster a strong reading culture within the community.",
    description: [
      "Thrive From Thorns (TFT) recently donated assorted library books to the  Kenya Education Service (KES) in Kisumu West. This initiative aims to promote early literacy and foster a reading culture among school children. By providing access to a diverse range of books, we hope to inspire a lifelong love of reading and enhance the educational experience for students in the community. Thank you to our partners and contributors for their support in making this donation possible!",
    ],
  },

];

export function getProjectBySlug(slug: string) {
  return projects.find((w) => w.slug === slug);
}
