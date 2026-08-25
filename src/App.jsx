import { useState, useCallback, useRef, useEffect } from "react";
import { images } from "./data/images.js";
import { allTourImages } from "./data/photoTourData.js";
import { property } from "./data/property.js";
import { usePhotoTour } from "./hooks/usePhotoTour.js";
import Header from "./components/Header.jsx";
import ListingPage from "./components/ListingPage.jsx";
import PhotoTour from "./components/photo-tour/PhotoTour.jsx";
import Lightbox from "./components/lightbox/Lightbox.jsx";

/**
 * App — top-level routing component.
 *
 * Views:
 *   listing     — normal listing page
 *   photo-tour  — scrollable photo gallery (?modal=PHOTO_TOUR_SCROLLABLE)
 *   lightbox    — dark image overlay (from listing gallery or photo tour)
 *
 * State:
 *   isPhotoTourOpen   — from usePhotoTour (synced with URL)
 *   isLightboxOpen    — local state
 *   lightboxImages    — which image set Lightbox shows (listing or tour)
 *   lightboxIndex     — current Lightbox image index
 *   lightboxSource    — "listing" | "tour" (controls close routing)
 *   photoTourScrollY  — scroll position to restore when Lightbox closes
 */
export default function App() {
  // Wishlist
  const [isSaved, setIsSaved] = useState(() => localStorage.getItem("airbnb-saved") === "true");
  const toggleSaved = useCallback(() => {
    setIsSaved(prev => {
      const next = !prev;
      localStorage.setItem("airbnb-saved", String(next));
      return next;
    });
  }, []);

  // Photo Tour state
  const {
    isPhotoTourOpen,
        openPhotoTour,
    closePhotoTour,
      } = usePhotoTour();

  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen]   = useState(false);
  const [lightboxImages, setLightboxImages]   = useState(images);
  const [lightboxIndex, setLightboxIndex]     = useState(0);
  const [lightboxSource, setLightboxSource]   = useState("listing"); // "listing" | "tour"
  const [tourScrollRestore, setTourScrollRestore] = useState(0);
  const listingTriggerRef = useRef(null);
  const photoTourScrollRef = useRef(null); // ref to photo tour scroll container

  // Lock body scroll when Photo Tour or Lightbox is open
  useEffect(() => {
    if (isPhotoTourOpen || isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isPhotoTourOpen, isLightboxOpen]);

  // ── Open Photo Tour (from listing "Show all photos") ──
  const handleOpenPhotoTour = useCallback((startIndex = 0) => {
    listingTriggerRef.current = document.activeElement;
    openPhotoTour();
  }, [openPhotoTour]);

  // ── Close Photo Tour → listing ──
  const handleClosePhotoTour = useCallback(() => {
    closePhotoTour();
    requestAnimationFrame(() => listingTriggerRef.current?.focus());
  }, [closePhotoTour]);

  // ── Open Lightbox from listing gallery ──
  const handleOpenLightboxFromListing = useCallback((index) => {
    listingTriggerRef.current = document.activeElement;
    setLightboxImages(images);
    setLightboxIndex(typeof index === "number" ? index : 0);
    setLightboxSource("listing");
    setIsLightboxOpen(true);
  }, []);

  // ── Open Lightbox from Photo Tour ──
  // globalIdx is the index within allTourImages
  const handleOpenLightboxFromTour = useCallback((globalIdx) => {
    // Save current scroll position of Photo Tour
    if (photoTourScrollRef.current) {
      setTourScrollRestore(photoTourScrollRef.current.scrollTop);
    }
    setLightboxImages(allTourImages);
    setLightboxIndex(typeof globalIdx === "number" ? globalIdx : 0);
    setLightboxSource("tour");
    setIsLightboxOpen(true);
  }, []);

  // ── Close Lightbox → route back to source ──
  const handleCloseLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    if (lightboxSource === "listing") {
      requestAnimationFrame(() => listingTriggerRef.current?.focus());
    }
    // If from tour, Photo Tour is still mounted (just hidden under Lightbox)
    // The scroll restore is handled by the initialScrollY prop on PhotoTour
  }, [lightboxSource]);

  return (
    <>
      <Header />
      <ListingPage
        property={property}
        images={images}
        isSaved={isSaved}
        onToggleSave={toggleSaved}
        onShowAllPhotos={handleOpenPhotoTour}
        onImageClick={handleOpenLightboxFromListing}
      />

      {/* Photo Tour overlay — always mounted when isPhotoTourOpen */}
      {isPhotoTourOpen && (
        <PhotoTour
          scrollRef={photoTourScrollRef}
          onClose={handleClosePhotoTour}
          onImageClick={handleOpenLightboxFromTour}
          isSaved={isSaved}
          onToggleSave={toggleSaved}
          initialScrollY={tourScrollRestore}
        />
      )}

      {/* Lightbox — on top of everything */}
      {isLightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          setCurrentIndex={setLightboxIndex}
          onClose={handleCloseLightbox}
        />
      )}
    </>
  );
}


