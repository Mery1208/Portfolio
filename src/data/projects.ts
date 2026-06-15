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
    id: 'saniclears',
    num: '01',
    category: 'Full-Stack · TFG',
    title: 'Saniclears',
    desc: 'Proyecto de Fin de Grado (TFG). Aplicación web completa para la gestión y reserva de servicios de limpieza, con panel de administración, control de citas y pasarela de reservas.',
    tags: ['React', 'Laravel', 'PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/Mery1208/SANICLEARS.git',
    demo: 'https://saniclears.com',
    mockupType: 'tasks',
  },
  {
    id: 'puente-3d',
    num: '02',
    category: '3D · Modelado & Web',
    title: 'Puente 3D con Blender',
    desc: 'Escena interactiva en 3D de un puente detallado modelado y texturizado en Blender, optimizado y exportado para su visualización interactiva en la web.',
    tags: ['Blender', 'Three.js', '3D Modeling', 'JavaScript', 'WebGL'],
    github: 'https://github.com/Mery1208/proyecto3D.git',
    demo: 'https://proyecto3-d.vercel.app/',
    mockupType: 'portfolio',
  },
  {
    id: 'listo',
    num: '03',
    category: 'Web App · Productividad',
    title: 'listO',
    desc: 'Aplicación web interactiva para la gestión inteligente y sencilla de listas de tareas o compras, con una interfaz minimalista centrada en la experiencia de usuario y la productividad diaria.',
    tags: ['React', 'JavaScript', 'CSS3', 'Vite'],
    github: 'https://github.com/egilp04/listO.git',
    demo: 'https://list-o.vercel.app',
    mockupType: 'shop',
  },
  {
    id: 'medcare-digital',
    num: '04',
    category: 'Frontend · Landing Page',
    title: 'Medcare Digital',
    desc: 'Sitio web moderno y landing page interactiva para servicios médicos y de salud digital. Diseño adaptativo enfocado en la usabilidad, navegación fluida y optimización SEO.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    github: 'https://github.com/Mery1208/landingWeb',
    demo: 'https://mery1208.github.io/landingWeb/',
    mockupType: 'api',
  },
];
