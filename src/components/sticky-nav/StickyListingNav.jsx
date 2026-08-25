import styles from "./StickyListingNav.module.css";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

/**
 * StickyListingNav — Secondary sticky header (HEADER B) matching the reference screenshots.
 *
 * Appears when scrolling past the hero gallery.
 * Contains:
 *   LEFT: [ Photos | Amenities | Reviews | Location ]
 *   RIGHT: Price (₹28,499 for 5 nights) | Rating (★ 4.95 · 19 reviews) | [ Reserve ] button
 */
export default function StickyListingNav({
  isVisible,
  activeSection = "photos",
  onNavClick,
  property,
}) {
  const ratingAvg = property?.reviewSummary?.overall || 4.95;
  const ratingCount = property?.rating?.count || 19;

  return (
    <nav
      className={`${styles.stickyNav} ${isVisible ? styles.visible : styles.hidden}`}
      aria-label="Listing navigation"
      aria-hidden={!isVisible}
    >
      <div className={styles.container}>
        {/* Navigation tabs */}
        <ul className={styles.tabList} role="tablist">
          {TABS.map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <li key={tab.id} className={styles.tabItem} role="presentation">
                <button
                  type="button"
                  role="tab"
                  className={`${styles.tabBtn} ${isActive ? styles.activeTab : ""}`}
                  aria-selected={isActive}
                  onClick={() => onNavClick(tab.id)}
                  tabIndex={isVisible ? 0 : -1}
                >
                  {tab.label}
                  {isActive && <span className={styles.activeBar} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right price & reserve summary */}
        <div className={styles.rightSummary}>
          <div className={styles.priceMeta}>
            <div className={styles.priceLine}>
              <span className={styles.priceAmount}>₹28,499</span>
              <span className={styles.pricePeriod}> for 5 nights</span>
            </div>

            <div className={styles.ratingLine}>
              <svg
                viewBox="0 0 32 32"
                width="10"
                height="10"
                fill="currentColor"
                className={styles.starIcon}
                aria-hidden="true"
              >
                <path d="M15.094 1.579l-4.124 8.485-9.86 1.32a1 1 0 0 0-.542 1.736l7.293 6.602-1.965 9.842a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.674a1 1 0 0 0 1.482-1.06l-1.965-9.843 7.293-6.602a1 1 0 0 0-.541-1.735l-9.86-1.32-4.126-8.485a1 1 0 0 0-1.814 0z" />
              </svg>
              <span className={styles.ratingScore}>{ratingAvg.toFixed(2)}</span>
              <span className={styles.dot}>·</span>
              <button
                type="button"
                className={styles.reviewsLink}
                onClick={() => onNavClick("reviews")}
                tabIndex={isVisible ? 0 : -1}
              >
                {ratingCount} reviews
              </button>
            </div>
          </div>

          <button
            type="button"
            className={styles.reserveBtn}
            onClick={() => {
              const el = document.getElementById("calendar") || document.getElementById("reviews");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            tabIndex={isVisible ? 0 : -1}
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
