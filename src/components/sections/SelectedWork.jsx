import { portfolioData } from "../../data/portfolioData";
import styles from "./SelectedWork.module.css";

const PILLAR_LABEL = {
  lifecycle: "Lifecycle",
  customer: "Customer",
  digital: "Digital",
};

function SelectedWork() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Selected Work</p>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>마케팅 PM으로 책임진</span>
            <span className={styles.titleLineItalic}>다섯 개의 기록.</span>
          </h2>
        </header>

        <ul className={styles.grid}>
          {projects.map((project) => (
            <li
              key={project.id}
              className={`${styles.card} ${
                project.featured ? styles.cardFeatured : ""
              }`}
            >
              <div
                className={`${styles.thumb} ${
                  project.thumbnailVariant === "warm"
                    ? styles.thumbWarm
                    : styles.thumbPaper
                }`}
              >
                <span className={styles.thumbPlaceholder}>
                  {project.thumbnailPlaceholder}
                </span>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.meta}>{project.meta}</p>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.shortDescription}</p>

                <ul className={styles.pillars} aria-label="Pillars">
                  {project.pillars.map((pillar) => (
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
        </ul>
      </div>
    </section>
  );
}

export default SelectedWork;
