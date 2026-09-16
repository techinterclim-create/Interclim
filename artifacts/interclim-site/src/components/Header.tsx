import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Direção', href: '#direcao' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="site-container">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a className="header-cta" href="#contato">Entre em contato</a>
          </nav>
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-lines" />
          </button>
        </div>
        <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação mobile">
          <div className="mobile-nav-inner">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="header-cta" href="#contato" onClick={closeMenu}>Entre em contato</a>
          </div>
        </nav>
      </div>
    </header>
  );
}