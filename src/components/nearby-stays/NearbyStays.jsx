import { useRef, useState, useEffect, useCallback } from "react";
import { nearbyStays } from "../../data/nearbyStays.js";
import NearbyStayCard from "./NearbyStayCard.jsx";
import styles from "./NearbyStays.module.css";

/**
 * NearbyStays — "More stays nearby" section with 2-page carousel.
 */
export default function NearbyStays() {
  const carouselRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollability = useCallback(() => {
    const element = carouselRef.current;
    if (!element) return;

    setCurrentPage(element.scrollLeft > element.clientWidth / 2 ? 1 : 0);
    setShowLeftArrow(element.scrollLeft > 3);
    setShowRightArrow(element.scrollLeft + element.clientWidth < element.scrollWidth - 3);
  }, []);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return undefined;

    checkScrollability();
    element.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);

    return () => {
      element.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  const handleScroll = (distance) => {
    carouselRef.current?.scrollBy({
      left: distance * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section} aria-labelledby="nearby-stays-heading">
      <div className={styles.headerRow}>
        <h2 id="nearby-stays-heading" className={styles.heading}>
          More stays nearby
        </h2>

        <div className={styles.controls}>
          <span className={styles.pageIndicator} aria-live="polite">
            {currentPage + 1} / 2
          </span>
          <div className={styles.btnGroup}>
            <button type="button" className={styles.navBtn} onClick={() => handleScroll(-1)} disabled={!showLeftArrow} aria-label="Previous nearby stays">
              <svg viewBox="0 0 32 32" width="12" height="12" aria-hidden="true">
                <path d="M20 28 8 16 20 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className={styles.navBtn} onClick={() => handleScroll(1)} disabled={!showRightArrow} aria-label="Next nearby stays">
              <svg viewBox="0 0 32 32" width="12" height="12" aria-hidden="true">
                <path d="M12 4l12 12-12 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.carouselContainer} ref={carouselRef}>
        <div className={styles.grid}>
          {nearbyStays.slice(0, 8).map((stay) => (
            <NearbyStayCard key={stay.id} stay={stay} />
          ))}
        </div>
      </div>
    </section>
  );
}
