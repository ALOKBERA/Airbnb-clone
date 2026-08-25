import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./PhotoTour.module.css";

/**
 * PhotoTour — full-screen white photo gallery.
 *
 * Layout:
 *   ┌─────────────────────────────┐
 *   │  ← All photos    Share Save │  top bar
 *   ├──────────┬──────────────────┤
 *   │          │                  │
 *   │ Thumbs   │   Large image    │
 *   │ sidebar  │   + caption      │
 *   │          │                  │
 *   └──────────┴──────────────────┘
 *
 * Keyboard: ArrowUp/Down = prev/next,  Escape = close
 * Clicking main image → opens Lightbox at that index
 */
export default function PhotoTour({ images, initialIndex, onClose, onImageClick }) {
  const [activeIndex, setActiveIndex] = useState(
    typeof initialIndex === "number" && initialIndex >= 0 && initialIndex < images.length
      ? initialIndex
      : 0
  );

  const dialogRef     = useRef(null);
  const closeRef      = useRef(null);
  const sidebarRef    = useRef(null);
  const thumbRefs     = useRef([]);
  const activeImage   = images[activeIndex] ?? images[0];
  const total         = images.length;

  const handleImgError = (fallback) => (e) => {
    if (fallback && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  // Focus close button on open
  useEffect(() => {
    const id = setTimeout(() => closeRef.current?.focus(), 50);
    return () => clearTimeout(id);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handle = (e) => {
      if      (e.key === "Escape")    { e.preventDefault(); onClose(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, total - 1)); }
      else if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, 0)); }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose, total]);

  // Scroll active thumbnail into view when it changes
  useEffect(() => {
    const el = thumbRefs.current[activeIndex];
    el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeIndex]);

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

  const handleSelectImage = useCallback((idx) => {
    setActiveIndex(idx);
  }, []);

  return (
    <div
      ref={dialogRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour — all property photos"
      onKeyDown={handleKeyDown}
    >
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <button
          ref={closeRef}
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close photo tour, return to listing"
        >
          <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
            <path d="M20 28 8 16 20 4"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All photos
        </button>

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

      {/* ── Body ── */}
      <div className={styles.body}>
        {/* ── Thumbnail sidebar ── */}
        <nav
          ref={sidebarRef}
          className={styles.sidebar}
          aria-label={`Photo list, ${total} photos`}
        >
          {images.map((img, idx) => (
            <button
              key={img.id ?? idx}
              type="button"
              ref={el => { thumbRefs.current[idx] = el; }}
              className={`${styles.thumb} ${idx === activeIndex ? styles.thumbActive : ""}`}
              onClick={() => handleSelectImage(idx)}
              aria-label={`Photo ${idx + 1}: ${img.caption || img.alt}`}
              aria-current={idx === activeIndex ? "true" : undefined}
              aria-pressed={idx === activeIndex}
            >
              <img
                src={img.src}
                alt=""
                aria-hidden="true"
                className={styles.thumbImg}
                loading="lazy"
                onError={handleImgError(img.fallback)}
              />
              <div className={styles.thumbMeta}>
                <p className={styles.thumbCaption}>{img.caption}</p>
                <p className={styles.thumbRoom}>{img.room}</p>
              </div>
            </button>
          ))}
        </nav>

        {/* ── Main view ── */}
        <div className={styles.mainView}>
          <div className={styles.mainScroll}>
            {/* Prev / Next within tour (above the image) */}
            <div className={styles.navRow}>
              <button
                type="button"
                className={styles.tourNavBtn}
                onClick={() => setActiveIndex(i => Math.max(i - 1, 0))}
                disabled={activeIndex === 0}
                aria-label="Previous photo"
              >
                <svg viewBox="0 0 32 32" width="14" height="14" aria-hidden="true">
                  <path d="M20 28 8 16 20 4"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className={styles.navCount}>{activeIndex + 1} / {total}</span>
              <button
                type="button"
                className={styles.tourNavBtn}
                onClick={() => setActiveIndex(i => Math.min(i + 1, total - 1))}
                disabled={activeIndex === total - 1}
                aria-label="Next photo"
              >
                <svg viewBox="0 0 32 32" width="14" height="14" aria-hidden="true">
                  <path d="M12 4l12 12-12 12"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Main image (click opens Lightbox) */}
            <button
              type="button"
              className={styles.mainImageBtn}
              onClick={() => onImageClick(activeIndex)}
              aria-label={`Zoom into: ${activeImage?.caption || `photo ${activeIndex + 1}`}`}
              tabIndex={0}
            >
              <img
                key={activeIndex}
                src={activeImage?.src}
                alt={activeImage?.alt || `Property photo ${activeIndex + 1}`}
                className={styles.mainImg}
                loading="eager"
                onError={handleImgError(activeImage?.fallback)}
              />
              <span className={styles.zoomHint} aria-hidden="true">
                <svg viewBox="0 0 32 32" width="20" height="20">
                  <circle cx="13" cy="13" r="10" fill="none" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M21 21l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M9 13h8M13 9v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </button>

            {/* Caption below image */}
            {activeImage && (
              <div className={styles.imageInfo}>
                <p className={styles.imageName}>{activeImage.caption}</p>
                {activeImage.details && (
                  <p className={styles.imageDetails}>{activeImage.details}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
