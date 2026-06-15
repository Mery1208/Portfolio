export interface Project {
  id: string;
  num: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
  github: string;
  demo?: string;
  mockupType: 'tasks' | 'portfolio' | 'shop' | 'api';
}

export const projects: Project[] = [
  {
    id: 'gestor-tareas',
    num: '01',
    category: 'Full-Stack App',
    title: 'Gestor de Tareas',
    desc: 'Aplicación web completa para gestión de tareas con autenticación de usuarios, categorías, prioridades y panel de estadísticas. CRUD completo con backend en Laravel y frontend dinámico.',
    tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'CSS3'],
    github: 'https://github.com/mery1208',
    mockupType: 'tasks',
  },
  {
    id: 'portfolio',
    num: '02',
    category: 'Frontend · Diseño',
    title: 'Portfolio Personal v1',
    desc: 'Portfolio web con diseño dark & neon, cursor personalizado, animaciones CSS avanzadas, diseño totalmente responsivo y efectos glassmorphism. Construido desde cero sin frameworks CSS.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Animaciones'],
    github: 'https://github.com/mery1208/PortfolioMery',
    demo: 'https://mery1208.github.io/PortfolioMery/',
    mockupType: 'portfolio',
  },
  {
    id: 'tienda',
    num: '03',
    category: 'Full-Stack · E-commerce',
    title: 'Tienda Online',
    desc: 'Plataforma e-commerce con catálogo de productos, carrito de compras, sistema de usuarios y panel de administración. Gestión de inventario en tiempo real con base de datos relacional.',
    tags: ['Laravel', 'MySQL', 'Blade', 'Bootstrap', 'PHP'],
    github: 'https://github.com/mery1208',
    mockupType: 'shop',
  },
  {
    id: 'react-api',
    num: '04',
    category: 'React · API REST',
    title: 'App React + API',
    desc: 'Single Page Application en React con TypeScript consumiendo una API REST propia. Incluye gestión de estado, rutas dinámicas, hooks personalizados y autenticación JWT.',
    tags: ['React', 'TypeScript', 'API REST', 'JWT', 'Vite'],
    github: 'https://github.com/mery1208',
    mockupType: 'api',
  },
];
