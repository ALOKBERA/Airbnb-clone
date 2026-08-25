import styles from "./NearbyStays.module.css";

/**
 * NearbyStayCard — Single recommendation card with uniform image sizing matching "Modern Sea View Studio near Beach".
 */
export default function NearbyStayCard({ stay }) {
  const handleImgError = (fallback) => (e) => {
    if (fallback && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  const imageSrc = stay.image || (stay.images && stay.images[0]?.src);
  const fallbackSrc = stay.fallback || (stay.images && stay.images[0]?.fallback);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={imageSrc}
          alt={stay.title}
          className={styles.image}
          loading="lazy"
          onError={handleImgError(fallbackSrc)}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h3 className={styles.title} title={stay.title}>
            <a
              href="/"
              className={styles.titleLink}
              onClick={(e) => e.preventDefault()}
            >
              {stay.title}
            </a>
          </h3>
        </div>

        <p className={styles.typeLocation}>
          {stay.location}
        </p>

        <div className={styles.metaRow}>
          <p className={styles.price}>
            <span className={styles.priceVal}>{stay.price}</span>
            <span className={styles.pricePeriod}> / {stay.pricePeriod || "night"}</span>
          </p>

          <div className={styles.rating} aria-label={`Rating ${stay.rating} out of 5`}>
            <svg
              viewBox="0 0 32 32"
              width="12"
              height="12"
              fill="currentColor"
              className={styles.starIcon}
              aria-hidden="true"
            >
              <path d="M15.094 1.579l-4.124 8.485-9.86 1.32a1 1 0 0 0-.542 1.736l7.293 6.602-1.965 9.842a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.674a1 1 0 0 0 1.482-1.06l-1.965-9.843 7.293-6.602a1 1 0 0 0-.541-1.735l-9.86-1.32-4.126-8.485a1 1 0 0 0-1.814 0z" />
            </svg>
            <span className={styles.ratingVal}>{stay.rating.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
