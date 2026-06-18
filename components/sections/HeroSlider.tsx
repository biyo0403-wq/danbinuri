"use client";
import { useState, useEffect } from "react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: "/slides/main.jpg",
    title: "공공기관 우선(의무) 구매기업",
    subtitle: "공공기관의 의무구매를 책임지는 단비누리",
  },
  {
    image: "/slides/clothes.jpg",
    title: "의류",
    subtitle: "공공기관·단체 맞춤 단체복, 근무복, 유니폼 제작",
  },
  {
    image: "/slides/industrial_main.jpg",
    title: "용역",
    subtitle: "에어컨 설치 / 청소",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const prev = (current - 1 + slides.length) % slides.length;
  const next = (current + 1) % slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      // 페이드 아웃
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        // 페이드 인
        setVisible(true);
      }, 300);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-[500px] flex overflow-hidden">
      {/* 왼쪽 — 흐릿한 이전 이미지 */}
      <div className="relative w-[16%] shrink-0 overflow-hidden">
        <img
          src={slides[prev].image}
          alt=""
          className="w-full h-full object-cover scale-110 blur-sm brightness-50"
        />
      </div>

      {/* 중앙 — 메인 이미지 + 텍스트 */}
      <div className="relative flex-1 overflow-hidden shadow-2xl">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* 하단 그라디언트 + 텍스트 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        <div
          className={`absolute bottom-10 left-10 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-olive-300 text-sm font-semibold tracking-widest uppercase mb-2">
            단비누리
          </p>
          <h2 className="text-white text-4xl font-extrabold leading-tight mb-2">
            {slides[current].title}
          </h2>
          <p className="text-white/85 text-lg">{slides[current].subtitle}</p>
        </div>

        {/* 슬라이드 인디케이터 (점) */}
        <div className="absolute bottom-4 right-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false);
                setTimeout(() => {
                  setCurrent(i);
                  setVisible(true);
                }, 300);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-white w-6"
                  : "bg-white/50 w-2 hover:bg-white/80"
              }`}
              aria-label={`슬라이드 ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 오른쪽 — 흐릿한 다음 이미지 */}
      <div className="relative w-[16%] shrink-0 overflow-hidden">
        <img
          src={slides[next].image}
          alt=""
          className="w-full h-full object-cover scale-110 blur-sm brightness-50"
        />
      </div>
    </section>
  );
}
