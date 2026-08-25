/**
 * AmenityIcon — Renders Airbnb-style line SVG icons for all amenity items.
 */

const ICONS = {
  kitchen: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="3" width="24" height="26" rx="2"/>
      <path d="M4 12h24M10 7.5v1M16 7.5v1M22 7.5v1"/>
      <circle cx="10" cy="20" r="2"/>
      <circle cx="22" cy="20" r="2"/>
    </svg>
  ),
  workspace: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 24h24M8 24v-6h16v6M6 18h20"/>
      <path d="M12 18V8h8v10M16 4v4"/>
    </svg>
  ),
  pool: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M2 20c3-2 6-2 9 0s6 2 9 0 6-2 9 0M2 26c3-2 6-2 9 0s6 2 9 0 6-2 9 0"/>
      <path d="M16 14a4 4 0 1 0-8 0v2h8v-2zM12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    </svg>
  ),
  pets: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M16 28c-4 0-7-2.5-7-6 0-3 3-5 7-5s7 2 7 5c0 3.5-3 6-7 6z"/>
      <circle cx="9" cy="12" r="3"/>
      <circle cx="15" cy="8" r="3"/>
      <circle cx="21" cy="9" r="3"/>
      <circle cx="25" cy="15" r="2.5"/>
    </svg>
  ),
  "co-alarm": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="16" cy="16" r="12"/>
      <path d="M11 16h10M16 11v10"/>
      <line x1="4" y1="28" x2="28" y2="4" strokeWidth="2"/>
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1.41 9.5A19.5 19.5 0 0 1 30.59 9.5M5.26 13.66A14 14 0 0 1 26.74 13.66M9.1 17.81A8.5 8.5 0 0 1 22.9 17.81M16 23a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
    </svg>
  ),
  parking: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="3"/>
      <path d="M12 23V9h6a4.5 4.5 0 0 1 0 9h-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "hot-tub": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 18h24v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4z"/>
      <path d="M8 14c0-2 1.5-3 1.5-5M16 14c0-2 1.5-3 1.5-5M24 14c0-2 1.5-3 1.5-5"/>
      <path d="M2 18h28"/>
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/>
      <path d="M21 13l8-5v16l-8-5v-6z"/>
    </svg>
  ),
  "smoke-alarm": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="16" cy="16" r="12"/>
      <circle cx="16" cy="16" r="4"/>
      <line x1="4" y1="28" x2="28" y2="4" strokeWidth="2"/>
    </svg>
  ),
  hairdryer: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 8h12a6 6 0 0 1 6 6v1a6 6 0 0 1-6 6H6V8z"/>
      <path d="M12 21v7a2 2 0 0 0 2 2h2"/>
      <path d="M6 11H2v8h4"/>
    </svg>
  ),
  "cleaning-products": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M8 12h12v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V12z"/>
      <path d="M12 12V7a2 2 0 0 1 2-2h2"/>
      <path d="M14 4h8l-2 3h-6"/>
    </svg>
  ),
  shampoo: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="9" y="10" width="14" height="18" rx="3"/>
      <path d="M13 10V6h6v4M11 6h10"/>
    </svg>
  ),
  "hot-water": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 14a10 10 0 0 1 20 0v2H6v-2zM16 4v4M10 20v2M16 20v4M22 20v2"/>
      <path d="M10 27v2M16 29v2M22 27v2"/>
    </svg>
  ),
  "shower-gel": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="10" y="8" width="12" height="20" rx="3"/>
      <path d="M13 8V4h6v4M16 13v5"/>
    </svg>
  ),
  washer: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="3"/>
      <circle cx="16" cy="18" r="6"/>
      <path d="M7 8h3M13 8h2"/>
    </svg>
  ),
  hangers: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M16 6a3 3 0 0 1 3 3c0 2-3 2-3 4l12 9a2 2 0 0 1-1 3H5a2 2 0 0 1-1-3l12-9z"/>
    </svg>
  ),
  "bed-linen": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 24V11a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v13M3 24h26M3 28h26"/>
      <path d="M10 11h12"/>
    </svg>
  ),
  blinds: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="2"/>
      <path d="M4 10h24M4 16h24M4 22h24"/>
    </svg>
  ),
  iron: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M28 20c0-6-6-10-14-10H4v10h24zM8 10V6h12a4 4 0 0 1 4 4M4 24h24"/>
    </svg>
  ),
  wardrobe: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="3" width="24" height="26" rx="2"/>
      <path d="M16 3v26M13 14v4M19 14v4"/>
    </svg>
  ),
  cot: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 8v16M28 8v16M4 20h24M4 12h24M10 12v8M16 12v8M22 12v8"/>
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="6" width="28" height="18" rx="2"/>
      <path d="M10 28h12M16 24v4"/>
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="7" width="28" height="11" rx="2"/>
      <path d="M7 18v6M16 18v6M25 18v6"/>
    </svg>
  ),
  fan: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="16" cy="16" r="3"/>
      <path d="M16 4v9M16 19v9M4 16h9M19 16h9"/>
    </svg>
  ),
  fridge: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="7" y="2" width="18" height="28" rx="2"/>
      <path d="M7 12h18M11 7v3M11 16v5"/>
    </svg>
  ),
  freezer: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="5" y="6" width="22" height="20" rx="2"/>
      <path d="M5 13h22M14 18h4"/>
    </svg>
  ),
  microwave: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="7" width="28" height="18" rx="2"/>
      <rect x="5" y="10" width="15" height="12" rx="1"/>
      <circle cx="25" cy="13" r="1.5" fill="currentColor"/>
      <circle cx="25" cy="19" r="1.5" fill="currentColor"/>
    </svg>
  ),
  "cooking-basics": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 14h22v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V14zM2 14h3M27 14h3"/>
      <path d="M16 6v4M10 10h12"/>
    </svg>
  ),
  cutlery: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M8 4v8a4 4 0 0 0 4 4v12M12 4v8M10 4v8"/>
      <path d="M22 4v24M22 4c3 0 4 3 4 8v4h-4"/>
    </svg>
  ),
  kettle: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M8 12h14l2 14H6l2-14zM12 12V8a3 3 0 0 1 6 0v4"/>
      <path d="M22 15h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3M6 16l-3-2"/>
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 12h16v10a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V12z"/>
      <path d="M22 14h2a4 4 0 0 1 0 8h-2"/>
      <path d="M10 5c0-2 4-2 4-4M16 5c0-2 4-2 4-4"/>
    </svg>
  ),
  wine: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 4h14v7a7 7 0 0 1-14 0V4zM16 18v10M10 28h12"/>
    </svg>
  ),
  toaster: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="11" width="24" height="15" rx="3"/>
      <path d="M8 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5M4 22h24"/>
    </svg>
  ),
  blender: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 5h14l-2 16H11L9 5zM8 21h16v7H8v-7zM16 24v2"/>
    </svg>
  ),
  cooker: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="26" height="22" rx="2"/>
      <circle cx="10" cy="16" r="4"/>
      <circle cx="22" cy="16" r="4"/>
    </svg>
  ),
  entrance: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 3h16a2 2 0 0 1 2 2v24H6V3z"/>
      <circle cx="18" cy="16" r="1.5" fill="currentColor"/>
    </svg>
  ),
  balcony: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 14h24v4H4zM4 18v10M28 18v10M4 28h24M10 18v10M16 18v10M22 18v10"/>
    </svg>
  ),
  dining: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 14h20v4H6zM8 18v10M24 18v10M4 6v8M28 6v8"/>
    </svg>
  ),
  gym: (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 12v8M10 10v12M22 10v12M26 12v8M10 16h12"/>
    </svg>
  ),
  "cleaning-stay": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M16 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zM6 20l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3zM26 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
    </svg>
  ),
  "long-term": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="6" width="24" height="22" rx="2"/>
      <path d="M4 12h24M10 3v6M22 3v6"/>
    </svg>
  ),
  "self-checkin": (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="8" y="4" width="16" height="24" rx="2"/>
      <circle cx="16" cy="12" r="2"/>
      <path d="M12 20h8M12 24h8"/>
    </svg>
  ),
};

export default function AmenityIcon({ name }) {
  return ICONS[name] ?? (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="16" cy="16" r="12"/>
      <path d="M12 16l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
