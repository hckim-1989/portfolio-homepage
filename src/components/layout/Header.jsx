import { portfolioData } from "../../data/portfolioData";
import styles from "./Header.module.css";

function Header() {
  const { nav } = portfolioData;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} aria-label="HC. — Home">
          HC.
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.id} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
