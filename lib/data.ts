import type { NavLink, Category } from "./types";

export const siteConfig = {
  name: "단비누리",
  tagline: "공공기관 전문 플랫폼",
  subTagline: "단체 의류 제작 및 용역 (구매대행) 서비스",
  phone: "000-0000-0000",
  email: "info@danbinuri.com",
  address: "서울특별시 (주소 입력)",
  businessNumber: "000-00-00000",
  copyright: "© 2024 단비누리. All rights reserved.",
};

export const navLinks: NavLink[] = [
  { label: "서비스 소개", href: "#categories" },
  { label: "견적 문의", href: "#inquiry" },
];

export const categories: Category[] = [
  {
    id: "clothing",
    name: "의류",
    description: "공공기관·단체 맞춤 단체복, 근무복, 유니폼 제작",
    tag: "직접생산",
    url: "https://danbinuri.imweb.me/",
    priority: 1,
    image: "/categories/clothing.jpg",
  },
  {
    id: "service",
    name: "용역",
    description: "청소·경비·시설관리 등 공공기관 용역 구매대행",
    tag: "직접수행",
    url: "https://danbinuri-clean.vercel.app",
    priority: 1,
    image: "/categories/service.jpg",
  },
  {
    id: "office",
    name: "사무용품몰",
    description: "사무환경에 필요한 소모품·비품 일괄 공급",
    tag: "구매대행",
    url: null,
    priority: 2,
    image: "/categories/office.jpg",
  },
  {
    id: "industrial",
    name: "산업용품몰",
    description: "안전용품·작업용품·현장 소모품 공급",
    tag: "구매대행",
    url: null,
    priority: 2,
    image: "/categories/industrial.jpg",
  },
  {
    id: "print",
    name: "판촉물·인쇄",
    description: "홍보물·판촉물·현수막·명함 등 인쇄 제작",
    tag: "견적 문의",
    url: "#inquiry",
    priority: 2,
    image: "/categories/print.jpg",
  },
];
