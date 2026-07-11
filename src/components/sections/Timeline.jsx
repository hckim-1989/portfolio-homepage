import { about, timeline, background } from '../../data/portfolioData';
import './Timeline.css';

const PILLAR_LABEL = {
  crm: 'CRM',
  engagement: 'Engagement',
  dx: 'DX',
  brand: 'Brand',
  product: 'Product',
};

/**
 * Timeline + About — 한 섹션에 묶음
 * 상단: About 카피  /  하단: 5단계 타임라인
 */
export default function Timeline() {
  const aboutLines = [
    { key: 1, text: about.title.line1 },
    { key: 2, text: about.title.line2 },
  ];

  return (
    <section id="about" className="section timeline-section">
      <div className="section-inner">
        <header className="timeline-header">
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="section-title">
            {aboutLines.map(line => (
              <span
                key={line.key}
                className={
                  line.key === about.title.italicLine
                    ? 'section-title-line section-title-line--italic'
                    : 'section-title-line'
                }
              >
                {line.text}
              </span>
            ))}
          </h2>
          {about.company && (
            <p className="timeline-company">
              <span className="timeline-company-name">{about.company}</span>
              <span className="timeline-company-sep">·</span>
              <span className="timeline-company-tenure">{about.tenure}</span>
            </p>
          )}
          <p className="section-lead">{about.body}</p>
        </header>

        <ol className="timeline-list">
          {timeline.map(entry => (
            <li key={entry.id} className="timeline-row">
              <div className="timeline-year-col">
                <span className="timeline-year">{entry.year}</span>
                <span className="timeline-year-range">{entry.yearDisplay}</span>
                {entry.isPresent && (
                  <span className="timeline-present-badge">현재</span>
                )}
              </div>

              <div className="timeline-marker-col" aria-hidden="true">
                <span
                  className={`timeline-dot ${
                    entry.isPresent ? 'timeline-dot--present' : ''
                  }`}
                />
                <span className="timeline-line" />
              </div>

              <div className="timeline-content-col">
                <h3 className="timeline-entry-title">{entry.title}</h3>
                <p className="timeline-entry-desc">{entry.description}</p>
                <ul className="timeline-pillars" aria-label="Pillars">
                  {entry.pillars.map(pillar => (
                    <li
                      key={pillar}
                      className={`timeline-pillar timeline-pillar--${pillar}`}
                    >
                      <span className="timeline-pillar-dot" aria-hidden="true" />
                      {PILLAR_LABEL[pillar] ?? pillar}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        {/* Background — Education / Languages / Tools & Skills */}
        <div className="timeline-background">
          <div className="timeline-background-eyebrow">{background.eyebrow}</div>
          <div className="timeline-background-grid">
            <div className="tbg-block">
              <div className="tbg-label">{background.education.label}</div>
              <div className="tbg-primary">{background.education.school}</div>
              <div className="tbg-secondary">{background.education.line}</div>
            </div>
            <div className="tbg-block">
              <div className="tbg-label">{background.languages.label}</div>
              <div className="tbg-primary">{background.languages.value}</div>
            </div>
            <div className="tbg-block tbg-block--wide">
              <div className="tbg-label">{background.skills.label}</div>
              {background.skills.items.map(sk => (
                <div key={sk.title} className="tbg-skill">
                  <div className="tbg-skill-title">{sk.title}</div>
                  <div className="tbg-skill-text">{sk.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
