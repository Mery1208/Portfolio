import './styles/globals.css';
import { useEffect } from 'react';
import Cursor    from './components/Cursor/Cursor';
import Navbar    from './components/Navbar/Navbar';
import Hero      from './components/Hero/Hero';
import Skills    from './components/Skills/Skills';
import Projects  from './components/Projects/Projects';
import Services  from './components/Services/Services';
import Education from './components/Education/Education';
import About     from './components/About/About';
import Contact   from './components/Contact/Contact';
import { useFadeUpGroup } from './hooks/useFadeUp';

function App() {
  const appRef = useFadeUpGroup(0.12);

  // Animate section-level fade-ups on scroll
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={appRef}>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
