import { useState, useEffect, useCallback, useRef } from "react";

/**
 * useAppState
 * Manages: view (listing | photo-tour | lightbox), selectedImageIndex, isSaved.
 *
 * Tracks:
 *   - triggerRef: DOM element that opened the overlay (for focus restoration)
 *   - previousView: the view before lightbox opened (for correct close routing)
 */
export function useAppState() {
  const [view, setView]                             = useState("listing");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isSaved, setIsSaved]                       = useState(false);
  const triggerRef                                  = useRef(null);
  const previousViewRef                             = useRef("listing");

  // Restore saved wishlist state
  useEffect(() => {
    const saved = localStorage.getItem("airbnb-saved");
    if (saved === "true") setIsSaved(true);
  }, []);

  // Lock / unlock body scroll whenever an overlay is open
  useEffect(() => {
    document.body.style.overflow = view !== "listing" ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [view]);

  // Open Photo Tour from listing page ("Show all photos")
  const openPhotoTour = useCallback((startIndex = 0) => {
    triggerRef.current = document.activeElement;
    previousViewRef.current = "listing";
    setSelectedImageIndex(typeof startIndex === "number" ? startIndex : 0);
    setView("photo-tour");
  }, []);

  // Open Lightbox directly from the gallery (no photo tour in between)
  const openLightbox = useCallback((index) => {
    triggerRef.current = document.activeElement;
    previousViewRef.current = "listing";
    setSelectedImageIndex(typeof index === "number" ? index : 0);
    setView("lightbox");
  }, []);

  // Open Lightbox from within Photo Tour (close should return to photo-tour)
  const openLightboxFromTour = useCallback((index) => {
    // Don't reset triggerRef — keep the one that opened photo-tour
    previousViewRef.current = "photo-tour";
    setSelectedImageIndex(typeof index === "number" ? index : 0);
    setView("lightbox");
  }, []);

  // Close Lightbox → go back to wherever we came from
  const closeLightbox = useCallback(() => {
    const prev = previousViewRef.current;
    setView(prev);
    if (prev === "listing") {
      requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }, []);

  // Close Photo Tour → always back to listing
  const closePhotoTour = useCallback(() => {
    setView("listing");
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const toggleSaved = useCallback(() => {
    setIsSaved(prev => {
      const next = !prev;
      localStorage.setItem("airbnb-saved", String(next));
      return next;
    });
  }, []);

  return {
    view,
    selectedImageIndex,
    setSelectedImageIndex,
    isSaved,
    openPhotoTour,
    openLightbox,
    openLightboxFromTour,
    closeLightbox,
    closePhotoTour,
    toggleSaved,
  };
}
