import styles from "./ThingsToKnow.module.css";

const TTK_SECTIONS = [
  {
    id: "cancellation",
    title: "Cancellation policy",
    icon: (
      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="6" width="26" height="23" rx="2" />
        <path d="M3 13h26M9 3v4M23 3v4M12 18l8 8M20 18l-8 8" />
      </svg>
    ),
    items: [
      "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
      "Review this host’s full policy for details.",
    ],
    linkText: "Learn more",
  },
  {
    id: "house-rules",
    title: "House rules",
    icon: (
      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="21" cy="11" r="6" />
        <circle cx="21" cy="11" r="2" />
        <path d="M16.5 15.5L5 27" />
        <path d="M8 24l3 3" />
        <path d="M12 20l3 3" />
      </svg>
    ),
    items: [
      "Check-in after 2:00 pm",
      "Checkout before 11:00 am",
      "3 guests maximum",
    ],
    linkText: "Learn more",
  },
  {
    id: "safety-property",
    title: "Safety & property",
    icon: (
      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 3L5 7v9c0 7.5 4.7 12.5 11 14 6.3-1.5 11-6.5 11-14V7L16 3z" />
      </svg>
    ),
    items: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
    linkText: "Learn more",
  },
];

/**
 * ThingsToKnow — Recreated exactly from the reference screenshot.
 *
 * 3 Columns:
 *   1. Cancellation policy (Calendar icon)
 *   2. House rules (Key icon)
 *   3. Safety & property (Shield icon)
 */
export default function ThingsToKnow() {
  return (
    <section className={styles.section} aria-labelledby="ttk-heading">
      <h2 id="ttk-heading" className={styles.title}>
        Things to know
      </h2>

      <div className={styles.grid}>
        {TTK_SECTIONS.map((sec) => (
          <div key={sec.id} className={styles.col}>
            {/* Top Icon */}
            <div className={styles.iconWrap} aria-hidden="true">
              {sec.icon}
            </div>

            {/* Column Heading */}
            <h3 className={styles.colTitle}>{sec.title}</h3>

            {/* Item Texts */}
            <div className={styles.contentList}>
              {sec.items.map((text, idx) => (
                <p key={idx} className={styles.itemText}>
                  {text}
                </p>
              ))}
            </div>

            {/* Learn More Link */}
            {sec.linkText && (
              <a
                href="/"
                className={styles.learnMoreBtn}
                onClick={(e) => e.preventDefault()}
              >
                {sec.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
