import { MDXRemote } from "next-mdx-remote/rsc";

function CommitEntry({ children, dateTitle }: { children: React.ReactNode; dateTitle: string }) {
  const [date, ...titleParts] = dateTitle.split(": ");
  const title = titleParts.join(": ");

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)]" />
      <div className="absolute left-1.5 top-4 bottom-0 w-px bg-[var(--border)] last:hidden" />
      <div className="text-sm font-mono text-[var(--muted)] mb-1">{date}</div>
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-sm text-[var(--muted)] leading-relaxed">{children}</div>
    </div>
  );
}

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="text-2xl font-bold mt-12 mb-4 pb-2 border-b border-[var(--border)]" id={props.children?.toString().replace(/\s+/g, "-")} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = props.children?.toString() || "";
    const isCommitLog = /^\d{4}-\d{2}-\d{2}:/.test(text);
    if (isCommitLog) {
      return <CommitEntry dateTitle={text}>{null}</CommitEntry>;
    }
    return <h3 {...props} className="text-xl font-semibold mt-8 mb-3" />;
  },
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mb-4 leading-relaxed" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc pl-6 mb-4 space-y-1" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="list-decimal pl-6 mb-4 space-y-1" />
  ),
};

export default function MdxContent({ source }: { source: string }) {
  return (
    <article className="prose-custom">
      <MDXRemote source={source} components={components} />
    </article>
  );
}
