import { useEffect } from 'react';
import { Header, Hero, Stats, Projects, Experience, Skills, Contact } from './components/Sections.jsx';

export default function App() {
  // Gentle slide-in on scroll; content stays visible if JS or motion is off.
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.stk-cat,.tl-card,.edu,.cert,.contact').forEach((el) => {
      el.classList.add('reveal');
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('pre'); io.observe(el); }
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
