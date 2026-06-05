import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[var(--border)]">
      <nav className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          만들어봄
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">
            프로젝트
          </Link>
          <Link href="/about" className="hover:text-[var(--accent)] transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
