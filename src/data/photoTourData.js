/**
 * photoTourData.js
 * Data driving the full Photo Tour scrollable gallery (?modal=PHOTO_TOUR_SCROLLABLE).
 * Sourced directly from reference website and localized in /images/main-property/
 */

export const photoTourCategories = [
  {
    id: "living-room-1",
    title: "Living room 1",
    thumbnail: {
      src: "/images/main-property/livingroom01.avif",
      alt: "Living room 1 — yellow sofa and modern seating area",
      caption: "Living room 1",
      room: "Living room 1",
    },
    description: "Sofa · Air conditioning · Ceiling fan · TV",
    images: [
      { id: "lr1-01", src: "/images/main-property/livingroom01.avif", alt: "Living room with yellow sofa, wooden accents, and warm ambient lighting", caption: "Living room seating area with TV and AC", room: "Living room 1" },
      { id: "lr1-02", src: "/images/main-property/livingroom02.avif", alt: "Living room coffee table and lounge setup", caption: "Coffee table and decor", room: "Living room 1" },
      { id: "lr1-03", src: "/images/main-property/livingroom03.avif", alt: "Spacious living room looking towards balcony", caption: "View towards balcony entrance", room: "Living room 1" },
      { id: "lr1-04", src: "/images/main-property/livingroom04.avif", alt: "Living room entertainment center and smart TV", caption: "Entertainment setup with smart TV", room: "Living room 1" },
      { id: "lr1-05", src: "/images/main-property/livingroom05.avif", alt: "Warm interior lighting and side table", caption: "Ambient lighting and side table", room: "Living room 1" },
      { id: "lr1-06", src: "/images/main-property/livingroom06.avif", alt: "Full angle of main living space", caption: "Full angle of living space", room: "Living room 1" },
    ],
  },
  {
    id: "living-room-2",
    title: "Living room 2",
    thumbnail: {
      src: "/images/main-property/livingroom07.avif",
      alt: "Living room 2 — open plan layout",
      caption: "Living room 2",
      room: "Living room 2",
    },
    description: "Ceiling fan · Hot tub",
    images: [
      { id: "lr2-01", src: "/images/main-property/livingroom07.avif", alt: "Second living room view with open-concept dining", caption: "Open-concept living and dining area", room: "Living room 2" },
      { id: "lr2-02", src: "/images/main-property/livingroom08.avif", alt: "Living room secondary seating and decor", caption: "Secondary lounge seating", room: "Living room 2" },
      { id: "lr2-03", src: "/images/main-property/livingroom09.avif", alt: "Dining space adjacent to living room", caption: "Dining nook with comfortable chairs", room: "Living room 2" },
      { id: "lr2-04", src: "/images/main-property/livingroom10.avif", alt: "Balcony access from living room 2", caption: "Balcony access doorway", room: "Living room 2" },
    ],
  },
  {
    id: "full-kitchen",
    title: "Full kitchen",
    thumbnail: {
      src: "/images/main-property/kitchen01.avif",
      alt: "Full kitchen with modular cabinets and appliances",
      caption: "Full kitchen",
      room: "Full kitchen",
    },
    description: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    images: [
      { id: "k-01", src: "/images/main-property/kitchen01.avif", alt: "Fully equipped modular kitchen with microwave and induction", caption: "Modular kitchen with cooking essentials", room: "Full kitchen" },
      { id: "k-02", src: "/images/main-property/kitchen02.avif", alt: "Refrigerator, electric kettle, and cookware storage", caption: "Refrigerator and kitchen prep counter", room: "Full kitchen" },
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    thumbnail: {
      src: "/images/main-property/bedroom01.avif",
      alt: "Bedroom with king-size bed and warm lighting",
      caption: "Bedroom",
      room: "Bedroom",
    },
    description: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    images: [
      { id: "bed-01", src: "/images/main-property/bedroom01.avif", alt: "King size bed with plush pillows and reading lamps", caption: "Master king bed with ambient lighting", room: "Bedroom" },
      { id: "bed-02", src: "/images/main-property/bedroom02.avif", alt: "Bedroom wardrobe and vanity area", caption: "Spacious wardrobe and storage", room: "Bedroom" },
      { id: "bed-03", src: "/images/main-property/bedroom03.avif", alt: "Side view of bedroom with window blinds", caption: "Window with room-darkening blinds", room: "Bedroom" },
      { id: "bed-04", src: "/images/main-property/bedroom04.avif", alt: "Bed detail and soft linens", caption: "Fresh linens and comfortable pillows", room: "Bedroom" },
      { id: "bed-05", src: "/images/main-property/bedroom05.avif", alt: "Air conditioning and ceiling fan in bedroom", caption: "Air conditioner and ceiling fan", room: "Bedroom" },
      { id: "bed-06", src: "/images/main-property/bedroom06.avif", alt: "Bedside nightstand and charging points", caption: "Bedside table with lamp", room: "Bedroom" },
      { id: "bed-07", src: "/images/main-property/bedroom07.avif", alt: "Full view of bedroom from doorway", caption: "Full bedroom overview", room: "Bedroom" },
    ],
  },
  {
    id: "full-bathroom",
    title: "Full bathroom",
    thumbnail: {
      src: "/images/main-property/fullbathroom.avif",
      alt: "Full bathroom with glass walk-in shower",
      caption: "Full bathroom",
      room: "Full bathroom",
    },
    description: "Bathtub · Shower · Hot water · Hair dryer · Shampoo · Body soap · Towels",
    images: [
      { id: "bath-01", src: "/images/main-property/fullbathroom.avif", alt: "Modern bathroom with walk-in glass shower, vanity mirror, and fresh towels", caption: "Full bathroom with walk-in glass shower", room: "Full bathroom" },
    ],
  },
  {
    id: "gym",
    title: "Gym",
    thumbnail: {
      src: "/images/main-property/gym01.avif",
      alt: "Community fitness center and gym equipment",
      caption: "Gym",
      room: "Gym",
    },
    description: "Gym access · Equipment provided",
    images: [
      { id: "gym-01", src: "/images/main-property/gym01.avif", alt: "Community gym with cardio machines and weights", caption: "Community fitness center", room: "Gym" },
      { id: "gym-02", src: "/images/main-property/gym02.avif", alt: "Treadmills and elliptical trainers", caption: "Cardio equipment", room: "Gym" },
      { id: "gym-03", src: "/images/main-property/gym03.avif", alt: "Free weights and dumbbell rack", caption: "Free weights and dumbbells", room: "Gym" },
      { id: "gym-04", src: "/images/main-property/gym04.avif", alt: "Gym workout space and mirrors", caption: "Spacious workout area", room: "Gym" },
      { id: "gym-05", src: "/images/main-property/gym05.avif", alt: "Strength training machines", caption: "Strength training equipment", room: "Gym" },
    ],
  },
  {
    id: "exterior",
    title: "Exterior",
    thumbnail: {
      src: "/images/main-property/exterior01.avif",
      alt: "Exterior view of the luxury condo complex",
      caption: "Exterior",
      room: "Exterior",
    },
    description: "Secure building · Parking available · Garden",
    images: [
      { id: "ext-01", src: "/images/main-property/exterior01.avif", alt: "Gated condo building with palm trees and modern architecture", caption: "Gated community building facade", room: "Exterior" },
      { id: "ext-02", src: "/images/main-property/exterior02.avif", alt: "Landscaped gardens and walking pathways", caption: "Landscaped gardens and pathways", room: "Exterior" },
      { id: "ext-03", src: "/images/main-property/exterior03.avif", alt: "Building entrance and security gate", caption: "24/7 secure building entrance", room: "Exterior" },
      { id: "ext-04", src: "/images/main-property/exterior04.avif", alt: "Covered parking area and driveways", caption: "Covered parking premises", room: "Exterior" },
      { id: "ext-05", src: "/images/main-property/exterior05.avif", alt: "Exterior palm grove and green surroundings", caption: "Lush tropical green surroundings", room: "Exterior" },
      { id: "ext-06", src: "/images/main-property/exterior06.avif", alt: "Building facade evening view", caption: "Evening exterior ambiance", room: "Exterior" },
    ],
  },
  {
    id: "pool",
    title: "Pool",
    thumbnail: {
      src: "/images/main-property/pool01.avif",
      alt: "Large community swimming pool and private jacuzzi",
      caption: "Pool",
      room: "Pool",
    },
    description: "Private jacuzzi · Hot water · Pool access",
    images: [
      { id: "pool-01", src: "/images/main-property/pool01.avif", alt: "Large shared swimming pool with crystal clear water and sun loungers", caption: "Shared resort swimming pool", room: "Pool" },
      { id: "pool-02", src: "/images/main-property/pool02.avif", alt: "Private heated jacuzzi on the balcony with lush green view", caption: "Private jacuzzi on balcony", room: "Pool" },
      { id: "pool-03", src: "/images/main-property/pool03.avif", alt: "Poolside relaxation area and sunbeds", caption: "Poolside loungers and deck", room: "Pool" },
    ],
  },
  {
    id: "additional-photos",
    title: "Additional photos",
    thumbnail: {
      src: "/images/main-property/add_photo01.avif",
      alt: "Additional photos of property details and surrounding Candolim",
      caption: "Additional photos",
      room: "Additional photos",
    },
    description: "More views of the property and surroundings",
    images: [
      { id: "add-01", src: "/images/main-property/add_photo01.avif", alt: "Balcony outdoor seating with garden views", caption: "Private balcony seating", room: "Additional photos" },
      { id: "add-02", src: "/images/main-property/add_photo02.avif", alt: "Entrance foyer with digital keypad lock", caption: "Keypad self check-in door", room: "Additional photos" },
      { id: "add-03", src: "/images/main-property/add_photo03.avif", alt: "Interior hallway connecting living room and bedroom", caption: "Connecting interior hallway", room: "Additional photos" },
      { id: "add-04", src: "/images/main-property/add_photo04.avif", alt: "Aesthetic wall art and decor accents", caption: "Curated Goan wall decor", room: "Additional photos" },
      { id: "add-05", src: "/images/main-property/add_photo05.avif", alt: "Balcony jacuzzi close-up view", caption: "Jacuzzi water jets and lighting", room: "Additional photos" },
      { id: "add-06", src: "/images/main-property/add_photo06.avif", alt: "Living room television and streaming setup", caption: "High speed Wi-Fi and entertainment", room: "Additional photos" },
      { id: "add-07", src: "/images/main-property/add_photo07.avif", alt: "Tea and coffee making station", caption: "Complimentary coffee & tea station", room: "Additional photos" },
      { id: "add-08", src: "/images/main-property/add_photo08.avif", alt: "Candolim beach neighborhood access road", caption: "5-minute walk to Candolim Beach", room: "Additional photos" },
      { id: "add-09", src: "/images/main-property/add_photo09.avif", alt: "Local beach shacks and cafes nearby", caption: "Nearby cafes and restaurants", room: "Additional photos" },
      { id: "add-10", src: "/images/main-property/add_photo10.avif", alt: "Serene sunset over Candolim coastline", caption: "Sunset near the property", room: "Additional photos" },
    ],
  },
];

/**
 * Flat ordered list of ALL 44 images in tour order.
 * Used by Lightbox to navigate across the full photo set.
 */
export const allTourImages = photoTourCategories.flatMap((cat) => cat.images);

/**
 * Map from image src → global index in allTourImages.
 */
export function getTourImageIndex(src) {
  return allTourImages.findIndex((img) => img.src === src);
}

