# Airbnb Desktop Listing Clone — "Romantic Jacuzzi 1BHK Condo/Isle | Himadhar US19"

A pixel-accurate, high-fidelity desktop-only clone of the Airbnb property listing page, built with **React**, **Vite**, and **CSS Modules**.

---

## 🎯 Overview & Scope

This project recreates the three major view experiences of the reference Airbnb listing:
1. **Listing Page**: Complete property information, sticky desktop header, 5-image hero mosaic gallery, structured overview, amenities grid with custom icons, host profile with verified details, category review breakdown, styled location map, rules/policies, and desktop footer.
2. **Photo Tour Overlay**: Full-screen white gallery view featuring a synchronized thumbnail sidebar, active room metadata, photo counter, and zoom inspection.
3. **Lightbox Modal**: Focused dark-overlay media viewer with smooth entrance animations, keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), focus trapping, live counters, and disabled edge bounds.

---

## 🛠️ Tech Stack & Technical Choices

- **Core Framework**: React 18 (pure JSX, modern hooks architecture)
- **Bundler & Dev Server**: Vite 5
- **Styling Architecture**: Scoped CSS Modules with custom design tokens (`src/styles/index.css`)
- **Typography**: Google Fonts (*Nunito Sans* as high-fidelity Circular fallback)
- **Icons**: Inline scalable SVGs matching Airbnb's exact iconography system
- **State Management**: Clean decoupled custom hooks (`useAppState`, `useLightbox`) without heavy third-party state libraries
- **Storage**: Browser `localStorage` persistence for wishlist / Save state

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation & Local Development

```bash
# Clone or navigate to the project root
cd Playpower

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

The application will be available at `http://localhost:5173/`.

### Production Build

```bash
# Compile and optimize production assets
npm run build

# Preview the production build locally
npm run preview
```

---

## 📐 Architecture & Component Structure

```
App
├── Header (Sticky desktop navigation with search pill and user menu)
├── ListingPage
│   ├── ListingHeader (Title, rating, "Guest favourite" badge, Share, Save)
│   ├── PhotoGallery (5-image mosaic with hover zoom & "Show all photos" button)
│   └── [1120px Content Grid: 1fr + 380px]
│       ├── Main Content Column (Left)
│       │   ├── PropertyOverview (Type, room stats, badge, highlight rows)
│       │   ├── HostSection (Host avatar, response stats, bio, safety note)
│       │   ├── Description (About this place with expandable "Show more")
│       │   ├── Amenities (19 category amenities with SVG icons & expander)
│       │   ├── ReviewsSection (Category score progress bars & 6 review cards)
│       │   └── LocationSection (Styled map container with pin & neighborhood bio)
│       ├── Sticky Sidebar (Right)
│       │   └── BookingCard (Pricing, date/guest triggers, reserve gradient, breakdown)
│       └── Full Width Lower Section
│           ├── ThingsToKnow (3-column grid: House Rules, Safety, Cancellation)
│           └── Footer (3 link columns, currency/language selectors, legal & socials)
├── PhotoTour (Overlay dialog with 360px thumbnail strip & synchronized viewer)
└── Lightbox (Dark modal dialog with centered image, keyboard arrows & focus trap)
```

---

## 🔄 State Machine & Interaction Flows

```
[Listing Page]
  │
  ├── Click Hero Image (0-4) ───────► [Lightbox Modal (index)]
  │                                        │
  │                                    [Close/Esc] ──► [Listing Page (Focus Restored)]
  │
  └── Click "Show all photos" ───────► [Photo Tour (Overlay)]
                                           │
                                       ├── Click Thumbnail ──► [Updates View + Scrolls Thumb]
                                           │
                                       ├── Click Main Image ─► [Lightbox Modal (index)]
                                       │                           │
                                       │                       [Close/Esc] ──► [Photo Tour]
                                       │
                                       └── Click "All photos" / Esc ──► [Listing Page]
```

---

## ⌨️ Accessibility & Keyboard Navigation Matrix

| View | Key / Action | Result |
| :--- | :--- | :--- |
| **Global** | `Tab` / `Shift+Tab` | Logical sequential focus order with high-visibility focus ring |
| **Listing** | Click Heart button | Toggles Saved state with `aria-pressed` & persists to `localStorage` |
| **Listing** | "Show more" | Expands full property description inline |
| **Listing** | "Show all amenities" | Expands all 19 amenities with custom SVG icons |
| **Lightbox** | `ArrowRight` | Navigates to next photo (clamped at last photo) |
| **Lightbox** | `ArrowLeft` | Navigates to previous photo (clamped at first photo) |
| **Lightbox** | `Escape` | Closes Lightbox and returns focus to the trigger element |
| **Lightbox** | Backdrop Click | Closes Lightbox (clicking image does not close) |
| **Lightbox** | `Tab` | Trapped inside the modal dialog |
| **Photo Tour** | `ArrowDown` | Selects next image & auto-scrolls thumbnail into view |
| **Photo Tour** | `ArrowUp` | Selects previous image & auto-scrolls thumbnail into view |
| **Photo Tour** | `Escape` | Closes Photo Tour and restores focus to "Show all photos" |

---

## 🤖 AI-Assisted Development Workflow

Development followed a strict 5-phase engineering protocol:

1. **Phase 1 — Project Foundation & Reference Analysis**:
   - Analyzed reference screenshots and UI hierarchy.
   - Initialized React + Vite workspace with CSS Modules.
   - Built centralized static data structures (`property.js`, `images.js`, `reviews.js`).
   - Defined design tokens (`src/styles/index.css`) for spacing, colors, shadows, and radii.

2. **Phase 2 — Listing Page Reconstruction**:
   - Recreated all 13 core listing page components.
   - Designed 5-image mosaic layout with hover micro-interactions.
   - Implemented sticky Booking Card with price calculation breakdown.

3. **Phase 3 — Photo Tour & Lightbox Systems**:
   - Developed full-screen `PhotoTour` with auto-scrolling thumbnail list.
   - Built dark `Lightbox` with smooth scale/fade animations and non-wrapping boundary guards.
   - Created decoupled hooks (`useAppState`, `useLightbox`) for view orchestration and focus management.

4. **Phase 4 — Accessibility, Interaction & Production Polish**:
   - Performed comprehensive accessibility audit: added semantic landmarks (`role="dialog"`, `role="group"`, `aria-modal`), fixed `<label>` associations in `BookingCard`.
   - Connected `localStorage` wishlist persistence.
   - Added image fallback resiliency (`onError` handlers) for offline/CORS reliability.

5. **Phase 5 — Pixel-Perfect QA & Submission Preparation**:
   - Verified layouts across desktop viewports (1280px, 1366px, 1440px, 1536px).
   - Validated clean production build (0 errors, 0 warnings).
   - Cleaned redundant dependencies, imports, and temporary development files.

---

## 🔍 Verification & Quality Metrics

- **Production Build**: Clean compilation in `<1s` (`66 modules transformed`).
- **Gzip Bundle Size**: JS `~63 kB`, CSS `~6.5 kB`.
- **Target Viewports Verified**: Primary QA at `1440px`; responsive desktop support at `1280px`, `1366px`, `1536px`.
- **Reduced Motion**: Full support via `@media (prefers-reduced-motion: reduce)`.
