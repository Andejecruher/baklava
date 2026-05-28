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

  cancellationPolicy: string;

  promos: {
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
  }[];

  promoLabels: {
    price: string;
    duration: string;
    schedule: string;
    capacity: string;
    includes: string;
    importantInfo: string;
    cancellationPolicy: string;
  };

  hours: {
    day: string;
    time: string;
  }[];
}

const es: Translations = {
  skipToMain: "Saltar al contenido principal",

  heroEyebrow: "Escanea · Consulta · Reserva",

  linksTitle: "Todo Ysuri Sailing en un solo lugar",
  promosTitle: "Promociones",
  hoursTitle: "Horarios",
  locationTitle: "Punto de salida",
  followTitle: "Síguenos",

  linkMenu: "Ver promociones",
  linkMenuSub: "Catamarán, tours privados y ticketeo",
  linkWhatsapp: "Reservar por WhatsApp",
  linkWhatsappSub: "Consulta disponibilidad",
  linkMaps: "Cómo llegar",
  linkMapsSub: "Abrir Marina La Cruz en Google Maps",
  linkPromos: "Promociones",
  linkPromosSub: "Viaje matutino, atardecer y ticketeo",

  ctaMenu: "Ver promociones",
  ctaWhatsapp: "Reservar por WhatsApp",

  locationNearSea: "Salidas desde Marina La Cruz de Huanacaxtle, Muelle 1",
  locationOpenMaps: "Abrir en Google Maps",

  footerTagline: "Experiencias en catamarán para disfrutar el mar.",
  footerPromoNote: "Precios y promociones sujetos a disponibilidad.",
  footerRights: "Todos los derechos reservados.",

  waButton: "Reservar por WhatsApp",
  waButtonAriaLabel: "Reservar experiencia por WhatsApp",

  langSelector: "Idioma",

  ariaMainLinks: "Accesos rápidos",
  ariaOpeningHours: "Horarios y disponibilidad",

  seoTitle:
    "Ysuri Sailing | Catamarán, promociones y tours en La Cruz de Huanacaxtle",
  seoDescription:
    "Reserva experiencias en Catamarán Ysuri: viaje matutino, paseo al atardecer y tours compartidos desde Marina La Cruz de Huanacaxtle, Muelle 1.",
  breadcrumbHome: "Inicio",

  brandSubtitle: "Catamarán Ysuri en Marina La Cruz de Huanacaxtle",
  brandDescription:
    "Consulta promociones, tours privados, ticketeo, amenidades, ubicación y reservas desde un solo lugar.",

  whatsappMessage:
    "Hola Ysuri Sailing, me gustaría recibir información para reservar una experiencia en catamarán.",

  cancellationPolicy:
    "Reembolsos solamente disponibles si se solicitan al menos 30 días antes de la fecha prevista.",

  promoLabels: {
    price: "Precio",
    duration: "Duración",
    schedule: "Horario",
    capacity: "Capacidad",
    includes: "Incluye",
    importantInfo: "Información importante",
    cancellationPolicy: "Política de cancelación",
  },

  promos: [
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
  promosTitle: "Promotions",
  hoursTitle: "Hours",
  locationTitle: "Departure point",
  followTitle: "Follow us",

  linkMenu: "View promotions",
  linkMenuSub: "Catamaran, private tours and shared tours",
  linkWhatsapp: "Book via WhatsApp",
  linkWhatsappSub: "Check availability",
  linkMaps: "Get directions",
  linkMapsSub: "Open Marina La Cruz in Google Maps",
  linkPromos: "Promotions",
  linkPromosSub: "Morning trip, sunset tour and shared tours",

  ctaMenu: "View promotions",
  ctaWhatsapp: "Book via WhatsApp",

  locationNearSea: "Departing from La Cruz de Huanacaxtle Marina, Pier 1",
  locationOpenMaps: "Open in Google Maps",

  footerTagline: "Catamaran experiences to enjoy the sea.",
  footerPromoNote: "Prices and promotions subject to availability.",
  footerRights: "All rights reserved.",

  waButton: "Book via WhatsApp",
  waButtonAriaLabel: "Book a catamaran experience via WhatsApp",

  langSelector: "Language",

  ariaMainLinks: "Quick links",
  ariaOpeningHours: "Hours and availability",

  seoTitle:
    "Ysuri Sailing | Catamaran promotions and tours in La Cruz de Huanacaxtle",
  seoDescription:
    "Book Catamaran Ysuri experiences: morning trip, sunset tour and shared tours departing from La Cruz de Huanacaxtle Marina, Pier 1.",
  breadcrumbHome: "Home",

  brandSubtitle: "Catamaran Ysuri at La Cruz de Huanacaxtle Marina",
  brandDescription:
    "Explore promotions, private tours, shared tours, amenities, location and bookings in one place.",

  whatsappMessage:
    "Hi Ysuri Sailing, I would like information to book a catamaran experience.",

  cancellationPolicy:
    "Refunds are only available if requested at least 30 days before the scheduled date.",

  promoLabels: {
    price: "Price",
    duration: "Duration",
    schedule: "Schedule",
    capacity: "Capacity",
    includes: "Includes",
    importantInfo: "Important information",
    cancellationPolicy: "Cancellation policy",
  },

  promos: [
    {
      title: "Morning Trip",
      description:
        "Catamaran experience for groups of up to 12 people.",
      price: "$1,300 USD",
      duration: "4 hours",
      schedule: "10:00 a.m. to 2:00 p.m.",
      capacity: "Up to 12 people",
      note: "Includes food, drinks and activities.",
    },
    {
      title: "Sunset Tour",
      description:
        "Catamaran tour to enjoy the afternoon with food, drinks and activities included.",
      price: "$1,200 USD",
      duration: "4 hours",
      schedule: "3:00 p.m. to 7:00 p.m.",
      capacity: "Up to 12 people",
      note: "Extra person: $50 USD · Extra hour: $250 USD.",
    },
    {
      title: "Shared Tours",
      description:
        "Shared tour departing from La Cruz de Huanacaxtle Marina, Pier 1.",
      price: "$65 USD per person",
      duration: "4 hours",
      schedule: "10:00 a.m. to 2:00 p.m.",
      includes: [
        {
          title: "Food",
          items: [
            "Paninis",
            "Shrimp ceviche",
            "Fish ceviche",
            "Crudités",
            "Seasonal fruit",
            "Guacamole",
          ],
        },
        {
          title: "Amenities",
          items: [
            "4 paddleboards",
            "Snorkeling gear",
            "Lily pad",
            "Fishing rods for trolling",
          ],
        },
        {
          title: "All Inclusive Premium Bar",
          items: [
            "Rum",
            "Tequila",
            "Vodka",
            "Whiskey",
            "Gin",
            "White wine",
            "Beer",
            "Mixers",
            "Bottled water",
            "Ice",
          ],
        },
      ],
      note:
        "Photographer on board available at extra cost. This is not included in the tour price.",
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
  promosTitle: "Promotions",
  hoursTitle: "Horaires",
  locationTitle: "Point de départ",
  followTitle: "Suivez-nous",

  linkMenu: "Voir les promotions",
  linkMenuSub: "Catamaran, tours privés et tours partagés",
  linkWhatsapp: "Réserver via WhatsApp",
  linkWhatsappSub: "Vérifier la disponibilité",
  linkMaps: "Comment venir",
  linkMapsSub: "Ouvrir Marina La Cruz dans Google Maps",
  linkPromos: "Promotions",
  linkPromosSub: "Sortie du matin, coucher du soleil et tours partagés",

  ctaMenu: "Voir les promotions",
  ctaWhatsapp: "Réserver via WhatsApp",

  locationNearSea: "Départs depuis Marina La Cruz de Huanacaxtle, quai 1",
  locationOpenMaps: "Ouvrir dans Google Maps",

  footerTagline: "Des expériences en catamaran pour profiter de la mer.",
  footerPromoNote: "Prix et promotions sous réserve de disponibilité.",
  footerRights: "Tous droits réservés.",

  waButton: "Réserver via WhatsApp",
  waButtonAriaLabel: "Réserver une expérience en catamaran via WhatsApp",

  langSelector: "Langue",

  ariaMainLinks: "Accès rapides",
  ariaOpeningHours: "Horaires et disponibilité",

  seoTitle:
    "Ysuri Sailing | Promotions et tours en catamaran à La Cruz de Huanacaxtle",
  seoDescription:
    "Réservez des expériences avec Catamaran Ysuri : sortie du matin, sortie au coucher du soleil et tours partagés depuis Marina La Cruz de Huanacaxtle, quai 1.",
  breadcrumbHome: "Accueil",

  brandSubtitle: "Catamaran Ysuri à Marina La Cruz de Huanacaxtle",
  brandDescription:
    "Consultez promotions, tours privés, tours partagés, équipements, emplacement et réservations depuis un seul endroit.",

  whatsappMessage:
    "Bonjour Ysuri Sailing, je souhaite recevoir des informations pour réserver une expérience en catamaran.",

  cancellationPolicy:
    "Les remboursements sont disponibles uniquement si la demande est faite au moins 30 jours avant la date prévue.",

  promoLabels: {
    price: "Prix",
    duration: "Durée",
    schedule: "Horaire",
    capacity: "Capacité",
    includes: "Comprend",
    importantInfo: "Information importante",
    cancellationPolicy: "Politique d'annulation",
  },

  promos: [
    {
      title: "Sortie du matin",
      description:
        "Expérience en catamaran pour groupes jusqu’à 12 personnes.",
      price: "$1,300 USD",
      duration: "4 heures",
      schedule: "10h00 à 14h00",
      capacity: "Jusqu’à 12 personnes",
      note: "Inclut nourriture, boissons et activités.",
    },
    {
      title: "Sortie au coucher du soleil",
      description:
        "Tour en catamaran pour profiter de l’après-midi avec nourriture, boissons et activités incluses.",
      price: "$1,200 USD",
      duration: "4 heures",
      schedule: "15h00 à 19h00",
      capacity: "Jusqu’à 12 personnes",
      note: "Personne supplémentaire : $50 USD · Heure supplémentaire : $250 USD.",
    },
    {
      title: "Tours partagés",
      description:
        "Tour partagé au départ de Marina La Cruz de Huanacaxtle, quai 1.",
      price: "$65 USD par personne",
      duration: "4 heures",
      schedule: "10h00 à 14h00",
      includes: [
        {
          title: "Nourriture",
          items: [
            "Paninis",
            "Ceviche de crevettes",
            "Ceviche de poisson",
            "Crudités",
            "Fruits de saison",
            "Guacamole",
          ],
        },
        {
          title: "Équipements",
          items: [
            "4 paddleboards",
            "Équipement de snorkeling",
            "Lily pad",
            "Cannes à pêche pour la traîne",
          ],
        },
        {
          title: "Bar premium tout inclus",
          items: [
            "Rhum",
            "Tequila",
            "Vodka",
            "Whisky",
            "Gin",
            "Vin blanc",
            "Bière",
            "Mixers",
            "Eau embouteillée",
            "Glace",
          ],
        },
      ],
      note:
        "Photographe à bord disponible avec coût supplémentaire. Ce service n’est pas inclus dans le prix du tour.",
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