import { finalCta } from "@/content/content";
import { Monogram } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[56rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line-dark/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line-dark/50"
      />
      <div className="container-site relative flex flex-col items-center py-32 text-center md:py-48">
        <Reveal>
          <Monogram className="mx-auto size-14 text-mist" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="cta-title" className="display-xl mx-auto mt-10 max-w-[16ch]">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="lead mx-auto mt-8 max-w-xl text-paper/70">{finalCta.subtitle}</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-12">
          <WhatsappButton variant="light">{finalCta.cta}</WhatsappButton>
        </Reveal>
      </div>
    </section>
  );
}
