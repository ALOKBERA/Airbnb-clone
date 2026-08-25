import AmenityIcon from "./AmenityIcon.jsx";
import styles from "./AmenitiesModal.module.css";

/**
 * AmenityItem — Single amenity row with icon, label, and unavailable strikethrough styling.
 */
export default function AmenityItem({ item }) {
  const { name, icon, available = true } = item;

  return (
    <div className={`${styles.itemRow} ${!available ? styles.unavailable : ""}`}>
      <span className={styles.iconWrap} aria-hidden="true">
        <AmenityIcon name={icon} />
      </span>
      <span className={`${styles.itemName} ${!available ? styles.strikethrough : ""}`}>
        {name}
      </span>
    </div>
  );
}
