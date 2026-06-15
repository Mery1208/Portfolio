import './About.css';

const VALUES = [
  { icon: '⚡', title: 'Rápida aprendiendo',   desc: 'Me adapto a nuevas tecnologías con facilidad' },
  { icon: '🎯', title: 'Orientada a resultados', desc: 'Entrego código limpio que funciona'            },
  { icon: '🤝', title: 'Trabajo en equipo',      desc: 'Git flow, PR reviews y metodologías ágiles'   },
];

const STATS = [
  { num: '2+',  label: 'años de formación'       },
  { num: '10+', label: 'proyectos realizados'     },
  { num: '15+', label: 'tecnologías dominadas'    },
  { num: '∞',   label: 'ganas de aprender'        },
];

const LANGS = [
  { name: 'Español', level: 'Nativo', pct: 100 },
  { name: 'Inglés',  level: 'B1',    pct: 65   },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-label">Sobre mí</div>
        <h2 className="section-title">
          Más allá<br /><em>del código</em>
        </h2>

        <div className="about-grid">
          {/* LEFT — text */}
          <div className="about-text fade-up">
            <p>Soy María, desarrolladora web de Almendralejo (Badajoz) recién graduada en DAW. Me apasiona crear experiencias digitales que <strong>combinan funcionalidad con estética</strong> — creo que un buen proyecto tiene que funcionar bien Y verse bien.</p>
            <p>Empecé con SMR para entender los cimientos de la informática y di el salto a DAW buscando el lado más creativo y técnico de la web. Durante estos dos años he aprendido que <strong>me encanta el frontend tanto como el backend</strong> — soy genuinamente full-stack.</p>
            <p>Actualmente busco mi <strong>primera oportunidad profesional</strong> donde seguir creciendo, aportar desde el primer día y trabajar en proyectos que importen.</p>

            <div className="about-values">
              {VALUES.map((v) => (
                <div key={v.title} className="about-value">
                  <span className="value-icon" role="img" aria-label={v.title}>{v.icon}</span>
                  <div>
                    <div className="value-title">{v.title}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — stats + langs */}
          <div className="about-sidebar fade-up" style={{ transitionDelay: '.15s' }}>
            <div className="about-stats">
              {STATS.map((s) => (
                <div key={s.label} className="about-stat">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="lang-section">
              <div className="section-label" style={{ marginBottom: '16px' }}>Idiomas</div>
              {LANGS.map((l) => (
                <div key={l.name} className="lang-item">
                  <span className="lang-name">{l.name}</span>
                  <div className="lang-bar">
                    <div className="lang-fill" style={{ width: `${l.pct}%` }} />
                  </div>
                  <span className="lang-level">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
