"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import type { FormData } from "@/lib/types";

const initialForm: FormData = {
  company: "",
  name: "",
  phone: "",
  email: "",
  category: "",
  message: "",
  privacy: false,
};

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="inquiry" className="py-20 bg-olive-700">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-white mb-2">문의가 접수되었습니다</h2>
            <p className="text-olive-300 mb-6">
              담당자가 빠른 시일 내에 연락드리겠습니다.
            </p>
            <button
              onClick={() => { setForm(initialForm); setSubmitted(false); }}
              className="px-5 py-2 rounded-md bg-white text-olive-900 font-semibold text-sm hover:bg-olive-100 transition-colors"
            >
              새 문의 작성
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="inquiry" className="py-20 bg-olive-700">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-olive-300 uppercase tracking-widest mb-2">
              Contact Us
            </p>
            <h2 className="text-3xl font-extrabold text-white">견적 문의</h2>
            <p className="mt-2 text-olive-300">
              필요한 품목과 수량을 알려주시면 빠르게 안내해드립니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-5">
            {/* 기관/회사명 */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">
                기관·회사명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                placeholder="예) ○○시청, ○○공단"
                className="w-full border border-olive-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive-500"
              />
            </div>

            {/* 담당자명 / 연락처 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">
                  담당자명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="홍길동"
                  className="w-full border border-olive-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-0000-0000"
                  className="w-full border border-olive-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive-500"
                />
              </div>
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">
                이메일
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full border border-olive-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive-500"
              />
            </div>

            {/* 문의 품목 */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">
                문의 품목 <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full border border-olive-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive-500 bg-white"
              >
                <option value="">선택해주세요</option>
                <option value="의류">의류 (단체복·유니폼)</option>
                <option value="시설관리">시설관리 (에어컨·석재보수)</option>
                <option value="사무용품">사무용품</option>
                <option value="산업용품">산업용품</option>
                <option value="판촉물·인쇄">판촉물·인쇄</option>
                <option value="기타">기타</option>
              </select>
            </div>

            {/* 문의 내용 */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">
                문의 내용
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="필요한 수량, 규격, 납기일 등을 자유롭게 적어주세요."
                className="w-full border border-olive-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive-500 resize-none"
              />
            </div>

            {/* 개인정보 동의 */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
                required
                className="mt-0.5 accent-olive-700"
              />
              <label htmlFor="privacy" className="text-xs text-ink/60 leading-relaxed">
                개인정보 수집·이용에 동의합니다. 수집된 정보는 문의 응대 목적으로만 사용되며,
                처리 완료 후 즉시 파기됩니다. <span className="text-red-500">*</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!form.privacy}
              className="w-full py-3 rounded-lg bg-olive-700 text-white font-bold text-sm hover:bg-olive-900 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              문의 접수하기
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
