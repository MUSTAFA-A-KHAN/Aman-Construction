import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
import { business } from "../data";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>
            Thoughtfully planned.
            <br />
            Carefully built. Uniquely yours.
          </p>
          <span className="footer-location">DEWAS, MADHYA PRADESH</span>
        </div>
        <div>
          <h2>Explore</h2>
          <nav aria-label="Footer navigation">
            <Link to="/about">About us</Link>
            <Link to="/services">Our services</Link>
            <Link to="/projects">Our projects</Link>
            <Link to="/pricing">Construction packages</Link>
          </nav>
        </div>
        <div>
          <h2>Let’s talk</h2>
          <a href={business.phoneHref}>{business.phone}</a>
          <a href={business.secondPhoneHref}>{business.secondPhone}</a>
          <a className="footer-email" href={`mailto:${business.email}`}>
            {business.email}
          </a>
          <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp us <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div>
          <h2>Find us</h2>
          <address>{business.address}</address>
          <Link className="footer-cta" to="/contact">
            Build with AMAN <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} AMAN Construction. All rights reserved.
        </span>
        <span>Built on trust. Built for you.</span>
      </div>
    </footer>
  );
}
