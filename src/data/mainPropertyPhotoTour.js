/**
 * mainPropertyPhotoTour.js
 * Single Source of Truth for "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10".
 * Sourced directly from reference: https://airbnb-clone-umber-two.vercel.app/?modal=PHOTO_TOUR_SCROLLABLE
 *
 * Drives:
 *   1. Main Listing Gallery (5 hero images)
 *   2. Photo Tour Category Navigation & Mosaic (?modal=PHOTO_TOUR_SCROLLABLE)
 *   3. Lightbox Fullscreen Navigation (flat sequential order of 44 images)
 */

export const MAIN_PROPERTY_ASSETS = {
  // Living room 1
  lr1_01: { id: "lr1-01", src: "/images/main-property/livingroom01.avif", alt: "Living room with yellow sofa and warm ambient lighting", caption: "Living room 1", room: "Living room 1" },
  lr1_02: { id: "lr1-02", src: "/images/main-property/livingroom02.avif", alt: "Living room coffee table and lounge setup", caption: "Coffee table and decor", room: "Living room 1" },
  lr1_03: { id: "lr1-03", src: "/images/main-property/livingroom03.avif", alt: "Spacious living room looking towards balcony", caption: "View towards balcony", room: "Living room 1" },
  lr1_04: { id: "lr1-04", src: "/images/main-property/livingroom04.avif", alt: "Living room entertainment center and smart TV", caption: "Entertainment setup", room: "Living room 1" },
  lr1_05: { id: "lr1-05", src: "/images/main-property/livingroom05.avif", alt: "Warm interior lighting and side table", caption: "Side table and decor", room: "Living room 1" },
  lr1_06: { id: "lr1-06", src: "/images/main-property/livingroom06.avif", alt: "Full angle of main living space", caption: "Full angle of living space", room: "Living room 1" },

  // Living room 2
  lr2_01: { id: "lr2-01", src: "/images/main-property/livingroom07.avif", alt: "Second living room view with open-concept dining", caption: "Living room 2", room: "Living room 2" },
  lr2_02: { id: "lr2-02", src: "/images/main-property/livingroom08.avif", alt: "Living room secondary seating and decor", caption: "Secondary seating", room: "Living room 2" },
  lr2_03: { id: "lr2-03", src: "/images/main-property/livingroom09.avif", alt: "Dining space adjacent to living room", caption: "Dining area", room: "Living room 2" },
  lr2_04: { id: "lr2-04", src: "/images/main-property/livingroom10.avif", alt: "Balcony access from living room 2", caption: "Balcony doorway", room: "Living room 2" },

  // Full kitchen
  k_01: { id: "k-01", src: "/images/main-property/kitchen01.avif", alt: "Fully equipped modular kitchen with appliances", caption: "Full kitchen", room: "Full kitchen" },
  k_02: { id: "k-02", src: "/images/main-property/kitchen02.avif", alt: "Refrigerator and kitchen prep counter", caption: "Kitchen prep area", room: "Full kitchen" },

  // Bedroom
  bed_01: { id: "bed-01", src: "/images/main-property/bedroom01.avif", alt: "Master king bed with ambient lighting", caption: "Bedroom", room: "Bedroom" },
  bed_02: { id: "bed-02", src: "/images/main-property/bedroom02.avif", alt: "Bedroom wardrobe and storage", caption: "Wardrobe & storage", room: "Bedroom" },
  bed_03: { id: "bed-03", src: "/images/main-property/bedroom03.avif", alt: "Side view of bedroom with window blinds", caption: "Room darkening blinds", room: "Bedroom" },
  bed_04: { id: "bed-04", src: "/images/main-property/bedroom04.avif", alt: "Bed detail and soft linens", caption: "Linens and pillows", room: "Bedroom" },
  bed_05: { id: "bed-05", src: "/images/main-property/bedroom05.avif", alt: "Air conditioner and ceiling fan", caption: "Climate control", room: "Bedroom" },
  bed_06: { id: "bed-06", src: "/images/main-property/bedroom06.avif", alt: "Bedside table with lamp", caption: "Bedside lamp", room: "Bedroom" },
  bed_07: { id: "bed-07", src: "/images/main-property/bedroom07.avif", alt: "Full bedroom overview", caption: "Full bedroom view", room: "Bedroom" },

  // Full bathroom
  bath_01: { id: "bath-01", src: "/images/main-property/fullbathroom.avif", alt: "Modern bathroom with walk-in glass shower", caption: "Full bathroom", room: "Full bathroom" },

  // Gym
  gym_01: { id: "gym-01", src: "/images/main-property/gym01.avif", alt: "Community fitness center with cardio equipment", caption: "Gym", room: "Gym" },
  gym_02: { id: "gym-02", src: "/images/main-property/gym02.avif", alt: "Treadmills and cardio machines", caption: "Cardio machines", room: "Gym" },
  gym_03: { id: "gym-03", src: "/images/main-property/gym03.avif", alt: "Free weights and dumbbell rack", caption: "Free weights", room: "Gym" },
  gym_04: { id: "gym-04", src: "/images/main-property/gym04.avif", alt: "Gym workout area and mirrors", caption: "Workout space", room: "Gym" },
  gym_05: { id: "gym-05", src: "/images/main-property/gym05.avif", alt: "Strength training machines", caption: "Strength equipment", room: "Gym" },

  // Exterior
  ext_01: { id: "ext-01", src: "/images/main-property/exterior01.avif", alt: "Gated condo building facade and palm trees", caption: "Exterior", room: "Exterior" },
  ext_02: { id: "ext-02", src: "/images/main-property/exterior02.avif", alt: "Landscaped gardens and pathways", caption: "Gardens & pathways", room: "Exterior" },
  ext_03: { id: "ext-03", src: "/images/main-property/exterior03.avif", alt: "24/7 secure building entrance", caption: "Building entrance", room: "Exterior" },
  ext_04: { id: "ext-04", src: "/images/main-property/exterior04.avif", alt: "Covered parking premises", caption: "Covered parking", room: "Exterior" },
  ext_05: { id: "ext-05", src: "/images/main-property/exterior05.avif", alt: "Lush tropical green surroundings", caption: "Tropical surroundings", room: "Exterior" },
  ext_06: { id: "ext-06", src: "/images/main-property/exterior06.avif", alt: "Evening exterior ambiance", caption: "Evening exterior", room: "Exterior" },

  // Pool
  pool_01: { id: "pool-01", src: "/images/main-property/pool01.avif", alt: "Large shared resort swimming pool with sun loungers", caption: "Pool", room: "Pool" },
  pool_02: { id: "pool-02", src: "/images/main-property/pool02.avif", alt: "Private heated jacuzzi on the balcony with lush green view", caption: "Private jacuzzi", room: "Pool" },
  pool_03: { id: "pool-03", src: "/images/main-property/pool03.avif", alt: "Poolside loungers and deck", caption: "Pool deck", room: "Pool" },

  // Additional photos
  add_01: { id: "add-01", src: "/images/main-property/add_photo01.avif", alt: "Private balcony outdoor seating with garden views", caption: "Balcony seating", room: "Additional photos" },
  add_02: { id: "add-02", src: "/images/main-property/add_photo02.avif", alt: "Digital keypad lock entrance door", caption: "Digital keypad", room: "Additional photos" },
  add_03: { id: "add-03", src: "/images/main-property/add_photo03.avif", alt: "Connecting interior hallway", caption: "Interior hallway", room: "Additional photos" },
  add_04: { id: "add-04", src: "/images/main-property/add_photo04.avif", alt: "Curated Goan wall decor", caption: "Wall decor", room: "Additional photos" },
  add_05: { id: "add-05", src: "/images/main-property/add_photo05.avif", alt: "Jacuzzi water jets close-up", caption: "Jacuzzi jets", room: "Additional photos" },
  add_06: { id: "add-06", src: "/images/main-property/add_photo06.avif", alt: "High-speed Wi-Fi and entertainment setup", caption: "Smart entertainment", room: "Additional photos" },
  add_07: { id: "add-07", src: "/images/main-property/add_photo07.avif", alt: "Complimentary coffee and tea station", caption: "Tea & coffee station", room: "Additional photos" },
  add_08: { id: "add-08", src: "/images/main-property/add_photo08.avif", alt: "5-minute walk access road to Candolim Beach", caption: "Beach road", room: "Additional photos" },
  add_09: { id: "add-09", src: "/images/main-property/add_photo09.avif", alt: "Nearby local beach shacks and cafes", caption: "Beach shacks & cafes", room: "Additional photos" },
  add_10: { id: "add-10", src: "/images/main-property/add_photo10.avif", alt: "Serene sunset over Candolim coastline", caption: "Candolim sunset", room: "Additional photos" },
};

/**
 * Main Property Photo Tour Category Inventory.
 * Exactly maps the 9 categories and their image sequences.
 */
export const mainPropertyPhotoTour = [
  {
    id: "living-room-1",
    title: "Living room 1",
    description: "Sofa · Air conditioning · Ceiling fan · TV",
    thumbnail: MAIN_PROPERTY_ASSETS.lr1_01,
    images: [
      MAIN_PROPERTY_ASSETS.lr1_01,
      MAIN_PROPERTY_ASSETS.lr1_02,
      MAIN_PROPERTY_ASSETS.lr1_03,
      MAIN_PROPERTY_ASSETS.lr1_04,
      MAIN_PROPERTY_ASSETS.lr1_05,
      MAIN_PROPERTY_ASSETS.lr1_06,
    ],
  },
  {
    id: "living-room-2",
    title: "Living room 2",
    description: "Ceiling fan · Hot tub",
    thumbnail: MAIN_PROPERTY_ASSETS.lr2_01,
    images: [
      MAIN_PROPERTY_ASSETS.lr2_01,
      MAIN_PROPERTY_ASSETS.lr2_02,
      MAIN_PROPERTY_ASSETS.lr2_03,
      MAIN_PROPERTY_ASSETS.lr2_04,
    ],
  },
  {
    id: "full-kitchen",
    title: "Full kitchen",
    description: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    thumbnail: MAIN_PROPERTY_ASSETS.k_01,
    images: [
      MAIN_PROPERTY_ASSETS.k_01,
      MAIN_PROPERTY_ASSETS.k_02,
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    thumbnail: MAIN_PROPERTY_ASSETS.bed_01,
    images: [
      MAIN_PROPERTY_ASSETS.bed_01,
      MAIN_PROPERTY_ASSETS.bed_02,
      MAIN_PROPERTY_ASSETS.bed_03,
      MAIN_PROPERTY_ASSETS.bed_04,
      MAIN_PROPERTY_ASSETS.bed_05,
      MAIN_PROPERTY_ASSETS.bed_06,
      MAIN_PROPERTY_ASSETS.bed_07,
    ],
  },
  {
    id: "full-bathroom",
    title: "Full bathroom",
    description: "Bathtub · Shower · Hot water · Hair dryer · Shampoo · Body soap · Towels",
    thumbnail: MAIN_PROPERTY_ASSETS.bath_01,
    images: [
      MAIN_PROPERTY_ASSETS.bath_01,
    ],
  },
  {
    id: "gym",
    title: "Gym",
    description: "Gym access · Equipment provided",
    thumbnail: MAIN_PROPERTY_ASSETS.gym_01,
    images: [
      MAIN_PROPERTY_ASSETS.gym_01,
      MAIN_PROPERTY_ASSETS.gym_02,
      MAIN_PROPERTY_ASSETS.gym_03,
      MAIN_PROPERTY_ASSETS.gym_04,
      MAIN_PROPERTY_ASSETS.gym_05,
    ],
  },
  {
    id: "exterior",
    title: "Exterior",
    description: "Secure building · Parking available · Garden",
    thumbnail: MAIN_PROPERTY_ASSETS.ext_01,
    images: [
      MAIN_PROPERTY_ASSETS.ext_01,
      MAIN_PROPERTY_ASSETS.ext_02,
      MAIN_PROPERTY_ASSETS.ext_03,
      MAIN_PROPERTY_ASSETS.ext_04,
      MAIN_PROPERTY_ASSETS.ext_05,
      MAIN_PROPERTY_ASSETS.ext_06,
    ],
  },
  {
    id: "pool",
    title: "Pool",
    description: "Private jacuzzi · Hot water · Pool access",
    thumbnail: MAIN_PROPERTY_ASSETS.pool_01,
    images: [
      MAIN_PROPERTY_ASSETS.pool_01,
      MAIN_PROPERTY_ASSETS.pool_02,
      MAIN_PROPERTY_ASSETS.pool_03,
    ],
  },
  {
    id: "additional-photos",
    title: "Additional photos",
    description: "More views of the property and surroundings",
    thumbnail: MAIN_PROPERTY_ASSETS.add_01,
    images: [
      MAIN_PROPERTY_ASSETS.add_01,
      MAIN_PROPERTY_ASSETS.add_02,
      MAIN_PROPERTY_ASSETS.add_03,
      MAIN_PROPERTY_ASSETS.add_04,
      MAIN_PROPERTY_ASSETS.add_05,
      MAIN_PROPERTY_ASSETS.add_06,
      MAIN_PROPERTY_ASSETS.add_07,
      MAIN_PROPERTY_ASSETS.add_08,
      MAIN_PROPERTY_ASSETS.add_09,
      MAIN_PROPERTY_ASSETS.add_10,
    ],
  },
];

/**
 * Main Listing Gallery 5-Image Mosaic mapping:
 */
export const mainGalleryImages = [
  MAIN_PROPERTY_ASSETS.lr1_01,
  MAIN_PROPERTY_ASSETS.bed_01,
  MAIN_PROPERTY_ASSETS.ext_01,
  MAIN_PROPERTY_ASSETS.k_01,
  MAIN_PROPERTY_ASSETS.pool_01,
];

/**
 * Flat ordered array of ALL 44 images in sequential Photo Tour order.
 * Powers Lightbox navigation across all categories.
 */
export const flattenedPhotoTourImages = mainPropertyPhotoTour.flatMap(
  (category) => category.images
);

/**
 * Helper to look up an image's global index for Lightbox.
 */
export function getPhotoTourImageIndex(src) {
  return flattenedPhotoTourImages.findIndex((img) => img.src === src);
}

