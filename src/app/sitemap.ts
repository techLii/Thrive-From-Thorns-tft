import { projects } from "@/app/(pages)/our-projects/content/projects";
import type { MetadataRoute } from "next";
import { getAllPosts } from "./(pages)/blog/lib/posts";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes
  const staticPaths = [
    "/",
    "/about",
    "/team",
    "/donate",
    "/partnership",
    "/volunteer",
    "/our-projects",
    "/blog",
    "/donor-privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: new URL(path, BASE_URL).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : 0.7,
  }));

  // Dynamic project pages
  const projectEntries = projects.map((p) => ({
    url: new URL(`/our-projects/${p.slug}`, BASE_URL).toString(),
    lastModified: new Date(p.date || now),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic blog pages
  const posts = getAllPosts();
  const blogEntries = posts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, BASE_URL).toString(),
    lastModified: new Date(post.data.date || now),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticPaths, ...projectEntries, ...blogEntries];
}
