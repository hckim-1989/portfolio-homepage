import { portfolioData } from "../../data/portfolioData";
import styles from "./Timeline.module.css";

const PILLAR_LABEL = {
  lifecycle: "Lifecycle",
  customer: "Customer",
  digital: "Digital",
};

function Timeline() {
  const { timeline } = portfolioData;

  return (
    <section id="timeline" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Career Timeline</p>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>한 직무 안에서 쌓아온</span>
            <span className={styles.titleLineItalic}>다층의 경험.</span>
          </h2>
        </header>

        <ol className={styles.list}>
          {timeline.map((entry) => (
            <li key={entry.id} className={styles.row}>
              <div className={styles.yearCol}>
                <span className={styles.year}>{entry.year}</span>
                <span className={styles.yearRange}>{entry.yearDisplay}</span>
                {entry.isPresent && (
                  <span className={styles.presentBadge}>Present</span>
                )}
              </div>

              <div className={styles.markerCol} aria-hidden="true">
                <span
                  className={`${styles.dot} ${
                    entry.isPresent ? styles.dotPresent : ""
                  }`}
                />
                <span className={styles.line} />
              </div>

              <div className={styles.contentCol}>
                <h3 className={styles.entryTitle}>{entry.title}</h3>
                <p className={styles.entryDesc}>{entry.description}</p>
                <ul className={styles.pillars} aria-label="Pillars">
                  {entry.pillars.map((pillar) => (
                    <li
                      key={pillar}
                      className={`${styles.pillar} ${styles[`pillar-${pillar}`]}`}
                    >
                      <span className={styles.pillarDot} aria-hidden="true" />
                      {PILLAR_LABEL[pillar] ?? pillar}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
