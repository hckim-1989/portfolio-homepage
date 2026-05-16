import { portfolioData } from "../../data/portfolioData";
import styles from "./Hero.module.css";

function Hero() {
  const { hero } = portfolioData;
  const { eyebrow, title, subtitle, meta } = hero;
  const italicLine = title.italicLine;

  const lines = [
    { key: 1, text: title.line1 },
    { key: 2, text: title.line2 },
    { key: 3, text: title.line3 },
  ];

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>
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
          </h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {meta && <p className={styles.meta}>{meta}</p>}
        </div>

        <aside className={styles.visual} aria-hidden="true">
          <div className={styles.visualBlock} />
        </aside>
      </div>
    </section>
  );
}

export default Hero;
