import { portfolioData } from "../../data/portfolioData";
import styles from "./Footer.module.css";

function Footer() {
  const { contact } = portfolioData;
  const { eyebrow, title, body, email, socials } = contact;
  const italicLine = title.italicLine;

  const lines = [
    { key: 1, text: title.line1 },
    { key: 2, text: title.line2 },
  ];

  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cta}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>
            {lines.map((line) => (
              <span
                key={line.key}
                className={
                  line.key === italicLine
                    ? styles.titleLineItalic
                    : styles.titleLine
                }
              >
                {line.text}
              </span>
            ))}
          </h2>
          {body && <p className={styles.body}>{body}</p>}

          {email && (
            <a className={styles.emailButton} href={`mailto:${email}`}>
              <span className={styles.emailLabel}>이메일 보내기</span>
              <span className={styles.emailAddress}>{email}</span>
            </a>
          )}
        </div>

        <div className={styles.meta}>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className={styles.socialLink}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http") ? "noreferrer noopener" : undefined
                }
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className={styles.legal}>
            <span>© {year} HC. — Marketing PM Portfolio</span>
            <span className={styles.legalDivider} aria-hidden="true">·</span>
            <span>Built with React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
