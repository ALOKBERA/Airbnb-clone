import styles from "./HostSection.module.css";

/**
 * HostSection — host identity, stats, contact prompt.
 */
export default function HostSection({ property }) {
  const { host } = property;

  return (
    <section className={styles.section} aria-labelledby="host-heading">
      {/* Host identity row */}
      <div className={styles.hostRow}>
        <div className={styles.hostInfo}>
          <h2 id="host-heading" className={styles.hostName}>
            Hosted by {host.name}
          </h2>
          <p className={styles.hostMeta}>
            <span>{host.totalReviews} Reviews</span>
            <span className={styles.dot} aria-hidden="true">·</span>
            <span>{host.isSuperhost ? "Superhost" : "Host"}</span>
            <span className={styles.dot} aria-hidden="true">·</span>
            <span>Since {host.since}</span>
          </p>
        </div>
        <div className={styles.avatarWrap} aria-hidden="true">
          <div className={styles.avatar}>
            {host.name.charAt(0)}
          </div>
        </div>
      </div>

      {/* Host detail rows */}
      <ul className={styles.details} aria-label="Host details">
        <li className={styles.detailRow}>
          <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="16" cy="16" r="14"/>
            <path d="M16 8v8l5 5"/>
          </svg>
          <span>Response rate: {host.responseRate}</span>
        </li>
        <li className={styles.detailRow}>
          <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/>
            <path d="M2 10l14 9 14-9"/>
          </svg>
          <span>Responds {host.responseTime}</span>
        </li>
        <li className={styles.detailRow}>
          <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="2" y="4" width="28" height="24" rx="2"/>
            <path d="M2 12h28M10 4v8"/>
          </svg>
          <span>Joined in {host.since}</span>
        </li>
      </ul>

      {/* About */}
      <p className={styles.about}>{host.about}</p>

      <a
        href="/"
        className={styles.contactBtn}
        onClick={(e) => e.preventDefault()}
      >
        Contact host
      </a>

      {/* Safety guarantee note */}
      <div className={styles.guarantee} role="note">
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M16 2L4 7v9c0 8.25 5.4 15.28 12 17 6.6-1.72 12-8.75 12-17V7L16 2z"/>
          <path d="M11 16l4 4 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className={styles.guaranteeTitle}>
          To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
        </p>
      </div>
    </section>
  );
}
