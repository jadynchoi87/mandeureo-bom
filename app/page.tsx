import { getAllProjects, getAllTags } from "@/lib/mdx";
import ProjectGrid from "@/components/ProjectGrid";

export default async function Home() {
  const projects = await getAllProjects();
  const tags = await getAllTags();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-2">만들어봄</h1>
        <p className="text-[var(--muted)] text-lg">
          매달 아이디어를 만들어서 통째로 공개합니다. 가져가서 키워보세요.
        </p>
      </section>
      <ProjectGrid projects={projects} tags={tags} />
    </div>
  );
}
