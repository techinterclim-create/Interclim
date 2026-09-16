import { useEffect } from 'react';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Leadership } from '@/components/Leadership';
import { Services } from '@/components/Services';

function App() {
  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    document.title = 'Interclim — Clínica Médica de Diagnóstico';
    const description = 'Interclim — Clínica Médica de Diagnóstico, Especialidades Médicas e Afins em Mamanguape, PB.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    const elements = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px' },
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 0.04, 0.16)}s`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
