import { useRef, useState, useEffect, useCallback } from "react";
import { reviewCategories } from "../../data/reviewCategories.js";
import ReviewCategoryChip from "./ReviewCategoryChip.jsx";
import styles from "./ReviewCategoryCarousel.module.css";

const SUBPIXEL_TOLERANCE = 3; // px tolerance for subpixel / floating-point calculations

/**
 * ReviewCategoryCarousel — Horizontally scrollable review category chips row.
 *
 * Edge-aware arrow visibility:
 *   - Leftmost position: Left arrow is NOT rendered.
 *   - Rightmost position: Right arrow is NOT rendered.
 *   - Middle position: Both arrows are rendered.
 *   - Content fits completely: Neither arrow is rendered.
 */
export default function ReviewCategoryCarousel({
  selectedId,
  onSelectCategory,
}) {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const hasOverflow = scrollWidth > clientWidth + SUBPIXEL_TOLERANCE;
    const isAtStart = scrollLeft <= SUBPIXEL_TOLERANCE;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - SUBPIXEL_TOLERANCE;

    setShowLeftArrow(hasOverflow && !isAtStart);
    setShowRightArrow(hasOverflow && !isAtEnd);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Immediate check
    checkScrollability();

    // Secondary check after layout paint
    const rAF = requestAnimationFrame(checkScrollability);

    const handleScroll = () => {
      checkScrollability();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        checkScrollability();
      });
      resizeObserver.observe(el);
    }

    window.addEventListener("resize", checkScrollability);

    return () => {
      cancelAnimationFrame(rAF);
      el.removeEventListener("scroll", handleScroll);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  const handleScrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    setTimeout(checkScrollability, 350);
  };

  const handleScrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    setTimeout(checkScrollability, 350);
  };

  return (
    <div className={styles.wrapper} role="region" aria-label="Review category filters">
      {/* Conditionally Rendered Left Arrow */}
      {showLeftArrow && (
        <button
          type="button"
          className={`${styles.arrowBtn} ${styles.leftBtn}`}
          onClick={handleScrollLeft}
          aria-label="Scroll review categories left"
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
      )}

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className={styles.scrollTrack}
        role="group"
        aria-label="Review categories"
      >
        {reviewCategories.map((cat) => (
          <ReviewCategoryChip
            key={cat.id}
            category={cat}
            isSelected={selectedId === cat.id}
            onClick={() => onSelectCategory?.(selectedId === cat.id ? null : cat.id)}
          />
        ))}
      </div>

      {/* Conditionally Rendered Right Arrow */}
      {showRightArrow && (
        <button
          type="button"
          className={`${styles.arrowBtn} ${styles.rightBtn}`}
          onClick={handleScrollRight}
          aria-label="Scroll review categories right"
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
      )}
    </div>
  );
}
