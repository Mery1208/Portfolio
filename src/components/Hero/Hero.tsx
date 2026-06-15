import avatarImg from '../../assets/avatar.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-divider" aria-hidden="true" />

      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-eyebrow">Desarrolladora Web Full-Stack</div>

        <h1 className="hero-name">
          Hola, soy<br />
          <span>María Ceballos.</span>
        </h1>

        <p className="hero-title">Junior Dev · DAW Graduada 2026</p>

        <div className="hero-badges">
          <span className="hero-badge">23 años</span>
          <span className="hero-badge">📍 Almendralejo, Badajoz</span>
          <span className="hero-badge">IES Albarregas</span>
        </div>

        <p className="hero-desc">
          Recién graduada en el Grado Superior de Desarrollo de Aplicaciones Web.
          Construyo interfaces que no pasan desapercibidas y backends que funcionan —
          React, TypeScript, Laravel — del píxel a la base de datos.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            ↓ Ver Proyectos
          </a>
          <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            ↗ Contactar
          </a>
          <a href="/cv.pdf" download="CV-Maria-CM.pdf" className="btn-cv">
            ⬇ Descargar CV
          </a>
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div className="hero-right">
        <div className="hero-photo-wrap">
          <div className="photo-chip chip-age">23 YRS</div>
          <div className="photo-chip chip-loc">📍 ES-BA</div>
          <div className="photo-chip chip-role">DAW 2026</div>

          <div className="photo-frame">
            {/* corner brackets */}
            <div className="bracket tl" aria-hidden="true" />
            <div className="bracket tr" aria-hidden="true" />
            <div className="bracket bl" aria-hidden="true" />
            <div className="bracket br" aria-hidden="true" />

            <div className="photo-dot" aria-hidden="true" />

            <div className="photo-inner">
              <img src={avatarImg} alt="María Ceballos.Mesías. — Desarrolladora Full-Stack" className="photo-img" />
              {/* scanline overlay */}
              <div className="scanlines" aria-hidden="true" />
              {/* vignette */}
              <div className="vignette" aria-hidden="true" />
            </div>

            <div className="photo-label">
              <span className="photo-label-name">MARÍA CEBALLOS MESIAS</span>
              <span className="photo-label-meta">FULL-STACK DEV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" aria-hidden="true">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
