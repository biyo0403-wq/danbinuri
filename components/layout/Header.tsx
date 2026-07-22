import Container from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-olive-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt={siteConfig.name} className="h-16 w-auto object-contain" />
            </a>
            {/* 인증마크 — 여성기업 · 창업기업 · 중소기업 (이미지 + 이름) */}
            <div className="hidden sm:flex items-end gap-3">
              <div className="flex flex-col items-center gap-0.5">
                <img src="/certs/women.jpg" alt="여성기업 인증" className="h-7 w-auto object-contain" />
                <span className="text-[10px] leading-none text-ink/60">여성기업</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <img src="/certs/startup.jpg" alt="창업기업 인증" className="h-7 w-auto object-contain" />
                <span className="text-[10px] leading-none text-ink/60">창업기업</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <img src="/certs/sme.jpg" alt="중소기업 인증" className="h-7 w-auto object-contain" />
                <span className="text-[10px] leading-none text-ink/60">중소기업</span>
              </div>
            </div>
          </div>

          {/* 내비게이션 */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink hover:text-olive-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#inquiry"
            className="inline-flex items-center px-4 py-2 rounded-md bg-olive-700 text-white text-sm font-semibold hover:bg-olive-900 transition-colors"
          >
            견적 문의
          </a>
        </div>
      </Container>
    </header>
  );
}
