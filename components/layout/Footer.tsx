import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-olive-900 text-olive-300 py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">{siteConfig.name}</p>
            <p className="text-sm">{siteConfig.tagline}</p>
          </div>
          <div className="text-sm space-y-1">
            <p>📞 {siteConfig.phone}</p>
            <p>✉️ {siteConfig.email}</p>
            <p>📍 {siteConfig.address}</p>
            <p>사업자등록번호: {siteConfig.businessNumber}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-olive-700 pt-4 text-xs text-olive-300">
          {siteConfig.copyright}
        </div>
      </Container>
    </footer>
  );
}
