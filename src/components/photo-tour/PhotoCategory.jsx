import { forwardRef } from "react";
import PhotoMosaic from "./PhotoMosaic.jsx";
import styles from "./PhotoTour.module.css";

/**
 * PhotoCategory
 *
 * Renders one category section:
 *   [Left col]  category title + description
 *   [Right col] PhotoMosaic
 *
 * The section heading has scroll-margin-top so sticky header doesn't hide it.
 */
const PhotoCategory = forwardRef(function PhotoCategory(
  { category, globalOffset, onImageClick },
  ref
) {
  return (
    <section
      ref={ref}
      id={`cat-${category.id}`}
      className={styles.category}
      aria-labelledby={`cat-title-${category.id}`}
    >
      <div className={styles.categoryInner}>
        {/* Left — text */}
        <div className={styles.categoryText}>
          <h2
            id={`cat-title-${category.id}`}
            className={styles.categoryTitle}
          >
            {category.title}
          </h2>
          <p className={styles.categoryDesc}>{category.description}</p>
        </div>

        {/* Right — mosaic */}
        <div className={styles.categoryImages}>
          <PhotoMosaic
            images={category.images}
            onImageClick={onImageClick}
            globalOffset={globalOffset}
          />
        </div>
      </div>
    </section>
  );
});

export default PhotoCategory;

