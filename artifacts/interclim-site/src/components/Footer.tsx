import { ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer-grid" data-scroll-reveal>
          <div>
            <Logo />
            <p className="footer-description">Clínica Médica de Diagnóstico, Especialidades Médicas e Afins</p>
          </div>
          <div>
            <h3>Endereço</h3>
            <p>R. Dom Vital, 127,<br />Mamanguape - PB, 58280-000</p>
            <p>CNPJ: 05.808.760/0001-43</p>
            <p>CRM: 0002565-PB</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Interclim. Todos os direitos reservados.{' '}<a href="/politica-de-privacidade">Política de Privacidade</a>{' · '}<a href="/termos-de-uso">Termos de Uso</a></span>
          <a className="back-top" href="#inicio" aria-label="Voltar ao início"><ArrowUp size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}