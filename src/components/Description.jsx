import { useState } from "react";
import styles from "./Description.module.css";

/**
 * Description — expandable "About this place" section.
 */
export default function Description({ property }) {
  const [expanded, setExpanded] = useState(false);
  const rawDescription = property?.description;
  const fullText = Array.isArray(rawDescription)
    ? rawDescription.join("\n\n")
    : typeof rawDescription === "object"
    ? rawDescription?.full || ""
    : String(rawDescription || "");

  const threshold = 350;
  const isLong = fullText.length > threshold;
  const displayText = expanded || !isLong
    ? fullText
    : fullText.slice(0, threshold);


  return (
    <section className={styles.section} aria-labelledby="desc-heading">
      <h2 id="desc-heading" className={styles.title}>About this place</h2>
      <div className={styles.textWrap}>
        <p
          className={`${styles.text} ${!expanded && isLong ? styles.clamped : ""}`}
          style={{ whiteSpace: "pre-line" }}
        >
          {displayText}
          {!expanded && isLong && "…"}
        </p>
      </div>
      {isLong && (
        <button
          className={styles.showMore}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? (
            <>Show less <span className={styles.arrow}>↑</span></>
          ) : (
            <>Show more <span className={styles.arrow}>→</span></>
          )}
        </button>
      )}
    </section>
  );
}
