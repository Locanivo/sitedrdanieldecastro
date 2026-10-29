import { steps } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export function Steps() {
  return (
    <section id="agendamento" aria-labelledby="agendamento-title" className="section bg-ice">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading id="agendamento-title" eyebrow={steps.eyebrow} title={steps.title} className="max-w-2xl" />
          <Reveal delay={0.1}>
            <WhatsappButton variant="dark">{steps.cta}</WhatsappButton>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-x-10 md:mt-24 md:grid-cols-3">
          {steps.items.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.1} className="border-t border-ink/15 py-10 md:py-12">
              <span
                aria-hidden="true"
                className="block font-serif text-[6rem] leading-[0.8] text-transparent [-webkit-text-stroke:1px_var(--color-mist)] md:text-[8rem]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="display-md mt-10">
                <span className="sr-only">Passo {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-ink/70">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
