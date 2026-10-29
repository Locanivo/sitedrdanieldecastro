"use client";

import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  label: string;
  position?: string;
  className?: string;
};

/**
 * Vídeo silencioso em loop que só carrega e toca quando entra na tela.
 * Com "reduzir movimento" ativo, fica parado no pôster até o usuário tocar em play.
 */
export function ProcedureVideo({ src, poster, label, position, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(true);
  // null = segue o automático; true/false = escolha do usuário.
  const [userPlay, setUserPlay] = useState<boolean | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const shouldPlay = inView && (userPlay ?? !reduce);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (shouldPlay) {
      video.preload = "auto";
      video.play().catch(() => setPaused(true));
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        style={position ? { objectPosition: position } : undefined}
        className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-premium)] group-hover:scale-[1.03]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-3 border border-paper/20 md:inset-4" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent" />
      <button
        type="button"
        onClick={() => setUserPlay(paused)}
        aria-label={paused ? `Reproduzir: ${label}` : `Pausar: ${label}`}
        className="absolute bottom-6 right-6 grid size-11 place-items-center rounded-full border border-paper/40 bg-ink/40 text-paper backdrop-blur-sm transition-colors duration-500 hover:bg-ink/70 md:bottom-7 md:right-7"
      >
        {paused ? <Play strokeWidth={1.5} className="ml-0.5 size-4" /> : <Pause strokeWidth={1.5} className="size-4" />}
      </button>
    </div>
  );
}
