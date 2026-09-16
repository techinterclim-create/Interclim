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
    document.title = 'Interclim — Clínica Médica de Diagnóstico';
    const description = 'Interclim — Clínica Médica de Diagnóstico, Especialidades Médicas e Afins em Mamanguape, PB.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
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
