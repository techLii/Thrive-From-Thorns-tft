export const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const org = {
  name: "Child Survival Aid Ghana (CSAG)",
  legalName: "Child Survival Aid Ghana",
  url: siteUrl,
  logo: "/images/csag-logo-no-bg.webp",
  sameAs: [
    "https://www.facebook.com/csagchildghana",
    "https://www.linkedin.com/company/child-survival-aid-ghana/",
  ],
};

export const defaultSeo = {
  titleTemplate: "%s | CSAG",
  defaultTitle: org.name,
  description:
    "Child Survival Aid Ghana (CSAG) is a non-profit NGO improving access to quality education and resources for children in rural Ghana.",
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: org.name,
    images: [
      {
        url: `${siteUrl}/images/csag-logo-no-bg.webp`,
        width: 800,
        height: 800,
        alt: "Child Survival Aid Ghana logo",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image" as const,
  },
};
