import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "../data";
import PageHeading from "../components/PageHeading";
import ContactBand from "../components/ContactBand";

function Project({ project }: { project: (typeof projects)[number] }) {
  const [elevation, setElevation] = useState(false);
  return (
    <article
      className="project-detail"
      id={project.id}
      tabIndex={-1}
      data-reveal
    >
      <div className="project-detail-visual">
        <div
          className="image-switch"
          role="group"
          aria-label={`${project.title} image view`}
        >
          <button
            type="button"
            aria-pressed={!elevation}
            onClick={() => setElevation(false)}
          >
            Site photograph
          </button>
          <button
            type="button"
            aria-pressed={elevation}
            onClick={() => setElevation(true)}
          >
            Proposed elevation
          </button>
        </div>
        <div className="project-detail-image">
          <img
            src={elevation ? project.elevation : project.image}
            alt={
              elevation
                ? `Proposed architectural elevation for ${project.title}; a design render, not a completed building photograph`
                : project.alt
            }
            width={project.width}
            height={project.height}
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="image-note">
          {elevation
            ? "Architectural render · proposed design"
            : "Actual site photograph · construction in progress when photographed"}
        </p>
      </div>
      <div className="project-detail-copy">
        <p className="eyebrow">PROJECT {project.number} / RESIDENTIAL</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <dl>
          <div>
            <dt>Location</dt>
            <dd>
              <MapPin size={15} aria-hidden="true" />
              {project.location}
            </dd>
          </div>
          <div>
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>Project type</dt>
            <dd>{project.type}</dd>
          </div>
        </dl>
        <Link
          to={`/contact?project=${encodeURIComponent(project.title)}`}
          className="text-link"
        >
          Discuss a similar project{" "}
          <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
export default function Projects() {
  return (
    <>
      <PageHeading eyebrow="OUR WORK" title="From a plan. To a place.">
        A closer look at our residential projects in Anandvilla, Dewas. Real
        site photographs, with proposed elevations to show the vision behind the
        build.
      </PageHeading>
      <div className="container project-list">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <ContactBand />
    </>
  );
}
