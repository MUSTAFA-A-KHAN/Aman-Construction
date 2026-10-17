import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  DraftingCompass,
  HardHat,
  Layers3,
  ShieldCheck,
  Ruler,
  Check,
  MapPin,
} from "lucide-react";
import { projects, featuredProjects, process } from "../data";
import ContactBand from "../components/ContactBand";

const services = [
  {
    icon: DraftingCompass,
    title: "Design & planning",
    text: "Floor plans, front elevations, structural design, and drawings that give your vision direction.",
  },
  {
    icon: HardHat,
    title: "Residential construction",
    text: "From soil investigation and foundations to the structure that brings your home to life.",
  },
  {
    icon: Layers3,
    title: "Finishes & detailing",
    text: "Flooring, painting, doors, windows, plumbing, and electrical work. Considered as a whole.",
  },
];

export default function Home() {
  const featured = projects[0];
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="gold-rule" /> BUILT IN DEWAS. BUILT AROUND YOU.
            </p>
            <h1>
              Your vision.
              <br />
              Our craft.
              <br />
              <span>Built to last.</span>
            </h1>
            <p className="hero-description">
              A home is more than a building. It’s your next chapter. Let’s
              shape it with thoughtful planning, quality materials, and care in
              every detail.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="button button-gold">
                Get a Quote <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
              <Link to="/projects" className="button button-outline">
                View Our Projects <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            </div>
            <p className="hero-footnote">
              <ShieldCheck size={17} aria-hidden="true" /> The same structural
              quality. Across every package.
            </p>
          </div>
          <div className="hero-visual">
            <div className="drawing-label">
              <span>THE WORK BEHIND THE VISION</span>
              <span>01 — DEWAS</span>
            </div>
            <figure className="hero-photo">
              <img
                src={featured.image}
                width={featured.width}
                height={featured.height}
                alt={featured.alt}
                fetchPriority="high"
              />
              <figcaption>
                <span className="photo-dot" />
                <span>
                  ANANDVILLA RESIDENCE
                  <small>
                    {featured.client} · Actual site photograph · Dewas
                  </small>
                </span>
                <Link
                  to="/projects#anandvilla-residence"
                  aria-label="Explore Anandvilla Residence"
                >
                  <ArrowUpRight size={23} aria-hidden="true" />
                </Link>
              </figcaption>
            </figure>
            <div className="hero-photo-bottom">
              <span>FROM THE GROUND UP.</span>
              <Link to="/#services" aria-label="Explore our services">
                <ArrowDown size={19} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-baseline">
          <div className="container">
            <span>PLANNING</span>
            <span className="baseline-plus">+</span>
            <span>CONSTRUCTION</span>
            <span className="baseline-plus">+</span>
            <span>FINISHING</span>
            <span className="baseline-end">One vision. Every detail.</span>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services" tabIndex={-1}>
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">01 / WHAT WE DO</p>
              <h2>
                From first sketch
                <br />
                to finishing touch.
              </h2>
            </div>
            <div className="section-heading-aside">
              <p>
                A clear path from the home you imagine to the home you build.
              </p>
              <Link className="text-link" to="/services">
                Explore our services{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link
                to="/services"
                className="service-card"
                key={service.title}
                data-reveal
              >
                <div className="service-card-top">
                  <service.icon
                    size={35}
                    strokeWidth={1.35}
                    aria-hidden="true"
                  />
                  <span>0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-card-link">
                  Discover more <ArrowUpRight size={19} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects" tabIndex={-1}>
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>
                Real places.
                <br />
                Taking shape.
              </h2>
            </div>
            <div className="section-heading-aside">
              <p>
                A look inside our work, from the structure on site to the
                details that define it.
              </p>
              <Link className="text-link" to="/projects">
                View all projects <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <Link
                to={`/projects#${project.id}`}
                key={project.id}
                className="project-card"
                data-reveal
              >
                <div className="project-card-image">
                  <img
                    src={project.image}
                    srcSet={`${project.smallImage} ${project.smallWidth}w, ${project.image} ${project.width}w`}
                    sizes="(max-width: 700px) 90vw, 44vw"
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="image-tag">SITE PHOTOGRAPH</span>
                  <span className="project-arrow">
                    <ArrowUpRight size={24} aria-hidden="true" />
                  </span>
                </div>
                <div className="project-card-meta">
                  <span>{project.type}</span>
                  <span>{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-client">Client · {project.client}</p>
                <p>
                  <MapPin size={14} aria-hidden="true" /> {project.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container approach-grid">
          <div className="approach-intro" data-reveal>
            <p className="eyebrow">03 / THE AMAN APPROACH</p>
            <h2>
              Good construction
              <br />
              starts with
              <br />
              <span>solid principles.</span>
            </h2>
            <p>
              What’s behind the walls matters just as much as what you see.
              That’s why every package shares the same core materials and
              structural quality.
            </p>
            <Link className="text-link light-link" to="/about">
              Get to know AMAN <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <div className="architecture-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="principles">
            {[
              {
                icon: ShieldCheck,
                title: "Quality at the core",
                text: "Tested materials, soil investigation, and structural design by a licensed structural engineer.",
              },
              {
                icon: HardHat,
                title: "An eye on every stage",
                text: "Regular civil engineer visits, site supervision, and updates as construction progresses.",
              },
              {
                icon: Ruler,
                title: "Clarity from the outset",
                text: "Defined package specifications and milestone-based payments to help you plan with confidence.",
              },
            ].map((item, index) => (
              <div className="principle" key={item.title} data-reveal>
                <item.icon size={28} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <span className="principle-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">04 / HOW IT COMES TOGETHER</p>
              <h2>
                A considered process.
                <br />
                At every step.
              </h2>
            </div>
            <Link className="text-link" to="/contact">
              Let’s start a conversation{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <ol className="process-grid">
            {process.map((step, index) => (
              <li key={step.title} data-reveal>
                <span className="step-number">
                  0{index + 1}
                  <span>
                    {index === 3 ? (
                      <Check size={19} aria-hidden="true" />
                    ) : (
                      <ArrowUpRight size={19} aria-hidden="true" />
                    )}
                  </span>
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className="package-teaser container">
        <div>
          <p className="eyebrow">YOUR HOME. YOUR FINISH.</p>
          <h2>Premium. Style. Luxury.</h2>
          <p>Three packages. One commitment to structural quality.</p>
        </div>
        <Link to="/pricing" className="button button-navy">
          Compare packages <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </div>
      <ContactBand />
    </>
  );
}
