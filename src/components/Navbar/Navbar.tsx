import { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#hero',      label: 'Inicio'    },
  { href: '#skills',    label: 'Skills'    },
  { href: '#projects',  label: 'Proyectos' },
  { href: '#services',  label: 'Servicios' },
  { href: '#education', label: 'Formación' },
  { href: '#about',     label: 'Sobre mí'  },
  { href: '#contact',   label: 'Contacto'  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">MCM<span className="logo-slash">//</span></div>

      <button
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        aria-label="Abrir menú"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={active === href.slice(1) ? 'active' : ''}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-status">
        <span className="status-dot" />
        <span>Disponible para trabajar</span>
      </div>
    </nav>
  );
}
