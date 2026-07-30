import { chrome } from "@/content/copy";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Prose } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 lg:py-32">
      <Prose>
        <p className="text-[0.9375rem] font-bold text-blue-700">404</p>
        <h1 className="text-navy-900 mt-3 text-4xl font-bold tracking-[-0.02em] text-balance">
          {chrome.notFound.headline}
        </h1>
        <p className="text-slate mt-4 text-pretty">{chrome.notFound.body}</p>
        <ButtonLink href="/" className="mt-8">
          {chrome.notFound.cta}
        </ButtonLink>
      </Prose>
    </Container>
  );
}
