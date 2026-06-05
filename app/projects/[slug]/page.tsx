import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import MdxContent from "@/components/MdxContent";
import ForkBanner from "@/components/ForkBanner";
import Link from "next/link";

const STATUS_COLORS: Record<string, string> = {
  "아이디어": "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  "기획중": "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
  "MVP 완성": "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
  "운영중": "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let project;
  try {
    project = await getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = project;
  const allProjects = await getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prev = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
  const next = currentIndex > 0 ? allProjects[currentIndex - 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-2.5 py-0.5 rounded-full text-xs ${STATUS_COLORS[meta.status] || ""}`}>
            {meta.status}
          </span>
          <span className="text-sm text-[var(--muted)]">{meta.date}</span>
        </div>
        <h1 className="text-3xl font-bold mb-3">{meta.title}</h1>
        <p className="text-lg text-[var(--muted)]">{meta.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {meta.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[var(--border)] text-[var(--muted)]">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <MdxContent source={content} />

      <ForkBanner project={meta} />

      <nav className="mt-12 pt-8 border-t border-[var(--border)] flex justify-between text-sm">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="hover:text-[var(--accent)]">
            &larr; {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="hover:text-[var(--accent)]">
            {next.title} &rarr;
          </Link>
        ) : <span />}
      </nav>
    </div>
  );
}
