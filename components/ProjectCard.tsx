import Link from "next/link";
import { ProjectMeta } from "@/lib/types";

const STATUS_COLORS: Record<string, string> = {
  "아이디어": "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  "기획중": "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
  "MVP 완성": "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
  "운영중": "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
};

const GRADIENT_COLORS = [
  "from-blue-400 to-purple-500",
  "from-green-400 to-blue-500",
  "from-orange-400 to-red-500",
  "from-pink-400 to-purple-500",
  "from-teal-400 to-cyan-500",
];

function getGradient(title: string): string {
  const index = title.charCodeAt(0) % GRADIENT_COLORS.length;
  return GRADIENT_COLORS[index];
}

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="rounded-lg border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:-translate-y-1 transition-transform duration-200">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-40 object-cover"
          />
        ) : (
          <div className={`w-full h-40 bg-gradient-to-br ${getGradient(project.title)} flex items-center justify-center`}>
            <span className="text-4xl font-bold text-white/80">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="p-4">
          <h2 className="font-semibold text-lg mb-1">{project.title}</h2>
          <p className="text-sm text-[var(--muted)] mb-3 line-clamp-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-[var(--border)] text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-[var(--muted)]">
            <span>{project.date}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${STATUS_COLORS[project.status] || ""}`}>
              {project.status}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
