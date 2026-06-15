import { services } from '../../data/services';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-label">Qué ofrezco</div>
        <h2 className="section-title">
          Servicios<br /><em>disponibles</em>
        </h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.id} className="service-card fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="service-num" aria-hidden="true">{s.num}</div>
              <div className="service-icon" role="img" aria-label={s.title}>{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
