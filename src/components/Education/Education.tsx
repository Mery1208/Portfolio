import { education } from '../../data/education';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-label">Formación</div>
        <h2 className="section-title">
          Mi camino<br /><em>hasta aquí</em>
        </h2>

        <div className="timeline">
          {education.map((item, i) => (
            <div
              key={item.id}
              className="timeline-item fade-up"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-card">
                <div className="timeline-badge">{item.badge}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-place">{item.place}</div>
                <p className="timeline-desc">{item.desc}</p>
                <div className="timeline-tags">
                  {item.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
