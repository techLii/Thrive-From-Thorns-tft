import {
  getProjectBySlug,
  projects,
} from "@/app/(pages)/our-projects/content/projects";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found | CSAG" };
  return {
    title: `${project.title} | CSAG`,
    description: project.excerpt,
    alternates: { canonical: `/our-projects/${slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.excerpt,
      url: `/our-projects/${slug}`,
      images: project.image
        ? [{ url: project.image, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.excerpt,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <article className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <Link
            href="/our-projects"
            className="inline-flex items-center align-middle text-sm text-csag-primary font-semibold hover:underline underline-offset-4 tracking-wide"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform" />
            <p>Back to all projects</p>
          </Link>
        </div>
        <header className="mb-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {project.title}
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            <time dateTime={project.date}>
              {new Date(project.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="mx-2">•</span>
            <span className="text-csag-accent/80">{project.sector}</span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-minimal bg-white border border-gray-200 text-xs font-semibold text-csag-primary">
              {project.status}
            </span>
          </p>
        </header>

        <div className="relative w-full aspect-[16/9] rounded-minimal overflow-hidden bg-gray-100 mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <section className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-8">
            {project.description.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>
          <aside className="md:col-span-1 space-y-6">
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-gray-500 mb-3">
                PROJECT SNAPSHOT
              </h2>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Sector</dt>
                  <dd className="font-medium text-gray-800">
                    {project.sector}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Status</dt>
                  <dd className="font-medium text-gray-800">
                    {project.status}
                  </dd>
                </div>
                {project.sponsor && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500">Sponsor</dt>
                    <dd className="font-medium text-gray-800">
                      {project.sponsor}
                    </dd>
                  </div>
                )}
                {project.partner && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500">Partner</dt>
                    <dd className="font-medium text-gray-800">
                      {project.partner}
                    </dd>
                  </div>
                )}
                {project.contributors && project.contributors.length > 0 && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500">Contributors</dt>
                    <dd className="font-medium text-gray-800 max-w-[180px] text-right">
                      {project.contributors.join(", ")}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/donate"
                className="inline-block bg-csag-accent-dark hover:bg-csag-accent-darker text-white font-bold py-3 px-6 rounded-minimal transition-all duration-300 hover:translate-y-[-2px] text-sm"
              >
                SUPPORT OUR WORK
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </article>
  );
}
