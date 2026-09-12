import airbnbLogo from "../../image/Airbnb-Logo.png";
import globeLogo from "../../image/globe_logo.jpg";
import searchbarHouse from "../../image/searchbar-house.png";
import styles from "./Header.module.css";

/**
 * Header — Sticky Airbnb-style desktop navigation.
 * Logo | Search bar | User nav
 */
export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        {/* ── Logo ── */}
        <a
          href="/"
          className={styles.logo}
          aria-label="Airbnb home"
          onClick={(e) => e.preventDefault()}
        >
          <img
            src={airbnbLogo}
            alt="Airbnb"
            className={styles.logoImg}
          />
        </a>

        {/* ── Search bar ── */}
        <div className={styles.searchWrap}>
          <button
            type="button"
            className={styles.searchBar}
            aria-label="Start search"
            onClick={(e) => e.preventDefault()}
          >
            <span className={styles.searchPill}>
              <img
                src={searchbarHouse}
                alt=""
                className={styles.searchHouseImg}
                aria-hidden="true"
              />
              <span className={styles.searchField}>Anywhere</span>
              <span className={styles.searchSep} aria-hidden="true" />
              <span className={styles.searchField}>Anytime</span>
              <span className={styles.searchSep} aria-hidden="true" />
              <span className={`${styles.searchField} ${styles.searchMuted}`}>
                Add guests
              </span>
              <span className={styles.searchIconWrap} aria-hidden="true">
                <svg viewBox="0 0 32 32" width="13" height="13">
                  <g fill="none">
                    <circle cx="13" cy="13" r="11" stroke="currentColor" strokeWidth="2.5"/>
                    <path d="M21 21l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </g>
                </svg>
              </span>
            </span>
          </button>
        </div>

        {/* ── User nav ── */}
        <nav className={styles.userNav} aria-label="User navigation">
          <a
            href="/"
            className={styles.hostLink}
            onClick={(e) => e.preventDefault()}
          >
            Become a host
          </a>
          <button type="button" className={styles.roundIconBtn} aria-label="Choose a language and currency">
            <img
              src={globeLogo}
              alt="Language and currency"
              className={styles.worldLogoImg}
            />
          </button>
          <button type="button" className={styles.roundIconBtn} aria-label="Main navigation menu">
            <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true" className={styles.hamburger}>
              <rect x="4" y="7" width="24" height="2.5" rx="1.25" fill="currentColor"/>
              <rect x="4" y="15" width="24" height="2.5" rx="1.25" fill="currentColor"/>
              <rect x="4" y="23" width="24" height="2.5" rx="1.25" fill="currentColor"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

