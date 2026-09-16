import { useState } from 'react';

export function Logo() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <a className="logo" href="#inicio" aria-label="Interclim — início">
      {imageAvailable ? (
        <img
          className="logo-image"
          src="/images/logo-interclim.png"
          alt="Interclim"
          onError={() => setImageAvailable(false)}
        />
      ) : (
        <span className="logo-placeholder">LOGO INTERCLIM</span>
      )}
    </a>
  );
}