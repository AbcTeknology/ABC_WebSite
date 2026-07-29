import { LegalDocument } from "@/components/ui/LegalDocument";
import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How ABC AI collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      headline={privacy.headline}
      lastUpdated={privacy.lastUpdated}
      intro={privacy.intro}
      sections={privacy.sections}
    />
  );
}
