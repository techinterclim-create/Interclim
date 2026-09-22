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
        <div className="director-area">
          <div className="director-photo-frame" data-scroll-reveal>
            <DirectorPhoto
              src="/images/direcao.png"
              alt="Dra. Daniele Bessa e Dra. Isabela Bessa juntas"
              label="Foto das médicas"
            />
          </div>
          <div className="director-list" aria-label="Direção da Interclim">
            <div className="director" data-scroll-reveal>
              <span className="director-number">01</span>
              <div className="director-info">
                <h3>Dra. Daniele Bessa</h3>
                <span className="director-note">Direção</span>
              </div>
            </div>
            <div className="director" data-scroll-reveal>
              <span className="director-number">02</span>
              <div className="director-info">
                <h3>Dra. Isabela Bessa</h3>
                <span className="director-note">Direção</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}