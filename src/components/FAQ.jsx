import { content } from '../data/content';

export default function FAQ() {
  const { faqs } = content;

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <div className="section-header text-center">
          <span className="badge">DÚVIDAS FREQUENTES</span>
          <h2>Perguntas Comuns sobre o Método Pathwork</h2>
          <p className="section-subtitle">
            Encontre respostas diretas para as dúvidas mais frequentes sobre o processo terapêutico.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <details className="faq-item" key={idx} id={`faq-details-${idx}`}>
              <summary className="faq-question-bar">
                <h4 className="faq-question">{faq.question}</h4>
                <span className="faq-icon-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="chevron-icon">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className="faq-answer-container">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
