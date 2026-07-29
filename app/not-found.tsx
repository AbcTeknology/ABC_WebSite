import { chrome } from "@/content/copy";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Prose } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <Prose>
        <p className="text-accent font-heading text-sm font-bold tracking-widest">
          404
        </p>
        <h1 className="font-heading mt-3 text-4xl font-extrabold tracking-tight text-balance">
          {chrome.notFound.headline}
        </h1>
        <p className="text-muted mt-4 text-pretty">{chrome.notFound.body}</p>
        <ButtonLink href="/" className="mt-8">
          {chrome.notFound.cta}
        </ButtonLink>
      </Prose>
    </Container>
  );
}
