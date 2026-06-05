export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between text-sm text-[var(--muted)]">
        <p>&copy; {new Date().getFullYear()} 만들어봄</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/k"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
          <span>Powered by Next.js</span>
        </div>
      </div>
    </footer>
  );
}
