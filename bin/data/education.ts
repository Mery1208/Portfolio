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
    year: '2023 — 2025',
    badge: '🎓 Grado Superior',
    title: 'Desarrollo de Aplicaciones Web (DAW)',
    place: 'IES Albarregas · Mérida, Badajoz',
    desc: 'Formación técnica completa en desarrollo web. Frontend, backend, bases de datos, entornos de despliegue y metodologías de desarrollo. Nota de acceso destacada. Proyecto final con Laravel + React.',
    tags: ['HTML · CSS · JS', 'PHP · Laravel', 'MySQL', 'React', 'Java'],
  },
  {
    id: 'smr',
    year: '2021 — 2023',
    badge: '📋 Grado Medio',
    title: 'Sistemas Microinformáticos y Redes (SMR)',
    place: 'IES Albarregas · Mérida, Badajoz',
    desc: 'Base en hardware, sistemas operativos, redes y administración de sistemas. Primer contacto con programación y bases de datos.',
    tags: ['Redes', 'SO Windows/Linux', 'Hardware'],
  },
  {
    id: 'cursos',
    year: '2025',
    badge: '🏆 Certificación',
    title: 'Formación complementaria',
    place: 'Cursos online · Udemy, freeCodeCamp',
    desc: 'Cursos de React avanzado, TypeScript, Docker y Git. Aprendizaje continuo fuera del aula para complementar la formación reglada.',
    tags: ['React Avanzado', 'TypeScript', 'Docker', 'Git'],
  },
];
