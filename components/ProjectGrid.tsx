"use client";

import { useState } from "react";
import { ProjectMeta } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import TagFilter from "./TagFilter";

interface ProjectGridProps {
  projects: ProjectMeta[];
  tags: string[];
}

export default function ProjectGrid({ projects, tags }: ProjectGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div>
      <div className="mb-8">
        <TagFilter tags={tags} activeTag={activeTag} onTagChange={setActiveTag} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-[var(--muted)] py-12">
          해당 태그의 프로젝트가 없습니다.
        </p>
      )}
    </div>
  );
}
