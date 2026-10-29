"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { whatsappLinkProps } from "@/lib/links";
import { WhatsappIcon } from "@/components/ui/icons";

const ease = [0.22, 1, 0.36, 1] as const;

/** Botão flutuante discreto (desktop) e barra fixa de agendamento (mobile). */
export function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="desktop"
          {...whatsappLinkProps()}
          aria-label="Agendar consulta pelo WhatsApp"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease }}
          className="group fixed bottom-8 right-8 z-40 hidden h-14 items-center rounded-full border border-paper/15 bg-ink px-4 text-paper shadow-[0_10px_30px_-12px_rgba(12,32,56,0.55)] transition-colors duration-500 hover:bg-navy md:flex"
        >
          <WhatsappIcon className="size-6 shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-[0.8125rem] font-semibold tracking-[0.03em] transition-[max-width,margin] duration-500 ease-[var(--ease-premium)] group-hover:ml-3 group-hover:max-w-44 group-focus-visible:ml-3 group-focus-visible:max-w-44">
            Agendar consulta
          </span>
        </motion.a>
      )}
      {visible && (
        <motion.div
          key="mobile"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.45, ease }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden"
        >
          <a
            {...whatsappLinkProps()}
            className="flex min-h-[3.25rem] items-center justify-center gap-3 rounded-full bg-paper text-[0.8125rem] font-semibold tracking-[0.04em] text-ink active:scale-[0.98]"
          >
            <WhatsappIcon className="size-[1.15rem]" />
            Agendar consulta pelo WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
