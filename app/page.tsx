import { Hero } from "@/components/sections/Hero";
import { RetailerStrip } from "@/components/sections/RetailerStrip";
import { VisionSection } from "@/components/sections/VisionSection";
import { OfferingsSection } from "@/components/sections/OfferingsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { BuiltForUae } from "@/components/sections/BuiltForUae";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { TrustSection } from "@/components/sections/TrustSection";
import { EarlyAccessCta } from "@/components/sections/EarlyAccessCta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ABC Teknology: Applied AI for everyday commerce",
  description:
    "ABC Teknology is a UAE-based technology company building applied AI for everyday commerce. Our first product, ABC AI, compares grocery prices across Amazon, Noon, Carrefour and Talabat.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <RetailerStrip />
      <VisionSection />
      <OfferingsSection />
      <HowItWorksSection />
      <ProductDemo />
      <BuiltForUae />
      <TechnologySection />
      <TrustSection />
      <EarlyAccessCta />
    </>
  );
}
