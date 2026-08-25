import { useEffect, useRef, useCallback } from "react";
import { useLightbox } from "../hooks/useLightbox.js";
import styles from "./Lightbox.module.css";

/**
 * Lightbox — full-screen single-image dark overlay.
 *
 * Keyboard:  ArrowLeft/Right = navigate,  Escape = close
 * Click:     overlay bg = close,  image = no-op,  prev/next = navigate
 * Focus:     trapped in dialog on open; restored on close via useAppState
 * Animation: fade-in overlay, scale-in image on open; scale-out on index change
 *
 * No wrapping: prev disabled at index 0, next disabled at last image.
 */
export default function Lightbox({ images, currentIndex, setCurrentIndex, onClose }) {
  const total        = images.length;
  const currentImage = images[Math.max(0, Math.min(currentIndex, total - 1))];

  const { goNext, goPrev } = useLightbox({
    isOpen: true,
    currentIndex,
    total,
    setCurrentIndex,
    onClose,
  });

  const handleImgError = (fallback) => (e) => {
    if (fallback && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  // Refs for focus management
  const dialogRef = useRef(null);
  const closeRef  = useRef(null);

  // Move focus into dialog on mount
  useEffect(() => {
    const id = setTimeout(() => closeRef.current?.focus(), 50);
    return () => clearTimeout(id);
  }, []);

  // Focus trap — keep Tab inside the dialog
  const handleKeyDown = useCallback((e) => {
    if (e.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll(
      'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }, []);

  // Close on backdrop click only (not image click)
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  const atFirst = currentIndex <= 0;
  const atLast  = currentIndex >= total - 1;

  return (
    <div
      ref={dialogRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${total}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button
          ref={closeRef}
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close photo viewer"
        >
          <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
            <path
              d="M6 6l20 20M26 6L6 26"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <span className={styles.counter} aria-live="polite" aria-atomic="true">
          {currentIndex + 1} / {total}
        </span>

        <div className={styles.topActions}>
          <button className={styles.topActionBtn} type="button">
            <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v18M9 10l7-7 7 7"
                fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Share
          </button>
          <button className={styles.topActionBtn} type="button">
            <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"
                fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Save
          </button>
        </div>
      </div>

      {/* ── Image area ── */}
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
            <path d="M20 28 8 16 20 4"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Image */}
        <div
          className={styles.imgContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            key={currentIndex}
            src={currentImage?.src}
            alt={currentImage?.alt || `Photo ${currentIndex + 1} of ${total}`}
            className={styles.img}
            draggable={false}
            onError={handleImgError(currentImage?.fallback)}
          />
          {currentImage?.caption && (
            <p className={styles.caption}>{currentImage.caption}</p>
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
            <path d="M12 4l12 12-12 12"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
