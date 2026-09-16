import { ArrowUpRight, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="contact section-pad" aria-labelledby="contact-title">
      <div className="site-container contact-grid">
        <div data-scroll-reveal>
          <span className="eyebrow">Fale com a Interclim</span>
          <h2 id="contact-title" className="display section-heading">Estamos em Mamanguape para receber você.</h2>
          <p className="section-heading">
            Encontre a Interclim ou escolha o canal mais conveniente para entrar em contato.
          </p>
          <div className="contact-actions">
            <a className="button-primary" href="tel:+558332922900"><Phone size={16} aria-hidden="true" /> Ligar</a>
            <a className="button-secondary" href="https://wa.me/5583981284599" target="_blank" rel="noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp
            </a>
            <a className="button-secondary" href="https://instagram.com/interclimoficial" target="_blank" rel="noreferrer">
              <Instagram size={16} aria-hidden="true" /> Instagram
            </a>
          </div>
        </div>
        <div data-scroll-reveal>
          <div className="contact-details">
            <div className="contact-detail">
              <strong>Endereço</strong>
              <span>R. Dom Vital, 127, Mamanguape - PB, 58280-000</span>
            </div>
            <div className="contact-detail">
              <strong>Telefone</strong>
              <a href="tel:+558332922900">(83) 3292-2900</a>
            </div>
            <div className="contact-detail">
              <strong>WhatsApp</strong>
              <a href="https://wa.me/5583981284599" target="_blank" rel="noreferrer">(83) 98128-4599</a>
            </div>
            <div className="contact-detail">
              <strong>Instagram</strong>
              <a href="https://instagram.com/interclimoficial" target="_blank" rel="noreferrer">@interclimoficial</a>
            </div>
            <div className="contact-detail">
              <strong>Dados institucionais</strong>
              <span>CRM: 0002565-PB · CNPJ: 05.808.760/0001-43</span>
            </div>
          </div>
          <a
            className="map-card"
            href="https://www.google.com/maps/search/?api=1&query=R.+Dom+Vital%2C+127%2C+Mamanguape+-+PB%2C+58280-000"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir localização da Interclim no Google Maps"
          >
            <span className="map-inner">
              <MapPin className="map-pin" size={28} aria-hidden="true" />
              <strong>Localização da Interclim</strong>
              <span>R. Dom Vital, 127 · Abrir no Google Maps <ArrowUpRight size={13} aria-hidden="true" /></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}