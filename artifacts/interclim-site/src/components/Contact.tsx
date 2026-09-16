import { ArrowUpRight, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="contact section-pad" aria-labelledby="contact-title">
      <div className="site-container contact-inner">
        <div className="contact-heading" data-scroll-reveal>
          <span className="eyebrow">Fale com a Interclim</span>
          <h2 id="contact-title" className="display">Entre em contato</h2>
          <p>Estamos à disposição para informações, agendamentos e atendimento.</p>
        </div>

        <div className="contact-card-grid" aria-label="Canais de contato">
          <div className="contact-card" data-scroll-reveal>
            <Phone size={21} aria-hidden="true" />
            <strong>Telefone</strong>
            <span>(83) 3292-2900</span>
            <a href="tel:+558332922900">Ligar agora <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
          <div className="contact-card" data-scroll-reveal>
            <MessageCircle size={21} aria-hidden="true" />
            <strong>WhatsApp</strong>
            <span>(83) 98128-4599</span>
            <a href="https://wa.me/5583981284599" target="_blank" rel="noreferrer">
              Falar pelo WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-card" data-scroll-reveal>
            <Instagram size={21} aria-hidden="true" />
            <strong>Instagram</strong>
            <span>@interclimoficial</span>
            <a href="https://instagram.com/interclimoficial" target="_blank" rel="noreferrer">
              Acessar Instagram <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-card" data-scroll-reveal>
            <MapPin size={21} aria-hidden="true" />
            <strong>Onde estamos</strong>
            <span>R. Dom Vital, 127, Mamanguape - PB, 58280-000</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.+Dom+Vital%2C+127%2C+Mamanguape+-+PB%2C+58280-000"
              target="_blank"
              rel="noreferrer"
            >
              Ver no mapa <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="contact-meta" data-scroll-reveal>
          <span>CRM: 0002565-PB</span>
          <span>CNPJ: 05.808.760/0001-43</span>
        </div>
      </div>
    </section>
  );
}