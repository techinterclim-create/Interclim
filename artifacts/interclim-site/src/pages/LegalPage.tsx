import { useEffect } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { privacy, terms, type LegalDocument } from './legal-content';
import './legal-page.css';

function renderBody(body: string) {
  return body.split('\n\n').map((block, index) => {
    const lines = block.split('\n');
    if (lines.every((line) => line.startsWith('- '))) {
      return <ul key={index}>{lines.map((line) => <li key={line}>{line.slice(2)}</li>)}</ul>;
    }
    return <p key={index}>{lines.map((line, lineIndex) => (
      <span key={lineIndex}>{line}{lineIndex < lines.length - 1 && <br />}</span>
    ))}</p>;
  });
}

export function LegalPage({ type }: { type: 'privacy' | 'terms' }) {
  const documentContent: LegalDocument = type === 'privacy' ? privacy : terms;

  useEffect(() => {
    document.title = `${documentContent.title} – InterClim`;
    document.documentElement.lang = 'pt-BR';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    if (description) description.content = documentContent.description;

    // Reuse the existing header/footer unchanged; their section anchors lead back to the homepage.
    const goToHomeSection = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (link) {
        event.preventDefault();
        window.location.assign(`/${link.getAttribute('href')}`);
      }
    };
    document.addEventListener('click', goToHomeSection);
    return () => {
      if (description && previousDescription) description.content = previousDescription;
      document.removeEventListener('click', goToHomeSection);
    };
  }, [documentContent]);

  return (
    <div className="site-shell">
      <Header />
      <main className="legal-page">
        <article className="site-container legal-page-content">
          <a className="legal-home" href="/">← Voltar ao início</a>
          <span className="eyebrow">InterClim · Informações legais</span>
          <h1 className="display">{documentContent.title}</h1>
          <p className="legal-date">Última atualização: [INSERIR DATA]</p>
          <div className="legal-introduction">{renderBody(documentContent.introduction)}</div>
          {documentContent.sections.map((section) => (
            <section key={section.title} className="legal-section">
              <h2>{section.title}</h2>
              {renderBody(section.body)}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}