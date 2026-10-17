import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  DraftingCompass,
  HardHat,
  Layers3,
  Paintbrush,
  Wrench,
  ClipboardCheck,
} from "lucide-react";
import PageHeading from "../components/PageHeading";
import ContactBand from "../components/ContactBand";
const services = [
  {
    icon: DraftingCompass,
    title: "Design & drawings",
    description: "Plan the spaces and the structure together.",
    items: [
      "2D floor plans and furniture layout",
      "3D front elevation render",
      "Structural design and working drawings",
      "Plumbing and electrical layouts",
    ],
  },
  {
    icon: HardHat,
    title: "Foundations & structure",
    description: "Start with the ground beneath your home.",
    items: [
      "Soil bearing investigation",
      "Structural design by a licensed structural engineer",
      "Footing foundations up to the specified 6-foot depth",
      "Anti-termite treatment and core construction materials",
    ],
  },
  {
    icon: Layers3,
    title: "Flooring & surfaces",
    description: "Materials for the way you live.",
    items: [
      "Vitrified tiles for living areas and bedrooms",
      "Heavy-duty parking tiles and granite stairs",
      "Kitchen counter granite with Kota stone",
      "AGL, Kajaria, Somany, or equivalent tile brands",
    ],
  },
  {
    icon: Paintbrush,
    title: "Plastering & painting",
    description: "A considered finish, inside and out.",
    items: [
      "Two-coat internal cement-sand plastering",
      "External plaster with waterproofing additive",
      "Two coats of putty and one coat of primer",
      "Interior and exterior painting to package specifications",
    ],
  },
  {
    icon: Wrench,
    title: "Fixtures & essential systems",
    description: "Details that make a home work.",
    items: [
      "Plumbing and drainage with specified pipe brands",
      "Electrical wiring and package-specific switches",
      "Doors, windows, railings, and fabrication",
      "Sanitary fittings and waterproofing to specification",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Project coordination",
    description: "Stay connected to the progress on site.",
    items: [
      "Regular civil engineer visits and supervision",
      "Quality checks and tested materials",
      "Progress updates through construction",
      "Milestone-based payments",
    ],
  },
];
const exclusions = [
  "Special elevation features beyond standard specifications",
  "Setback development outside the built-up area",
  "Foundations deeper than 6 feet",
  "Circular or helical stairs and lifts",
  "False ceilings, interiors, and landscaping",
  "Rainwater harvesting and borewells",
  "Water pumps, pressure pumps, RO, and softeners",
  "Shower partitions, bathtubs, and vanities",
  "Home automation, camera, Wi-Fi, and gas lines",
  "Solar systems, DG backup, geysers, and inverters",
  "Safety doors, lighting fixtures, and intercoms",
  "Boundary walls and gates outside the built-up area",
  "Backfilling above the specified limit",
  "Nameplates and SS lettering",
  "Terrace flooring and underground tank tiles",
  "Earthing work",
];
export default function Services() {
  return (
    <>
      <PageHeading
        eyebrow="WHAT WE DO"
        title="Every stage. Thoughtfully considered."
      >
        Design, construction, and finishing services that work together. Explore
        what goes into our packages and discuss the scope that suits your
        project.
      </PageHeading>
      <section className="container service-details">
        {services.map((service, index) => (
          <article className="service-detail" key={service.title} data-reveal>
            <div className="service-detail-title">
              <service.icon size={34} strokeWidth={1.3} aria-hidden="true" />
              <span className="eyebrow">0{index + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section
        className="section exclusions-section"
        id="exclusions"
        tabIndex={-1}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CLEAR EXPECTATIONS</p>
              <h2>
                Know what’s included.
                <br />
                And what’s additional.
              </h2>
            </div>
            <div className="section-heading-aside">
              <p>
                The following are excluded from standard packages. Discuss any
                additions so they can be included in your agreed project scope.
              </p>
            </div>
          </div>
          <ul className="exclusions-grid">
            {exclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to="/pricing" className="text-link">
            Compare construction packages{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
