import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "light" | "dark" | "outline-light" | "outline-dark";

const variants: Record<Variant, string> = {
  light: "bg-paper text-ink hover:bg-ice",
  dark: "bg-ink text-paper hover:bg-navy",
  "outline-light": "border border-paper/30 text-paper hover:border-paper hover:bg-paper/5",
  "outline-dark": "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03]",
};

type ButtonProps = ComponentProps<"a"> & {
  variant?: Variant;
  icon?: React.ReactNode;
  /** Mostra a seta animada à direita. */
  arrow?: boolean;
};

export function Button({ variant = "dark", icon, arrow = true, className = "", children, ...props }: ButtonProps) {
  return (
    <a
      {...props}
      className={`group/btn inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-full px-7 text-[0.8125rem] font-semibold tracking-[0.04em] transition-[background-color,border-color,color,transform] duration-500 ease-[var(--ease-premium)] active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-4 transition-transform duration-500 ease-[var(--ease-premium)] group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
        />
      )}
    </a>
  );
}
