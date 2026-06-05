export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <div className="space-y-6 text-[var(--muted)] leading-relaxed">
        <p>
          안녕하세요, 서비스 기획자 <strong className="text-[var(--foreground)]">k</strong>입니다.
        </p>

        <p>
          월간 윤종신처럼, 매달 아이디어를 서비스로 만들어서 공개합니다.
          아이디어 배경부터 기획 과정, 실패와 전환, MVP까지 — 전부 통째로요.
        </p>

        <p>
          수익에 대한 욕심은 없습니다. 다만 이런 아이디어가 있으면 재밌지 않을까,
          이런 수익 구조를 설계해보면 좋지 않을까 — 그런 생각들을 실제로 만들어보고 공개하는 거죠.
        </p>

        <p>
          가져가서 키우고 싶은 사람은 키워보세요.
          이 사이트가 그 시작점의 기록이 됩니다.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--border)]">
        <h2 className="font-semibold mb-4">연락처</h2>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/k" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--foreground)]">GitHub</a>
          <a href="mailto:k@example.com" className="text-[var(--muted)] hover:text-[var(--foreground)]">Email</a>
        </div>
      </div>
    </div>
  );
}
