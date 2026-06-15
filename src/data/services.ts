export interface Service {
  id: string;
  icon: string;
  num: string;
  title: string;
  desc: string;
  items: string[];
}

export const services: Service[] = [
  {
    id: 'frontend',
    icon: '🖥️',
    num: '01',
    title: 'Desarrollo Frontend',
    desc: 'Interfaces modernas, responsivas y con atención al detalle. React, TypeScript, CSS avanzado con animaciones y diseños pixel-perfect a partir de maquetas Figma.',
    items: [
      'SPAs con React / Vite',
      'Diseño responsivo mobile-first',
      'Animaciones CSS & microinteracciones',
      'Integración con APIs REST',
    ],
  },
  {
    id: 'backend',
    icon: '⚙️',
    num: '02',
    title: 'Desarrollo Backend',
    desc: 'APIs robustas, bases de datos bien diseñadas y lógica de negocio clara. Experiencia con Laravel, autenticación segura y arquitecturas MVC.',
    items: [
      'APIs REST con Laravel',
      'Diseño de base de datos MySQL',
      'Autenticación JWT / Sanctum',
      'Panel de administración',
    ],
  },
  {
    id: 'fullstack',
    icon: '🚀',
    num: '03',
    title: 'Proyecto Full-Stack',
    desc: 'Del diseño al despliegue. Puedo llevar un proyecto completo end-to-end: diseño UI, desarrollo frontend + backend, base de datos y publicación.',
    items: [
      'Aplicaciones web completas',
      'E-commerce y tiendas online',
      'CMS y paneles de gestión',
      'Despliegue en producción',
    ],
  },
  {
    id: 'design',
    icon: '🎨',
    num: '04',
    title: 'UI / UX & Diseño Web',
    desc: 'Maquetación y diseño de interfaces con foco en la experiencia de usuario. Transformo ideas en diseños funcionales y atractivos con Figma y CSS avanzado.',
    items: [
      'Prototipado en Figma',
      'Landing pages de alto impacto',
      'Sistemas de diseño',
      'Rediseño / mejora de webs',
    ],
  },
];
