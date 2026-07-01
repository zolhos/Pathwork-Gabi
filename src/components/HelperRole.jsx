import { content } from '../data/content';

export default function HelperRole() {
  const { helperInfo } = content;

  return (
    <section className="helper-section" id="helper">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">O FACILITADOR</span>
          <h2>O Papel do Helper no Pathwork</h2>
          <p className="section-subtitle">{helperInfo.intro}</p>
        </div>

        <div className="pillars-grid">
          {helperInfo.pillars.map((pillar, idx) => (
            <div className="pillar-card" key={idx}>
              <div className="pillar-card-icon">
                <span>0{idx + 1}</span>
              </div>
              <div className="pillar-card-content">
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
