import { useState } from "react";
import styles from "./LocationSection.module.css";

/**
 * LocationSection — "Where you will be" section with authentic Airbnb map styling.
 */
export default function LocationSection({ property }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(14);

  const location = property?.location || { city: "Candolim", state: "Goa", country: "India" };
  const locationText =
    property?.location_description?.text ||
    property?.description?.[4] ||
    "Candolim, Goa, India. Located in the heart of Candolim, just a short walk from the pristine Candolim Beach and vibrant local markets, cafes, and nightlife.";

  // Candolim, Goa coordinates: 15.5175, 73.7663
  const bboxDelta = 0.04 / (zoomLevel / 14);
  const minLon = (73.7663 - bboxDelta).toFixed(4);
  const minLat = (15.5175 - bboxDelta * 0.7).toFixed(4);
  const maxLon = (73.7663 + bboxDelta).toFixed(4);
  const maxLat = (15.5175 + bboxDelta * 0.7).toFixed(4);

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik`;

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 1, 18));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 1, 10));

  return (
    <section id="location" className={styles.section} aria-labelledby="location-heading">
      <h2 id="location-heading" className={styles.title}>Where you will be</h2>
      <p className={styles.locationName}>
        {location.city}, {location.state}, {location.country}
      </p>

      {/* Map Container */}
      <div className={styles.mapContainer} aria-label={`Map showing location in ${location.city}, ${location.state}`}>
        <iframe
          title={`Map of ${location.city}, ${location.state}`}
          className={styles.mapIframe}
          src={mapSrc}
          loading="lazy"
          tabIndex={-1}
        />

        {/* Center Airbnb House Pin with Pulsing Translucent Ring */}
        <div className={styles.pinOverlay} aria-hidden="true">
          <div className={styles.pulseRing} />
          <div className={styles.homePinBadge}>
            <svg viewBox="0 0 32 32" width="18" height="18" fill="white">
              <path d="M16 2.5L2 14.5h4v15h8v-8h4v8h8v-15h4L16 2.5z" />
            </svg>
          </div>
          <div className={styles.mapLabel}>
            <span>{location.city}, {location.state}</span>
          </div>
        </div>

        {/* Map Zoom Controls */}
        <div className={styles.mapControls}>
          <button
            type="button"
            className={styles.zoomBtn}
            onClick={handleZoomIn}
            aria-label="Zoom in on map"
            title="Zoom in"
          >
            +
          </button>
          <div className={styles.zoomDivider} />
          <button
            type="button"
            className={styles.zoomBtn}
            onClick={handleZoomOut}
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
          {isExpanded && (
            <span>
              {" "}You are conveniently close to top beach clubs, authentic Goan seafood shacks, and water sports centers while enjoying a serene, quiet neighborhood.
            </span>
          )}
        </p>

        <button
          type="button"
          className={styles.showMapBtn}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? "Show less" : "Show more"}</span>
          <svg viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" className={isExpanded ? styles.chevronUp : styles.chevronDown} aria-hidden="true">
            <path d="M6 10l10 10 10-10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}



