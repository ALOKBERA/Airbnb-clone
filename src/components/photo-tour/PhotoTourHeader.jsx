import styles from "./PhotoTour.module.css";

/**
 * PhotoTourHeader — sticky top bar for Photo Tour.
 *
 * ← [Photo tour] Share ♡
 */
export default function PhotoTourHeader({ onClose, isSaved, onToggleSave }) {
  return (
    <header className={styles.ptHeader}>
      <div className={styles.ptHeaderInner}>
        {/* Left: back */}
        <div className={styles.ptHeaderLeft}>
          <button
            type="button"
            className={styles.ptBackBtn}
            onClick={onClose}
            aria-label="Close photo tour, return to listing"
          >
            <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
              <path
                d="M20 28 8 16 20 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Center: title */}
        <h1 className={styles.ptHeaderTitle}>Photo tour</h1>

        {/* Right: Share + Save */}
        <div className={styles.ptHeaderRight}>
          <button
            type="button"
            className={styles.ptHeaderBtn}
            aria-label="Share this listing"
          >
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
            <span className={styles.ptHeaderBtnText}>Share</span>
          </button>
          <button
            type="button"
            className={styles.ptHeaderBtn}
            onClick={onToggleSave}
            aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
            aria-pressed={isSaved}
          >
            <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
              <path
                d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"
                fill={isSaved ? "#FF385C" : "none"}
                stroke={isSaved ? "#FF385C" : "currentColor"}
                strokeWidth="2"
              />
            </svg>
            <span className={styles.ptHeaderBtnText}>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

