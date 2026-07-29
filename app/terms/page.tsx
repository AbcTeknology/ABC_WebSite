import { LegalDocument } from "@/components/ui/LegalDocument";
import { terms } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for using ABC AI.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      headline={terms.headline}
      lastUpdated={terms.lastUpdated}
      intro={terms.intro}
      sections={terms.sections}
    />
  );
}
