import { contact } from '../../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const lines = [
    { key: 1, text: contact.title.line1 },
    { key: 2, text: contact.title.line2 },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <header className="contact-header">
          <p className="section-eyebrow">{contact.eyebrow}</p>
          <h2 className="section-title">
            {lines.map(line => (
              <span
                key={line.key}
                className={
                  line.key === contact.title.italicLine
                    ? 'section-title-line section-title-line--italic'
                    : 'section-title-line'
                }
              >
                {line.text}
              </span>
            ))}
          </h2>
          <p className="section-lead">{contact.body}</p>
        </header>

        <ul className="contact-channels">
          {contact.channels.map(ch => (
            <li
              key={ch.id}
              className={`contact-channel ${ch.primary ? 'contact-channel--primary' : ''}`}
            >
              <a
                href={ch.href}
                className="contact-channel-link"
                {...(ch.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className="contact-channel-label">{ch.label}</span>
                <span className="contact-channel-value">
                  {ch.value}
                  <span className="contact-channel-arrow" aria-hidden="true">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
