import { Link } from "react-router-dom";
import { Check, ArrowUpRight, ShieldCheck } from "lucide-react";
import { packages } from "../data";
import PageHeading from "../components/PageHeading";
import ContactBand from "../components/ContactBand";
export default function Pricing() {
  return (
    <>
      <PageHeading
        eyebrow="CONSTRUCTION PACKAGES"
        title="Your style. A solid foundation."
      >
        Choose the finish that feels like you. Every package uses the same core
        construction materials and maintains the same structural quality.
      </PageHeading>
      <section className="container pricing-section">
        <div className="pricing-reassurance">
          <ShieldCheck size={22} aria-hidden="true" />
          <span>
            Same structural quality. Different finishes and allowances.
          </span>
        </div>
        <div className="pricing-grid">
          {packages.map((pkg, index) => (
            <article
              className={`pricing-card ${index === 1 ? "pricing-featured" : ""}`}
              key={pkg.name}
              data-reveal
            >
              <div className="pricing-top">
                <span className="eyebrow">
                  0{index + 1} /{" "}
                  {index === 0
                    ? "ESSENTIAL FINISHES"
                    : index === 1
                      ? "REFINED DETAILS"
                      : "ELEVATED MATERIALS"}
                </span>
                <h2>{pkg.name}</h2>
                <p>{pkg.description}</p>
                <div className="price">
                  <span>₹</span>
                  {pkg.price}
                </div>
                <p className="price-unit">indicative rate / sq ft</p>
              </div>
              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/contact?package=${pkg.name}`}
                className={`button ${index === 1 ? "button-gold" : "button-navy"}`}
              >
                Enquire about {pkg.name}{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <div className="pricing-note">
          <h2>A clear starting point.</h2>
          <p>
            These are the package rates listed on our existing website. Material
            allowances include GST. Final pricing depends on your quantities,
            site conditions, selected specifications, and agreed scope; please
            request a current written quotation, including applicable taxes.
          </p>
          <Link to="/services#exclusions" className="text-link">
            Review inclusions and exclusions{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
