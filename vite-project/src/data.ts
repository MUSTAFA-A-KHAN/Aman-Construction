import residence from "./assets/projects/anandvilla-residence.webp";
import residenceSmall from "./assets/projects/anandvilla-residence-small.webp";
import residenceElevation from "./assets/projects/anandvilla-residence-elevation.webp";
import building from "./assets/projects/anandvilla-building.webp";
import buildingSmall from "./assets/projects/anandvilla-building-small.webp";
import buildingElevation from "./assets/projects/anandvilla-building-elevation.webp";

// Verified against the supplied company brochure; see ASSET-SOURCES.md.
export const business = {
  phone: "+91 93293 70146",
  phoneHref: "tel:+919329370146",
  secondPhone: "+91 88782 34168",
  secondPhoneHref: "tel:+918878234168",
  email: "amanconstruction146@gmail.com",
  whatsapp: "https://wa.me/919329370146",
  address: "69, Ekta Nagar, Ujjain Road, Dewas, Madhya Pradesh",
  formEndpoint: "https://formspree.io/f/xovazlrl",
};
export const projects = [
  {
    id: "anandvilla-residence",
    number: "01",
    title: "Anandvilla Residence",
    location: "Anandvilla, Dewas",
    client: "Rajat Agrawal",
    type: "Residential construction",
    image: residence,
    smallImage: residenceSmall,
    elevation: residenceElevation,
    width: 478,
    height: 349,
    alt: "Actual site photograph of the Anandvilla residence with brickwork and concrete structure in progress",
    description:
      "A residence taking shape from its structural framework to its architectural details. Explore the site photograph alongside the proposed front elevation.",
  },
  {
    id: "anandvilla-building",
    number: "02",
    title: "Anandvilla Residential Building",
    location: "Anandvilla, Dewas",
    client: "Neeraj Vhayvergy",
    type: "Residential construction",
    image: building,
    smallImage: buildingSmall,
    elevation: buildingElevation,
    width: 478,
    height: 325,
    alt: "Actual site photograph of a multi-storey residential concrete and brick structure at Anandvilla",
    description:
      "A multi-storey residential structure at Anandvilla. The site photograph shows the concrete frame and masonry; the proposed elevation illustrates the design intent.",
  },
];
export const process = [
  {
    title: "Tell us your vision",
    text: "Share your location, requirements, and the kind of home you have in mind.",
  },
  {
    title: "Plan the details",
    text: "Discuss floor plans, structural design, specifications, and your package.",
  },
  {
    title: "Build with clarity",
    text: "Follow construction milestones with progress updates and engineer supervision.",
  },
  {
    title: "Bring it together",
    text: "Review the finishes and agreed scope as your project takes its final shape.",
  },
];
export const packages = [
  {
    name: "Premium",
    price: "1,550",
    description: "A considered foundation for your home.",
    features: [
      "Vitrified tiles · ₹40/sq ft",
      "Staircase granite · up to ₹90/sq ft",
      "Stainless steel sink · up to ₹3,000",
      "Main door · ₹15,000 allowance",
      "3-track aluminium windows · ₹300/sq ft",
      "Jaquar Essco / Parryware or equivalent",
      "Anchor / Havells / Western switches",
    ],
  },
  {
    name: "Style",
    price: "1,750",
    description: "More choice. A more personal finish.",
    features: [
      "Vitrified tiles · ₹60/sq ft",
      "Staircase granite · up to ₹135/sq ft",
      "Stainless steel sink · up to ₹5,000",
      "Main door · ₹25,000 allowance",
      "Toughened glass balcony railing with SS top rail",
      "Jaquar or equivalent wall-mounted fittings",
      "Anchor / Havells / GM switches",
    ],
  },
  {
    name: "Luxury",
    price: "1,950",
    description: "Elevated materials, down to the detail.",
    features: [
      "Vitrified tiles · ₹80/sq ft",
      "Staircase granite · up to ₹200/sq ft",
      "Stainless steel sink · up to ₹8,000",
      "Main door · ₹40,000 allowance",
      "Toughened glass railing with wood-finish top rail",
      "Jaquar / TOTO or equivalent fittings",
      "Goldmedal / Havells / GM switches",
    ],
  },
];
