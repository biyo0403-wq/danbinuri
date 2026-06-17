import Container from "@/components/ui/Container";
import { categories, siteConfig } from "@/lib/data";
import type { Category } from "@/lib/types";

function getLinkType(url: string | null): "none" | "internal" | "external" {
  if (!url) return "none";
  if (url.startsWith("#")) return "internal";
  return "external";
}

// 우선순위 1 — 의류 / 용역: 풀 너비 가로 카드
function PriorityCard({ category }: { category: Category }) {
  const linkType = getLinkType(category.url);

  return (
    <div className="flex items-center justify-between bg-white border border-olive-200 rounded-xl overflow-hidden shadow-card hover:shadow-md transition-shadow">
      {/* 이미지 */}
      <div className="w-1/2 h-44 shrink-0 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 텍스트 + 버튼 */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <span className="inline-block text-xs font-semibold bg-olive-700 text-white px-2.5 py-0.5 rounded-full w-fit">
          {category.tag}
        </span>
        <h3 className="text-2xl font-bold text-olive-900">{category.name}</h3>
        <p className="text-base text-ink/70">{category.description}</p>

        <div className="mt-1">
          {linkType === "none" && (
            <span className="inline-flex items-center px-4 py-2 rounded-md bg-olive-100 text-olive-700 text-sm font-medium">
              준비중
            </span>
          )}
          {linkType === "internal" && (
            <a
              href={category.url!}
              className="inline-flex items-center px-4 py-2 rounded-md bg-olive-700 text-white text-sm font-semibold hover:bg-olive-900 transition-colors"
            >
              견적 문의 →
            </a>
          )}
          {linkType === "external" && (
            <a
              href={category.url!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-olive-700 text-white text-sm font-semibold hover:bg-olive-900 transition-colors"
            >
              바로가기 →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// 우선순위 2 — 사무/산업/판촉: 3칸 그리드
function GridCard({ category }: { category: Category }) {
  const linkType = getLinkType(category.url);

  return (
    <div className="flex flex-col bg-white border border-olive-200 rounded-xl overflow-hidden shadow-card hover:shadow-md transition-shadow h-full">
      {/* 이미지 */}
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 텍스트 + 버튼 */}
      <div className="flex flex-col p-5 flex-1">
        <span className="inline-block text-xs font-semibold bg-olive-100 text-olive-700 px-2 py-0.5 rounded-full w-fit mb-2">
          {category.tag}
        </span>
        <h3 className="text-lg font-bold text-olive-900 mb-1">{category.name}</h3>
        <p className="text-sm text-ink/70 flex-1">{category.description}</p>

        <div className="mt-4">
          {linkType === "none" && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-olive-100 text-olive-700 text-xs font-medium">
              준비중
            </span>
          )}
          {linkType === "internal" && (
            <a
              href={category.url!}
              className="inline-flex items-center px-3 py-1.5 rounded-md bg-olive-700 text-white text-xs font-semibold hover:bg-olive-900 transition-colors"
            >
              견적 문의 →
            </a>
          )}
          {linkType === "external" && (
            <a
              href={category.url!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-md bg-olive-700 text-white text-xs font-semibold hover:bg-olive-900 transition-colors"
            >
              바로가기 →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MainSection() {
  const priority1 = categories.filter((c) => c.priority === 1);
  const priority2 = categories.filter((c) => c.priority === 2);

  return (
    <section id="categories" className="py-20 bg-olive-100">
      <Container>
        {/* 상단 헤딩 */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-olive-700 uppercase tracking-widest mb-2">
            공공기관 우선(의무)구매 전문 기업
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-olive-900 leading-tight">
            {siteConfig.name}&nbsp;
            <span className="text-olive-700">{siteConfig.tagline}</span>
          </h1>
          <p className="mt-3 text-lg text-ink/70">{siteConfig.subTagline}</p>
        </div>

        {/* 의류 / 용역 — 1줄씩 */}
        <div className="flex flex-col gap-4 mb-6">
          {priority1.map((cat) => (
            <PriorityCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* 사무용품몰 / 산업용품몰 / 판촉물·인쇄 — 3칸 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {priority2.map((cat) => (
            <GridCard key={cat.id} category={cat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
