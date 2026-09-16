import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true);

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
        <div className={`hero-visual reveal reveal-delay-2${photoAvailable ? ' hero-visual--photo' : ''}`}>
          {photoAvailable ? (
            <img
              className="hero-clinic-image"
              src="/images/clinica.jpg"
              alt="Fachada da Clínica Interclim em Mamanguape"
              onError={() => setPhotoAvailable(false)}
            />
          ) : (
            <div className="hero-visual-fallback" aria-hidden="true">
              <span className="hero-visual-line" />
              <span className="hero-visual-circle hero-visual-circle--large" />
              <span className="hero-visual-circle hero-visual-circle--small" />
            </div>
          )}
          <ArrowDownRight className="absolute bottom-5 left-5 text-white/80" size={25} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}