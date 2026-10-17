import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  MapPin,
} from "lucide-react";
import { projects } from "../data";
import PageHeading from "../components/PageHeading";
import ContactBand from "../components/ContactBand";

function Project({ project }: { project: (typeof projects)[number] }) {
  const [selected, setSelected] = useState(0);
  const media = project.media[selected];
  const group = project.media
    .map((item, index) => ({ ...item, index }))
    .filter((item) => item.kind === media.kind);
  const position = group.findIndex((item) => item.index === selected);
  const hasPhotos = project.media.some((item) => item.kind === "site");
  const hasRenders = project.media.some((item) => item.kind === "render");

  return (
    <article
      className="gallery-project"
      id={project.id}
      tabIndex={-1}
      aria-labelledby={project.id + "-title"}
    >
      <div className="gallery-heading">
        <p className="eyebrow">CLIENT PROJECT / {project.number}</p>
        <h2 id={project.id + "-title"}>{project.client}</h2>
        <p className="gallery-project-name">{project.title}</p>
        <p className="gallery-location">
          <MapPin size={14} aria-hidden="true" />
          {project.location}
        </p>
      </div>
      <div
        className="image-switch"
        role="group"
        aria-label={project.client + " image view"}
      >
        {hasPhotos && (
          <button
            type="button"
            aria-pressed={media.kind === "site"}
            onClick={() =>
              setSelected(
                project.media.findIndex((item) => item.kind === "site"),
              )
            }
          >
            Site photograph
          </button>
        )}
        {hasRenders && (
          <button
            type="button"
            aria-pressed={media.kind === "render"}
            onClick={() =>
              setSelected(
                project.media.findIndex((item) => item.kind === "render"),
              )
            }
          >
            Proposed elevation
          </button>
        )}
      </div>
      <div className="gallery-image">
        <img
          key={media.src}
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading="lazy"
          decoding="async"
        />
        <a
          className="gallery-expand"
          href={media.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open full-size image for ${project.client} (new tab)`}
        >
          <Expand size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="gallery-toolbar">
        <p className="image-note" aria-live="polite">
          {media.kind === "site"
            ? "Actual site photograph"
            : "Architectural render · proposed design"}
          <span>
            {position + 1} / {group.length}
          </span>
        </p>
        {group.length > 1 && (
          <div className="gallery-arrows">
            <button
              type="button"
              aria-label={`Previous image for ${project.client}`}
              onClick={() =>
                setSelected(
                  group[(position - 1 + group.length) % group.length].index,
                )
              }
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={`Next image for ${project.client}`}
              onClick={() =>
                setSelected(group[(position + 1) % group.length].index)
              }
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      {group.length > 1 && (
        <div
          className="gallery-thumbnails"
          role="group"
          aria-label={`Choose an image for ${project.client}`}
        >
          {group.map((item, index) => (
            <button
              type="button"
              key={item.src}
              aria-label={`View ${item.kind === "site" ? "site photograph" : "design render"} ${index + 1} for ${project.client}`}
              aria-pressed={item.index === selected}
              onClick={() => setSelected(item.index)}
            >
              <img
                src={item.preview}
                alt=""
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      )}
      <p className="gallery-description">{project.description}</p>
      {!hasPhotos && (
        <p className="gallery-design-note">
          Design views only · no site photograph supplied.
        </p>
      )}
      <Link
        to={`/contact?project=${encodeURIComponent(project.title + " for " + project.client)}`}
        className="text-link"
      >
        Discuss a similar project <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "site" | "render">("all");
  const visible = projects.filter(
    (project) =>
      filter === "all" ||
      (filter === "site"
        ? project.media.some((item) => item.kind === "site")
        : project.media.every((item) => item.kind === "render")),
  );
  return (
    <>
      <PageHeading
        eyebrow="OUR WORK, YOUR STORIES"
        title="From a plan. To a place."
      >
        Explore the homes we’re helping shape, with the people behind each
        project. Browse actual site photographs and clearly labelled proposed
        designs from Dewas, Indore, and our other project locations.
      </PageHeading>
      <section className="container portfolio" aria-label="Client projects">
        <div className="portfolio-tools">
          <div
            className="portfolio-filters"
            role="group"
            aria-label="Filter projects"
          >
            <button
              type="button"
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All projects
            </button>
            <button
              type="button"
              aria-pressed={filter === "site"}
              onClick={() => setFilter("site")}
            >
              With site photos
            </button>
            <button
              type="button"
              aria-pressed={filter === "render"}
              onClick={() => setFilter("render")}
            >
              Design-only projects
            </button>
          </div>
          <p aria-live="polite">{visible.length} projects shown</p>
        </div>
        <div className="portfolio-grid">
          {visible.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <p className="portfolio-note">
          Site photographs record progress at the time they were taken.
          Architectural renders show proposed designs and are not photographs of
          completed work.
        </p>
      </section>
      <ContactBand />
    </>
  );
}
