/* Ícones de marca desenhados em linha (o Lucide não inclui logos de marcas). */

type IconProps = { className?: string };

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3.6 20.4 4.9 16A8.5 8.5 0 1 1 8 19.1Z" />
      <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.3 0 .6.4.7 1 1.4 1.6 1.9.6.5 1.2.8 1.6 1 .2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.5.7c.3.1.4.2.4.4 0 .5-.1 1.1-.6 1.5-.5.4-1.3.7-2.3.5-1-.2-2.4-.8-3.8-2.1-1.4-1.3-2.2-2.7-2.4-3.6-.2-.9 0-1.7.3-2.1Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

/** Monograma usado na identidade e nos espaços reservados de fotografia. */
export function Monogram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <text x="32" y="41" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="26" fill="currentColor" letterSpacing="1">
        DC
      </text>
    </svg>
  );
}
