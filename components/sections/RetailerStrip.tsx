import { retailerStrip } from "@/content/copy";
import { retailers } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { RetailerLogo } from "@/components/visuals/RetailerLogo";
import { Section } from "@/components/ui/Section";

export function RetailerStrip() {
  return (
    <Section spacing="tight">
      <Container>
        <p className="text-slate text-center text-[1.0625rem] font-semibold">
          {retailerStrip.caption}
        </p>
        <div className="marquee mt-8">
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
                    className="flex w-[clamp(13rem,24vw,17rem)] shrink-0 items-center justify-center"
                  >
                    <span className="flex h-[4.75rem] w-[11.5rem] items-center justify-center rounded-md bg-white px-4">
                      <RetailerLogo name={name} />
                    </span>
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
