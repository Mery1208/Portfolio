export interface EducationItem {
  id: string;
  year: string;
  badge: string;
  title: string;
  place: string;
  desc: string;
  tags: string[];
}

export const education: EducationItem[] = [
  {
    id: 'daw',
    year: '2024 — 2026',
    badge: '🎓 Grado Superior',
    title: 'Desarrollo de Aplicaciones Web (DAW)',
    place: 'IES Albarregas · Mérida, Badajoz',
    desc: 'Formación técnica completa en desarrollo web. Frontend, backend, bases de datos, entornos de despliegue y metodologías de desarrollo. Nota de acceso destacada. Proyecto final con Laravel + React.',
    tags: ['HTML · CSS · JS', 'PHP · Laravel', 'MySQL', 'React', 'Java'],
  },
  {
    id: 'practicas-2026',
    year: 'Mar — Jun 2026',
    badge: '💼 Prácticas FCT',
    title: 'Prácticas en empresa',
    place: 'Veyve Technology · Badajoz',
    desc: 'Segunda etapa de prácticas en entorno empresarial real. Desarrollo de aplicaciones web, trabajo en equipo con metodologías ágiles y aplicación de tecnologías modernas en proyectos reales.',
    tags: ['React', 'TypeScript', 'Laravel', 'Git', 'PHP', 'MySQL'],
  },
  {
    id: 'practicas-2025',
    year: 'May — Jun 2025',
    badge: '💼 Prácticas FCT',
    title: 'Prácticas en empresa',
    place: 'Veyve Technology · Badajoz',
    desc: 'Primera etapa de prácticas formativas en empresa. Integración en equipo de desarrollo y creación/personalización de sitios web autogestionables con WordPress.',
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Git'],
  },
];
