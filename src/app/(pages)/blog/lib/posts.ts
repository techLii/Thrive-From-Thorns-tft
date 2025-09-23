import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

export interface BlogFrontmatter {
  title: string;
  date: string; // ISO date
  author: string;
  tags?: string[];
  excerpt?: string;
  thumbnail?: string; // public path
}

export interface BlogPost {
  slug: string;
  content: string; // markdown body
  data: BlogFrontmatter;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.(md|mdx)$/i, "");
    const fullPath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(raw);
    return { slug, content, data: data as BlogFrontmatter };
  });

  // Sort by date desc
  posts.sort((a, b) => (b.data.date || "").localeCompare(a.data.date || ""));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const md = [
    path.join(BLOG_DIR, `${slug}.md`),
    path.join(BLOG_DIR, `${slug}.mdx`),
  ];
  for (const p of md) {
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, "utf8");
      const { content, data } = matter(raw);
      return { slug, content, data: data as BlogFrontmatter };
    }
  }
  return undefined;
}
