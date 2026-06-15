import { useState, useEffect, useCallback } from 'react';

const SECTIONS = ['hero', 'skills', 'projects', 'services', 'education', 'about', 'contact'];

export function useActiveSection() {
  const [active, setActive] = useState('hero');

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 100;
    let current = 'hero';

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }

    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return active;
}
