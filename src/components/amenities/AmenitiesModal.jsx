import { useEffect, useRef, useCallback } from "react";
import { allAmenityCategories } from "../../data/amenities.js";
import AmenityItem from "./AmenityItem.jsx";
import styles from "./AmenitiesModal.module.css";

/**
 * AmenitiesModal — Full "Show all 50 amenities" scrollable dialog matching Airbnb reference.
 */
export default function AmenitiesModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Focus close button on mount
  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => closeBtnRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [isOpen]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard navigation: Escape closes, Tab traps focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="amenities-modal-title"
      >
        {/* Sticky Header */}
        <div className={styles.modalHeader}>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close amenities"
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
        </div>

        {/* Scrollable Content Body */}
        <div className={styles.modalBody}>
          <h2 id="amenities-modal-title" className={styles.modalMainTitle}>
            What this place offers
          </h2>

          <div className={styles.categoriesList}>
            {allAmenityCategories.map((catGroup, idx) => (
              <section
                key={catGroup.category}
                className={styles.categorySection}
                aria-labelledby={`cat-heading-${idx}`}
              >
                <h3 id={`cat-heading-${idx}`} className={styles.categoryTitle}>
                  {catGroup.category}
                </h3>

                <div className={styles.itemsList}>
                  {catGroup.items.map((item) => (
                    <div key={item.id} className={styles.modalItemWrap}>
                      <AmenityItem item={item} />
                      <hr className={styles.itemDivider} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
