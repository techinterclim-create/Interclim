import { ArrowDownRight, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow reveal">Clínica médica em Mamanguape</span>
          <h1 id="hero-title" className="display reveal reveal-delay-1">
            Cuidado que conhece <em>você.</em>
          </h1>
          <p className="hero-lede reveal reveal-delay-2">
            Diagnóstico, especialidades médicas e afins com atendimento acessível,
            personalizado e uma história construída ao lado de Mamanguape.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button-primary" href="#sobre">
              Conheça a Interclim <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button-secondary" href="#contato">
              Entre em contato
            </a>
          </div>
          <div className="hero-note reveal reveal-delay-4">
            <span aria-hidden="true" /> Há mais de 20 anos cuidando com presença.
          </div>
        </div>
        <div className="hero-visual hero-visual--logo reveal reveal-delay-2">
          <img
            className="hero-logo-image"
            src="/images/logo-interclim-hero.png"
            alt="Interclim — sempre cuidando de você"
          />
          <ArrowDownRight className="hero-visual-arrow" size={25} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}