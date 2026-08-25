/**
 * amenities.js
 * Structured amenities data driving both:
 * 1. Compact featured 2-column "What this place offers" section
 * 2. Full "Show all 50 amenities" modal with categorized groups
 */

export const featuredAmenities = [
  // Left column (5 items)
  {
    id: "kitchen",
    name: "Kitchen",
    icon: "kitchen",
    available: true,
    column: "left",
  },
  {
    id: "dedicated-workspace",
    name: "Dedicated workspace",
    icon: "workspace",
    available: true,
    column: "left",
  },
  {
    id: "pool",
    name: "Pool",
    icon: "pool",
    available: true,
    column: "left",
  },
  {
    id: "pets-allowed",
    name: "Pets allowed",
    icon: "pets",
    available: true,
    column: "left",
  },
  {
    id: "carbon-monoxide-alarm",
    name: "Carbon monoxide alarm",
    icon: "co-alarm",
    available: false,
    column: "left",
  },

  // Right column (5 items)
  {
    id: "wifi",
    name: "Wifi",
    icon: "wifi",
    available: true,
    column: "right",
  },
  {
    id: "free-parking",
    name: "Free parking on premises",
    icon: "parking",
    available: true,
    column: "right",
  },
  {
    id: "hot-tub",
    name: "Hot tub",
    icon: "hot-tub",
    available: true,
    column: "right",
  },
  {
    id: "security-cameras",
    name: "Exterior security cameras on property",
    icon: "camera",
    available: true,
    column: "right",
  },
  {
    id: "smoke-alarm",
    name: "Smoke alarm",
    icon: "smoke-alarm",
    available: false,
    column: "right",
  },
];

export const allAmenityCategories = [
  {
    category: "Bathroom",
    items: [
      { id: "hairdryer", name: "Hairdryer", icon: "hairdryer", available: true },
      { id: "cleaning-products", name: "Cleaning products", icon: "cleaning-products", available: true },
      { id: "shampoo", name: "Shampoo", icon: "shampoo", available: true },
      { id: "hot-water", name: "Hot water", icon: "hot-water", available: true },
      { id: "shower-gel", name: "Shower gel", icon: "shower-gel", available: true },
    ],
  },
  {
    category: "Bedroom and laundry",
    items: [
      { id: "washing-machine", name: "Washing machine", icon: "washer", available: true },
      { id: "hangers", name: "Hangers", icon: "hangers", available: true },
      { id: "bed-linen", name: "Bed linen", icon: "bed-linen", available: true },
      { id: "room-darkening-blinds", name: "Room-darkening blinds", icon: "blinds", available: true },
      { id: "iron", name: "Iron", icon: "iron", available: true },
      { id: "clothes-storage", name: "Clothes storage", icon: "wardrobe", available: true },
      { id: "cot-bed", name: "Cot", icon: "cot", available: true },
    ],
  },
  {
    category: "Entertainment",
    items: [
      { id: "tv", name: "TV", icon: "tv", available: true },
    ],
  },
  {
    category: "Family",
    items: [
      { id: "cot-family", name: "Cot", icon: "cot", available: true },
    ],
  },
  {
    category: "Heating and cooling",
    items: [
      { id: "air-conditioning", name: "Air conditioning", icon: "ac", available: true },
      { id: "ceiling-fan", name: "Ceiling fan", icon: "fan", available: true },
    ],
  },
  {
    category: "Home safety",
    items: [
      { id: "security-cameras-modal", name: "Exterior security cameras on property", icon: "camera", available: true },
      { id: "co-alarm-modal", name: "Carbon monoxide alarm", icon: "co-alarm", available: false },
      { id: "smoke-alarm-modal", name: "Smoke alarm", icon: "smoke-alarm", available: false },
    ],
  },
  {
    category: "Internet and office",
    items: [
      { id: "wifi-modal", name: "Wifi", icon: "wifi", available: true },
      { id: "dedicated-workspace-modal", name: "Dedicated workspace", icon: "workspace", available: true },
    ],
  },
  {
    category: "Kitchen and dining",
    items: [
      { id: "kitchen-modal", name: "Kitchen", icon: "kitchen", available: true },
      { id: "fridge", name: "Fridge", icon: "fridge", available: true },
      { id: "freezer", name: "Freezer", icon: "freezer", available: true },
      { id: "microwave", name: "Microwave", icon: "microwave", available: true },
      { id: "cooking-basics", name: "Cooking basics", icon: "cooking-basics", available: true },
      { id: "crockery-cutlery", name: "Crockery and cutlery", icon: "cutlery", available: true },
      { id: "kettle", name: "Kettle", icon: "kettle", available: true },
      { id: "coffee", name: "Coffee", icon: "coffee", available: true },
      { id: "wine-glasses", name: "Wine glasses", icon: "wine", available: true },
      { id: "toaster", name: "Toaster", icon: "toaster", available: true },
      { id: "blender", name: "Blender", icon: "blender", available: true },
      { id: "cooker", name: "Cooker", icon: "cooker", available: true },
    ],
  },
  {
    category: "Location features",
    items: [
      { id: "private-entrance", name: "Private entrance", icon: "entrance", available: true },
    ],
  },
  {
    category: "Outdoor",
    items: [
      { id: "patio-balcony", name: "Patio or balcony", icon: "balcony", available: true },
      { id: "outdoor-dining", name: "Outdoor dining area", icon: "dining", available: true },
    ],
  },
  {
    category: "Parking and facilities",
    items: [
      { id: "free-parking-modal", name: "Free parking on premises", icon: "parking", available: true },
      { id: "pool-modal", name: "Pool", icon: "pool", available: true },
      { id: "hot-tub-modal", name: "Hot tub", icon: "hot-tub", available: true },
      { id: "gym-modal", name: "Gym", icon: "gym", available: true },
    ],
  },
  {
    category: "Services",
    items: [
      { id: "pets-allowed-modal", name: "Pets allowed", icon: "pets", available: true },
      { id: "cleaning-available", name: "Cleaning available during stay", icon: "cleaning-stay", available: true },
      { id: "long-term-stays", name: "Long-term stays allowed", icon: "long-term", available: true },
      { id: "self-checkin", name: "Self check-in", icon: "self-checkin", available: true },
    ],
  },
];
