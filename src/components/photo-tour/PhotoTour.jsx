import { useRef, useCallback, useEffect } from "react";
import { photoTourCategories } from "../../data/photoTourData.js";
import PhotoTourHeader from "./PhotoTourHeader.jsx";
import PhotoCategoryNav from "./PhotoCategoryNav.jsx";
import PhotoCategory from "./PhotoCategory.jsx";
import styles from "./PhotoTour.module.css";

// Height of sticky header in px — used for scroll offset calculations
const HEADER_HEIGHT = 72;

/**
 * PhotoTour — the PHOTO_TOUR_SCROLLABLE experience.
 *
 * A full-screen white overlay with:
 *   - Sticky header (← / "Photo tour" / Share + Save)
 *   - Wrapped category thumbnail navigation
 *   - Long scrollable gallery of categorized mosaics
 *
 * Props:
 *   scrollRef         ref forwarded from App so App can read scrollTop
 *   onClose()         close tour
 *   onImageClick(idx) open Lightbox at global index in allTourImages
 *   isSaved           wishlist state
 *   onToggleSave()    toggle wishlist
 *   initialScrollY    scroll position to restore (from Lightbox close)
 */
export default function PhotoTour({
  scrollRef: externalScrollRef,
  onClose,
  onImageClick,
  isSaved,
  onToggleSave,
  initialScrollY = 0,
}) {
  const internalScrollRef = useRef(null);
  const scrollRef = externalScrollRef ?? internalScrollRef;
  const sectionRefs = useRef({}); // id → DOM element

  // Restore scroll position when mounting (after Lightbox close)
  useEffect(() => {
    if (scrollRef.current && initialScrollY > 0) {
      scrollRef.current.scrollTop = initialScrollY;
    }
  }, []); // only on mount

  // Smooth-scroll to a category section, accounting for sticky header
  const handleCategoryClick = useCallback((id) => {
    const el = sectionRefs.current[id];
    if (!el || !scrollRef.current) return;
    const container = scrollRef.current;
    const containerTop = container.getBoundingClientRect().top;
    const sectionTop   = el.getBoundingClientRect().top;
    const offset       = sectionTop - containerTop - HEADER_HEIGHT + container.scrollTop;
    container.scrollTo({ top: offset, behavior: "smooth" });
  }, [scrollRef]);

  // Compute cumulative global image index offsets per category
  const globalOffsets = [];
  let acc = 0;
  for (const cat of photoTourCategories) {
    globalOffsets.push(acc);
    acc += cat.images.length;
  }

  return (
    <div
      className={styles.ptOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      {/* Sticky header */}
      <PhotoTourHeader
        onClose={onClose}
        isSaved={isSaved}
        onToggleSave={onToggleSave}
      />

      {/* Scrollable body */}
      <div ref={scrollRef} className={styles.ptBody}>
        <div className={styles.ptContent}>
          {/* Wrapped category thumbnail nav */}
          <PhotoCategoryNav
            categories={photoTourCategories}
            onCategoryClick={handleCategoryClick}
          />

          {/* Visual divider */}
          <hr className={styles.ptDivider} />

          {/* Category sections */}
          {photoTourCategories.map((cat, ci) => (
            <PhotoCategory
              key={cat.id}
              ref={(el) => { sectionRefs.current[cat.id] = el; }}
              category={cat}
              globalOffset={globalOffsets[ci]}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
