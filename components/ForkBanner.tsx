import { ProjectMeta } from "@/lib/types";

export default function ForkBanner({ project }: { project: ProjectMeta }) {
  const dateLabel = project.date.replace("-", "년 ") + "월";

  return (
    <section className="mt-16 p-8 rounded-lg bg-[var(--card)] border border-[var(--border)] text-center">
      <h3 className="text-xl font-bold mb-2">가져가서 키워보세요</h3>
      <p className="text-sm text-[var(--muted)] mb-6">
        이 아이디어는 {dateLabel}에 여기서 시작됐습니다.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            GitHub Fork
          </a>
        )}
        <a
          href="#기획-과정"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm font-medium hover:bg-[var(--border)] transition-colors"
        >
          기획서 보기
        </a>
        {project.mvpUrl && (
          <a
            href={project.mvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm font-medium hover:bg-[var(--border)] transition-colors"
          >
            MVP 데모
          </a>
        )}
      </div>
    </section>
  );
}
