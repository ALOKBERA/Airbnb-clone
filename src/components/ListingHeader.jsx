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
  const { title } = property;

  return (
    <section className={styles.header}>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.actions}>
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
