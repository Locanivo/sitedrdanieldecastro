import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { contact, doctor, fullAddress, hasWhatsapp } from "@/content/site";
import { Footer } from "@/components/sections/footer";
import { Pending } from "@/components/ui/pending";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como o site do ${doctor.name} trata dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).`,
  alternates: { canonical: "/politica-de-privacidade" },
};

// Data da última revisão do texto.
const updatedAt = "28 de outubro de 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Quem é o controlador",
    body: (
      <>
        <p>
          O responsável pelo tratamento dos dados pessoais relacionados a este site é {doctor.name}, {doctor.title.toLowerCase()},
          com consultório em {doctor.city} – {doctor.state}.
        </p>
        <p>
          Endereço: {fullAddress ?? <Pending className="text-navy">a confirmar</Pending>}
          <br />
          Contato para assuntos de privacidade:{" "}
          {contact.email ||
            (hasWhatsapp ? `WhatsApp ${contact.whatsappDisplay}` : <Pending className="text-navy">a confirmar</Pending>)}
        </p>
      </>
    ),
  },
  {
    title: "2. Quais dados este site coleta",
    body: (
      <>
        <p>
          Este site é informativo. Ele não possui formulários, cadastro, área de login nem ferramentas de análise de navegação,
          e não solicita informações de saúde.
        </p>
        <p>
          Como qualquer servidor de internet, a hospedagem pode registrar automaticamente dados técnicos de acesso (como endereço IP,
          data, horário e tipo de navegador) para segurança e funcionamento do serviço.
        </p>
      </>
    ),
  },
  {
    title: "3. Contato pelo WhatsApp",
    body: (
      <>
        <p>
          Os botões de agendamento abrem o WhatsApp com uma mensagem padrão. A partir desse momento, a conversa ocorre no aplicativo
          do WhatsApp (Meta), sujeito aos termos e à política de privacidade da plataforma.
        </p>
        <p>
          Os dados que você informar na conversa — como nome, telefone e preferência de horário — são usados apenas para responder
          ao seu contato e organizar o agendamento. Recomendamos não enviar exames ou informações clínicas detalhadas por mensagem:
          elas serão tratadas na consulta, com o devido sigilo médico.
        </p>
        {!hasWhatsapp && (
          <p>
            <Pending className="text-navy">Número de WhatsApp a confirmar</Pending>
          </p>
        )}
      </>
    ),
  },
  {
    title: "4. Mapa e serviços de terceiros",
    body: (
      <p>
        A seção de localização exibe um mapa do Google Maps incorporado. Ao carregá-lo, o Google pode coletar dados de navegação
        conforme sua própria política de privacidade. As fontes tipográficas são servidas pelo próprio site, sem chamadas a terceiros.
      </p>
    ),
  },
  {
    title: "5. Finalidade e base legal",
    body: (
      <p>
        Os dados de contato são tratados para atender solicitações feitas por você (art. 7º, V, da LGPD) e, quando necessário, para
        cumprimento de obrigações legais e regulatórias da atividade médica (art. 7º, II). Dados de saúde, quando tratados no
        atendimento, seguem as hipóteses do art. 11 da LGPD e as normas de sigilo profissional do Conselho Federal de Medicina.
      </p>
    ),
  },
  {
    title: "6. Compartilhamento e armazenamento",
    body: (
      <p>
        Os dados não são vendidos nem compartilhados para fins de publicidade. Podem ser acessados apenas pela equipe do consultório e
        por prestadores estritamente necessários (como hospedagem do site), e são mantidos pelo tempo necessário à finalidade ou
        exigido por lei.
      </p>
    ),
  },
  {
    title: "7. Seus direitos",
    body: (
      <p>
        Você pode solicitar a qualquer momento a confirmação do tratamento, o acesso, a correção, a anonimização, a portabilidade ou a
        eliminação dos seus dados, além de informações sobre compartilhamento e a revogação do consentimento, nos termos do art. 18 da
        LGPD. Basta entrar em contato pelos canais do consultório. Você também pode apresentar reclamação à Autoridade Nacional de
        Proteção de Dados (ANPD).
      </p>
    ),
  },
  {
    title: "8. Atualizações",
    body: <p>Esta política pode ser atualizada periodicamente. A versão vigente é sempre a publicada nesta página.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <header className="bg-ink text-paper">
        <div className="container-site flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-[1.4rem] font-medium">{doctor.name}</span>
            <span className="mt-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.3em] text-mist">{doctor.specialty}</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-paper/80 hover:text-paper">
            <ArrowLeft aria-hidden="true" strokeWidth={1.25} className="size-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main id="conteudo" className="section bg-paper">
        <article className="container-site max-w-3xl">
          <p className="eyebrow text-navy">LGPD · Lei nº 13.709/2018</p>
          <h1 className="display-lg mt-6">Política de Privacidade</h1>
          <p className="mt-6 text-sm text-ink/60">Última atualização: {updatedAt}</p>

          <div className="mt-16 space-y-14">
            {sections.map((section) => (
              <section key={section.title} className="border-t border-line pt-8">
                <h2 className="display-md">{section.title}</h2>
                <div className="mt-5 space-y-4 text-[0.9375rem] leading-relaxed text-ink/75">{section.body}</div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
