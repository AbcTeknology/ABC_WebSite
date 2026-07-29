import { Container, Prose } from "./Container";

type PageHeaderProps = {
  readonly headline: string;
  readonly lead?: string;
};

/** Shared opening block for every inner page. Carries the single `h1`. */
export function PageHeader({ headline, lead }: PageHeaderProps) {
  return (
    <Container className="pt-14 pb-10 sm:pt-20 sm:pb-14">
      <h1 className="font-heading max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl">
        {headline}
      </h1>
      {lead ? (
        <Prose measure="wide">
          <p className="text-muted mt-6 text-lg text-pretty">{lead}</p>
        </Prose>
      ) : null}
    </Container>
  );
}
