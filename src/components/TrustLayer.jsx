import { content } from '../data/content';

export default function TrustLayer() {
  const { testimonials } = content;

  return (
    <section className="trust-section" id="trust" data-intent="trust-signals">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">DADOS DE CONFIANÇA</span>
          <h2>Evidências Clínicas e Depoimentos</h2>
          <p className="section-subtitle">
            A eficácia do Método Pathwork medida através de dados e relatos de especialistas.
          </p>
        </div>

        <div className="trust-grid">
          {testimonials.map((t, idx) => (
            <div className="trust-card" key={idx}>
              <div className="trust-stat-badge">{t.stat}</div>
              <blockquote className="trust-quote">
                <p>"{t.quote}"</p>
              </blockquote>
              <div className="trust-author-info">
                <cite className="trust-author">{t.author}</cite>
                <span className="trust-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
