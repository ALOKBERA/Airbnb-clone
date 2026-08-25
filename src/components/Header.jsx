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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            className={styles.logoSvg}
            aria-hidden="true"
          >
            <path
              fill="#FF385C"
              d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-94 01-200-81-267-159 105-128 165-243 165-358 0-80-61-148-140-148-75 0-140 68-140 148 0 115 60 230 165 358-67 78-173 160-267 159-44-19-76-58-83-105-7-51 11-101 56-149l24-27C273.7 371.7 241.7 289.7 241.7 210c0-120 97-210 220-210 45 0 87 13 122 36 35-23 77-36 122-36 123 0 220 90 220 210 0 79-32 161-102 224l24 27c44 48 63 98 56 149z"
            />
          </svg>
          <span className={styles.logoText}>airbnb</span>
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
              <span className={styles.searchField}>Anywhere</span>
              <span className={styles.searchSep} aria-hidden="true" />
              <span className={styles.searchField}>Any week</span>
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
          <button type="button" className={styles.iconBtn} aria-label="Choose a language and currency">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path
                d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.28v-.03A7.77 7.77 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 6.5h.12c.71-1.16 1.73-3.6 1.88-6.5zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 8.75zm-9.67 0H1.83a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.18-5.08zm1.91-6.58-.03.05a12.95 12.95 0 0 0-1.86 5.03h3.08A12.95 12.95 0 0 0 9.97 2.17l-.03-.05a6.26 6.26 0 0 0-3.49 0zm-4.11 5.08h2.76a12.59 12.59 0 0 1 1.18-5.08A6.26 6.26 0 0 0 2.34 7.25zm8.93-5.08c.65 1.3 1.09 3.12 1.18 5.08h2.76a6.26 6.26 0 0 0-3.94-5.08z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button type="button" className={styles.userMenuBtn} aria-label="Main navigation menu">
            <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true" className={styles.hamburger}>
              <rect x="2" y="9" width="28" height="2" rx="1" fill="currentColor"/>
              <rect x="2" y="15" width="28" height="2" rx="1" fill="currentColor"/>
              <rect x="2" y="21" width="28" height="2" rx="1" fill="currentColor"/>
            </svg>
            <span className={styles.userAvatar} aria-hidden="true">
              <svg viewBox="0 0 32 32" width="30" height="30">
                <path
                  d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A13.17 13.17 0 0 1 16 28.7z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}

