"use client";

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagChange(null)}
        className={`text-sm px-3 py-1 rounded-full transition-colors ${
          activeTag === null
            ? "bg-[var(--foreground)] text-[var(--background)]"
            : "bg-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
      >
        전체
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`text-sm px-3 py-1 rounded-full transition-colors ${
            activeTag === tag
              ? "bg-[var(--foreground)] text-[var(--background)]"
              : "bg-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
