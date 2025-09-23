import { org, siteUrl } from "@/lib/seo";

function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data) };
}

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${siteUrl}#organization`,
    name: org.name,
    legalName: org.legalName,
    url: org.url,
    logo: `${siteUrl}${org.logo}`,
    sameAs: org.sameAs?.length ? org.sameAs : undefined,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: org.name,
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(organization)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(website)}
      />
    </>
  );
}
