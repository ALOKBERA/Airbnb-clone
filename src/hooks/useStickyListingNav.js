import { useState, useEffect, useCallback, useRef } from "react";

const SECTION_IDS = ["photos", "amenities", "reviews", "location"];

/**
 * useStickyListingNav
 *
 * Tracks:
 * 1. isVisible: whether the user has scrolled past the hero gallery (Header A scrolls away, Header B appears)
 * 2. activeSection: which section ('photos' | 'amenities' | 'reviews' | 'location') is currently in view
 */
export function useStickyListingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("photos");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // 1. Visibility of Sticky Header B
      const galleryEl = document.getElementById("photos");
      if (galleryEl) {
        const bottom = galleryEl.offsetTop + galleryEl.offsetHeight - 80;
        setIsVisible(scrollY > bottom);
      } else {
        setIsVisible(scrollY > 480);
      }

      // 2. Active section detection based on section scroll offsets
      if (!isScrollingRef.current) {
        const headerOffset = 120;
        const locationEl = document.getElementById("location");
        const reviewsEl = document.getElementById("reviews");
        const amenitiesEl = document.getElementById("amenities");

        if (locationEl && scrollY >= locationEl.offsetTop - headerOffset) {
          setActiveSection("location");
        } else if (reviewsEl && scrollY >= reviewsEl.offsetTop - headerOffset) {
          setActiveSection("reviews");
        } else if (amenitiesEl && scrollY >= amenitiesEl.offsetTop - headerOffset) {
          setActiveSection("amenities");
        } else {
          setActiveSection("photos");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    isScrollingRef.current = true;
    setActiveSection(id);

    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, []);

  return {
    isVisible,
    activeSection,
    scrollToSection,
  };
}
