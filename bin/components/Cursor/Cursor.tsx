import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot   = dotRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) return;

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform   = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trail.style.transform = `translate(${trailX - 18}px, ${trailY - 18}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => { dot.classList.add('hovering'); trail.classList.add('hovering'); };
    const onLeave = () => { dot.classList.remove('hovering'); trail.classList.remove('hovering'); };

    const attachListeners = () => {
      document.querySelectorAll<HTMLElement>('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);
    attachListeners();

    // Re-attach on DOM changes
    const mo = new MutationObserver(attachListeners);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}   />
      <div className="cursor-trail" ref={trailRef} />
    </>
  );
}
