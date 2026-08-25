import styles from "./ListingHeader.module.css";

function StarIcon() {
  return (
    <svg viewBox="0 0 32 32" width="12" height="12" aria-hidden="true">
      <path
        d="M15.094 1.579l-4.124 8.485-9.86 1.32a1 1 0 0 0-.542 1.736l7.293 6.602-1.965 9.842a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.674a1 1 0 0 0 1.482-1.06l-1.965-9.843 7.293-6.602a1 1 0 0 0-.541-1.735l-9.86-1.32-4.126-8.485a1 1 0 0 0-1.814 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
      <path
        d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v18M9 10l7-7 7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
      <path
        d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"
        fill={filled ? "#FF385C" : "none"}
        stroke={filled ? "#FF385C" : "currentColor"}
        strokeWidth="2"
      />
    </svg>
  );
}

export default function ListingHeader({ property, isSaved, onToggleSave }) {
  const { title, rating, location, badge } = property;

  return (
    <section className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.metaRow}>
        <div className={styles.metaLeft}>
          {/* Rating */}
          <span
            className={styles.starRating}
            aria-label={`Rated ${rating.average} out of 5 stars`}
          >
            <span className={styles.starIcon}><StarIcon /></span>
            <span className={styles.ratingNum}>{rating.average}</span>
          </span>
          <span className={styles.sep} aria-hidden="true">·</span>

          {/* Reviews count — scrolls to reviews */}
          <button
            type="button"
            className={styles.metaLink}
            aria-label={`${rating.count} reviews — scroll to reviews section`}
          >
            <span className={styles.reviewCount}>{rating.count} reviews</span>
          </button>
          <span className={styles.sep} aria-hidden="true">·</span>

          {/* Guest favourite badge */}
          <span className={styles.badge} aria-label={badge}>
            <svg
              viewBox="0 0 32 32"
              width="13"
              height="13"
              aria-hidden="true"
              className={styles.badgeIcon}
            >
              <path d="M24.4 3.1A13.5 13.5 0 0 0 16 0C7.2 0 0 7.2 0 16c0 4.1 1.6 7.9 4.2 10.7L3 29a1.5 1.5 0 0 0 2.1 2l2.6-1.7A15.8 15.8 0 0 0 16 32c8.8 0 16-7.2 16-16A15.8 15.8 0 0 0 24.4 3.1zM16 29.5c-2.4 0-4.7-.6-6.7-1.8l-.4-.3-4 2.6 1-3.5-.3-.4A13.5 13.5 0 0 1 2.5 16C2.5 8.5 8.5 2.5 16 2.5c3.7 0 7.2 1.4 9.8 4l.2.2A13.5 13.5 0 0 1 29.5 16c0 7.5-6 13.5-13.5 13.5zm7.4-10.4c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2l-1.1 1.4c-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.5-.7c.2-.2.2-.4.4-.6.1-.2 0-.4 0-.6-.1-.2-.9-2.2-1.2-3-.3-.7-.7-.6-.9-.6h-.8c-.3 0-.7.1-1 .4-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.2 2.8 4.3 6.8 6 .9.4 1.7.6 2.2.8.9.3 1.8.2 2.4.1.7-.1 2.2-.9 2.5-1.8.3-.8.3-1.6.2-1.7l-.6-.3z" fill="currentColor"/>
            </svg>
            {badge}
          </span>
          <span className={styles.sep} aria-hidden="true">·</span>

          {/* Location */}
          <button
            type="button"
            className={styles.metaLink}
            aria-label={`Location: ${location.city}, ${location.state}, ${location.country} — scroll to map`}
          >
            <span className={styles.locationText}>
              {location.city}, {location.state}, {location.country}
            </span>
          </button>
        </div>

        {/* Share + Save */}
        <div className={styles.metaRight}>
          <button
            type="button"
            className={styles.actionBtn}
            aria-label="Share this listing"
          >
            <ShareIcon />
            <span>Share</span>
          </button>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={onToggleSave}
            aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
            aria-pressed={isSaved}
          >
            <HeartIcon filled={isSaved} />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
