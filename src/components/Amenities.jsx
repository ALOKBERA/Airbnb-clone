import { useState, useRef, useCallback } from "react";
import { featuredAmenities } from "../data/amenities.js";
import AmenityItem from "./amenities/AmenityItem.jsx";
import AmenitiesModal from "./amenities/AmenitiesModal.jsx";
import styles from "./Amenities.module.css";

/**
 * Amenities — "What this place offers" featured 2-column section + "Show all 50 amenities" modal.
 */
export default function Amenities({ property }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openBtnRef = useRef(null);

  const leftItems = featuredAmenities.filter((item) => item.column === "left");
  const rightItems = featuredAmenities.filter((item) => item.column === "right");

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    requestAnimationFrame(() => {
      openBtnRef.current?.focus();
    });
  }, []);

  return (
    <section id="amenities" className={styles.section} aria-labelledby="amenities-heading">
      <h2 id="amenities-heading" className={styles.title}>
        What this place offers
      </h2>

      {/* 2-Column Featured Amenities Grid */}
      <div className={styles.grid}>
        <div className={styles.col}>
          {leftItems.map((item) => (
            <AmenityItem key={item.id} item={item} />
          ))}
        </div>

        <div className={styles.col}>
          {rightItems.map((item) => (
            <AmenityItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Outlined "Show all 50 amenities" button */}
      <button
        ref={openBtnRef}
        type="button"
        className={styles.showAllBtn}
        onClick={handleOpenModal}
        aria-haspopup="dialog"
      >
        Show all 50 amenities
      </button>

      {/* Full Amenities Modal Dialog */}
      <AmenitiesModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
