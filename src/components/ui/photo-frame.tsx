import Image from "next/image";
import { Camera } from "lucide-react";
import type { Photo } from "@/content/content";
import { Monogram } from "./icons";

type Props = {
  photo: Photo;
  tone?: "dark" | "light";
  sizes: string;
  className?: string;
  /** Carrega a imagem com prioridade (apenas a primeira dobra). */
  eager?: boolean;
  /** Oculta a legenda do espaço reservado (cards pequenos usam a própria legenda). */
  compact?: boolean;
};

/**
 * Fotografia com tratamento editorial. Sem `src`, exibe um espaço reservado
 * elegante e claramente identificado, pronto para ser substituído.
 * O elemento pai define a proporção (ex.: aspect-[4/5]).
 */
export function PhotoFrame({ photo, tone = "light", sizes, className = "", eager, compact }: Props) {
  if (photo.src) {
    return (
      <div className={`relative overflow-hidden bg-ice ${className}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          quality={85}
          style={
            {
              "--pos": photo.mobilePosition ?? photo.position ?? "50% 50%",
              "--pos-md": photo.position ?? "50% 50%",
            } as React.CSSProperties
          }
          className="object-cover object-[var(--pos)] md:object-[var(--pos-md)] transition-transform duration-[1400ms] ease-[var(--ease-premium)] group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={`Espaço reservado: ${photo.label}`}
      className={`relative overflow-hidden ${dark ? "bg-navy text-paper" : "bg-ice text-navy"} ${className}`}
    >
      {/* Textura de linhas finas + luz suave, ampliada levemente no hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-transform duration-[1400ms] ease-[var(--ease-premium)] group-hover:scale-[1.03]"
        style={{
          backgroundImage: dark
            ? "radial-gradient(120% 80% at 70% 15%, rgba(100,139,170,0.35), transparent 60%), repeating-linear-gradient(135deg, rgba(248,250,252,0.045) 0 1px, transparent 1px 16px)"
            : "radial-gradient(120% 80% at 70% 15%, rgba(248,250,252,0.9), transparent 60%), repeating-linear-gradient(135deg, rgba(25,61,97,0.06) 0 1px, transparent 1px 16px)",
        }}
      />
      <div aria-hidden="true" className={`absolute inset-3 border md:inset-4 ${dark ? "border-paper/15" : "border-navy/15"}`} />
      <Monogram
        className={`absolute left-1/2 top-1/2 w-[28%] max-w-40 -translate-x-1/2 -translate-y-1/2 ${dark ? "text-paper/20" : "text-navy/20"}`}
      />
      {!compact && (
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 md:inset-x-8 md:bottom-8">
          <p className="flex items-center gap-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] opacity-80">
            <Camera aria-hidden="true" strokeWidth={1.25} className="size-4 shrink-0" />
            {photo.label}
          </p>
          <span className="pending hidden sm:inline-flex">Foto a fornecer</span>
        </div>
      )}
    </div>
  );
}
