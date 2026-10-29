import { whatsappLinkProps } from "@/lib/links";
import { Button } from "./button";
import { WhatsappIcon } from "./icons";

type Props = Omit<React.ComponentProps<typeof Button>, "href" | "target" | "rel">;

/** Botão de agendamento: todos usam o mesmo número e a mensagem padrão. */
export function WhatsappButton({ children, ...props }: Props) {
  return (
    <Button {...whatsappLinkProps()} icon={<WhatsappIcon className="size-[1.15rem]" />} {...props}>
      {children}
    </Button>
  );
}
