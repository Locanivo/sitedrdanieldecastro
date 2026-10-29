import {
  procedures,
  proceduresDisclaimer,
  proceduresSection,
  showProcedureVideos,
  videoApproved,
  type Procedure,
} from "@/content/content";
import { Pending } from "@/components/ui/pending";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { ProcedureVideo } from "@/components/ui/procedure-video";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

/** Card editorial reutilizável — os itens vêm de `content.ts`. */
export function ProcedureCard({ procedure, index }: { procedure: Procedure; index: number }) {
  return (
    <article className="group flex h-full flex-col">
      {showProcedureVideos ? (
        <ProcedureVideo {...procedure.video} position={procedure.videoPosition} className="aspect-[4/5] w-full" />
      ) : (
        <PhotoFrame
          photo={procedure.image}
          tone="dark"
          compact
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="aspect-[4/5] w-full"
        />
      )}
      <div className="flex flex-1 flex-col border-b border-ink/15 pb-8 pt-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[0.6875rem] font-semibold tracking-[0.24em] text-navy">{String(index + 1).padStart(2, "0")}</span>
          {procedure.pending && <Pending className="text-navy">Área a confirmar</Pending>}
        </div>
        <h3 className="display-md mt-4">{procedure.title}</h3>
        <p className="mt-3 max-w-sm flex-1 text-[0.9375rem] leading-relaxed text-ink/70">{procedure.description}</p>
        <WhatsappButton variant="outline-dark" className="mt-7 self-start" aria-label={`Agendar pelo WhatsApp: ${procedure.title}`}>
          Agendar pelo WhatsApp
        </WhatsappButton>
      </div>
    </article>
  );
}

export function Procedures() {
  return (
    <section id="procedimentos" aria-labelledby="procedimentos-title" className="section bg-ice">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-navy">{proceduresSection.eyebrow}</p>
            <h2 id="procedimentos-title" className="display-lg mt-6 max-w-[16ch]">
              {proceduresSection.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="lead text-ink/70">{proceduresSection.subtitle}</p>
          </Reveal>
        </div>

        {!videoApproved && showProcedureVideos && (
          <p className="mt-12 border border-dashed border-navy/40 px-5 py-4 text-sm leading-relaxed text-ink/70">
            <strong className="font-semibold text-ink">Prévia interna.</strong> Os vídeos mostram pacientes e só aparecem
            na versão publicada após a confirmação do consentimento de cada paciente e a revisão de conformidade (CFM).
          </p>
        )}

        <ul className="mx-auto mt-16 grid max-w-md gap-x-8 gap-y-14 md:mt-20 lg:max-w-none lg:grid-cols-3">
          {procedures.map((procedure, index) => (
            <Reveal as="li" key={procedure.title} delay={index * 0.08} className={index === 1 ? "lg:mt-16" : ""}>
              <ProcedureCard procedure={procedure} index={index} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-md text-sm leading-relaxed text-ink/60">
            {showProcedureVideos
              ? proceduresDisclaimer
              : "A indicação de qualquer procedimento depende de avaliação médica individual em consulta."}
          </p>
          <WhatsappButton variant="dark">{proceduresSection.cta}</WhatsappButton>
        </Reveal>
      </div>
    </section>
  );
}
