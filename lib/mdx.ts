import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectMeta } from "./types";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export async function getAllProjects(): Promise<ProjectMeta[]> {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(PROJECTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      status: data.status,
      thumbnail: data.thumbnail,
      mvpUrl: data.mvpUrl,
      githubUrl: data.githubUrl,
    } as ProjectMeta;
  });
  return projects.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const meta: ProjectMeta = {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags || [],
    status: data.status,
    thumbnail: data.thumbnail,
    mvpUrl: data.mvpUrl,
    githubUrl: data.githubUrl,
  };
  return { meta, content };
}

export async function getAllTags(): Promise<string[]> {
  const projects = await getAllProjects();
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
