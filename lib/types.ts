export interface NavLink {
  label: string;
  href: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  tag: string;
  url: string | null; // null = 준비중, "#anchor" = 내부, "https://..." = 외부
  priority: 1 | 2;
  image: string; // /categories/파일명.jpg
}

export interface FormData {
  company: string;
  name: string;
  phone: string;
  email: string;
  category: string;
  message: string;
  privacy: boolean;
}
