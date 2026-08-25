import styles from "./PropertyOverview.module.css";

function SelfCheckinIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M26 12H14a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 8V6a2 2 0 0 1 2-2h4M18 22v-4a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="19" r="1.5" fill="currentColor"/>
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M16 3C10.48 3 6 7.48 6 13c0 8.25 10 18 10 18s10-9.75 10-18c0-5.52-4.48-10-10-10zm0 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

function FreeCancelIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M4 16A12 12 0 1 1 16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 24v-8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function getHighlightIcon(iconKey) {
  switch (iconKey) {
    case "door":     return <SelfCheckinIcon />;
    case "location": return <LocationPinIcon />;
    case "calendar": return <FreeCancelIcon />;
    default:         return null;
  }
}

export default function PropertyOverview({ property }) {
  const { type, location, stats, rating, badge, highlights } = property;

  return (
    <section className={styles.section} aria-label="Property overview">
      {/* Type + stats */}
      <div className={styles.typeBlock}>
        <h2 className={styles.typeTitle}>
          {type} in {location.city}, {location.country}
        </h2>
        <p className={styles.statsRow}>
          <span>{stats.guests} guests</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>{stats.bedrooms} bedroom</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>{stats.beds} beds</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>{stats.bathrooms} bath</span>
        </p>
      </div>

      {/* Guest favourite badge */}
      <div className={styles.badgeRow}>
        <div
          className={styles.ratingBadge}
          aria-label={`${badge}. Rated ${rating.average} out of 5 from ${rating.count} reviews`}
        >
          <div className={styles.ratingLeft}>
            <span className={styles.ratingNum}>{rating.average}</span>
            <span className={styles.starsWrap} aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 32 32"
                  width="11"
                  height="11"
                  className={i < Math.round(rating.average) ? styles.starFull : styles.starEmpty}
                >
                  <path
                    d="M15.094 1.579l-4.124 8.485-9.86 1.32a1 1 0 0 0-.542 1.736l7.293 6.602-1.965 9.842a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.674a1 1 0 0 0 1.482-1.06l-1.965-9.843 7.293-6.602a1 1 0 0 0-.541-1.735l-9.86-1.32-4.126-8.485a1 1 0 0 0-1.814 0z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              ))}
            </span>
          </div>
          <div className={styles.ratingRight}>
            <p className={styles.badgeLabel}>{badge}</p>
            <button
              type="button"
              className={styles.reviewsLink}
              aria-label={`${rating.count} reviews — scroll to reviews`}
            >
              {rating.count} Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <ul className={styles.highlights} aria-label="Property highlights">
        {highlights.map((h, i) => (
          <li key={i} className={styles.highlight}>
            <div className={styles.highlightIcon}>
              {getHighlightIcon(h.icon)}
            </div>
            <div>
              <p className={styles.highlightTitle}>{h.title}</p>
              <p className={styles.highlightDesc}>{h.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
