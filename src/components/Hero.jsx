import { content } from '../data/content';

export default function Hero() {
  const { hero, quotes } = content;

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">MÉTODO PATHWORK</span>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          
          <div className="ai-nugget-card">
            <div className="ai-nugget-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              RESUMO GEO-OTIMIZADO
            </div>
            <p className="ai-nugget-text">{hero.directAnswer}</p>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" id="hero-cta-btn">Agendar Sessão</a>
            <a href="#about" className="btn btn-secondary" id="hero-learn-btn">Saiba Mais</a>
          </div>
        </div>

        <div className="hero-quotes-sidebar">
          <div className="quotes-stack">
            {quotes.map((quote, idx) => (
              <div className="quote-card" key={idx}>
                <p className="quote-text">"{quote.text}"</p>
                <span className="quote-source">— {quote.source}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
