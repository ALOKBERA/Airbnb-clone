import styles from "./LocationSection.module.css";

/**
 * LocationSection — "Where you will be" section with authentic Airbnb map styling.
 */
export default function LocationSection({ property }) {
  const location = property?.location || { city: "Candolim", state: "Goa", country: "India" };
  const locationText =
    property?.location_description?.text ||
    property?.description?.[4] ||
    "Candolim, Goa, India. Located in the heart of Candolim, just a short walk from the pristine Candolim Beach and vibrant local markets, cafes, and nightlife.";

  return (
    <section id="location" className={styles.section} aria-labelledby="location-heading">
      <h2 id="location-heading" className={styles.title}>Where you will be</h2>
      <p className={styles.locationName}>
        {location.city}, {location.state}, {location.country}
      </p>

      {/* Map Container */}
      <div className={styles.mapContainer} aria-label={`Map showing location in ${location.city}, ${location.state}`}>
        <div className={styles.mapSurface} aria-hidden="true">
          <div className={styles.mapGrid} />
          <div className={styles.mapWater} />
          <div className={`${styles.mapPark} ${styles.mapParkSmall}`} />
          <div className={`${styles.mapPark} ${styles.mapParkLarge}`} />
        </div>

        <button type="button" className={styles.searchBtn} aria-label="Search map" title="Search">
          <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 5 5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Center house pin */}
        <div className={styles.pinOverlay} aria-hidden="true">
          <div className={styles.homePinBadge}>
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="white" strokeWidth="2.8" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 14.5 16 5l11 9.5v12H5z" />
              <path d="M12 27V18h8v9" />
            </svg>
          </div>
        </div>

        {/* Static map controls */}
        <div className={styles.mapControls}>
          <button
            type="button"
            className={styles.zoomBtn}
            aria-label="Zoom in on map"
            title="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            className={styles.zoomBtn}
            aria-label="Zoom out of map"
            title="Zoom out"
          >
            −
          </button>
        </div>
      </div>

      {/* Location description */}
      <div className={styles.descWrap}>
        <p className={styles.description}>
          {locationText}
        </p>

        <button
          type="button"
          className={styles.showMapBtn}
          aria-expanded="false"
        >
          <span>Show more</span>
          <svg viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" className={styles.chevronDown} aria-hidden="true">
            <path d="M6 10l10 10 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}



