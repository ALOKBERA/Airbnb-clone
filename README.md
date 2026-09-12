# Airbnb Desktop Listing Clone — Candolim, Goa

A pixel-accurate, high-fidelity desktop clone of the Airbnb serviced apartment listing page, built with **React**, **Vite**, and **CSS Modules**.

---

## 🎯 Overview & Key Features

This project recreates the full desktop experience of the reference Airbnb listing with high attention to visual fidelity, micro-interactions, and responsive layout:

1. **Header & Search Bar**:
   - Airbnb desktop branding with custom house illustration in the search pill (`searchbar-house.png`).
   - "Anywhere | Anytime | Add guests" search pill with hover shadow effect.
   - Host link, language/currency modal trigger, and user hamburger menu.

2. **Sticky Sub-Header Navigation (`StickyListingNav`)**:
   - Smooth slide-in navigation bar appearing on scroll past the hero gallery.
   - Tab anchors: **Photos**, **Amenities**, **Reviews**, and **Location** with active indicator bar.
   - Compact summary containing pricing (`₹28,499 for 5 nights`), rating score (`★ 4.95 · 19 reviews`), and rounded gradient **Reserve** button (`#E51E4D` → `#D70566`).

3. **Hero Photo Gallery & Modal Views**:
   - 5-image mosaic grid with subtle hover zoom and "Show all photos" trigger.
   - **Photo Tour Overlay**: Synchronized thumbnail sidebar and high-res image view.
   - **Lightbox Modal**: Dark-overlay media viewer with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`) and boundary clamping.

4. **Property Overview & "Where you'll sleep"**:
   - Entire serviced apartment specs (2 guests · 1 bedroom · 1 bed · 1 bathroom).
   - "Where you'll sleep" preview cards with bedroom and living room images.
   - Expandable description with inline toggle.

5. **Amenities Matrix**:
   - 19 categorized amenities with custom SVG icons (Kitchen, Wi-Fi, Pool, Air conditioning, etc.).
   - Expandable full amenities modal dialog.

6. **Static Calendar (`DatePicker`)**:
   - Two-month display (October 2026 & November 2026) locked to **18 Oct 2026 – 23 Oct 2026** (5 nights in Candolim).
   - Highlighted in-range selection bar and strikethrough styling for unavailable dates.

7. **Sticky Booking Card (`BookingCard`)**:
   - Floating sidebar card synchronized with calendar dates and guest counts.
   - Price calculation breakdown with cleaning and service fees.

8. **Reviews Section (`ReviewsSection`)**:
   - Centered **4.95** rating header flanked by laurel graphics (`laurel-left.png` & `laurel-right.png`).
   - Overall rating histogram and 6 category breakdown metrics (Cleanliness, Accuracy, Check-in, Communication, Location, Value).
   - Horizontally scrollable review filter chips carousel.
   - Review cards with interactive **"Show more >" / "Show less >"** toggle for expanded review text.

9. **Location Map (`LocationSection`)**:
   - Interactive Leaflet map centered on Candolim, Goa with custom circular location pin and zoom controls.
   - Neighborhood highlights and static "Show more >" link.

10. **"Meet your host" Section (`HostSection`)**:
    - Dual-column host card: Mirashya Homes branding avatar with verified checkmark badge, title, and role on the left; Reviews (1,463), Rating (4.68★), and Hosting tenure (2 years) stats on the right.
    - Host personal bio tags ("Born in the 80s", "Where I went to school: NICMAR GOA") positioned under the host card.
    - 8 Co-hosts avatar grid, response rate details, "Message host" action button, and Airbnb payment security note.

11. **Policies & Footer (`ThingsToKnow` & `Footer`)**:
    - 3-column policies grid: Cancellation policy, House rules, and Safety & property.
    - Comprehensive desktop footer with support links, hosting resources, and localized legal links.

---

## 🛠️ Tech Stack

- **Core Framework**: React 18 (Hooks-based functional architecture)
- **Build Tool**: Vite
- **Styling Architecture**: Scoped CSS Modules with centralized design tokens (`src/styles/index.css`)
- **Mapping Engine**: Leaflet & React-Leaflet with OpenStreetMap tiles
- **Typography**: Google Fonts (*Nunito Sans* / *Circular* system fallbacks)
- **State Management**: Scoped custom hooks (`useAppState`, `useLightbox`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation & Local Development

```bash
# Clone or navigate to the project root
cd Airbnb_clone

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

The application will be available locally at `http://localhost:5173/`.

### Production Build

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Component Directory Structure

```
src/
├── assets/                  # SVG and static icon assets
├── components/
│   ├── amenities/           # Amenities grid and modal dialog
│   ├── booking/             # DatePicker (static calendar) and BookingCard
│   ├── lightbox/            # Fullscreen dark lightbox image viewer
│   ├── photo-tour/          # Fullscreen photo tour modal with thumbnail strip
│   ├── reviews/             # Review category chips carousel
│   ├── sticky-nav/          # Sticky sub-header navigation bar
│   ├── Description.jsx      # Property description component
│   ├── Footer.jsx           # Listing page footer
│   ├── Header.jsx           # Main sticky navigation header
│   ├── HostSection.jsx      # "Meet your host" card, co-hosts, and bio
│   ├── ListingHeader.jsx    # Listing title, share/save actions
│   ├── ListingPage.jsx      # Main layout assembly
│   ├── LocationSection.jsx  # Interactive map & neighborhood info
│   ├── NearbyStays.jsx      # Recommendations carousel
│   ├── PhotoGallery.jsx     # 5-image hero mosaic
│   ├── PropertyOverview.jsx # Room stats, sleep section, highlights
│   ├── ReviewsSection.jsx   # Hero 4.95 score, breakdown, and cards
│   └── ThingsToKnow.jsx     # House rules, safety & cancellation
├── data/
│   ├── amenities.js         # Amenities list & categorizations
│   ├── images.js            # Image gallery dataset
│   ├── property.js          # Main listing metadata & host info
│   └── reviews.js           # Reviews data with full text expansions
├── hooks/
│   ├── useAppState.js       # Global modal/view coordination
│   ├── useFavorites.js      # LocalStorage wishlist persistence
│   └── useLightbox.js       # Lightbox index navigation & keyboard hooks
└── styles/
    └── index.css            # Global design tokens (colors, spacing, typography)
```

---

## ⌨️ Accessibility & Interaction Controls

| Component | Key / Action | Result |
| :--- | :--- | :--- |
| **Global** | `Tab` / `Shift+Tab` | Accessible sequential focus navigation |
| **Listing** | Click Heart Button | Toggles Saved state & persists to `localStorage` |
| **Reviews** | Click "Show more >" | Toggles review to "Show less >" and displays full review text |
| **Gallery** | Click Hero Image | Opens Lightbox modal at selected image index |
| **Gallery** | "Show all photos" | Opens full-screen Photo Tour overlay |
| **Lightbox** | `ArrowRight` / `ArrowLeft` | Navigates forward / backward with boundary clamping |
| **Lightbox** | `Escape` / Backdrop Click | Closes Lightbox and returns focus to trigger |
| **Photo Tour**| `Escape` | Closes Photo Tour and restores focus |

---

## 🔍 Verification & Performance

- **Production Build**: Clean compilation with zero errors (`npm run build`).
- **Responsive Layout**: Designed for standard desktop viewports (1280px, 1366px, 1440px, 1536px, 1920px).
- **Reduced Motion**: Full support via `@media (prefers-reduced-motion: reduce)`.
