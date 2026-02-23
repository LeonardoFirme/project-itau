// src/app/page.tsx
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import DynamicBanner from "@/components/DynamicBanner";
import { QuickLinks } from "@/components/QuickLinks";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SegmentsHighlight } from "@/components/SegmentsHighlight";
import { SecurityBanner } from "@/components/SecurityBanner";
import { AppSection } from "@/components/AppSection";
import { HelpSection } from "@/components/HelpSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      <DynamicBanner />
      <QuickLinks />
      <ServicesGrid />
      <BenefitsSection />
      <SegmentsHighlight />
      <AppSection />
      <SecurityBanner />
      <HelpSection />
      <Footer />
    </main>
  );
}