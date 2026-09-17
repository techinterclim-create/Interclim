export function About() {
  return (
    <section id="sobre" className="about section-pad" aria-label="Sobre a Interclim">
      <div className="site-container about-grid">
        <div className="about-copy">
          <span className="eyebrow" data-scroll-reveal>Sobre a Interclim</span>
          <p className="about-intro" data-scroll-reveal>
            Uma clínica que cresceu sem perder de vista o que realmente importa: cuidar de pessoas.
          </p>
          <p data-scroll-reveal>
            A Interclim nasceu em 2003, a partir do empreendedorismo do pai de duas filhas apaixonadas
            pela saúde. Inicialmente, funcionava em uma casa reformada, com apenas quatro consultórios.
            Ao longo de 20 anos, cresceu exponencialmente e alcançou uma estrutura sólida, cinco vezes
            maior que a inicial.
          </p>
          <p data-scroll-reveal>
            Apesar dos recursos escassos, a empresa se estabeleceu com serviço de qualidade, boca a boca
            e o desejo de proporcionar cuidados de saúde acessíveis.
          </p>
          <p data-scroll-reveal>
            Com a expansão, aumentou o número de funcionários e implementou atendimento informatizado e
            personalizado. Melhorou a interação entre profissionais e clientes, investindo na estrutura,
            conforto e atividades para o bem-estar.
          </p>
          <p data-scroll-reveal>
            Sobreviveu à pandemia de 2020, oferecendo saúde e socorro quando outros serviços estavam
            sobrecarregados.
          </p>
          <p data-scroll-reveal>
            Hoje, após 20 anos de dedicação, a Interclim continua encantando e sendo reconhecida pelo seu cuidado.
          </p>
        </div>
        <aside aria-label="Destaques institucionais" data-scroll-reveal>
          <p className="about-callout">
            “O desejo de proporcionar cuidados de saúde acessíveis” acompanha a Interclim desde o início.
          </p>
          <div className="fact-list">
            <div className="fact"><strong>Desde 2003</strong><span>Uma história construída com dedicação.</span></div>
            <div className="fact"><strong>Mais de 20 anos</strong><span>De história em cuidados de saúde e bem-estar.</span></div>
            <div className="fact"><strong>Informatizado</strong><span>Atendimento informatizado e personalizado.</span></div>
            <div className="fact"><strong>Qualidade e cuidado</strong><span>Um compromisso que atravessa toda a jornada.</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}