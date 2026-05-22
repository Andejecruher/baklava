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
    menu: "https://baklava.mx/menu/",
    whatsapp: "https://api.whatsapp.com/send/?phone=5219541770078&text=Hola+Baklava+Restaurante%2C+deseo+hacer+una+reservaci%C3%B3n+con+ustedes%2C+muchas+gracias.&type=phone_number&app_absent=0",
    maps: "https://maps.app.goo.gl/SC9jznp1PDFt8eeW6",
    instagram: "https://www.instagram.com/baklavarestaurants",
    facebook: "https://www.facebook.com/profile.php?id=61556102049245&locale=es_LA",
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
      time: "8 a.m.–9 p.m",
    },
  ] as HoursEntry[],
  social: {
    instagramHandle: "@baklavarestaurants",
    facebookName: "Baklava Restaurants",
  },
  seo: {
    siteUrl: "https://baklava.mx",
    siteName: "Baklava Club de Mar",
    defaultTitle: "Baklava Club de Mar | Cocina mediterránea frente al mar",
    defaultDescription:
      "Disfruta Baklava Club de Mar: cocina mediterránea, ambiente exclusivo, vista al Pacífico, menú, eventos y reservaciones en un solo lugar.",
    locale: "es_MX",
    type: "website",
    image: "/og/baklava-og.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt:
      "Baklava Club de Mar, experiencia mediterránea frente al mar",
    themeColor: "#00b7c7",
    brandColor: "#00b7c7",
    twitterCard: "summary_large_image",
  },
  schema: {
    // Reemplazar con datos reales cuando estén disponibles.
    priceRange: "$$",
    menuUrl: "https://baklava.mx/menu/",
    telephone: "5219541770078",
    openingHours: ["8 a.m.–9 p.m"],
    address: {
      streetAddress: "Blvrd Riviera Nayarit 950, 63732 Cruz de Huanacaxtle, Nay.",
      addressLocality: "Bucerias",
      addressRegion: "Nayarit",
      postalCode: "63732",
      addressCountry: "MX",
    },
    sameAs: [
      "https://api.whatsapp.com/send/?phone=5219541770078&text=Hola+Baklava+Restaurante%2C+deseo+hacer+una+reservaci%C3%B3n+con+ustedes%2C+muchas+gracias.&type=phone_number&app_absent=0",
      "https://www.instagram.com/baklavarestaurants",
      "https://www.facebook.com/profile.php?id=61556102049245&locale=es_LA"
    ],
  },
};

export type SiteData = typeof siteData;
