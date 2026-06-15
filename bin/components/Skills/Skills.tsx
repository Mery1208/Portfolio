import { useEffect, useRef } from 'react';
import { skills } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.skill-card'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-label fade-up">Habilidades</div>
        <h2 className="section-title fade-up">
          Stack técnico<br /><em>&amp; herramientas</em>
        </h2>

        <div className="skills-intro fade-up">
          <p>
            Del frontend al backend, pasando por bases de datos y herramientas de diseño.
            Cada tecnología que uso la he aplicado en proyectos reales durante mi formación.
          </p>
          <p>
            Cómoda con metodologías ágiles, control de versiones en entornos colaborativos
            y despliegue en plataformas modernas — incluyendo contenedores Docker.
          </p>
        </div>

        <div className="skills-grid" ref={gridRef}>
          {/* CSS Hero Card */}
          <div className="skill-card css-hero fade-up">
            <div className="css-hero-left">
              <div className="css-hero-tag">ESPECIALIDAD</div>
              <div className="css-hero-name">CSS <em>&amp; UI</em></div>
              <p className="css-hero-desc">
                Animaciones, diseño responsivo, glassmorphism y sistemas de diseño completos.
              </p>
            </div>
            <div className="css-hero-right" aria-hidden="true">
              <div className="css-paint-demo">
                <div className="ps ps1" />
                <div className="ps ps2" />
                <div className="ps ps3" />
                <div className="ps ps4" />
                <div className="ps ps5" />
              </div>
            </div>
          </div>

          {/* Skill cards */}
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card fade-up"
              style={{ '--w': `${skill.level}%`, transitionDelay: `${(i % 8) * 0.05}s` } as React.CSSProperties}
            >
              <div className="skill-icon" role="img" aria-label={skill.name}>{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-type">{skill.type}</div>
              <div className="skill-bar">
                <div className="skill-bar-fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
