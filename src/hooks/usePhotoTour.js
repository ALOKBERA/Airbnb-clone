import { useState, useRef, useCallback, useEffect } from "react";

const MODAL_PARAM = "PHOTO_TOUR_SCROLLABLE";

function getModalParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get("modal");
}

function setModalParam() {
  const url = new URL(window.location.href);
  url.searchParams.set("modal", MODAL_PARAM);
  window.history.pushState({ modal: MODAL_PARAM }, "", url.toString());
}

function clearModalParam() {
  const url = new URL(window.location.href);
  url.searchParams.delete("modal");
  window.history.pushState({}, "", url.pathname + (url.search || ""));
}

/**
 * usePhotoTour
 *
 * Manages Photo Tour open/close state, URL sync, and scroll position preservation.
 *
 * Returns:
 *   isPhotoTourOpen    — whether Photo Tour is visible
 *   photoTourScrollY   — scroll position to restore on Lightbox close
 *   openPhotoTour()    — open and set URL param
 *   closePhotoTour()   — close and remove URL param
 *   savePhotoTourScroll(y) — save current scroll before opening Lightbox
 */
export function usePhotoTour() {
  // Initialize from URL on first render
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(
    () => getModalParam() === MODAL_PARAM
  );
  const [photoTourScrollY, setPhotoTourScrollY] = useState(0);

  // Sync URL → state when browser back/forward is used
  useEffect(() => {
    const handlePopState = () => {
      const open = getModalParam() === MODAL_PARAM;
      setIsPhotoTourOpen(open);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openPhotoTour = useCallback(() => {
    setModalParam();
    setIsPhotoTourOpen(true);
  }, []);

  const closePhotoTour = useCallback(() => {
    clearModalParam();
    setIsPhotoTourOpen(false);
  }, []);

  const savePhotoTourScroll = useCallback((y) => {
    setPhotoTourScrollY(y);
  }, []);

  return {
    isPhotoTourOpen,
    photoTourScrollY,
    openPhotoTour,
    closePhotoTour,
    savePhotoTourScroll,
  };
}
