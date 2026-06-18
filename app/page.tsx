import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/sections/HeroSlider";
import MainSection from "@/components/sections/MainSection";
import InquiryForm from "@/components/sections/InquiryForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <MainSection />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
