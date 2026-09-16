import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

type DirectorPhotoProps = {
  src: string;
  alt: string;
  label: string;
};

function DirectorPhoto({ src, alt, label }: DirectorPhotoProps) {
  const [photoAvailable, setPhotoAvailable] = useState(true);

  return photoAvailable ? (
    <img
      className="director-photo"
      src={src}
      alt={alt}
      onError={() => setPhotoAvailable(false)}
    />
  ) : (
    <div className="director-photo director-photo--placeholder" role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}

export function Leadership() {
  return (
    <section id="direcao" className="leadership section-pad" aria-labelledby="leadership-title">
      <div className="site-container leadership-grid">
        <div className="section-heading" data-scroll-reveal>
          <span className="eyebrow">Nossa direção</span>
          <h2 id="leadership-title" className="display">Presença que orienta cada escolha.</h2>
          <p>
            A Interclim é conduzida por uma direção próxima, dedicada à continuidade de uma história de cuidado.
          </p>
        </div>
        <div className="director-list" aria-label="Direção da Interclim" data-scroll-reveal>
          <div className="director">
            <span className="director-number">01</span>
            <DirectorPhoto
              src="/images/daniele-bessa.jpg"
              alt="Dra. Daniele Bessa"
              label="Foto da Dra. Daniele"
            />
            <div className="director-info">
              <h3>Dra. Daniele Bessa</h3>
              <span className="director-note">Direção</span>
            </div>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
          <div className="director">
            <span className="director-number">02</span>
            <DirectorPhoto
              src="/images/isabela-bessa.jpg"
              alt="Dra. Isabela Bessa"
              label="Foto da Dra. Isabela"
            />
            <div className="director-info">
              <h3>Dra. Isabela Bessa</h3>
              <span className="director-note">Direção</span>
            </div>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}