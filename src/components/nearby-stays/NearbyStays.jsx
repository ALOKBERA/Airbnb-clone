import { useState, useCallback } from "react";
import { nearbyStays } from "../../data/nearbyStays.js";
import NearbyStayCard from "./NearbyStayCard.jsx";
import styles from "./NearbyStays.module.css";

const ITEMS_PER_PAGE = 5;

/**
 * NearbyStays — "More stays nearby" section with 2-page carousel.
 */
export default function NearbyStays() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(nearbyStays.length / ITEMS_PER_PAGE);

  const handlePrev = useCallback(() => {
    setCurrentPage((p) => Math.max(p - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  }, [totalPages]);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentStays = nearbyStays.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className={styles.section} aria-labelledby="nearby-stays-heading">
      <div className={styles.headerRow}>
        <h2 id="nearby-stays-heading" className={styles.heading}>
          More stays nearby
        </h2>

        <div className={styles.controls}>
          <span className={styles.pageIndicator} aria-live="polite">
            {currentPage + 1} / {totalPages}
          </span>

          <div className={styles.btnGroup}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={handlePrev}
              disabled={currentPage === 0}
              aria-label="Previous page of nearby stays"
            >
              <svg viewBox="0 0 32 32" width="12" height="12" aria-hidden="true">
                <path
                  d="M20 28 8 16 20 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className={styles.navBtn}
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              aria-label="Next page of nearby stays"
            >
              <svg viewBox="0 0 32 32" width="12" height="12" aria-hidden="true">
                <path
                  d="M12 4l12 12-12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.grid}>
          {currentStays.map((stay) => (
            <NearbyStayCard key={stay.id} stay={stay} />
          ))}
        </div>
      </div>
    </section>
  );
}
