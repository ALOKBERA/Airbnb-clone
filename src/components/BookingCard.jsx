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
    <div className={styles.wrapper}>
      {/* 10% Off Claim Coupon Card */}
      <div className={styles.couponCard}>
        <div className={styles.couponLeft}>
          <span className={styles.couponIcon} aria-hidden="true">🏷️</span>
          <div className={styles.couponText}>
            <span>Get 10% off your next stay.</span>
            <button type="button" className={styles.termsLink} onClick={(e) => e.preventDefault()}>
              Terms apply
            </button>
          </div>
        </div>
        <button type="button" className={styles.claimBtn}>
          Claim
        </button>
      </div>

      {/* Main Booking Card */}
      <div className={styles.card}>
        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.price}>₹28,499</span>
          <span className={styles.priceUnit}>&nbsp;for 5 nights</span>
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

        {/* Free cancellation banner */}
        <div className={styles.cancelBanner}>
          <span>Free cancellation before </span>
          <strong>17 October</strong>
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
      </div>

      {/* Report this listing */}
      <div className={styles.reportRow}>
        <button type="button" className={styles.reportLink}>
          <svg viewBox="0 0 32 32" width="14" height="14" fill="currentColor" aria-hidden="true" style={{ marginRight: 6 }}>
            <path d="M6 3v26H4V3h2zm2 2h18l-3 7 3 7H8V5z" />
          </svg>
          Report this listing
        </button>
      </div>
    </div>
  );
}
