import { useState, useCallback, useMemo } from "react";
import styles from "./DatePicker.module.css";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/**
 * Helper to get days for a given year & month (0-indexed month)
 */
function getMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const grid = [];
  // Empty leading cells
  for (let i = 0; i < firstDay; i++) {
    grid.push(null);
  }
  // Days of the month
  for (let d = 1; d <= daysInMonth; d++) {
    grid.push(d);
  }
  return grid;
}

function formatDateStr(year, month, day) {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function formatDisplayDate(dateStr) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const day = date.getDate();
  const monthName = MONTH_NAMES[date.getMonth()].slice(0, 3);
  const year = date.getFullYear();
  return `${day} ${monthName} ${year}`;
}

function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diff = d2.getTime() - d1.getTime();
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
}

/**
 * DatePicker — Static two-month calendar matching the reference screenshot (Oct-Nov 2026).
 * Fixed to: Check-in 18 Oct 2026, Checkout 23 Oct 2026 (5 nights in Candolim).
 */
export default function DatePicker({ property }) {
  const baseYear = 2026;
  const baseMonth = 9; // October (0-indexed)

  const checkIn = "2026-10-18";
  const checkOut = "2026-10-23";

  const month1Year = baseYear;
  const month1Month = baseMonth;
  const month2Year = baseYear;
  const month2Month = baseMonth + 1; // November

  const month1Grid = useMemo(() => getMonthGrid(month1Year, month1Month), [month1Year, month1Month]);
  const month2Grid = useMemo(() => getMonthGrid(month2Year, month2Month), [month2Year, month2Month]);

  // November unavailable dates as seen in reference: 18, 19, 20, 21, 22, 23, 24, 29, 30
  const novDisabledDays = useMemo(() => new Set([18, 19, 20, 21, 22, 23, 24, 29, 30]), []);

  const renderMonth = (year, month, grid, showPrev, showNext) => {
    const isNov = month === 10;

    return (
      <div className={styles.monthCol}>
        <div className={styles.monthHeader}>
          {showPrev ? (
            <button
              type="button"
              className={styles.monthNavBtn}
              aria-label="Previous month"
              tabIndex={-1}
            >
              <svg viewBox="0 0 32 32" width="12" height="12" aria-hidden="true">
                <path d="M20 28 8 16 20 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ) : <div className={styles.monthNavPlaceholder} />}

          <h3 className={styles.monthTitle}>
            {MONTH_NAMES[month]} {year}
          </h3>

          {showNext ? (
            <button
              type="button"
              className={styles.monthNavBtn}
              aria-label="Next month"
              tabIndex={-1}
            >
              <svg viewBox="0 0 32 32" width="12" height="12" aria-hidden="true">
                <path d="M12 4l12 12-12 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ) : <div className={styles.monthNavPlaceholder} />}
        </div>

        <div className={styles.weekdaysRow}>
          {WEEKDAYS.map((wd, i) => (
            <span key={i} className={styles.weekday}>
              {wd}
            </span>
          ))}
        </div>

        <div className={styles.daysGrid}>
          {grid.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className={styles.emptyDay} />;
            }

            const dateStr = formatDateStr(year, month, day);
            const isStart = dateStr === checkIn;
            const isEnd = dateStr === checkOut;
            const isInRange = dateStr > checkIn && dateStr < checkOut;
            const isDisabled = isNov && novDisabledDays.has(day);

            let dayClasses = styles.dayBtn;
            if (isStart) {
              dayClasses += ` ${styles.daySelectedStart}`;
            } else if (isEnd) {
              dayClasses += ` ${styles.daySelectedEnd}`;
            } else if (isInRange) {
              dayClasses += ` ${styles.dayInRange}`;
            } else if (isDisabled) {
              dayClasses += ` ${styles.dayDisabled}`;
            }

            return (
              <div
                key={dateStr}
                className={`${styles.dayCell} ${isInRange ? styles.cellInRange : ""} ${isStart ? styles.cellStart : ""} ${isEnd ? styles.cellEnd : ""}`}
              >
                <span
                  className={dayClasses}
                  aria-label={`${day} ${MONTH_NAMES[month]} ${year}`}
                >
                  {day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const city = property?.location?.city || "Candolim";

  return (
    <section id="calendar" className={styles.section} aria-labelledby="calendar-heading">
      <div className={styles.header}>
        <h2 id="calendar-heading" className={styles.heading}>
          5 nights in {city}
        </h2>
        <p className={styles.subText}>18 Oct 2026 - 23 Oct 2026</p>
      </div>

      <div className={styles.calendarContainer}>
        {renderMonth(month1Year, month1Month, month1Grid, true, false)}
        {renderMonth(month2Year, month2Month, month2Grid, false, true)}
      </div>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.keyboardBtn}
          aria-label="Keyboard shortcuts"
        >
          <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
            <path d="M29 6H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM3 8h26v16H3V8zm3 3h3v3H6v-3zm5 0h3v3h-3v-3zm5 0h3v3h-3v-3zm5 0h3v3h-3v-3zm5 0h3v3h-3v-3zM6 15h3v3H6v-3zm5 0h3v3h-3v-3zm5 0h3v3h-3v-3zm5 0h3v3h-3v-3zm5 0h3v3h-3v-3zM8 19h16v3H8v-3z" fill="currentColor"/>
          </svg>
        </button>

        <button
          type="button"
          className={styles.clearBtn}
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}
