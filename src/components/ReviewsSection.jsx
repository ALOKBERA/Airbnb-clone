import { useState } from "react";
import styles from "./ReviewsSection.module.css";
import { reviews } from "../data/reviews.js";
import ReviewCategoryCarousel from "./reviews/ReviewCategoryCarousel.jsx";
import laurelLeft from "../../image/laurel-left.png";
import laurelRight from "../../image/laurel-right.png";

const HISTOGRAM = [
  { star: 5, fillPercent: 95 },
  { star: 4, fillPercent: 5 },
  { star: 3, fillPercent: 0 },
  { star: 2, fillPercent: 0 },
  { star: 1, fillPercent: 0 },
];

const RATING_COLUMNS = [
  {
    name: "Cleanliness",
    score: "5.0",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M16 2l2.5 5.5L24 10l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-2.5L16 2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 23l1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2L4 25.5l2-.5 1-2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 21l1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2-1.5-1.5 2-.5 1-2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Accuracy",
    score: "5.0",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="16" cy="16" r="13"/>
        <path d="M10 16.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Check-in",
    score: "5.0",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="21" cy="11" r="6" />
        <circle cx="21" cy="11" r="2" />
        <path d="M16.5 15.5L5 27" />
        <path d="M8 24l3 3" />
        <path d="M12 20l3 3" />
      </svg>
    ),
  },
  {
    name: "Communication",
    score: "5.0",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M28 15a11 11 0 0 1-11 11c-2.3 0-4.4-.7-6.2-1.9L4 26l1.9-6.8A10.9 10.9 0 0 1 5 15C5 8.9 10.1 4 17 4s11 4.9 11 11z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 14h.01M17 14h.01M23 14h.01" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Location",
    score: "4.8",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M16 28s9-8.5 9-15a9 9 0 1 0-18 0c0 6.5 9 15 9 15z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="13" r="3"/>
      </svg>
    ),
  },
  {
    name: "Value",
    score: "4.8",
    icon: (
      <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M16 3L3 16l13 13 13-13L16 3z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      </svg>
    ),
  },
];

/**
 * ReviewsSection — Matching the exact reference website UI (Image 1).
 */
export default function ReviewsSection({ property }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});
  const ratingCount = property?.rating?.count || 19;

  const toggleReviewExpand = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="reviews" className={styles.section} aria-labelledby="reviews-heading">
      {/* ── 1. Hero Rating Header (Large 4.95 with Laurels) ── */}
      <div className={styles.heroBanner}>
        <div className={styles.laurelContainer}>
          {/* Left Laurel */}
          <img
            src={laurelLeft}
            alt=""
            className={styles.laurelImg}
            aria-hidden="true"
          />

          {/* Center Score */}
          <div className={styles.heroScoreCenter}>
            <span className={styles.heroScoreNumber}>4.95</span>
          </div>

          {/* Right Laurel */}
          <img
            src={laurelRight}
            alt=""
            className={styles.laurelImg}
            aria-hidden="true"
          />
        </div>

        <h2 id="reviews-heading" className={styles.heroTitle}>
          Guest favourite
        </h2>
        <p className={styles.heroSubtitle}>
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a
          href="/"
          className={styles.howReviewsWork}
          onClick={(e) => e.preventDefault()}
        >
          How reviews work
        </a>
      </div>

      {/* ── 2. Review Rating Matrix (One Single Horizontal Row with Vertical Dividers) ── */}
      <div className={styles.matrixRow} role="region" aria-label="Review rating breakdown">
        {/* Column 1: Overall rating histogram */}
        <div className={styles.overallCol}>
          <p className={styles.colTitle}>Overall rating</p>
          <div className={styles.histogram}>
            {HISTOGRAM.map((item) => (
              <div key={item.star} className={styles.histoRow}>
                <span className={styles.histoStarNum}>{item.star}</span>
                <div className={styles.histoTrack} role="presentation">
                  <div
                    className={styles.histoFill}
                    style={{ width: `${item.fillPercent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remaining Columns with Vertical Dividers */}
        {RATING_COLUMNS.map((col) => (
          <div key={col.name} className={styles.categoryCol}>
            <div className={styles.vDivider} aria-hidden="true" />
            <div className={styles.colContent}>
              <p className={styles.colTitle}>{col.name}</p>
              <p className={styles.colScore}>{col.score}</p>
              <div className={styles.colIcon} aria-hidden="true">
                {col.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className={styles.subDivider} />

      {/* ── 3. Horizontally Scrollable Review Category Chips Carousel ── */}
      <ReviewCategoryCarousel
        selectedId={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* ── 4. Review Cards 2-Column Grid Matching Reference ── */}
      <div className={styles.reviewGrid}>
        {reviews.map((r) => {
          const isExpanded = !!expandedReviews[r.id];
          const reviewText = isExpanded && r.fullText ? r.fullText : r.text;

          return (
            <article key={r.id} className={styles.reviewCard}>
              {/* Reviewer Header */}
              <div className={styles.reviewer}>
                {r.avatar ? (
                  <img
                    src={r.avatar}
                    alt={r.author}
                    className={styles.avatarImg}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={styles.avatarInitials}
                    style={{
                      backgroundColor: r.initialBg || "#f3e8db",
                      color: r.initialColor || "#713b12",
                    }}
                    aria-hidden="true"
                  >
                    <span>{r.initials}</span>
                  </div>
                )}
                <div className={styles.reviewerInfo}>
                  <p className={styles.reviewerName}>{r.author}</p>
                  <p className={styles.reviewerMeta}>{r.tenure}</p>
                </div>
              </div>

              {/* Stars + Date */}
              <div className={styles.ratingDateRow}>
                <div className={styles.starsRow} aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 32 32"
                      width="10"
                      height="10"
                      fill="currentColor"
                      className={styles.starSvg}
                      aria-hidden="true"
                    >
                      <path d="M15.094 1.579l-4.124 8.485-9.86 1.32a1 1 0 0 0-.542 1.736l7.293 6.602-1.965 9.842a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.674a1 1 0 0 0 1.482-1.06l-1.965-9.843 7.293-6.602a1 1 0 0 0-.541-1.735l-9.86-1.32-4.126-8.485a1 1 0 0 0-1.814 0z" />
                    </svg>
                  ))}
                </div>
                <span className={styles.reviewDate}>· {r.date}</span>
              </div>

              {/* Review Content */}
              <p className={styles.reviewText}>{reviewText}</p>

              {/* Show more / Show less button if long */}
              {r.hasShowMore && (
                <button
                  type="button"
                  className={styles.showMoreBtn}
                  onClick={() => toggleReviewExpand(r.id)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? "Show less >" : "Show more >"}
                </button>
              )}
            </article>
          );
        })}
      </div>

      {/* ── 5. Show all 19 reviews button ── */}
      <button type="button" className={styles.showAllBtn}>
        Show all {ratingCount} reviews
      </button>
    </section>
  );
}
