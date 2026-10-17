import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { business } from "../data";
export default function ContactBand() {
  return (
    <section className="contact-band" data-reveal>
      <div className="container contact-band-inner">
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h2>
            Let’s build something
            <br />
            you’ll be proud to call yours.
          </h2>
        </div>
        <div className="contact-band-actions">
          <Link to="/contact" className="button button-navy">
            Tell us about your project{" "}
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
          <a href={business.phoneHref} className="text-link">
            <Phone size={17} aria-hidden="true" /> {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
