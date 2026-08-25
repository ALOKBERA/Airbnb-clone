import styles from "./ListingPage.module.css";
import ListingHeader from "./ListingHeader.jsx";
import PhotoGallery from "./PhotoGallery.jsx";
import PropertyOverview from "./PropertyOverview.jsx";
import HostSection from "./HostSection.jsx";
import Description from "./Description.jsx";
import Amenities from "./Amenities.jsx";
import DatePicker from "./booking/DatePicker.jsx";
import ReviewsSection from "./ReviewsSection.jsx";
import LocationSection from "./LocationSection.jsx";
import BookingCard from "./BookingCard.jsx";
import ThingsToKnow from "./ThingsToKnow.jsx";
import NearbyStays from "./nearby-stays/NearbyStays.jsx";
import StickyListingNav from "./sticky-nav/StickyListingNav.jsx";
import { useStickyListingNav } from "../hooks/useStickyListingNav.js";

/**
 * ListingPage — Full desktop property listing matching Phase 4 specifications.
 *
 * Layout Flow:
 *   1. ListingHeader (Title, rating, badge, share, save)
 *   2. PhotoGallery (#photos — 5-image mosaic)
 *   3. contentGrid (2-column: mainCol + sticky BookingCard sideCol)
 *      - PropertyOverview
 *      - HostSection
 *      - Description
 *      - Amenities (#amenities)
 *      - DatePicker (#calendar)
 *   4. Full-width lower sections (BookingCard terminates here):
 *      - ReviewsSection (#reviews — large 4.95 rating hero, breakdown, chips, reviews grid)
 *      - LocationSection (#location)
 *      - ThingsToKnow
 *      - NearbyStays
 */
export default function ListingPage({
  property,
  images,
  isSaved,
  onToggleSave,
  onShowAllPhotos,
  onImageClick,
}) {
  const { isVisible, activeSection, scrollToSection } = useStickyListingNav();

  return (
    <main>
      {/* Secondary Sticky Listing Navigation (Header B) */}
      <StickyListingNav
        isVisible={isVisible}
        activeSection={activeSection}
        onNavClick={scrollToSection}
        property={property}
      />

      <div className={styles.container}>
        {/* Title + actions */}
        <ListingHeader
          property={property}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />

        {/* Hero gallery */}
        <PhotoGallery
          images={images}
          onShowAllPhotos={onShowAllPhotos}
          onImageClick={onImageClick}
        />

        {/* Two-column content area: Left features + Right sticky BookingCard */}
        <div className={styles.contentGrid}>
          {/* Main left column — through Calendar */}
          <div className={styles.mainCol}>
            <PropertyOverview property={property} />
            <hr className={styles.divider} />
            <HostSection property={property} />
            <hr className={styles.divider} />
            <Description property={property} />
            <hr className={styles.divider} />
            <Amenities property={property} />
            <hr className={styles.divider} />
            <DatePicker property={property} />
          </div>

          {/* Sticky booking card — visible only through Calendar */}
          <aside className={styles.sideCol}>
            <BookingCard property={property} />
          </aside>
        </div>

        <hr className={styles.divider} />

        {/* ── Full-Width Lower Sections (No sidebar booking card) ── */}
        <ReviewsSection property={property} />

        <hr className={styles.divider} />

        <LocationSection property={property} />

        <hr className={styles.divider} />

        <ThingsToKnow property={property} />

        {/* More stays nearby recommendation carousel */}
        <NearbyStays />
      </div>
    </main>
  );
}
