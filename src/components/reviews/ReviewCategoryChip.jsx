import styles from "./ReviewCategoryCarousel.module.css";

/**
 * ReviewCategoryChip — Single pill item in the Review Category Carousel.
 *
 * Structure:
 *   ┌──────────────────────────────────┐
 *   │  [icon/image]  Label     Count   │
 *   └──────────────────────────────────┘
 */
export default function ReviewCategoryChip({
  category,
  isSelected,
  onClick,
}) {
  const { label, count, image, remoteImage } = category;

  const handleImgError = (e) => {
    // If local svg failed, try remote, or fallback to simple opacity
    if (remoteImage && e.currentTarget.src !== remoteImage) {
      e.currentTarget.src = remoteImage;
    }
  };

  return (
    <button
      type="button"
      className={`${styles.chip} ${isSelected ? styles.chipSelected : ""}`}
      onClick={onClick}
      aria-pressed={isSelected}
      aria-label={`${label} (${count} reviews)`}
    >
      {/* Category Icon */}
      <span className={styles.iconWrap} aria-hidden="true">
        <img
          src={image}
          alt=""
          className={styles.chipImg}
          loading="lazy"
          onError={handleImgError}
        />
      </span>

      {/* Category Name */}
      <span className={styles.chipLabel}>{label}</span>

      {/* Category Count */}
      <span className={styles.chipCount}>{count}</span>
    </button>
  );
}
