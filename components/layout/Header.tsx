import Container from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-olive-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-olive-900">{siteConfig.name}</span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-olive-100 text-olive-700 border border-olive-300">
              창업기업 확인
            </span>
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
