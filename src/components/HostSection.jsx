import styles from "./HostSection.module.css";
import MirashyaLogo from "./MirashyaLogo.jsx";
import co1Image from "../../image/co1.jpg";
import co2Image from "../../image/co2.jpg";
import co3Image from "../../image/co3.jpg";
import co4Image from "../../image/co4.jpeg";
import co5Image from "../../image/co5.jpeg";
import co6Image from "../../image/co6.jpeg";

/**
 * HostSection — "Meet your host" section matching Airbnb original layout.
 * Shows host card with stats, co-hosts grid, host details, message button,
 * and safety guarantee note.
 */

const CO_HOSTS = [
  { name: "Sharath", initials: "S", image: co1Image },
  { name: "Aman Dev Pahwa", initials: "A", image: co2Image },
  { name: "Maria Karen Priyanka", initials: "M", image: co3Image },
  { name: "Simran", initials: "Si", image: co4Image },
  { name: "Pallavi", initials: "P", image: co5Image },
  { name: "Sanyukta", initials: "Sa", image: co6Image },
  { name: "Shruti", initials: "Sh", color: "#F5A0B8" },
  { name: "Amisha", initials: "Am", color: "#A0C4F5" },
];

export default function HostSection({ property }) {
  const { host } = property;

  return (
    <section className={styles.section} aria-labelledby="meet-host-heading">
      <h2 id="meet-host-heading" className={styles.sectionTitle}>Meet your host</h2>

      <div className={styles.layout}>
        {/* ── Left Column: Host Card + Personal Info ── */}
        <div className={styles.leftCol}>
          <div className={styles.hostCard}>
            {/* Left: Avatar + Name + Host */}
            <div className={styles.cardLeft}>
              <div className={styles.avatarWrap}>
                <div className={styles.avatar} aria-hidden="true">
                  <MirashyaLogo className={styles.avatarSvg} />
                </div>
                <div className={styles.verifiedBadge} aria-label="Verified host">
                  <div className={styles.badgeInner}>
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className={styles.hostName}>Mirashya<br />Homes</h3>
              <p className={styles.hostRole}>Host</p>
            </div>

            {/* Vertical Divider */}
            <div className={styles.cardDivider} aria-hidden="true" />

            {/* Right: Stats */}
            <div className={styles.hostStats}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>1,463</span>
                <span className={styles.statLabel}>Reviews</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.statItem}>
                <span className={styles.statNum}>
                  4.68<span className={styles.statStar}>★</span>
                </span>
                <span className={styles.statLabel}>Rating</span>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.statItem}>
                <span className={styles.statNum}>2</span>
                <span className={styles.statLabel}>Years hosting</span>
              </div>
            </div>
          </div>

          {/* Host personal info directly below host card */}
          <div className={styles.personalInfo}>
            <div className={styles.personalItem}>
              <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="16" cy="12" r="6" />
                <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" />
              </svg>
              <span>Born in the 80s</span>
            </div>
            <div className={styles.personalItem}>
              <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 28l6-6m0 0l8-16 8 8-16 8zm6-6l-2-2" />
              </svg>
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* ── Right: Co-hosts + Host Details ── */}
        <div className={styles.rightCol}>
          {/* Co-Hosts */}
          <div className={styles.coHostsBlock}>
            <h3 className={styles.blockTitle}>Co-Hosts</h3>
            <div className={styles.coHostsGrid}>
              {CO_HOSTS.map((ch) => (
                <div key={ch.name} className={styles.coHost}>
                  <div
                    className={styles.coHostAvatar}
                    style={ch.image ? undefined : { background: ch.color }}
                    aria-hidden="true"
                  >
                    {ch.image ? <img src={ch.image} alt="" /> : ch.initials}
                  </div>
                  <span className={styles.coHostName}>{ch.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Host Details */}
          <div className={styles.hostDetailsBlock}>
            <h3 className={styles.blockTitle}>Host details</h3>
            <p className={styles.detailLine}>
              Response rate: {host.responseRate}
            </p>
            <p className={styles.detailLine}>
              Responds {host.responseTime}
            </p>
          </div>

          {/* Message host button */}
          <button
            type="button"
            className={styles.messageBtn}
            onClick={() => { }}
          >
            Message host
          </button>

          {/* Safety note */}
          <div className={styles.safetyNote} role="note">
            <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={styles.shieldIcon}>
              <path d="M16 2L4 7v9c0 8.25 5.4 15.28 12 17 6.6-1.72 12-8.75 12-17V7L16 2z" />
            </svg>
            <p className={styles.safetyText}>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
