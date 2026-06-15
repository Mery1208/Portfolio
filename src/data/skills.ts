export interface Skill {
  icon: string;
  name: string;
  type: string;
  level: number; // 0-100
  hero?: boolean;
}

export const skills: Skill[] = [
  // LENGUAJES & FRONTEND
  { icon: '🟨', name: 'JavaScript',    type: 'Lenguaje',        level: 88 },
  { icon: '📘', name: 'TypeScript',    type: 'Lenguaje',        level: 85 },
  { icon: '⚛️', name: 'React',         type: 'Frontend',        level: 90 },
  { icon: '🌐', name: 'HTML5',         type: 'Frontend',        level: 95 },
  { icon: '🎨', name: 'CSS3',          type: 'Frontend',        level: 95 },

  // BACKEND & BASES DE DATOS
  { icon: '🐘', name: 'PHP',           type: 'Backend',         level: 80 },
  { icon: '⚙️', name: 'Laravel',       type: 'Backend',         level: 82 },
  { icon: '🗄️', name: 'MySQL',         type: 'Base de datos',   level: 85 },
  { icon: '🔷', name: 'SQLite',        type: 'Base de datos',   level: 75 },

  // CMS & DISEÑO 3D
  { icon: '📝', name: 'WordPress',     type: 'CMS / Web',       level: 80 },
  { icon: '🎭', name: 'Figma',         type: 'Diseño UI',       level: 78 },
  { icon: '✏️', name: 'Excalidraw',    type: 'Diseño UI / UX',  level: 80 },
  { icon: '🟠', name: 'Blender',       type: 'Diseño 3D',       level: 75 },

  // DEVOPS & HERRAMIENTAS
  { icon: '🐙', name: 'Git / GitHub',  type: 'Herramientas',    level: 80 },
  { icon: '🐋', name: 'Docker',         type: 'DevOps',          level: 72 },
  { icon: '🔌', name: 'Docker Compose', type: 'DevOps',          level: 80 },

  // OTROS LENGUAJES
  { icon: '☕', name: 'Java',          type: 'Lenguaje',        level: 72 },
  { icon: '🐍', name: 'Python',        type: 'Lenguaje',        level: 74 },
];
