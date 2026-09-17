import {
  Activity,
  Baby,
  Brain,
  Ear,
  Eye,
  Footprints,
  HeartPulse,
  PersonStanding,
  ScanLine,
  Sparkles,
  Stethoscope,
  Syringe,
  Waves,
  type LucideIcon,
} from 'lucide-react';

const services: { name: string; icon: LucideIcon }[] = [
  { name: 'Clínica médica', icon: Stethoscope },
  { name: 'Angiologia', icon: Activity },
  { name: 'Cardiologia', icon: HeartPulse },
  { name: 'Dermato funcional', icon: Sparkles },
  { name: 'Fisioterapia', icon: PersonStanding },
  { name: 'Fonoaudiologia', icon: Ear },
  { name: 'Ginecologia', icon: Syringe },
  { name: 'Medicina do trabalho', icon: Footprints },
  { name: 'Saúde Mental', icon: Brain },
  { name: 'Psicologia', icon: Eye },
  { name: 'Otorrinolaringologia', icon: Ear },
  { name: 'Ortopedia e traumatologia', icon: Footprints },
  { name: 'Ultrassonografia', icon: ScanLine },
  { name: 'Pilates', icon: PersonStanding },
  { name: 'Neurologia / neurologia pediátrica', icon: Brain },
  { name: 'Cirurgia cabeça e pescoço', icon: Stethoscope },
  { name: 'Urologia infantil e adulto', icon: Baby },
  { name: 'Endocrinologia', icon: Waves },
  { name: 'Nutrologia', icon: Activity },
  { name: 'Nutrição clínica, funcional, esportiva e materno infantil', icon: Baby },
  { name: 'Pediatria', icon: Baby },
  { name: 'Reumatologia', icon: Activity },
];

export function Services() {
  return (
    <section id="servicos" className="services section-pad" aria-labelledby="services-title">
      <div className="site-container">
        <div className="services-head" data-scroll-reveal>
          <div>
            <span className="eyebrow">Cuidado especializado</span>
            <h2 id="services-title" className="display">Especialidades e Serviços</h2>
          </div>
          <p>
            Diferentes áreas de cuidado, reunidas em um só lugar para tornar sua jornada mais simples e próxima.
          </p>
        </div>
        <div className="service-grid" data-scroll-reveal>
          {services.map(({ name, icon: Icon }) => (
            <article className="service-card" key={name}>
              <div className="service-icon"><Icon size={15} aria-hidden="true" /></div>
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}