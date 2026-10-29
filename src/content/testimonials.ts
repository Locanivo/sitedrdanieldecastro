/**
 * Avaliações de pacientes — 6 aprovadas para publicação pelo usuário em 2026-10-28.
 *
 * Textos preservados exatamente como recebidos (2026-10-28), inclusive
 * grafia e emojis. Nada aqui é exibido na versão pública até que cada item
 * tenha `approved: true`, o que exige:
 *  1. revisão de conformidade com a Resolução CFM nº 2.336/2023
 *     (sem garantia ou promessa de resultado, sem sensacionalismo);
 *  2. autorização de uso pela paciente, quando necessária;
 *  3. confirmação da origem (`source`, ex.: "Google").
 *
 * Em `npm run dev` a seção aparece como prévia, sem avisos no layout.
 * Retirados a pedido do usuário (2026-10-28): relatos incompletos (Daniele,
 * Nayaramotta) e o relato muito longo (Marcella).
 * Não criar avaliações, notas, estrelas ou datas.
 */

export type Testimonial = {
  name: string;
  text: string;
  /** Origem confirmada, ex.: "Avaliação no Google". null = a confirmar. */
  source: string | null;
  approved: boolean;
  /** Ponto de atenção para a revisão de conformidade. */
  reviewNote?: string;
};

export const testimonialsSection = {
  eyebrow: "Avaliações",
  title: "Experiências compartilhadas por nossos pacientes",
  subtitle: "Relatos sobre a experiência de atendimento, acolhimento e acompanhamento.",
  disclaimer:
    "Relatos individuais sobre a experiência de atendimento. Não representam garantia de resultado: cada caso depende de avaliação médica.",
};

const resultNote = "Menciona resultado do procedimento — avaliar à luz da vedação a promessa/garantia de resultado.";

export const testimonials: Testimonial[] = [
  {
    name: "Bianca de Jesus Andrade",
    text: "Minha experiência com o Dr. Daniel foi 100%! Ele nos transmite muita confiança e segurança. Não tenho dúvida nenhuma de que, se eu realizar outra cirurgia, ele será novamente o meu cirurgião. Ele é um médico excelente no que faz e passa muita segurança durante todo o processo. ❤️",
    source: null,
    approved: true,
  },
  {
    name: "Mariana Mattos Dipi",
    text: "De todos os profissionais que eu fui, o Dr Daniel foi o que mais me passou segurança e confiança. Ambiente acolhedor, fui bem atendida desde o primeiro contato com a secretária. A sala de espera é um show a parte e coroa a excelente experiência. Nunca ví nada parecido em Montes Claros! ❤️",
    source: null,
    approved: true,
    reviewNote: "Compara com outros profissionais — avaliar à luz da vedação a afirmações de superioridade.",
  },
  {
    name: "Patricia Maiara",
    text: "Experiência muito positiva, com uma equipe acolhedora, atenciosa e comprometida com um atendimento de qualidade. Encantada com meu resultado ❤️",
    source: null,
    approved: true,
    reviewNote: resultNote,
  },
  {
    name: "Josy Modas",
    text: "A melhor experiência possível. O Doutor Danieo e sua equipe são excepcionais!❤️🙏",
    source: null,
    approved: true,
  },
  {
    name: "Jacqueline Ferreira",
    text: "Equipe maravilhosa, todos se mostram comprometidos com o resultado. Ainda nem cheguei no resultado final e já amei meu resultado ❤️",
    source: null,
    approved: true,
    reviewNote: resultNote,
  },
  {
    name: "Clevane Tavares",
    text: "Acima do esperado.",
    source: null,
    approved: true,
  },
];

/** Prévia local: em desenvolvimento mostra todas. */
export const testimonialsPreview = process.env.NODE_ENV === "development";

export const visibleTestimonials = testimonialsPreview ? testimonials : testimonials.filter((item) => item.approved);
