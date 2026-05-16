import { portfolioData } from "../../data/portfolioData";
import styles from "./About.module.css";

function About() {
  const { about } = portfolioData;
  const { eyebrow, title, body, portrait } = about;
  const italicLine = title.italicLine;

  const lines = [
    { key: 1, text: title.line1 },
    { key: 2, text: title.line2 },
    { key: 3, text: title.line3 },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.portrait}>
          <div className={styles.portraitFrame} aria-hidden="true">
            <span className={styles.portraitPlaceholder}>
              {portrait.placeholder}
            </span>
          </div>
        </div>

        <div className={styles.content}>
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
          <p className={styles.body}>{body}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
