import { useState } from 'react';
import { content } from '../data/content';

export default function FAQ() {
  const { faqs } = content;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <div className="section-header text-center">
          <span className="badge">DÚVIDAS FREQUENTES</span>
          <h2>Perguntas Comuns sobre o Pathwork</h2>
          <p className="section-subtitle">
            Encontre respostas diretas para as dúvidas mais frequentes sobre o processo terapêutico.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                className={`faq-item ${isOpen ? 'active' : ''}`} 
                key={idx}
                onClick={() => toggleFAQ(idx)}
              >
                <div 
                  className="faq-question-bar"
                  role="button"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <h4 className="faq-question">{faq.question}</h4>
                  <span className="faq-icon-toggle">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer-container">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
