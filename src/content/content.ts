/**
 * Textos e listas editáveis de cada seção.
 *
 * Fotografias: coloque o arquivo em `public/fotos/` e informe o caminho em
 * `src` (ex.: "/fotos/recepcao.jpg"). Enquanto `src` for null, o site exibe
 * um espaço reservado identificado. Use apenas fotos reais do Dr. Daniel e
 * do consultório — nunca banco de imagens ou imagens geradas.
 */

export type Photo = {
  src: string | null;
  alt: string;
  label: string;
  /** Enquadramento (CSS object-position), ex.: "50% 30%" para priorizar o rosto. */
  position?: string;
  /** Enquadramento no celular, quando diferente do desktop. */
  mobilePosition?: string;
};

/*
 * Fontes em `public/img/`: cópias sem recompressão das melhores versões de
 * `public/fotos/` (originais intactos). O next/image gera AVIF/WebP uma única vez.
 */
export const photos = {
  heroPortrait: {
    src: "/img/dr-daniel-retrato.png",
    alt: "Retrato do Dr. Daniel de Castro, cirurgião plástico",
    label: "Retrato do Dr. Daniel",
    // Fonte: public/fotos/retrato.png (1122×1402, mesma proporção 4:5 do quadro).
    position: "50% 40%",
    mobilePosition: "50% 30%",
  },
  aboutPortrait: {
    src: "/img/dr-daniel-cirurgia.png",
    alt: "Dr. Daniel de Castro em centro cirúrgico",
    label: "Dr. Daniel em centro cirúrgico",
    position: "70% 35%",
  },
  // Fonte: public/fotos/cirugia.png (original intacto).
  surgeryPortrait: {
    src: "/img/dr-daniel-centro-cirurgico.png",
    alt: "Dr. Daniel de Castro durante procedimento cirúrgico",
    label: "Dr. Daniel em procedimento",
    position: "55% 35%",
  },
} satisfies Record<string, Photo>;

export const hero = {
  eyebrow: "Cirurgião Plástico em Montes Claros – MG",
  title: "Cirurgia plástica com atenção à sua individualidade.",
  subtitle:
    "Um cuidado médico baseado na escuta, no conhecimento científico e na responsabilidade em cada etapa do atendimento.",
  primaryCta: "Agendar minha consulta",
  secondaryCta: "Conheça o Dr. Daniel",
};

export const about = {
  eyebrow: "Sobre o médico",
  title: "Conhecimento, cuidado e respeito por cada história.",
  paragraphs: [
    "Cada paciente possui necessidades, expectativas e uma história única. Por isso, acredito que um atendimento médico de qualidade começa com uma escuta atenta, uma avaliação individualizada e orientações claras.",
    "Meu compromisso é oferecer um cuidado fundamentado em conhecimentos científicos, responsabilidade profissional e respeito às particularidades de cada pessoa.",
  ],
  cta: "Conheça minha trajetória",
  /** Destino do botão. Troque por uma página de currículo ou Lattes quando houver. */
  ctaHref: "#trajetoria",
};

/**
 * Procedimentos — um vídeo por card. Adicione, remova ou edite itens livremente.
 * Títulos identificados pelos vídeos enviados (2026-10-28). Descrições apenas
 * informativas, sem promessa de resultado (Resolução CFM nº 2.336/2023).
 *
 * Vídeos: versões otimizadas (sem áudio) em `public/media/`; originais em
 * `public/videos/`. Os vídeos mostram pacientes: `videoApproved` só deve virar
 * true após confirmar o consentimento por escrito de cada paciente e a revisão
 * de conformidade. Até lá, a versão publicada mostra só o pôster neutro do card.
 */
export type Procedure = {
  title: string;
  description: string;
  video: { src: string; poster: string; label: string };
  /** Enquadramento do vídeo no card (CSS object-position). */
  videoPosition?: string;
  image: Photo;
  /** true enquanto a área não for confirmada pelo médico. */
  pending?: boolean;
};

export const procedures: Procedure[] = [
  {
    title: "Mastopexia com prótese",
    description:
      "Cirurgia das mamas que associa o reposicionamento mamário ao uso de implantes. A indicação é definida em consulta, após avaliação individual.",
    video: {
      src: "/media/mastopexia-com-protese.mp4",
      poster: "/media/mastopexia-com-protese-poster.webp",
      label: "Vídeo informativo sobre mastopexia com prótese",
    },
    image: { src: null, alt: "", label: "Mastopexia com prótese" },
  },
  {
    title: "Abdominoplastia",
    description:
      "Cirurgia do contorno abdominal voltada ao excesso de pele e de gordura da região. Cada caso depende de avaliação médica individual.",
    video: {
      src: "/media/abdominoplastia.mp4",
      poster: "/media/abdominoplastia-poster.webp",
      label: "Vídeo informativo sobre abdominoplastia",
    },
    videoPosition: "50% 60%",
    image: { src: null, alt: "", label: "Abdominoplastia" },
  },
  {
    title: "Lipoescultura com abdominoplastia",
    description:
      "Associação da lipoaspiração para o contorno corporal com a abdominoplastia. O planejamento cirúrgico é definido em consulta.",
    video: {
      src: "/media/lipoescultura-com-abdominoplastia.mp4",
      poster: "/media/lipoescultura-com-abdominoplastia-poster.webp",
      label: "Vídeo informativo sobre lipoescultura com abdominoplastia",
    },
    image: { src: null, alt: "", label: "Lipoescultura com abdominoplastia" },
  },
];

/**
 * Libera os vídeos de pacientes na versão publicada (ver nota acima).
 * Aprovado pelo usuário em 2026-10-28: consentimento das pacientes confirmado.
 */
export const videoApproved = true;
/** Prévia local: em `npm run dev` os vídeos sempre aparecem. */
export const showProcedureVideos = videoApproved || process.env.NODE_ENV === "development";

export const proceduresDisclaimer =
  "Vídeos de caráter informativo. A indicação, os riscos e a recuperação variam de pessoa para pessoa e são discutidos em consulta.";

export const proceduresSection = {
  eyebrow: "Procedimentos",
  title: "Cuidados que respeitam sua individualidade.",
  subtitle:
    "Conheça as áreas de atendimento e receba orientações sobre as possibilidades de avaliação médica.",
  cta: "Conheça os procedimentos",
};

export const differentials = {
  eyebrow: "Diferenciais",
  title: "Um atendimento pensado para você.",
  text: "A confiança é construída com atenção, transparência e respeito às necessidades de cada paciente.",
  items: [
    {
      icon: "ear",
      title: "Atendimento humanizado",
      text: "Um ambiente de respeito e acolhimento para ouvir suas dúvidas e preocupações.",
    },
    {
      icon: "scan",
      title: "Avaliação individualizada",
      text: "Cada caso é analisado de acordo com suas características e necessidades.",
    },
    {
      icon: "shield",
      title: "Responsabilidade médica",
      text: "Orientações baseadas em conhecimento científico e critérios profissionais.",
    },
    {
      icon: "messages",
      title: "Comunicação clara",
      text: "Informações acessíveis para auxiliar na compreensão das possibilidades de cuidado.",
    },
  ] as const,
};

export const office = {
  eyebrow: "Consultório",
  title: "Um ambiente preparado para receber você.",
  text: "Um espaço pensado para proporcionar acolhimento, conforto e tranquilidade durante o atendimento.",
  cta: "Conheça nosso espaço",
  // Fachada confirmada pelo usuário em 2026-10-28 como o prédio do consultório.
  gallery: [
    { src: "/img/consultorio-sala-de-espera.webp", alt: "Sala de espera do consultório", label: "Sala de espera" },
    { src: "/img/consultorio-sala.webp", alt: "Sala de consulta do Dr. Daniel de Castro", label: "Consultório" },
    { src: "/img/consultorio-atendimento.webp", alt: "Sala de consulta e de atendimento", label: "Ambiente interno" },
    { src: "/img/fachada.webp", alt: "Fachada do prédio do consultório", label: "Fachada" },
  ] satisfies Photo[],
};

export const steps = {
  eyebrow: "Agendamento",
  title: "Agendar sua consulta é simples.",
  cta: "Agendar pelo WhatsApp",
  items: [
    { title: "Entre em contato", text: "Clique no WhatsApp e converse com nossa equipe." },
    {
      title: "Consulte os horários",
      text: "Confira a disponibilidade e escolha uma opção adequada à sua rotina.",
    },
    { title: "Confirme sua consulta", text: "Receba as informações necessárias para o atendimento." },
  ],
};

export const faq = {
  eyebrow: "Dúvidas",
  title: "Dúvidas frequentes.",
  cta: "Ainda tem dúvidas? Fale conosco.",
  items: [
    {
      q: "Como posso agendar uma consulta?",
      a: "Basta entrar em contato pelo WhatsApp. Nossa equipe informará os horários disponíveis.",
    },
    {
      q: "O atendimento é particular ou por convênio?",
      a: "Entre em contato para consultar as modalidades de atendimento disponíveis.",
    },
    {
      q: "Onde fica localizado o consultório?",
      a: "O consultório está localizado em Montes Claros – MG. O endereço completo será disponibilizado na área de contato.",
    },
    {
      q: "Qual é o valor da consulta?",
      a: "Nossa equipe poderá informar os valores e as condições de pagamento pelo WhatsApp.",
    },
    {
      q: "O que preciso levar para a consulta?",
      a: "Recomendamos levar documento de identificação e, quando disponíveis, exames anteriores e informações relevantes sobre seu histórico médico.",
    },
    {
      q: "Como funciona o retorno?",
      a: "As condições de retorno serão informadas pela equipe e de acordo com a avaliação médica.",
    },
  ],
};

export const location = {
  eyebrow: "Localização",
  title: "Estamos em Montes Claros.",
  text: "Entre em contato com nossa equipe para consultar os horários disponíveis e receber orientações sobre o agendamento.",
  cta: "Como chegar",
};

export const finalCta = {
  title: "O cuidado começa com uma boa conversa.",
  subtitle:
    "Entre em contato com nossa equipe, esclareça suas dúvidas e consulte os horários disponíveis para sua avaliação.",
  cta: "Agendar consulta pelo WhatsApp",
};
