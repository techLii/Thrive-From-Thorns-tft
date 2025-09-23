import { siteUrl } from "@/lib/seo";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "../lib/posts";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.data.title} | Blog & News | CSAG`,
    description:
      post.data.excerpt || `Read ${post.data.title} by ${post.data.author}`,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.data.title,
      description:
        post.data.excerpt || `Read ${post.data.title} by ${post.data.author}`,
      url: `/blog/${slug}`,
      authors: post.data.author ? [post.data.author] : undefined,
      publishedTime: post.data.date,
      images: post.data.thumbnail
        ? [{ url: post.data.thumbnail, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description:
        post.data.excerpt || `Read ${post.data.title} by ${post.data.author}`,
      images: post.data.thumbnail ? [post.data.thumbnail] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    url: `${siteUrl}/blog/${slug}`,
    headline: post.data.title,
    image: post.data.thumbnail
      ? [new URL(post.data.thumbnail, siteUrl).toString()]
      : undefined,
    datePublished: post.data.date,
    dateModified: post.data.date,
    author: post.data.author
      ? { "@type": "Person", name: post.data.author }
      : { "@type": "Organization", name: "CSAG" },
    description: post.data.excerpt || post.data.title,
    publisher: {
      "@type": "Organization",
      name: "Child Survival Aid Ghana (CSAG)",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/csag-logo-no-bg.webp`,
      },
    },
  } as const;

  return (
    <article className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center align-middle text-sm text-csag-primary font-semibold hover:underline underline-offset-4 tracking-wide"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform" />
            <p>Back to Blog & Articles</p>
          </Link>
        </div>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {post.data.title}
          </h1>
          <p className="text-sm text-gray-500">
            By{" "}
            <span className="font-medium text-gray-700">
              {post.data.author}
            </span>
            <span className="mx-2">•</span>
            <time dateTime={post.data.date}>
              {new Date(post.data.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        </header>
        {/* Thin divider under the header for a classic newspaper feel */}
        <hr className="border-t border-gray-200 mb-8" />
        {post.data.thumbnail && (
          <div className="relative w-full aspect-[16/9] rounded-minimal overflow-hidden bg-gray-100 mb-8">
            <Image
              src={post.data.thumbnail}
              alt={post.data.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-neutral max-w-none prose-headings:scroll-mt-24 prose-a:text-csag-primary prose-img:rounded-minimal prose-h2:border-t prose-h2:border-gray-200 prose-h2:pt-4 prose-h2:mt-10 prose-h2:font-semibold prose-h3:mt-8 prose-h3:font-semibold prose-hr:border-gray-200">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize, rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
