import { retailerStrip } from "@/content/copy";
import { retailers } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { RetailerLogo } from "@/components/visuals/RetailerLogo";
import { Section } from "@/components/ui/Section";

export function RetailerStrip() {
  return (
    <Section spacing="tight">
      <Container>
        <p className="text-slate text-center text-[0.9375rem] font-semibold">
          {retailerStrip.caption}
        </p>
        <div className="marquee mt-6">
          <div className="marquee-track">
            {[0, 1].map((pass) => (
              <ul
                className="marquee-group"
                key={pass}
                aria-hidden={pass === 1 || undefined}
              >
                {retailers.map((name) => (
                  <li
                    key={`${pass}-${name}`}
                    className="flex w-[clamp(9rem,22vw,15rem)] shrink-0 items-center justify-center"
                  >
                    <RetailerLogo name={name} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
