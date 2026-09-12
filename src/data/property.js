/**
 * property.js
 * Structured static data for the Airbnb listing.
 * Single source of truth for all property information.
 */

export const property = {
  id: "himadhar-us19",
  title: "Romantic Jacuzzi 1BHK Condo/Isle | Himadhar US19",
  type: "Entire serviced apartment",
  location: {
    city: "Candolim",
    state: "Goa",
    country: "India",
    fullAddress: "Candolim, Goa, India",
  },
  stats: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  rating: {
    average: 4.95,
    count: 19,
    label: "19 reviews",
  },
  badge: "Guest favourite",
  superhost: false,
  host: {
    name: "Mirashya Homes",
    since: "2024",
    hostingYears: "2 years hosting",
    avatar: "/images/host-avatar.jpg",
    isSuperhost: false,
    responseRate: "100%",
    responseTime: "within an hour",
    totalReviews: 19,
    about:
      "We are a family run Homestay, focused on providing a homely experience to our guests. " +
      "Myself being in Hospitality industry for over 15 years brings in the professional touch.",
  },
  pricing: {
    perNight: 7857,
    currency: "INR",
    symbol: "₹",
    cleaningFee: 1500,
    serviceFee: 2142,
    discountPercent: 10,
  },
  description: [
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's the perfect Goa getaway with shared resort pool access and serene tropical vibes.",
  ],
  highlights: [
    {
      icon: "outdoor",
      title: "Outdoor entertainment",
      description: "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "cool",
      title: "Designed for staying cool",
      description: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "door",
      title: "Self check-in",
      description: "You can check in with the building staff.",
    },
  ],
  amenities: [
    { category: "Bathroom", icon: "shower", name: "Hot water" },
    { category: "Bathroom", icon: "tub", name: "Bath tub" },
    { category: "Bathroom", icon: "jacuzzi", name: "Jacuzzi" },
    { category: "Bedroom", icon: "bed", name: "Bed linens" },
    { category: "Bedroom", icon: "pillow", name: "Extra pillows and blankets" },
    { category: "Entertainment", icon: "tv", name: "TV with standard cable" },
    { category: "Heating & cooling", icon: "ac", name: "Air conditioning" },
    { category: "Home safety", icon: "fire", name: "Fire extinguisher" },
    { category: "Home safety", icon: "first-aid", name: "First aid kit" },
    { category: "Internet", icon: "wifi", name: "Wifi" },
    { category: "Kitchen", icon: "kitchen", name: "Kitchen" },
    { category: "Kitchen", icon: "refrigerator", name: "Refrigerator" },
    { category: "Kitchen", icon: "microwave", name: "Microwave" },
    { category: "Kitchen", icon: "coffee", name: "Coffee maker" },
    { category: "Laundry", icon: "washer", name: "Washer" },
    { category: "Outdoor", icon: "balcony", name: "Balcony" },
    { category: "Parking", icon: "parking", name: "Free parking on premises" },
    { category: "Services", icon: "luggage", name: "Luggage dropoff allowed" },
    { category: "Services", icon: "checkin", name: "Long term stays allowed" },
  ],
  amenitiesShowCount: 10,
  rules: {
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    maxGuests: 3,
    items: [
      "No smoking",
      "No parties or events",
      "No pets",
      "Self check-in with keypad",
    ],
  },
  cancellation: {
    policy: "Moderate",
    description:
      "Free cancellation for 48 hours. Cancel before check-in on Dec 14 for a partial refund. " +
      "After that, this reservation is non-refundable.",
  },
  safety: [
    "Carbon monoxide alarm not reported",
    "Smoke alarm not reported",
    "Security cameras on property",
  ],
  reviewSummary: {
    overall: 4.95,
    categories: [
      { name: "Cleanliness", score: 5.0 },
      { name: "Accuracy", score: 5.0 },
      { name: "Check-in", score: 5.0 },
      { name: "Communication", score: 5.0 },
      { name: "Location", score: 4.8 },
      { name: "Value", score: 4.8 },
    ],
  },
  location_description: {
    text: "Candolim, Goa, India. Located in the heart of Candolim, just a short walk from the pristine Candolim Beach and vibrant local markets, cafes, and nightlife.",
  },
};

