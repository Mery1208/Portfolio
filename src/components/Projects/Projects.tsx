import { projects } from '../../data/projects';
import type { Project } from '../../data/projects';
import './Projects.css';

/* ── Mockup visuals ────────────────────────────── */
function TasksMockup() {
  return (
    <div className="mockup mockup-tasks">
      <div className="m-header">
        <span className="m-dot r"/><span className="m-dot y"/><span className="m-dot g"/>
        <span className="m-win-title">task manager</span>
      </div>
      {[true, false, false, false].map((active, i) => (
        <div key={i} className={`m-row ${active ? 'active' : ''}`}>
          <span className="m-icon"/>
          <span className="m-text" style={{ width: `${[65,100,45,80][i]}%` }}/>
          <span className="m-badge" style={active ? {} : { background: 'rgba(255,255,255,.04)' }}>
            {active ? '✓ done' : 'pending'}
          </span>
        </div>
      ))}
    </div>
  );
}

function PortfolioMockup() {
  return (
    <div className="mockup mockup-portfolio">
      <div className="m3d-grid"/>
      <div className="m3d-arch"/>
      <span className="m3d-label">PORTFOLIO v1</span>
    </div>
  );
}

function ShopMockup() {
  return (
    <div className="mockup mockup-shop">
      <div className="shop-cards">
        {[0,1,2].map((i) => (
          <div key={i} className={`shop-card ${i===1?'featured':''}`}>
            <div className="shop-thumb" style={{ borderRadius: i===0?'50%':'4px' }}/>
            <div className="shop-line w80"/>
            <div className="shop-line w60"/>
          </div>
        ))}
      </div>
      <div className="shop-cart">
        <span className="shop-dot"/>
        <div className="shop-bar"/>
        <span className="shop-count">CART (3)</span>
      </div>
    </div>
  );
}

function ApiMockup() {
  const endpoints = [
    { method: 'GET',  code: '200', w: '100%' },
    { method: 'POST', code: '201', w: '80%'  },
    { method: 'PUT',  code: '200', w: '70%'  },
    { method: 'DEL',  code: '204', w: '55%'  },
  ];
  return (
    <div className="mockup mockup-api">
      <span className="api-label">API REST · REACT SPA</span>
      {endpoints.map(({ method, code, w }) => (
        <div key={method} className="api-row">
          <span className="api-method">{method}</span>
          <div className="api-bar"><div className="api-fill" style={{ width: w }}/></div>
          <span className="api-code">{code}</span>
        </div>
      ))}
    </div>
  );
}

const MOCKUPS: Record<Project['mockupType'], React.FC> = {
  tasks:     TasksMockup,
  portfolio: PortfolioMockup,
  shop:      ShopMockup,
  api:       ApiMockup,
};

/* ── Card ──────────────────────────────────────── */
function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  const MockupComp = MOCKUPS[project.mockupType];
  return (
    <article className={`project-card fade-up ${wide ? 'wide' : ''}`}>
      <div className="project-visual">
        <MockupComp />
        <div className="project-overlay"/>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-num">{project.num}</span>
          <span className="project-category">{project.category}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-primary">
            ↗ GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-ghost">
              🌐 Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Section ───────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-label">Proyectos</div>
        <h2 className="section-title">
          Trabajo que<br /><em>habla por sí solo</em>
        </h2>

        <div className="projects-grid">
          <ProjectCard project={projects[0]} wide />
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
          <ProjectCard project={projects[3]} wide />
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/mery1208"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Ver todos en GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
