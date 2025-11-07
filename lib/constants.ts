
export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};


export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "Conferencia Internacional de IA",
    slug: 'conferencia-internacional-ia',
    location: 'Centro de Convenciones Metropolitano, Ciudad de México',
    date: '20 de Noviembre, 2025',
    time: '9:00 AM - 5:00 PM'
  },
  {
    image: "/images/event2.png",
    title: "Taller Práctico de Next.js 16 y Tailwind CSS",
    slug: 'taller-nextjs-tailwind',
    location: 'Espacio Cultural El Nido, Bogotá',
    date: '1 de Diciembre, 2025',
    time: '6:30 PM - 9:30 PM'
  },
  {
    image: "/images/event3.png",
    title: "Festival de Música Indie 'Sonidos del Futuro'",
    slug: 'festival-sonidos-futuro',
    location: 'Parque de la Costa, Buenos Aires',
    date: '15 de Diciembre, 2025',
    time: '3:00 PM - 1:00 AM'
  },
  {
    image: "/images/event4.png",
    title: "Exposición de Arte Digital: Fractales y Códigos",
    slug: 'exposicion-arte-digital',
    location: 'Galería Central 23, Madrid',
    date: '10 de Enero, 2026',
    time: '11:00 AM - 7:00 PM'
  },
  {
    image: "/images/event5.png",
    title: "Meetup: Desarrollo Sostenible y Tech",
    slug: 'meetup-desarrollo-sostenible',
    location: 'Cafetería Tech Hub, Santiago de Chile',
    date: '28 de Enero, 2026',
    time: '7:00 PM - 8:30 PM'
  },
  {
    image: "/images/event6.png",
    title: "Webinar: Optimización de Base de Datos con PostgreSQL",
    slug: 'webinar-optimizacion-postgresql',
    location: 'Online (Zoom)',
    date: '5 de Febrero, 2026',
    time: '4:00 PM (GMT-3)'
  }
];