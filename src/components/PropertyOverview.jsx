import { useState } from "react";
import styles from "./PropertyOverview.module.css";
import MirashyaLogo from "./MirashyaLogo.jsx";

function OutdoorIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 14h20v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V14z" />
      <path d="M16 6v8M10 10l6-4 6 4" />
    </svg>
  );
}

function CoolIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      {/* Fan center hub */}
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      {/* Fan blade 1 - top */}
      <path d="M16 13.5 C16 10 18 6 20 5 C22 4 24 5 24 7 C24 9 22 11 19 13 Z" />
      {/* Fan blade 2 - bottom-left */}
      <path d="M13.8 17.2 C11 19 7 20 5.5 19 C4 18 4 16 5.5 14.5 C7 13 9.5 13.5 12.5 15.5 Z" />
      {/* Fan blade 3 - bottom-right */}
      <path d="M18.2 17.2 C20 20 20.5 24 19.5 25.5 C18.5 27 16.5 27 15 25.5 C13.5 24 14 21 16 18 Z" />
    </svg>
  );
}

function DoorIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4h14a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6M6 4v24" />
      <circle cx="17" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

function getHighlightIcon(iconKey) {
  switch (iconKey) {
    case "outdoor": return <OutdoorIcon />;
    case "cool":    return <CoolIcon />;
    case "door":    return <DoorIcon />;
    default:        return <DoorIcon />;
  }
}

export default function PropertyOverview({ property }) {
  const { type, location, stats, rating, host, highlights, description } = property;
  const [showOriginal, setShowOriginal] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);

  const descText = Array.isArray(description) ? description[0] : String(description || "");

  return (
    <section className={styles.section} aria-label="Property overview">
      {/* Type + stats */}
      <div className={styles.typeBlock}>
        <h2 className={styles.typeTitle}>
          {type} in {location.city}, {location.country}
        </h2>
        <p className={styles.statsRow}>
          <span>{stats.guests} guests</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>{stats.bedrooms} bedroom</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>{stats.beds} bed</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>{stats.bathrooms} bathroom</span>
        </p>
      </div>

      {/* Guest favourite full-width horizontal card */}
      <div className={styles.guestFavCard}>
        <div className={styles.favLeft}>
          <div className={styles.laurelWrap}>
            <span className={styles.laurelIcon} aria-hidden="true">🌿</span>
            <div className={styles.favTitle}>
              <span>Guest</span>
              <span>favourite</span>
            </div>
            <span className={styles.laurelIcon} aria-hidden="true">🌿</span>
          </div>
          <p className={styles.favTagline}>
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>

        <div className={styles.favRight}>
          <div className={styles.scoreBlock}>
            <span className={styles.scoreNum}>{rating.average}</span>
            <div className={styles.starsRow} aria-hidden="true">
              {"★★★★★"}
            </div>
          </div>

          <div className={styles.favDivider} aria-hidden="true" />

          <div className={styles.reviewsBlock}>
            <span className={styles.revCountNum}>{rating.count}</span>
            <button
              type="button"
              className={styles.revLink}
              onClick={() => {
                document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Hosted by row */}
      <div className={styles.hostRow}>
        <div className={styles.hostAvatar}>
          <MirashyaLogo className={styles.hostLogo} />
        </div>
        <div className={styles.hostMeta}>
          <h3 className={styles.hostTitle}>Hosted by {host.name}</h3>
          <p className={styles.hostSub}>{host.hostingYears || "2 years hosting"}</p>
        </div>
      </div>

      <hr className={styles.inlineDivider} />

      {/* Highlights list */}
      <ul className={styles.highlights} aria-label="Property highlights">
        {highlights.map((h, i) => (
          <li key={i} className={styles.highlight}>
            <div className={styles.highlightIcon}>
              {getHighlightIcon(h.icon)}
            </div>
            <div className={styles.highlightContent}>
              <p className={styles.highlightTitle}>{h.title}</p>
              <p className={styles.highlightDesc}>{h.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <hr className={styles.inlineDivider} />

      {/* Translation notice banner */}
      <div className={styles.translationBox}>
        <span>Some info has been automatically translated. </span>
        <button
          type="button"
          className={styles.showOriginalBtn}
          onClick={() => setShowOriginal(!showOriginal)}
        >
          {showOriginal ? "Show translated" : "Show original"}
        </button>
      </div>

      {/* Description */}
      <div className={styles.descBlock}>
        <p className={`${styles.descText} ${!descExpanded ? styles.descClamped : ""}`}>
          {descText}
        </p>
        <button
          type="button"
          className={styles.showMoreBtn}
          onClick={() => setDescExpanded(!descExpanded)}
        >
          <span>{descExpanded ? "Show less" : "Show more"}</span>
          <span aria-hidden="true" className={styles.moreArrow}> &gt;</span>
        </button>
      </div>

      <hr className={styles.inlineDivider} />

      {/* Where you'll sleep */}
      <div className={styles.sleepSection}>
        <h2 className={styles.sleepHeading}>Where you'll sleep</h2>
        <div className={styles.sleepGrid}>
          <div className={styles.sleepCard}>
            <div className={styles.sleepImgWrap}>
              <img
                src="/images/main-property/bedroom01.avif"
                alt="Bedroom"
                className={styles.sleepImg}
              />
            </div>
            <h3 className={styles.sleepRoomTitle}>Bedroom</h3>
            <p className={styles.sleepBedType}>1 double bed</p>
          </div>

          <div className={styles.sleepCard}>
            <div className={styles.sleepImgWrap}>
              <img
                src="/images/main-property/livingroom01.avif"
                alt="Living room"
                className={styles.sleepImg}
              />
            </div>
            <h3 className={styles.sleepRoomTitle}>Living room</h3>
            <p className={styles.sleepBedType}>1 sofa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
