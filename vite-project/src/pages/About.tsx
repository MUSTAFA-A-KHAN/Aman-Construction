import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play, Check } from "lucide-react";
import { projects } from "../data";
import promoVideo from "../assets/promo-video.mp4";
import PageHeading from "../components/PageHeading";
import ContactBand from "../components/ContactBand";
export default function About() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <PageHeading
        eyebrow="THIS IS AMAN CONSTRUCTION"
        title="A home deserves thoughtful hands."
      >
        We bring planning, construction, and finishing together with a simple
        focus: quality in the structure, clarity in the process, and care in the
        details.
      </PageHeading>
      <section className="section about-story">
        <div className="container about-grid">
          <figure data-reveal>
            <img
              src={projects[0].image}
              width="478"
              height="349"
              alt={projects[0].alt}
              loading="lazy"
            />
            <figcaption>
              On site at Anandvilla, Dewas · Actual project photograph
            </figcaption>
          </figure>
          <div data-reveal>
            <p className="eyebrow">OUR COMMITMENT</p>
            <h2>
              Built on trust.
              <br />
              From the ground up.
            </h2>
            <p>
              Based in Dewas, AMAN Construction helps bring residential projects
              from drawings to construction and finishing. Our packages make
              material choices and allowances easier to understand.
            </p>
            <p>
              Whether you choose Premium, Style, or Luxury, our commitment to
              the core stays the same: the same construction materials and
              structural quality across every package.
            </p>
            <ul className="check-list">
              {[
                "Structural design by a licensed engineer",
                "Tested materials and civil engineer supervision",
                "Progress updates and milestone-based payments",
              ].map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/projects" className="text-link">
              Explore our work <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section film-section" id="film" tabIndex={-1}>
        <div className="container film-grid">
          <div>
            <p className="eyebrow">A CLOSER LOOK</p>
            <h2>
              Understand
              <br />
              what goes into
              <br />
              your home.
            </h2>
            <p>
              Our construction guide introduces the materials and considerations
              behind a home, in Hindi.
            </p>
          </div>
          <div className="film-player">
            {showVideo ? (
              <video
                src={promoVideo}
                controls
                playsInline
                preload="metadata"
                aria-label="AMAN Construction guide in Hindi"
              />
            ) : (
              <button
                type="button"
                className="film-launch"
                onClick={() => setShowVideo(true)}
              >
                <span className="film-play">
                  <Play size={28} aria-hidden="true" />
                </span>
                <span>
                  Watch our construction guide
                  <small>In Hindi · approximately 7 minutes</small>
                </span>
                <ArrowUpRight size={24} aria-hidden="true" />
              </button>
            )}
            <p className="image-note">
              Company guide · plays only when you choose
            </p>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
