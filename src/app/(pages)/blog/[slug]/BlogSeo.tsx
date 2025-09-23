"use client";

import { siteUrl } from "@/lib/seo";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

type Props = {
  slug: string;
  title: string;
  excerpt?: string;
  author?: string;
  date: string;
  thumbnail?: string;
};

export default function BlogSeo({
  slug,
  title,
  excerpt,
  author,
  date,
  thumbnail,
}: Props) {
  const url = `${siteUrl}/blog/${slug}`;
  const img = thumbnail ? new URL(thumbnail, siteUrl).toString() : undefined;
  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: "Home", item: siteUrl },
          { position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { position: 3, name: title, item: url },
        ]}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={url}
        title={title}
        images={img ? [img] : []}
        datePublished={date}
        dateModified={date}
        authorName={author || "CSAG"}
        description={excerpt || title}
        publisherName="Child Survival Aid Ghana (CSAG)"
        publisherLogo={`${siteUrl}/images/csag-logo-no-bg.webp`}
      />
    </>
  );
}
