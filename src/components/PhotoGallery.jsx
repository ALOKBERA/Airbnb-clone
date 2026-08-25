import styles from "./PhotoGallery.module.css";

/**
 * PhotoGallery — 5-image hero mosaic.
 *
 * Layout:
 *   ┌─────────────┬──────┬──────┐
 *   │             │  2   │  3   │
 *   │      1      ├──────┼──────┤
 *   │  (primary)  │  4   │  5   │
 *   └─────────────┴──────┴──────┘
 *
 * "Show all photos" button sits bottom-right over image 5.
 * All cells open Lightbox at their index.
 */
export default function PhotoGallery({ images, onShowAllPhotos, onImageClick }) {
  if (!images || images.length === 0) return null;

  const [img1, img2, img3, img4, img5] = images;

  const handleImgError = (fallback) => (e) => {
    if (fallback && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  return (
    <section id="photos" className={styles.gallery} aria-label="Property photos">
      <div className={styles.grid}>
        {/* Primary — left full height */}
        <button
          type="button"
          className={`${styles.cell} ${styles.cellPrimary}`}
          onClick={() => onImageClick(0)}
          aria-label={img1?.alt || "View photo 1"}
        >
          {img1 && (
            <img
              src={img1.src}
              alt={img1.alt}
              className={styles.img}
              loading="eager"
              onError={handleImgError(img1.fallback)}
            />
          )}
          <div className={styles.hover} aria-hidden="true" />
        </button>

        {/* Secondary 2×2 grid */}
        <div className={styles.secondaryGrid}>
          {[img2, img3, img4, img5].map((img, i) => {
            const realIndex = i + 1;
            return (
              <button
                key={img?.id ?? `cell-${realIndex}`}
                type="button"
                className={styles.cell}
                onClick={() => onImageClick(realIndex)}
                aria-label={img?.alt || `View photo ${realIndex + 1}`}
              >
                {img && (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={styles.img}
                    loading={i < 2 ? "eager" : "lazy"}
                    onError={handleImgError(img.fallback)}
                  />
                )}
                <div className={styles.hover} aria-hidden="true" />
              </button>
            );
          })}

          {/* Show all photos */}
          <button
            type="button"
            className={styles.showAllBtn}
            onClick={() => onShowAllPhotos(0)}
            aria-label={`Show all ${images.length} photos`}
          >
            <span className={styles.showAllIcon} aria-hidden="true">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <rect x="0.5" y="0.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="9.5" y="0.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="0.5" y="9.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="9.5" y="9.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            Show all photos
          </button>
        </div>
      </div>
    </section>
  );
}

