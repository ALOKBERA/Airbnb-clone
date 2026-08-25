import { useEffect, useCallback } from "react";

/**
 * useLightbox
 * Manages keyboard navigation (ArrowLeft / ArrowRight / Escape) for the Lightbox.
 * Does NOT wrap around — first/last image disables the respective arrow.
 *
 * @param {object} params
 * @param {boolean} params.isOpen
 * @param {number}  params.currentIndex
 * @param {number}  params.total
 * @param {Function} params.setCurrentIndex
 * @param {Function} params.onClose
 */
export function useLightbox({ isOpen, currentIndex, total, setCurrentIndex, onClose }) {
  const goNext = useCallback(() => {
    setCurrentIndex(i => Math.min(i + 1, total - 1));
  }, [setCurrentIndex, total]);

  const goPrev = useCallback(() => {
    setCurrentIndex(i => Math.max(i - 1, 0));
  }, [setCurrentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      switch (e.key) {
        case "ArrowRight": e.preventDefault(); goNext(); break;
        case "ArrowLeft":  e.preventDefault(); goPrev(); break;
        case "Escape":     e.preventDefault(); onClose(); break;
        default: break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goNext, goPrev, onClose]);

  return { goNext, goPrev };
}
