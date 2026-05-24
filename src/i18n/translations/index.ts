import type { Locale } from "../config";

export interface Translations {
  skipToMain: string;

  heroEyebrow: string;

  linksTitle: string;
  promosTitle: string;
  hoursTitle: string;
  locationTitle: string;
  followTitle: string;

  linkMenu: string;
  linkMenuSub: string;
  linkWhatsapp: string;
  linkWhatsappSub: string;
  linkMaps: string;
  linkMapsSub: string;
  linkPromos: string;
  linkPromosSub: string;

  ctaMenu: string;
  ctaWhatsapp: string;

  locationNearSea: string;
  locationOpenMaps: string;

  footerTagline: string;
  footerPromoNote: string;
  footerRights: string;

  waButton: string;
  waButtonAriaLabel: string;

  langSelector: string;

  ariaMainLinks: string;
  ariaOpeningHours: string;

  seoTitle: string;
  seoDescription: string;
  breadcrumbHome: string;

  brandSubtitle: string;
  brandDescription: string;

  whatsappMessage: string;

  promos: {
    title: string;
    description: string;
    price?: string;
    duration?: string;
    schedule?: string;
    capacity?: string;
    note?: string;
    includes?: string[];
  }[];

  hours: {
    day: string;
    time: string;
  }[];
}

const es: Translations = {
  skipToMain: "Saltar al contenido principal",

  heroEyebrow: "Escanea · Consulta · Reserva",

  linksTitle: "Todo Ysuri Sailing en un solo lugar",
  promosTitle: "Experiencias y promociones",
  hoursTitle: "Horarios",
  locationTitle: "Punto de salida",
  followTitle: "Síguenos",

  linkMenu: "Ver experiencias",
  linkMenuSub: "Catamarán, pesca, snorkel y tours",
  linkWhatsapp: "Reservar por WhatsApp",
  linkWhatsappSub: "Consulta disponibilidad",
  linkMaps: "Cómo llegar",
  linkMapsSub: "Abrir Marina La Cruz en Google Maps",
  linkPromos: "Ver promociones",
  linkPromosSub: "Tours privados y compartidos",

  ctaMenu: "Ver experiencias",
  ctaWhatsapp: "Reservar por WhatsApp",

  locationNearSea: "Salimos desde Marina La Cruz de Huanacaxtle, muelle 1",
  locationOpenMaps: "Abrir en Google Maps",

  footerTagline: "Experiencias inolvidables navegando Bahía de Banderas.",
  footerPromoNote: "Precios y promociones sujetos a disponibilidad.",
  footerRights: "Todos los derechos reservados.",

  waButton: "Reservar por WhatsApp",
  waButtonAriaLabel: "Reservar experiencia por WhatsApp",

  langSelector: "Idioma",

  ariaMainLinks: "Accesos rápidos",
  ariaOpeningHours: "Horarios y disponibilidad",

  seoTitle:
    "Ysuri Sailing | Catamarán, pesca, snorkel y tours en Bahía de Banderas",
  seoDescription:
    "Reserva experiencias privadas y compartidas con Ysuri Sailing: catamarán, pesca, snorkel, avistamiento de ballenas y paseos al atardecer desde Marina La Cruz de Huanacaxtle.",
  breadcrumbHome: "Inicio",

  brandSubtitle:
    "Experiencias privadas en catamarán y panga desde Marina La Cruz de Huanacaxtle",
  brandDescription:
    "Reserva tours, pesca, snorkel, avistamiento de ballenas y paseos al atardecer desde un solo lugar.",

  whatsappMessage:
    "Hola Ysuri Sailing, me gustaría recibir información para reservar una experiencia.",

  promos: [
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
        "Paseo privado para disfrutar la tarde en la bahía con alimentos, bebidas y actividades.",
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
      title: "Ticketing hacia el Sur",
      description:
        "Tour compartido hacia el Sur con salida desde Marina La Cruz de Huanacaxtle.",
      price: "$100 USD por persona",
      duration: "6 horas",
      schedule: "9:00 a.m. a 3:00 p.m.",
      note: "Salida desde Marina La Cruz de Huanacaxtle, muelle 1",
    },
    {
      title: "Marietas y snorkel",
      description:
        "Tour compartido a Marietas con snorkel en playa La Nopalera.",
      price: "$120 USD por persona",
      duration: "6 horas",
      schedule: "9:00 a.m. a 3:00 p.m.",
      note: "No incluye Playa del Amor",
    },
    {
      title: "Marietas con Playa del Amor",
      description:
        "Experiencia compartida con visita a Marietas y Playa del Amor incluida.",
      price: "$170 USD por persona",
      duration: "6 horas",
      schedule: "9:00 a.m. a 3:00 p.m.",
    },
    {
      title: "La Pinta · Pesca privada",
      description:
        "Panga de 26 pies lista para salir de excursión, ideal para grupos de hasta 8 personas.",
      price: "Desde $350 USD",
      duration: "4, 6 u 8 horas",
      capacity: "Hasta 8 personas",
      note: "4 horas: $350 USD · 6 horas: $400 USD · 8 horas: $450 USD",
    },
    {
      title: "La Pinta · Avistamiento de ballenas",
      description:
        "Tour de temporada para disfrutar el avistamiento de ballenas.",
      price: "$200 USD",
      duration: "3 horas",
      capacity: "Hasta 8 personas",
      note: "Por temporada · Hora extra: $50 USD",
    },
    {
      title: "La Pinta · Tour de snorkel",
      description:
        "Tour privado de snorkel en panga para grupos de hasta 8 personas.",
      price: "$350 USD",
      duration: "4 horas",
      capacity: "Hasta 8 personas",
    },
  ],

  hours: [
    {
      day: "Lunes a domingo",
      time: "Reservas sujetas a disponibilidad",
    },
  ],
};

const en: Translations = {
  skipToMain: "Skip to main content",

  heroEyebrow: "Scan · Explore · Book",

  linksTitle: "Everything Ysuri Sailing in one place",
  promosTitle: "Experiences and promotions",
  hoursTitle: "Hours",
  locationTitle: "Departure point",
  followTitle: "Follow us",

  linkMenu: "View experiences",
  linkMenuSub: "Catamaran, fishing, snorkeling and tours",
  linkWhatsapp: "Book via WhatsApp",
  linkWhatsappSub: "Check availability",
  linkMaps: "Get directions",
  linkMapsSub: "Open Marina La Cruz in Google Maps",
  linkPromos: "View promotions",
  linkPromosSub: "Private and shared tours",

  ctaMenu: "View experiences",
  ctaWhatsapp: "Book via WhatsApp",

  locationNearSea: "Departing from Marina La Cruz de Huanacaxtle, dock 1",
  locationOpenMaps: "Open in Google Maps",

  footerTagline: "Unforgettable sailing experiences in Banderas Bay.",
  footerPromoNote: "Prices and promotions subject to availability.",
  footerRights: "All rights reserved.",

  waButton: "Book via WhatsApp",
  waButtonAriaLabel: "Book an experience via WhatsApp",

  langSelector: "Language",

  ariaMainLinks: "Quick links",
  ariaOpeningHours: "Hours and availability",

  seoTitle:
    "Ysuri Sailing | Catamaran, fishing, snorkeling and tours in Banderas Bay",
  seoDescription:
    "Book private and shared experiences with Ysuri Sailing: catamaran, fishing, snorkeling, whale watching and sunset tours departing from Marina La Cruz de Huanacaxtle.",
  breadcrumbHome: "Home",

  brandSubtitle:
    "Private catamaran and panga experiences from Marina La Cruz de Huanacaxtle",
  brandDescription:
    "Book tours, fishing, snorkeling, whale watching and sunset sailing experiences from one place.",

  whatsappMessage:
    "Hi Ysuri Sailing, I would like information to book an experience.",

  promos: [
    {
      title: "Ysuri Catamaran · Morning trip",
      description:
        "Private experience for groups of up to 12 people with food, drinks and activities included.",
      price: "$1,950 USD",
      duration: "5 hours",
      schedule: "9:00 a.m. to 2:00 p.m.",
      capacity: "Up to 12 people",
      note: "+1 free hour",
      includes: [
        "Food",
        "Drinks",
        "Water activities",
        "Premium open bar",
        "Paddleboards",
        "Snorkeling gear",
        "Lily pad",
        "Fishing rods",
      ],
    },
    {
      title: "Ysuri Catamaran · Sunset tour",
      description:
        "Private afternoon tour to enjoy the bay with food, drinks and activities.",
      price: "$1,200 USD",
      duration: "4 hours",
      schedule: "3:00 p.m. to 7:00 p.m.",
      capacity: "Up to 12 people",
      note: "Extra person: $100 USD · Extra hour: $400 USD",
      includes: [
        "Food",
        "Drinks",
        "Activities",
        "Premium open bar",
        "Water amenities",
      ],
    },
    {
      title: "Ticketing to the South",
      description:
        "Shared tour to the South departing from Marina La Cruz de Huanacaxtle.",
      price: "$100 USD per person",
      duration: "6 hours",
      schedule: "9:00 a.m. to 3:00 p.m.",
      note: "Departure from Marina La Cruz de Huanacaxtle, dock 1",
    },
    {
      title: "Marietas and snorkeling",
      description:
        "Shared tour to Marietas with snorkeling at La Nopalera beach.",
      price: "$120 USD per person",
      duration: "6 hours",
      schedule: "9:00 a.m. to 3:00 p.m.",
      note: "Does not include Playa del Amor",
    },
    {
      title: "Marietas with Playa del Amor",
      description:
        "Shared experience including Marietas and Playa del Amor.",
      price: "$170 USD per person",
      duration: "6 hours",
      schedule: "9:00 a.m. to 3:00 p.m.",
    },
    {
      title: "La Pinta · Private fishing",
      description:
        "26-foot panga ready for excursions, ideal for groups of up to 8 people.",
      price: "From $350 USD",
      duration: "4, 6 or 8 hours",
      capacity: "Up to 8 people",
      note: "4 hours: $350 USD · 6 hours: $400 USD · 8 hours: $450 USD",
    },
    {
      title: "La Pinta · Whale watching",
      description:
        "Seasonal tour to enjoy whale watching in Banderas Bay.",
      price: "$200 USD",
      duration: "3 hours",
      capacity: "Up to 8 people",
      note: "Seasonal · Extra hour: $50 USD",
    },
    {
      title: "La Pinta · Snorkeling tour",
      description:
        "Private snorkeling tour by panga for groups of up to 8 people.",
      price: "$350 USD",
      duration: "4 hours",
      capacity: "Up to 8 people",
    },
  ],

  hours: [
    {
      day: "Monday to Sunday",
      time: "Bookings subject to availability",
    },
  ],
};

const fr: Translations = {
  skipToMain: "Aller au contenu principal",

  heroEyebrow: "Scannez · Consultez · Réservez",

  linksTitle: "Tout Ysuri Sailing en un seul endroit",
  promosTitle: "Expériences et promotions",
  hoursTitle: "Horaires",
  locationTitle: "Point de départ",
  followTitle: "Suivez-nous",

  linkMenu: "Voir les expériences",
  linkMenuSub: "Catamaran, pêche, snorkeling et excursions",
  linkWhatsapp: "Réserver via WhatsApp",
  linkWhatsappSub: "Vérifier la disponibilité",
  linkMaps: "Comment venir",
  linkMapsSub: "Ouvrir Marina La Cruz dans Google Maps",
  linkPromos: "Voir les promotions",
  linkPromosSub: "Excursions privées et partagées",

  ctaMenu: "Voir les expériences",
  ctaWhatsapp: "Réserver via WhatsApp",

  locationNearSea: "Départ depuis Marina La Cruz de Huanacaxtle, quai 1",
  locationOpenMaps: "Ouvrir dans Google Maps",

  footerTagline:
    "Des expériences inoubliables en naviguant dans la baie de Banderas.",
  footerPromoNote: "Prix et promotions sous réserve de disponibilité.",
  footerRights: "Tous droits réservés.",

  waButton: "Réserver via WhatsApp",
  waButtonAriaLabel: "Réserver une expérience via WhatsApp",

  langSelector: "Langue",

  ariaMainLinks: "Accès rapides",
  ariaOpeningHours: "Horaires et disponibilité",

  seoTitle:
    "Ysuri Sailing | Catamaran, pêche, snorkeling et excursions dans la baie de Banderas",
  seoDescription:
    "Réservez des expériences privées et partagées avec Ysuri Sailing : catamaran, pêche, snorkeling, observation des baleines et sorties au coucher du soleil depuis Marina La Cruz de Huanacaxtle.",
  breadcrumbHome: "Accueil",

  brandSubtitle:
    "Expériences privées en catamaran et panga depuis Marina La Cruz de Huanacaxtle",
  brandDescription:
    "Réservez excursions, pêche, snorkeling, observation des baleines et sorties au coucher du soleil depuis un seul endroit.",

  whatsappMessage:
    "Bonjour Ysuri Sailing, je souhaite recevoir des informations pour réserver une expérience.",

  promos: [
    {
      title: "Catamaran Ysuri · Sortie du matin",
      description:
        "Expérience privée pour groupes jusqu’à 12 personnes avec nourriture, boissons et activités incluses.",
      price: "$1,950 USD",
      duration: "5 heures",
      schedule: "9h00 à 14h00",
      capacity: "Jusqu’à 12 personnes",
      note: "+1 heure gratuite",
      includes: [
        "Nourriture",
        "Boissons",
        "Activités nautiques",
        "Bar premium à volonté",
        "Paddleboards",
        "Équipement de snorkeling",
        "Lily pad",
        "Cannes à pêche",
      ],
    },
    {
      title: "Catamaran Ysuri · Sortie au coucher du soleil",
      description:
        "Sortie privée l’après-midi pour profiter de la baie avec nourriture, boissons et activités.",
      price: "$1,200 USD",
      duration: "4 heures",
      schedule: "15h00 à 19h00",
      capacity: "Jusqu’à 12 personnes",
      note: "Personne supplémentaire : $100 USD · Heure supplémentaire : $400 USD",
      includes: [
        "Nourriture",
        "Boissons",
        "Activités",
        "Bar premium à volonté",
        "Équipements nautiques",
      ],
    },
    {
      title: "Billet vers le Sud",
      description:
        "Excursion partagée vers le Sud au départ de Marina La Cruz de Huanacaxtle.",
      price: "$100 USD par personne",
      duration: "6 heures",
      schedule: "9h00 à 15h00",
      note: "Départ depuis Marina La Cruz de Huanacaxtle, quai 1",
    },
    {
      title: "Marietas et snorkeling",
      description:
        "Excursion partagée aux Marietas avec snorkeling à la plage La Nopalera.",
      price: "$120 USD par personne",
      duration: "6 heures",
      schedule: "9h00 à 15h00",
      note: "N’inclut pas Playa del Amor",
    },
    {
      title: "Marietas avec Playa del Amor",
      description:
        "Expérience partagée incluant les Marietas et Playa del Amor.",
      price: "$170 USD par personne",
      duration: "6 heures",
      schedule: "9h00 à 15h00",
    },
    {
      title: "La Pinta · Pêche privée",
      description:
        "Panga de 26 pieds prête pour les excursions, idéale pour groupes jusqu’à 8 personnes.",
      price: "À partir de $350 USD",
      duration: "4, 6 ou 8 heures",
      capacity: "Jusqu’à 8 personnes",
      note: "4 heures : $350 USD · 6 heures : $400 USD · 8 heures : $450 USD",
    },
    {
      title: "La Pinta · Observation des baleines",
      description:
        "Excursion saisonnière pour observer les baleines dans la baie de Banderas.",
      price: "$200 USD",
      duration: "3 heures",
      capacity: "Jusqu’à 8 personnes",
      note: "Saisonnier · Heure supplémentaire : $50 USD",
    },
    {
      title: "La Pinta · Tour de snorkeling",
      description:
        "Tour privé de snorkeling en panga pour groupes jusqu’à 8 personnes.",
      price: "$350 USD",
      duration: "4 heures",
      capacity: "Jusqu’à 8 personnes",
    },
  ],

  hours: [
    {
      day: "Lundi au dimanche",
      time: "Réservations selon disponibilité",
    },
  ],
};

export const translations: Record<Locale, Translations> = { es, en, fr };