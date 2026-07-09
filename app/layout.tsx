import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "단비누리 | 공공기관 우선구매 전문 플랫폼",
  description: "의류·용역·사무용품·산업용품 공공조달 전문 기업",
  verification: {
    other: {
      "naver-site-verification": "aa1a51046bafd7489f3bb3d5913726f4ba706807",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans text-ink bg-white antialiased">{children}</body>
    </html>
  );
}
