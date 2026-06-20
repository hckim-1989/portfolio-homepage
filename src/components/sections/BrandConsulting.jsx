import { consulting } from '../../data/portfolioData';
import './BrandConsulting.css';

/**
 * BrandConsulting — Option C: 자기 정체성 + 의뢰 CTA
 * 좌측: 헤드라인 + 본문 + CTA / 우측: 서비스 카드 3개
 */
export default function BrandConsulting() {
  const lines = [
    { key: 1, text: consulting.title.line1 },
    { key: 2, text: consulting.title.line2 },
  ];

  return (
    <section id="consulting" className="section section--surface consulting">
      <div className="section-inner consulting-inner">
        <div className="consulting-lead">
          <div className="consulting-eyebrow-row">
            <p className="section-eyebrow">{consulting.eyebrow}</p>
            <span className="consulting-badge">
              <span className="consulting-badge-dot" aria-hidden="true" />
              {consulting.badge}
            </span>
          </div>

          <h2 className="section-title consulting-title">
            {lines.map(line => (
              <span
                key={line.key}
                className={
                  line.key === consulting.title.italicLine
                    ? 'section-title-line section-title-line--italic'
                    : 'section-title-line'
                }
              >
                {line.text}
              </span>
            ))}
          </h2>

          <p className="section-lead">{consulting.body}</p>

          <a href={consulting.cta.href} className="consulting-cta">
            <span className="consulting-cta-label">{consulting.cta.label}</span>
            <span className="consulting-cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <ul className="consulting-services">
          {consulting.services.map((s, idx) => (
            <li key={s.title} className="consulting-service">
              <span className="consulting-service-num">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="consulting-service-title">{s.title}</h3>
              <p className="consulting-service-desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
