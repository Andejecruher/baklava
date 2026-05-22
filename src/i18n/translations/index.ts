import type { Locale } from '../config';

export interface Translations {
  // Skip-link
  skipToMain: string;

  // Hero eyebrow
  heroEyebrow: string;

  // Section titles
  linksTitle: string;
  promosTitle: string;
  hoursTitle: string;
  locationTitle: string;
  followTitle: string;

  // Link buttons
  linkMenu: string;
  linkMenuSub: string;
  linkWhatsapp: string;
  linkWhatsappSub: string;
  linkMaps: string;
  linkMapsSub: string;
  linkPromos: string;
  linkPromosSub: string;

  // Hero CTA buttons
  ctaMenu: string;
  ctaWhatsapp: string;

  // Location card
  locationNearSea: string;
  locationOpenMaps: string;

  // Footer
  footerTagline: string;
  footerPromoNote: string;
  footerRights: string;

  // Floating WhatsApp
  waButton: string;
  waButtonAriaLabel: string;

  // Language selector
  langSelector: string;

  // Aria labels
  ariaMainLinks: string;
  ariaOpeningHours: string;

  // SEO
  seoTitle: string;
  seoDescription: string;
  breadcrumbHome: string;

  // Brand taglines (hero subtitle and description)
  brandSubtitle: string;
  brandDescription: string;

  // WhatsApp prefilled message
  whatsappMessage: string;

  // Promotions content
  promos: {
    title: string;
    description: string;
    note?: string;
  }[];

  // Hours content
  hours: {
    day: string;
    time: string;
  }[];
}

const es: Translations = {
  skipToMain: 'Saltar al contenido principal',

  heroEyebrow: 'Escanea · Consulta · Reserva',

  linksTitle: 'Todo Baklava en un solo lugar',
  promosTitle: 'Promos del día',
  hoursTitle: 'Horarios',
  locationTitle: 'Ubicación',
  followTitle: 'Síguenos',

  linkMenu: 'Ver menú',
  linkMenuSub: 'Carta completa',
  linkWhatsapp: 'Reservar por WhatsApp',
  linkWhatsappSub: 'Respuesta inmediata',
  linkMaps: 'Cómo llegar',
  linkMapsSub: 'Abrir en Google Maps',
  linkPromos: 'Promociones',
  linkPromosSub: '2x1 y especiales del día',

  ctaMenu: 'Ver menú',
  ctaWhatsapp: 'Reservar por WhatsApp',

  locationNearSea: 'Encuéntranos junto al mar',
  locationOpenMaps: 'Abrir en Google Maps',

  footerTagline: 'Experiencias frescas frente al mar.',
  footerPromoNote: 'Promociones sujetas a disponibilidad.',
  footerRights: 'Todos los derechos reservados.',

  waButton: 'Reservar por WhatsApp',
  waButtonAriaLabel: 'Reservar por WhatsApp',

  langSelector: 'Idioma',

  ariaMainLinks: 'Accesos rápidos',
  ariaOpeningHours: 'Horarios de apertura',

  seoTitle: 'Baklava Beach Club | Cocina mediterránea frente al mar',
  seoDescription:
    'Disfruta Baklava Beach Club: cocina mediterránea, ambiente exclusivo, vista al Pacífico, menú, eventos y reservaciones en un solo lugar.',
  breadcrumbHome: 'Inicio',

  brandSubtitle: 'Sabores frescos frente al mar',
  brandDescription: 'Consulta nuestro menú, promociones, ubicación y redes desde un solo lugar.',

  whatsappMessage: 'Hola Baklava, me gustaría hacer una reservación.',

  promos: [
    {
      title: 'Margaritas y Mojitos 2x1',
      description: 'Todos los días de 4:00 PM a 6:00 PM',
      note: 'Promoción por tiempo limitado',
    },
    {
      title: 'Vinos 2x1',
      description: 'Todos los días de 7:00 PM a 9:00 PM',
      note: 'Disponible en Baklava Bucerias',
    },
  ],

  hours: [
    { day: 'Lunes a domingo', time: '8 a.m.–9 p.m.' },
  ],
};

const en: Translations = {
  skipToMain: 'Skip to main content',

  heroEyebrow: 'Scan · Explore · Reserve',

  linksTitle: 'Everything Baklava in one place',
  promosTitle: "Today's deals",
  hoursTitle: 'Hours',
  locationTitle: 'Location',
  followTitle: 'Follow us',

  linkMenu: 'View menu',
  linkMenuSub: 'Full menu',
  linkWhatsapp: 'Book via WhatsApp',
  linkWhatsappSub: 'Instant reply',
  linkMaps: 'Get directions',
  linkMapsSub: 'Open in Google Maps',
  linkPromos: 'Promotions',
  linkPromosSub: '2-for-1 & daily specials',

  ctaMenu: 'View menu',
  ctaWhatsapp: 'Book via WhatsApp',

  locationNearSea: 'Find us by the sea',
  locationOpenMaps: 'Open in Google Maps',

  footerTagline: 'Fresh experiences by the sea.',
  footerPromoNote: 'Promotions subject to availability.',
  footerRights: 'All rights reserved.',

  waButton: 'Book via WhatsApp',
  waButtonAriaLabel: 'Book via WhatsApp',

  langSelector: 'Language',

  ariaMainLinks: 'Quick links',
  ariaOpeningHours: 'Opening hours',

  seoTitle: 'Baklava Beach Club | Mediterranean cuisine by the sea',
  seoDescription:
    'Enjoy Baklava Beach Club: Mediterranean cuisine, exclusive atmosphere, Pacific view, menu, events, and reservations all in one place.',
  breadcrumbHome: 'Home',

  brandSubtitle: 'Fresh flavours by the sea',
  brandDescription: 'Explore our menu, promotions, location, and social media all in one place.',

  whatsappMessage: 'Hi Baklava, I would like to make a reservation.',

  promos: [
    {
      title: 'Margaritas & Mojitos 2-for-1',
      description: 'Every day from 4:00 PM to 6:00 PM',
      note: 'Limited-time promotion',
    },
    {
      title: 'Wines 2-for-1',
      description: 'Every day from 7:00 PM to 9:00 PM',
      note: 'Available at Baklava Bucerias',
    },
  ],

  hours: [
    { day: 'Monday to Sunday', time: '8 a.m.–9 p.m.' },
  ],
};

const fr: Translations = {
  skipToMain: 'Aller au contenu principal',

  heroEyebrow: 'Scannez · Consultez · Réservez',

  linksTitle: 'Tout Baklava en un seul endroit',
  promosTitle: "Promos du jour",
  hoursTitle: 'Horaires',
  locationTitle: 'Emplacement',
  followTitle: 'Suivez-nous',

  linkMenu: 'Voir le menu',
  linkMenuSub: 'Carte complète',
  linkWhatsapp: 'Réserver via WhatsApp',
  linkWhatsappSub: 'Réponse immédiate',
  linkMaps: 'Comment venir',
  linkMapsSub: 'Ouvrir dans Google Maps',
  linkPromos: 'Promotions',
  linkPromosSub: '2 pour 1 et spéciaux du jour',

  ctaMenu: 'Voir le menu',
  ctaWhatsapp: 'Réserver via WhatsApp',

  locationNearSea: 'Trouvez-nous au bord de la mer',
  locationOpenMaps: 'Ouvrir dans Google Maps',

  footerTagline: 'Des expériences fraîches au bord de la mer.',
  footerPromoNote: 'Promotions sous réserve de disponibilité.',
  footerRights: 'Tous droits réservés.',

  waButton: 'Réserver via WhatsApp',
  waButtonAriaLabel: 'Réserver via WhatsApp',

  langSelector: 'Langue',

  ariaMainLinks: 'Accès rapides',
  ariaOpeningHours: "Horaires d'ouverture",

  seoTitle: 'Baklava Beach Club | Cuisine méditerranéenne au bord de la mer',
  seoDescription:
    'Profitez de Baklava Beach Club : cuisine méditerranéenne, atmosphère exclusive, vue sur le Pacifique, menu, événements et réservations en un seul endroit.',
  breadcrumbHome: 'Accueil',

  brandSubtitle: 'Saveurs fraîches au bord de la mer',
  brandDescription: 'Consultez notre menu, promotions, emplacement et réseaux en un seul endroit.',

  whatsappMessage: 'Bonjour Baklava, je souhaiterais faire une réservation.',

  promos: [
    {
      title: 'Margaritas & Mojitos 2 pour 1',
      description: 'Tous les jours de 16h00 à 18h00',
      note: 'Promotion à durée limitée',
    },
    {
      title: 'Vins 2 pour 1',
      description: 'Tous les jours de 19h00 à 21h00',
      note: 'Disponible au Baklava Bucerias',
    },
  ],

  hours: [
    { day: 'Lundi au dimanche', time: '8h00–21h00' },
  ],
};

export const translations: Record<Locale, Translations> = { es, en, fr };
