import styles from "./PhotoTour.module.css";

/**
 * PhotoMosaic
 *
 * Renders a category image set in Airbnb's alternating mosaic pattern:
 *   Row type A: single wide image (spans full width)
 *   Row type B: two equal images side by side
 *
 * Pattern: A, B, A, B...  based on available images.
 *
 * Props:
 *   images      — array of { src, fallback, alt }
 *   onImageClick(globalIndex) — called when any image is clicked
 *   globalOffset — where this category starts in allTourImages
 */
export default function PhotoMosaic({ images, onImageClick, globalOffset }) {
  if (!images || images.length === 0) return null;

  const handleError = (fallback) => (e) => {
    if (fallback && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  // Build rows: alternate single-wide and two-wide
  const rows = [];
  let i = 0;
  while (i < images.length) {
    if (i === 0 || rows.length % 2 === 0) {
      // wide single image
      rows.push({ type: "wide", images: [images[i]], indices: [i] });
      i += 1;
    } else {
      // two side-by-side (or single if only one left)
      if (i + 1 < images.length) {
        rows.push({ type: "pair", images: [images[i], images[i + 1]], indices: [i, i + 1] });
        i += 2;
      } else {
        rows.push({ type: "wide", images: [images[i]], indices: [i] });
        i += 1;
      }
    }
  }

  return (
    <div className={styles.mosaic}>
      {rows.map((row, ri) => (
        <div
          key={ri}
          className={row.type === "wide" ? styles.mosaicRowWide : styles.mosaicRowPair}
        >
          {row.images.map((img, ci) => {
            const globalIdx = globalOffset + row.indices[ci];
            return (
              <button
                key={ci}
                type="button"
                className={styles.mosaicCell}
                onClick={() => onImageClick(globalIdx)}
                aria-label={img.alt || `View photo ${globalIdx + 1}`}
                data-tour-src={img.src}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={styles.mosaicImg}
                  loading="lazy"
                  onError={handleError(img.fallback)}
                />
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

