import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { business, packages } from "../data";
import PageHeading from "../components/PageHeading";
import EnquiryForm from "../components/EnquiryForm";
export default function Contact() {
  const [params] = useSearchParams();
  const selectedPackage =
    packages.find((item) => item.name === params.get("package"))?.name || "";
  const project = (params.get("project") || "").slice(0, 100);
  return (
    <>
      <PageHeading
        eyebrow="LET’S BUILD TOGETHER"
        title="Good things start with a conversation."
      >
        A first home, a new plan, or a question about construction. Tell us what
        you’re thinking. We’ll help you explore the next step.
      </PageHeading>
      <section className="container contact-layout">
        <aside className="contact-info">
          <p className="eyebrow">A DIRECT LINE TO AMAN</p>
          <h2>
            We’re here
            <br />
            to help you build.
          </h2>
          <p>
            Speak with us about your plans, or send an enquiry with a few
            project details.
          </p>
          <div className="contact-method">
            <Phone size={22} aria-hidden="true" />
            <div>
              <h3>Give us a call</h3>
              <a href={business.phoneHref}>{business.phone}</a>
              <a href={business.secondPhoneHref}>{business.secondPhone}</a>
            </div>
          </div>
          <div className="contact-method">
            <Mail size={22} aria-hidden="true" />
            <div>
              <h3>Send an email</h3>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>
          </div>
          <div className="contact-method">
            <MapPin size={22} aria-hidden="true" />
            <div>
              <h3>Find us in Dewas</h3>
              <address>{business.address}</address>
            </div>
          </div>
          <a
            className="button button-outline whatsapp-link"
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={19} aria-hidden="true" /> Chat on WhatsApp{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </aside>
        <div className="form-panel">
          <EnquiryForm
            key={selectedPackage + project}
            selectedPackage={selectedPackage}
            project={project}
          />
        </div>
      </section>
    </>
  );
}
