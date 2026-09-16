import { ArrowUpRight } from 'lucide-react';

export function Leadership() {
  return (
    <section id="direcao" className="leadership section-pad" aria-labelledby="leadership-title">
      <div className="site-container leadership-grid">
        <div className="section-heading">
          <span className="eyebrow">Nossa direção</span>
          <h2 id="leadership-title" className="display">Presença que orienta cada escolha.</h2>
          <p>
            A Interclim é conduzida por uma direção próxima, dedicada à continuidade de uma história de cuidado.
          </p>
        </div>
        <div className="director-list" aria-label="Direção da Interclim">
          <div className="director">
            <span className="director-number">01</span>
            <h3>Dra. Daniele Bessa</h3>
            <span className="director-note">Direção</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
          <div className="director">
            <span className="director-number">02</span>
            <h3>Dra. Isabela Bessa</h3>
            <span className="director-note">Direção</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}