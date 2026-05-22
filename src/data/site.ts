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
  note?: string;
}

export interface HoursEntry {
  day: string;
  time: string;
}

export const siteData = {
  brand: {
    name: "Baklava Club de Mar",
    subtitle: "Sabores frescos frente al mar",
    description:
      "Consulta nuestro menú, promociones, ubicación y redes desde un solo lugar.",
    location: "Bucerias, Nayarit",
    logo: "/logo-baklava.png",
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
      title: "Margaritas y Mojitos 2x1",
      description: "Todos los días de 4:00 PM a 6:00 PM",
      note: "Promoción por tiempo limitado",
    },
    {
      title: "Vinos 2x1",
      description: "Todos los días de 7:00 PM a 9:00 PM",
      note: "Disponible en Baklava Bucerias",
    },
  ] as Promotion[],
  hours: [
    {
      day: "Lunes a domingo",
      time: "8 a.m.–9 p.m",
    },
  ] as HoursEntry[],
  social: {
    instagramHandle: "@baklavarestaurants",
    facebookName: "Baklava Restaurants",
  },
  seo: {
    siteUrl: "https://baklava-seven.vercel.app",
    siteName: "Baklava Club de Mar",
    defaultTitle: "Baklava Club de Mar | Cocina mediterránea frente al mar",
    defaultDescription:
      "Disfruta Baklava Club de Mar: cocina mediterránea, ambiente exclusivo, vista al Pacífico, menú, eventos y reservaciones en un solo lugar.",
    locale: "es_MX",
    type: "website",
    image: "/og/baklava-og.png",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Baklava Club de Mar, experiencia mediterránea frente al mar",
    themeColor: "#19B8C6",
    brandColor: "#19B8C6",
    twitterCard: "summary_large_image",
  },
  schema: {
    priceRange: "$$",
    menuUrl: MENU_URL,
    telephone: WHATSAPP_NUMBER,
    openingHours: ["8 a.m.–9 p.m"],
    address: {
      streetAddress:
        "Blvrd Riviera Nayarit 950, 63732 Cruz de Huanacaxtle, Nay.",
      addressLocality: "Bucerias",
      addressRegion: "Nayarit",
      postalCode: "63732",
      addressCountry: "MX",
    },
    sameAs: [WHATSAPP_URL, INSTAGRAM_URL, FACEBOOK_URL],
  },
};

export type SiteData = typeof siteData;
