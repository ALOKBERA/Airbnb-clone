import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  {
    heading: "Support",
    links: [
      "Help Centre",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighbourhood concern",
    ],
  },
  {
    heading: "Hosting",
    links: [
      "Become a host",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Airbnb-friendly apartments",
    ],
  },
  {
    heading: "Airbnb",
    links: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Gift cards",
      "Emergency stays",
    ],
  },
];

/**
 * Footer — bottom site footer matching Airbnb reference.
 */
export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        {/* Link columns */}
        <div className={styles.columns}>
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul className={styles.linkList}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className={styles.link}
                      onClick={(e) => e.preventDefault()}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyright}>© 2024 Airbnb, Inc.</span>
            <span className={styles.sep} aria-hidden="true">·</span>
            <a href="/" className={styles.bottomLink} onClick={(e) => e.preventDefault()}>Privacy</a>
            <span className={styles.sep} aria-hidden="true">·</span>
            <a href="/" className={styles.bottomLink} onClick={(e) => e.preventDefault()}>Terms</a>
            <span className={styles.sep} aria-hidden="true">·</span>
            <a href="/" className={styles.bottomLink} onClick={(e) => e.preventDefault()}>Sitemap</a>
            <span className={styles.sep} aria-hidden="true">·</span>
            <a href="/" className={styles.bottomLink} onClick={(e) => e.preventDefault()}>Company details</a>
          </div>
          <div className={styles.bottomRight}>
            <button className={styles.langBtn} aria-label="Choose a language and currency" onClick={(e) => e.preventDefault()}>
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.28v-.03A7.77 7.77 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 6.5h.12c.71-1.16 1.73-3.6 1.88-6.5zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 8.75zm-9.67 0H1.83a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.18-5.08zm1.91-6.58-.03.05a12.95 12.95 0 0 0-1.86 5.03h3.08A12.95 12.95 0 0 0 9.97 2.17l-.03-.05a6.26 6.26 0 0 0-3.49 0zm-4.11 5.08h2.76a12.59 12.59 0 0 1 1.18-5.08A6.26 6.26 0 0 0 2.34 7.25zm8.93-5.08c.65 1.3 1.09 3.12 1.18 5.08h2.76a6.26 6.26 0 0 0-3.94-5.08z" fill="currentColor"/>
              </svg>
              English (IN)
            </button>
            <button className={styles.currencyBtn} onClick={(e) => e.preventDefault()}>₹ INR</button>
            <div className={styles.socialLinks}>
              <a href="/" className={styles.socialLink} aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M32 16C32 7.163 24.837 0 16 0S0 7.163 0 16c0 7.99 5.851 14.615 13.5 15.806V20.625H9.438V16H13.5v-3.562c0-4.01 2.389-6.224 6.043-6.224 1.75 0 3.582.313 3.582.313v3.937h-2.017c-1.987 0-2.608 1.233-2.608 2.498V16h4.438l-.71 4.625H18.5V31.806C26.149 30.615 32 24.99 32 16z"/>
                </svg>
              </a>
              <a href="/" className={styles.socialLink} aria-label="Twitter/X" onClick={(e) => e.preventDefault()}>
                <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M28.558 2h4.892L21.392 15.01 35.5 30h-11.094L15.26 19.69 4.97 30H.075L12.46 16.095 0 2h11.376l8.237 10.892L28.558 2zm-1.717 25.2h2.713L5.36 4.778H2.457L26.841 27.2z"/>
                </svg>
              </a>
              <a href="/" className={styles.socialLink} aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M16 2.881c4.275 0 4.781.019 6.462.094 4.763.218 6.988 2.469 7.206 7.206.075 1.681.094 2.187.094 6.463s-.019 4.781-.094 6.463c-.219 4.731-2.438 6.988-7.206 7.206-1.681.075-2.181.094-6.462.094-4.275 0-4.781-.019-6.463-.094-4.775-.219-6.988-2.481-7.206-7.206C2.256 21.25 2.237 20.75 2.237 16s.019-4.781.094-6.463C2.55 4.763 4.775 2.5 9.537 2.975 11.219 2.9 11.725 2.881 16 2.881zM16 0c-4.344 0-4.887.019-6.587.094C3.012.406.406 3.006.094 9.412.019 11.113 0 11.656 0 16s.019 4.887.094 6.588C.406 28.987 3 31.594 9.413 31.906 11.113 31.981 11.656 32 16 32s4.887-.019 6.587-.094C28.981 31.594 31.6 28.994 31.906 22.588 31.981 20.887 32 20.344 32 16s-.019-4.887-.094-6.587C31.6 3.019 29.006.406 22.587.094 20.887.019 20.344 0 16 0zm0 7.781a8.219 8.219 0 1 0 0 16.438 8.219 8.219 0 0 0 0-16.438zm0 13.55a5.331 5.331 0 1 1 0-10.663 5.331 5.331 0 0 1 0 10.663zM24.519 5.525a1.919 1.919 0 1 0 0 3.837 1.919 1.919 0 0 0 0-3.837z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
