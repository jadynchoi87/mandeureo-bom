export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  status: "아이디어" | "기획중" | "MVP 완성" | "운영중";
  thumbnail?: string;
  mvpUrl?: string;
  githubUrl?: string;
}
