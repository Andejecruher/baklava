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
  includes?: string[];
}

export interface HoursEntry {
  day: string;
  time: string;
}

export const siteData = {
  brand: {
    name: "YSURI SAILING",
    subtitle:
      "Experiencias privadas en catamarán y panga desde Marina La Cruz de Huanacaxtle",
    description:
      "Reserva tours, pesca, snorkel, avistamiento de ballenas y paseos al atardecer desde un solo lugar.",
    location: "Marina La Cruz de Huanacaxtle, Nayarit",
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
      title: "Catamarán Ysuri · Viaje matutino",
      description:
        "Experiencia privada para grupos de hasta 12 personas con comida, bebidas y actividades incluidas.",
      price: "$1,950 USD",
      duration: "5 horas",
      schedule: "9:00 a.m. a 2:00 p.m.",
      capacity: "Hasta 12 personas",
      note: "+1 hora gratis",
      includes: [
        "Alimentos",
        "Bebidas",
        "Actividades acuáticas",
        "Barra libre premium",
        "Paddleboards",
        "Equipo de snorkel",
        "Lily pad",
        "Cañas de pescar",
      ],
    },
    {
      title: "Catamarán Ysuri · Paseo al atardecer",
      description:
        "Paseo privado ideal para disfrutar la tarde en la bahía con alimentos, bebidas y actividades.",
      price: "$1,200 USD",
      duration: "4 horas",
      schedule: "3:00 p.m. a 7:00 p.m.",
      capacity: "Hasta 12 personas",
      note: "Persona extra: $100 USD · Hora extra: $400 USD",
      includes: [
        "Comida",
        "Bebidas",
        "Actividades",
        "Barra libre premium",
        "Amenidades acuáticas",
      ],
    },
    {
      title: "Catamarán Ysuri · Ticketing hacia el Sur",
      description:
        "Tour compartido hacia el Sur con salida desde Marina La Cruz de Huanacaxtle.",
      price: "$100 USD por persona",
      duration: "6 horas",
      schedule: "9:00 a.m. a 3:00 p.m.",
      note: "Salida desde Marina La Cruz de Huanacaxtle, muelle 1",
      includes: [
        "Paninis",
        "Ceviches",
        "Fruta de temporada",
        "Guacamole",
        "Bebidas",
        "Amenidades acuáticas",
      ],
    },
    {
      title: "Catamarán Ysuri · Marietas y snorkel",
      description:
        "Tour compartido a Marietas con snorkel en playa La Nopalera.",
      price: "$120 USD por persona",
      duration: "6 horas",
      schedule: "9:00 a.m. a 3:00 p.m.",
      note: "No incluye Playa del Amor",
      includes: [
        "Snorkel en playa La Nopalera",
        "Alimentos",
        "Bebidas",
        "Equipo de snorkel",
        "Amenidades acuáticas",
      ],
    },
    {
      title: "Catamarán Ysuri · Marietas con Playa del Amor",
      description:
        "Experiencia compartida con visita a Marietas y Playa del Amor incluida.",
      price: "$170 USD por persona",
      duration: "6 horas",
      schedule: "9:00 a.m. a 3:00 p.m.",
      note: "Playa del Amor y Marietas incluido",
      includes: [
        "Marietas",
        "Playa del Amor",
        "Alimentos",
        "Bebidas",
        "Equipo de snorkel",
      ],
    },
    {
      title: "La Pinta · Pesca privada",
      description:
        "Panga de 26 pies lista para salir de excursión, ideal para grupos pequeños.",
      price: "Desde $350 USD",
      duration: "4, 6 u 8 horas",
      capacity: "Hasta 8 personas",
      note: "4 horas: $350 USD · 6 horas: $400 USD · 8 horas: $450 USD",
      includes: [
        "Croissant de jamón y queso",
        "Cerveza",
        "Refresco",
        "Agua embotellada",
        "Hielo",
      ],
    },
    {
      title: "La Pinta · Avistamiento de ballenas",
      description:
        "Tour de temporada para disfrutar el avistamiento de ballenas en Bahía de Banderas.",
      price: "$200 USD",
      duration: "3 horas",
      capacity: "Hasta 8 personas",
      note: "Por temporada · Hora extra: $50 USD",
      includes: [
        "Bebidas",
        "Agua embotellada",
        "Hielo",
      ],
    },
    {
      title: "La Pinta · Tour de snorkel",
      description:
        "Tour privado de snorkel en panga para grupos de hasta 8 personas.",
      price: "$350 USD",
      duration: "4 horas",
      capacity: "Hasta 8 personas",
      includes: [
        "Snorkel",
        "Croissant de jamón y queso",
        "Cerveza",
        "Refresco",
        "Agua embotellada",
        "Hielo",
      ],
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
    siteUrl: "https://baklava-288o.vercel.app",
    siteName: "Ysuri Sailing",
    defaultTitle:
      "Ysuri Sailing | Catamarán y tours en Bahía de Banderas",
    defaultDescription:
      "Reserva tours en catamarán o panga: pesca, snorkel y avistamiento de ballenas desde Marina La Cruz de Huanacaxtle.",
    locale: "es_MX",
    type: "website",
    image: "/og/logo-ysuri.png",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt:
      "Ysuri Sailing, catamarán y tours marítimos en Bahía de Banderas",
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
      streetAddress: "Marina La Cruz de Huanacaxtle, muelle 1",
      addressLocality: "La Cruz de Huanacaxtle",
      addressRegion: "Nayarit",
      postalCode: "63734",
      addressCountry: "MX",
    },
    sameAs: [WHATSAPP_URL, INSTAGRAM_URL, FACEBOOK_URL],
  },
};

export type SiteData = typeof siteData;