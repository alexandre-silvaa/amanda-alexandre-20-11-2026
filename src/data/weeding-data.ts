export type TimelineItem = {
  time: string;
  title: string;
};

export type HistoryMilestone = {
  title: string;
  date: string;
};

export type InfoBullet = {
  icon: "clock" | "camera" | "money" | "gift";
  text: string;
};

export type InviteData = {
  city: string;
  newspaperDate: string;
  coupleNames: string;
  subtitle: string;
  headline: string;
  quote: string;
  introText: string;
  eventDateISO: string;
  eventDateLabel: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyQuote1: string;
  storyQuote: string;
  historyMilestones: HistoryMilestone[];
  historyNumbers: { label: string; value: string }[];
  quizStatements: string[];
  wordSearchGrid: string[];
  wordList: string[];
  timeline: TimelineItem[];
  addresses: {
    church: string;
    restaurant: string;
  };
  locationLinks: {
    church: string;
    restaurant: string;
  };
  infoBullets: InfoBullet[];
  gifts: {
    title: string;
    description: string;
    url: string;
  };
  rsvp: {
    title: string;
    description: string;
    googleFormsUrl: string;
  };
  footerText: string;
};

export const inviteData: InviteData = {
  city: "Sorocaba",
  newspaperDate: "20 de Novembro de 2026",
  coupleNames: "AMANDA E ALEXANDRE",
  subtitle: "Vão se casar",
  headline: "A + A News",
  quote: "“Nossa história continua, agora como marido e mulher”",
  introText:
    "Estamos muito felizes por compartilhar este dia especial com vocês. A presença de cada um significa muito para nós, e somos gratos por celebrar nosso amor com as pessoas que mais importam. Obrigado por se juntarem a nós neste novo capítulo de nossas vidas.",
  eventDateISO: "2026-11-20T16:30:00-03:00",
  eventDateLabel: "20 de novembro de 2026 às 16:30",
  storyTitle: "O INÍCIO DE TUDO",
  storyParagraphs: [
    "Tudo começou com o nosso amigo Liniker, que dizia para os dois que um dia nos apresentaria mesmo sem nos conhecermos previamente.",
    "No dia 17 de junho de 2022, Liniker enviou uma foto do Alexandre para a Amanda e isso foi o ponto de partida de tudo.",
    "Eles começaram a se seguir no Instagram, e o que era só uma conversa inicial rapidamente se transformou em algo leve, sincero e cheio de conexão. Mesmo com a distância em parte desse tempo, já que Amanda viajou, os dois seguiram se conhecendo de verdade, com interesse e intensidade.",
    "Entre conversas e saudade, ficou claro que havia amor ali. E, assim, decidiram começar a namorar no dia 16 de julho de 2022, com a certeza de que estavam vivendo algo especial.",
  ],
  storyQuote1:
    "“Através de cada desafio e alegria, nosso vínculo se fortaleceu, confirmando que não éramos apenas parceiros, mas melhores amigos. Aprendemos que o amor não se resume apenas aos grandes momentos, mas também aos pequenos, cotidianos, que tornam a vida mais especial.”",
  storyQuote:
    "“Hoje, rodeados de pessoas especiais, estamos muito felizes por iniciar este novo capítulo de nossas vidas. Obrigado por fazerem parte da nossa história e por celebrarem este dia inesquecível conosco.”",
  historyMilestones: [
    { title: "A PRIMEIRA VEZ QUE NOS VIMOS", date: "24 de junho de 2022" },
    { title: "PRIMEIRO ENCONTRO", date: "16 de julho de 2022" },
    { title: "PEDIDO DE CASAMENTO", date: "05 de dezembro de 2024" },
  ],
  historyNumbers: [
    { value: "1588", label: "Dias Corridos" },
    { value: "873", label: "Dias de Namoro" },
    { value: "715", label: "Dias de Noivado" },
    { value: "323", label: "Dias Planejando" },
    { value: "∞", label: "Depois do Sim" },
  ],
  quizStatements: [
    "Fui eu quem deu o primeiro passo.",
    "Eu sempre estou certo(a).",
    "Fui eu quem disse “eu te amo” primeiro.",
    "Eu cozinho melhor.",
    "Sou mais organizado.",
    "Sou mais aventureiro.",
    "Passo mais tempo nas redes sociais.",
    "Eu me apaixonei primeiro.",
    "Eu me arrumo mais rápido.",
    "Eu sou mais engraçado.",
  ],
  wordSearchGrid: [
    "STOETOGEIARCRIEOEO",
    "CASAMENTOEEXDETHNG",
    "AIESETTISIYIEGHLSSA",
    "YASTERSEIRPEYIUOAN",
    "FBCALALIANCAAEEGTO",
    "ATTBLIOOOIBODITYNS",
    "IWSERDNAXELANSNASE",
    "AAINSDYIENCIAATSCC",
    "WLLMIETLKSCHMCICEN",
    "ONUUSTRNMEIOAAPRSO",
    "SAHMRTTILCRFTBFSNG",
    "IWTAEWSRNOIVADOOOK",
  ],
  wordList: [
    "ALEXANDRE",
    "ALIANÇA",
    "AMANDA",
    "CASAMENTO",
    "DEUS",
    "FAMÍLIA",
    "LINIKER",
    "NAMORO",
    "NOIVADO",
  ],
  timeline: [
    { time: "16:30", title: "Chegada na Paz Church" },
    { time: "17:00", title: "Início da Cerimônia" },
    { time: "19:30", title: "Restaurante Via Brasil" },
    { time: "20:00", title: "Fotos" },
  ],
  addresses: {
    church: "Paz Church: R. Lituânia, 918 - Jardim Europa",
    restaurant: "Via Brasil: R. Fernando Silva, 110 - Jardim Astro",
  },
  locationLinks: {
    church:
      "https://www.google.com/maps/search/?api=1&query=R.+Litu%C3%A2nia,+918+-+Jardim+Europa,+Sorocaba",
    restaurant:
      "https://www.google.com/maps/search/?api=1&query=R.+Fernando+Silva,+110+-+Jardim+Astro,+Sorocaba",
  },
  infoBullets: [
    {
      icon: "clock",
      text: "Chegar no horário combinado, não podemos atrasar, ok? Estejam às 16:30 hrs no local da cerimônia!",
    },
    {
      icon: "camera",
      text: "Preparem-se para muitas fotos, queremos registrar cada momento com vocês!",
    },
    {
      icon: "money",
      text: "No restaurante Via Brasil, cada pessoa será responsável pelo pagamento da sua comanda.",
    },
    {
      icon: "gift",
      text: "Se quiser nos presentear, ficaremos muito felizes!",
    },
  ],
  gifts: {
    title: "LISTA DE PRESENTES",
    description:
      "Ainda não temos o link oficial da lista de casamentos. Assim que estiver disponível, vamos atualizar aqui.",
    url: "",
  },
  rsvp: {
    title: "CONFIRMAÇÃO DE PRESENÇA",
    description: "Confirme sua presença pelo nosso formulário no Google Forms.",
    googleFormsUrl: "https://forms.gle/SEU_LINK_AQUI",
  },
  footerText: "Com amor, Amanda e Alexandre",
};
