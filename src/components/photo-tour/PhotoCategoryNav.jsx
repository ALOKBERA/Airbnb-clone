import styles from "./PhotoTour.module.css";

/**
 * PhotoCategoryNav
 *
 * Wrapped flex row of category thumbnails.
 * Clicking a thumbnail smoothly scrolls to that category section.
 *
 * The reference shows thumbnails wrapping onto multiple rows, not a carousel.
 */
export default function PhotoCategoryNav({ categories, onCategoryClick }) {
  const handleError = (fallback) => (e) => {
    if (fallback && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  return (
    <nav className={styles.categoryNav} aria-label="Jump to photo category">
      <div className={styles.categoryNavInner}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={styles.categoryNavItem}
            onClick={() => onCategoryClick(cat.id)}
            aria-label={`Jump to ${cat.title}`}
          >
            <div className={styles.categoryNavThumb}>
              <img
                src={cat.thumbnail.src}
                alt=""
                aria-hidden="true"
                className={styles.categoryNavImg}
                loading="lazy"
                onError={handleError(cat.thumbnail.fallback)}
              />
            </div>
            <span className={styles.categoryNavLabel}>{cat.title}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

