import styles from "./BookingCard.module.css";

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

/**
 * BookingCard — Right-side booking widget visible through the Calendar section.
 */
export default function BookingCard({ property }) {
  const ratingAvg = property?.reviewSummary?.overall || 4.95;
  const ratingCount = property?.rating?.count || 19;

  const handleScrollToReviews = () => {
    const el = document.getElementById("reviews");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToCalendar = () => {
    const el = document.getElementById("calendar");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.card}>
      {/* Price */}
      <div className={styles.priceRow}>
        <span className={styles.price}>₹28,499</span>
        <span className={styles.priceUnit}>&nbsp;for 5 nights</span>
      </div>

      {/* Rating */}
      <div className={styles.ratingRow}>
        <span className={styles.starIcon} aria-hidden="true"><StarIcon /></span>
        <span className={styles.ratingVal}>{ratingAvg.toFixed(2)}</span>
        <span className={styles.sep} aria-hidden="true">·</span>
        <button
          type="button"
          className={styles.reviewLink}
          onClick={handleScrollToReviews}
          aria-label={`${ratingCount} reviews — scroll to reviews`}
        >
          {ratingCount} reviews
        </button>
      </div>

      {/* Date + Guest selector */}
      <div className={styles.inputGroup} role="group" aria-label="Select dates and guests">
        <div className={styles.datesRow}>
          <button
            type="button"
            className={styles.dateField}
            onClick={handleScrollToCalendar}
            aria-label="Check-in date: 18 October 2026"
          >
            <span className={styles.fieldLabel}>CHECK-IN</span>
            <span className={styles.fieldValue}>10/18/2026</span>
          </button>
          <div className={styles.vDivider} aria-hidden="true" />
          <button
            type="button"
            className={styles.dateField}
            onClick={handleScrollToCalendar}
            aria-label="Checkout date: 23 October 2026"
          >
            <span className={styles.fieldLabel}>CHECKOUT</span>
            <span className={styles.fieldValue}>10/23/2026</span>
          </button>
        </div>
        <div className={styles.hDivider} aria-hidden="true" />
        <button
          type="button"
          className={styles.guestField}
          aria-label="Guests: 2 guests"
        >
          <div>
            <span className={styles.fieldLabel}>GUESTS</span>
            <span className={styles.fieldValue}>2 guests</span>
          </div>
          <svg
            viewBox="0 0 32 32"
            width="12"
            height="12"
            className={styles.chevron}
            aria-hidden="true"
          >
            <path
              d="M6 12l10 10 10-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Reserve button */}
      <button
        className={styles.reserveBtn}
        type="button"
        onClick={handleScrollToCalendar}
      >
        Reserve
      </button>

      <p className={styles.noCharge}>You won't be charged yet</p>

      {/* Price breakdown */}
      <div className={styles.breakdown}>
        <div className={styles.breakdownRow}>
          <span className={styles.breakdownUnderline}>
            ₹5,700 × 5 nights
          </span>
          <span>₹28,500</span>
        </div>
        <div className={styles.breakdownRow}>
          <span className={styles.breakdownUnderline}>Airbnb service fee</span>
          <span>₹3,990</span>
        </div>
      </div>

      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>Total before taxes</span>
        <span className={styles.totalPrice}>₹32,490</span>
      </div>

      {/* Report */}
      <div className={styles.reportRow}>
        <button type="button" className={styles.reportLink}>
          Report this listing
        </button>
      </div>
    </div>
  );
}
