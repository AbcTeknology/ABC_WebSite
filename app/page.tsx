import { BuiltForUae } from "@/components/home/BuiltForUae";
import { Capabilities } from "@/components/home/Capabilities";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { HowWeBuild } from "@/components/home/HowWeBuild";
import { Principles } from "@/components/home/Principles";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ABC Teknology — AI for everyday spending",
  description:
    "We build applied AI for everyday commerce in the UAE. Our app ABC AI compares grocery prices across Amazon, Noon, Carrefour and Talabat.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <HowItWorks />
      <Capabilities />
      <BuiltForUae />
      <HowWeBuild />
      <Principles />
      <FinalCta />
    </>
  );
}
