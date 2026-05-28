import {
  FACEBOOK_URL,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  MENU_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "./config";

export interface Promotion {
  title: string;
  description: string;
  price?: string;
  duration?: string;
  schedule?: string;
  capacity?: string;
  note?: string;
  includes?: {
    title: string;
    items: string[];
  }[];
}

export interface HoursEntry {
  day: string;
  time: string;
}

export const siteData = {
  brand: {
    name: "YSURI SAILING",
    subtitle: "Catamarán Ysuri en Marina La Cruz de Huanacaxtle",
    description:
      "Consulta promociones, tours privados, ticketeo, amenidades, ubicación y reservas desde un solo lugar.",
    location: "Marina La Cruz de Huanacaxtle, Muelle 1",
    logo: "/ysuri/logo-ysuri.png",
  },

  links: {
    menu: MENU_URL,
    whatsapp: WHATSAPP_URL,
    maps: GOOGLE_MAPS_URL,
    instagram: INSTAGRAM_URL,
    facebook: FACEBOOK_URL,
  },

  promotions: [
    {
      title: "Viaje matutino",
      description:
        "Experiencia en catamarán para grupos de hasta 12 personas.",
      price: "$1,300 USD",
      duration: "4 horas",
      schedule: "10:00 a.m. a 2:00 p.m.",
      capacity: "Hasta 12 personas",
      note: "Incluye comida, bebidas y actividades.",
    },
    {
      title: "Paseo al atardecer",
      description:
        "Tour en catamarán para disfrutar la tarde navegando con comida, bebidas y actividades incluidas.",
      price: "$1,200 USD",
      duration: "4 horas",
      schedule: "3:00 p.m. a 7:00 p.m.",
      capacity: "Hasta 12 personas",
      note: "Persona extra: $50 USD · Hora extra: $250 USD.",
    },
    {
      title: "Ticketeo",
      description:
        "Tour compartido con salida desde Marina La Cruz de Huanacaxtle, Muelle 1.",
      price: "$65 USD por persona",
      duration: "4 horas",
      schedule: "10:00 a.m. a 2:00 p.m.",
      includes: [
        {
          title: "Alimentos",
          items: [
            "Paninis",
            "Ceviche de camarón",
            "Ceviche de pescado",
            "Crudités",
            "Fruta de temporada",
            "Guacamole",
          ],
        },
        {
          title: "Amenidades",
          items: [
            "4 paddleboards",
            "Equipo de snorkel",
            "Lily pad",
            "Cañas de pescar para trolear",
          ],
        },
        {
          title: "Barra libre premium",
          items: [
            "Ron",
            "Tequila",
            "Vodka",
            "Whisky",
            "Ginebra",
            "Vino blanco",
            "Mixers",
            "Agua embotellada",
            "Hielo",
          ],
        },
      ],
      note:
        "Fotógrafo a bordo disponible con costo extra. No está incluido en el precio del tour.",
    },
  ] as Promotion[],

  hours: [
    {
      day: "Lunes a domingo",
      time: "Reservas sujetas a disponibilidad",
    },
  ] as HoursEntry[],

  social: {
    instagramHandle: "@ysurisailing",
    facebookName: "Ysuri Sailing",
  },

  seo: {
    siteUrl: "https://ysuri.com",
    siteName: "Ysuri Sailing",
    defaultTitle:
      "Ysuri Sailing | Catamarán, promociones y tours en La Cruz de Huanacaxtle",
    defaultDescription:
      "Reserva experiencias en Catamarán Ysuri: viaje matutino, paseo al atardecer y tours compartidos desde Marina La Cruz de Huanacaxtle, Muelle 1.",
    locale: "es_MX",
    type: "website",
    image: "/og/logo-ysuri.png",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Catamarán Ysuri en Marina La Cruz de Huanacaxtle",
    themeColor: "#19B8C6",
    brandColor: "#19B8C6",
    twitterCard: "summary_large_image",
  },

  schema: {
    priceRange: "$$",
    menuUrl: MENU_URL,
    telephone: WHATSAPP_NUMBER,
    openingHours: ["Reservas sujetas a disponibilidad"],
    address: {
      streetAddress: "Marina La Cruz de Huanacaxtle, Muelle 1",
      addressLocality: "La Cruz de Huanacaxtle",
      addressRegion: "Nayarit",
      postalCode: "63734",
      addressCountry: "MX",
    },
    sameAs: [WHATSAPP_URL, INSTAGRAM_URL, FACEBOOK_URL],
  },

  policies: {
    cancellation:
      "Reembolsos solamente disponibles si se solicitan al menos 30 días antes de la fecha prevista.",
  },
};

export type SiteData = typeof siteData;