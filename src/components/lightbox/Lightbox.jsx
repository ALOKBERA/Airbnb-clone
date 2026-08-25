import { useEffect, useRef, useCallback } from "react";
import styles from "./Lightbox.module.css";

/**
 * Lightbox — full-screen dark image overlay.
 *
 * Keyboard:  ArrowLeft / ArrowRight = navigate; Escape = close
 * Click:     backdrop = close; image = no-op; prev/next = navigate
 * Focus:     trapped; restored to trigger on close
 * No wrap:   prev disabled at 0; next disabled at last.
 *
 * Props:
 *   images          Array of { src, fallback, alt, caption }
 *   currentIndex    Active image index
 *   setCurrentIndex Setter
 *   onClose         Called to close
 */
export default function Lightbox({ images, currentIndex, setCurrentIndex, onClose }) {
  const total   = images.length;
  const clipped = Math.max(0, Math.min(currentIndex, total - 1));
  const current = images[clipped];

  const dialogRef = useRef(null);
  const closeRef  = useRef(null);

  const atFirst = clipped <= 0;
  const atLast  = clipped >= total - 1;

  const goNext = useCallback(() => {
    if (!atLast) setCurrentIndex(i => Math.min(i + 1, total - 1));
  }, [atLast, setCurrentIndex, total]);

  const goPrev = useCallback(() => {
    if (!atFirst) setCurrentIndex(i => Math.max(i - 1, 0));
  }, [atFirst, setCurrentIndex]);

  // Focus close button on mount
  useEffect(() => {
    const id = setTimeout(() => closeRef.current?.focus(), 50);
    return () => clearTimeout(id);
  }, []);

  // Keyboard handler
  useEffect(() => {
    const handle = (e) => {
      if      (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
      else if (e.key === "ArrowLeft")  { e.preventDefault(); goPrev(); }
      else if (e.key === "Escape")     { e.preventDefault(); onClose(); }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [goNext, goPrev, onClose]);

  // Focus trap
  const handleKeyDown = useCallback((e) => {
    if (e.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll(
      'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }, []);

  // Backdrop click closes (image click does not)
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  const handleImgError = (fallback) => (e) => {
    if (fallback && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  return (
    <div
      ref={dialogRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${clipped + 1} of ${total}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      {/* Top bar */}
      <div className={styles.topBar}>
        <button
          ref={closeRef}
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close photo viewer"
        >
          <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
            <path d="M6 6l20 20M26 6L6 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>

        <span className={styles.counter} aria-live="polite" aria-atomic="true">
          {clipped + 1} / {total}
        </span>

        <div className={styles.topActions}>
          <button type="button" className={styles.topActionBtn} aria-label="Share">
            <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v18M9 10l7-7 7 7"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Share
          </button>
          <button type="button" className={styles.topActionBtn} aria-label="Save">
            <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"
                fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Save
          </button>
        </div>
      </div>

      {/* Image area */}
      <div className={styles.imageArea} onClick={handleBackdropClick}>
        {/* Prev */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous photo"
          disabled={atFirst}
        >
          <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
            <path d="M20 28 8 16 20 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Image */}
        <div className={styles.imgContainer} onClick={(e) => e.stopPropagation()}>
          <img
            key={clipped}
            src={current?.src}
            alt={current?.alt || `Photo ${clipped + 1} of ${total}`}
            className={styles.img}
            draggable={false}
            onError={handleImgError(current?.fallback)}
          />
          {current?.caption && (
            <p className={styles.caption}>{current.caption}</p>
          )}
        </div>

        {/* Next */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next photo"
          disabled={atLast}
        >
          <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
            <path d="M12 4l12 12-12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
