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
    slug: "innovation-dreams-from-the-dry-plains",
    title: "Sylvester’s Story: From the Dry Plains to Dreams of Innovation",
    date: "2024-11-15",
    sector: "Education",
    status: "Completed",
    sponsor: "Thrive From Thorns",
    partner: "Book For Africa",
    contributors: ["Kenya Book Trust"],
    image: "/images/projects/sylvester-lokori.jpg",
    excerpt:
      "Once a boy whose education was sacrificed to the struggle for survival, Sylvester now thrives in school, dreaming of becoming an engineer. His quiet resilience is proof that even among thorns, purpose can take root.",
    description: [
      "Amid the vast plains of northern Kenya, where survival often eclipses dreams, Sylvester Lokori grew up herding his family's livestock under the relentless sun. Born into a polygamous family of nine children, Sylvester is the eighth child, raised in a pastoralist community where life revolves around the search for water and pasture.",

      "For families like his, drought and displacement were constant companions. School was a luxury—often interrupted by long treks for water or the family's seasonal movements in search of grazing land. Yet, even as challenges mounted, Sylvester held on to his education with quiet determination.",

      "By his final years of primary school, his studies had suffered. His grades slipped, not because he lacked potential, but because survival demanded more of him than any child should bear.",

      "Then came a turning point. In 2024, Thrive from Thorns discovered Sylvester through its community outreach program—recognizing not just a struggling student, but a young leader waiting to bloom. Through the Education Support Initiative, the organization stepped in to pay his school fees, provide mentorship, and offer psychosocial and spiritual guidance.",

      "Today, Sylvester is in Form Two, thriving both academically and emotionally. His quiet resilience has made him a role model among his peers. With renewed hope, he dreams of becoming an engineer, determined to design solutions that can transform the lives of families like his own.",

      "Sylvester's journey reminds us that even among thorns, purpose can take root. Every child supported through Thrive from Thorns is a seed of change—proof that with the right support, every child can bloom and thrive against all odds."
    ],
  },

];

export function getProjectBySlug(slug: string) {
  return projects.find((w) => w.slug === slug);
}
