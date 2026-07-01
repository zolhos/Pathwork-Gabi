import { content } from '../data/content';

export default function SymptomSection() {
  const { integrationLevels, symptoms } = content;

  return (
    <section className="symptom-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">COMO TRABALHAMOS</span>
          <h2>A Integração e Resolução de Bloqueios Emocionais</h2>
          <p className="section-subtitle">
            O Pathwork atua decifrando as dinâmicas do inconsciente e unificando as partes fragmentadas do ser.
          </p>
        </div>

        {/* Integration Levels Table */}
        <div className="table-wrapper">
          <h3 className="table-title">Níveis de Integração da Personalidade</h3>
          <table className="integration-table">
            <thead>
              <tr>
                <th>Nível</th>
                <th>Foco da Abordagem</th>
                <th>Estado de Destino</th>
              </tr>
            </thead>
            <tbody>
              {integrationLevels.map((lvl, index) => (
                <tr key={index}>
                  <td className="font-weight-bold">{lvl.level}</td>
                  <td>{lvl.focus}</td>
                  <td>{lvl.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Symptoms Grid */}
        <div className="symptoms-container">
          <h3 className="section-sub-title text-center">Dores e Sintomas Tratados pelo Pathwork</h3>
          <div className="symptoms-grid">
            {symptoms.map((symptom, index) => (
              <div className="symptom-card" key={index}>
                <div className="symptom-card-header">
                  <div className="icon-dot"></div>
                  <h4>{symptom.title}</h4>
                </div>
                <div className="symptom-card-body">
                  <p><strong>Causa Inconsciente:</strong> {symptom.cause}</p>
                  <p className="solution-text"><strong>Caminho de Resolução:</strong> {symptom.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
