import asset14 from "./assets/projects/anandvilla-residence-site-01.webp";
import asset14Small from "./assets/projects/anandvilla-residence-site-01-small.webp";
import asset13 from "./assets/projects/anandvilla-residence-site-02.webp";
import asset13Small from "./assets/projects/anandvilla-residence-site-02-small.webp";
import asset15 from "./assets/projects/anandvilla-residence-site-03.webp";
import asset15Small from "./assets/projects/anandvilla-residence-site-03-small.webp";
import asset17 from "./assets/projects/anandvilla-residence-render-01.webp";
import asset17Small from "./assets/projects/anandvilla-residence-render-01-small.webp";
import asset16 from "./assets/projects/anandvilla-residence-render-02.webp";
import asset16Small from "./assets/projects/anandvilla-residence-render-02-small.webp";
import asset10 from "./assets/projects/pritesh-jain-residence-site-01.webp";
import asset10Small from "./assets/projects/pritesh-jain-residence-site-01-small.webp";
import asset9 from "./assets/projects/pritesh-jain-residence-site-02.webp";
import asset9Small from "./assets/projects/pritesh-jain-residence-site-02-small.webp";
import asset12 from "./assets/projects/pritesh-jain-residence-site-03.webp";
import asset12Small from "./assets/projects/pritesh-jain-residence-site-03-small.webp";
import asset11 from "./assets/projects/pritesh-jain-residence-render-01.webp";
import asset11Small from "./assets/projects/pritesh-jain-residence-render-01-small.webp";
import asset23 from "./assets/projects/suresh-rochwani-residence-site-01.webp";
import asset23Small from "./assets/projects/suresh-rochwani-residence-site-01-small.webp";
import asset22 from "./assets/projects/suresh-rochwani-residence-site-02.webp";
import asset22Small from "./assets/projects/suresh-rochwani-residence-site-02-small.webp";
import asset21 from "./assets/projects/suresh-rochwani-residence-render-01.webp";
import asset21Small from "./assets/projects/suresh-rochwani-residence-render-01-small.webp";
import asset31 from "./assets/projects/tarun-hinduja-residence-site-01.webp";
import asset31Small from "./assets/projects/tarun-hinduja-residence-site-01-small.webp";
import asset30 from "./assets/projects/tarun-hinduja-residence-site-02.webp";
import asset30Small from "./assets/projects/tarun-hinduja-residence-site-02-small.webp";
import asset32 from "./assets/projects/tarun-hinduja-residence-render-01.webp";
import asset32Small from "./assets/projects/tarun-hinduja-residence-render-01-small.webp";
import asset33 from "./assets/projects/tarun-hinduja-residence-render-02.webp";
import asset33Small from "./assets/projects/tarun-hinduja-residence-render-02-small.webp";
import asset20 from "./assets/projects/tanadiya-residence-site-01.webp";
import asset20Small from "./assets/projects/tanadiya-residence-site-01-small.webp";
import asset19 from "./assets/projects/tanadiya-residence-render-01.webp";
import asset19Small from "./assets/projects/tanadiya-residence-render-01-small.webp";
import asset27 from "./assets/projects/harish-tolani-residence-site-01.webp";
import asset27Small from "./assets/projects/harish-tolani-residence-site-01-small.webp";
import asset24 from "./assets/projects/harish-tolani-residence-render-01.webp";
import asset24Small from "./assets/projects/harish-tolani-residence-render-01-small.webp";
import asset25 from "./assets/projects/harish-tolani-residence-render-02.webp";
import asset25Small from "./assets/projects/harish-tolani-residence-render-02-small.webp";
import asset29 from "./assets/projects/dhananjay-gaikwad-residence-render-01.webp";
import asset29Small from "./assets/projects/dhananjay-gaikwad-residence-render-01-small.webp";
import asset28 from "./assets/projects/dhananjay-gaikwad-residence-render-02.webp";
import asset28Small from "./assets/projects/dhananjay-gaikwad-residence-render-02-small.webp";
import asset35 from "./assets/projects/gopal-raghuvanshi-residence-render-01.webp";
import asset35Small from "./assets/projects/gopal-raghuvanshi-residence-render-01-small.webp";
import asset34 from "./assets/projects/gopal-raghuvanshi-residence-render-02.webp";
import asset34Small from "./assets/projects/gopal-raghuvanshi-residence-render-02-small.webp";
import asset36 from "./assets/projects/jaswani-bungalow-render-01.webp";
import asset36Small from "./assets/projects/jaswani-bungalow-render-01-small.webp";
import asset37 from "./assets/projects/ankit-saxena-bungalow-render-01.webp";
import asset37Small from "./assets/projects/ankit-saxena-bungalow-render-01-small.webp";
import building from "./assets/projects/anandvilla-building.webp";
import buildingSmall from "./assets/projects/anandvilla-building-small.webp";
import buildingElevation from "./assets/projects/anandvilla-building-elevation.webp";

export type ProjectMedia = {
  src: string;
  preview: string;
  previewWidth: number;
  kind: "site" | "render";
  width: number;
  height: number;
  alt: string;
};
type ProjectDefinition = {
  id: string;
  title: string;
  client: string;
  location: string;
  number: string;
  type: string;
  featured: boolean;
  description: string;
  media: ProjectMedia[];
};
// Client-to-image mapping comes from the 22 March 2026 WhatsApp captions.
// See ASSET-SOURCES.md; renders are never described as completed work.
const definitions: ProjectDefinition[] = [
  {
    id: "anandvilla-residence",
    title: "Anandvilla Residence",
    client: "Rajat Agarwal",
    location: "Anand Villas, Dewas",
    featured: true,
    description:
      "A residence in Anand Villas, shown through site photographs and two proposed elevation views.",
    number: "01",
    type: "Residential construction",
    media: [
      {
        src: asset14,
        preview: asset14Small,
        previewWidth: 480,
        kind: "site",
        width: 1280,
        height: 960,
        alt: "Actual site photograph for Rajat Agarwal at Anand Villas, Dewas, view 1",
      },
      {
        src: asset13,
        preview: asset13Small,
        previewWidth: 480,
        kind: "site",
        width: 1280,
        height: 960,
        alt: "Actual site photograph for Rajat Agarwal at Anand Villas, Dewas, view 2",
      },
      {
        src: asset15,
        preview: asset15Small,
        previewWidth: 360,
        kind: "site",
        width: 960,
        height: 1280,
        alt: "Actual site photograph for Rajat Agarwal at Anand Villas, Dewas, view 3",
      },
      {
        src: asset17,
        preview: asset17Small,
        previewWidth: 480,
        kind: "render",
        width: 1280,
        height: 744,
        alt: "Proposed architectural elevation render for Rajat Agarwal at Anand Villas, Dewas, view 1",
      },
      {
        src: asset16,
        preview: asset16Small,
        previewWidth: 480,
        kind: "render",
        width: 1280,
        height: 808,
        alt: "Proposed architectural elevation render for Rajat Agarwal at Anand Villas, Dewas, view 2",
      },
    ],
  },
  {
    id: "pritesh-jain-residence",
    title: "Anand Villas Residence",
    client: "Pritesh Jain",
    location: "Anand Villas, Dewas",
    featured: true,
    description:
      "Site views document the residence under construction, alongside its proposed front elevation.",
    number: "02",
    type: "Residential construction",
    media: [
      {
        src: asset10,
        preview: asset10Small,
        previewWidth: 360,
        kind: "site",
        width: 960,
        height: 1280,
        alt: "Actual site photograph for Pritesh Jain at Anand Villas, Dewas, view 1",
      },
      {
        src: asset9,
        preview: asset9Small,
        previewWidth: 360,
        kind: "site",
        width: 960,
        height: 1280,
        alt: "Actual site photograph for Pritesh Jain at Anand Villas, Dewas, view 2",
      },
      {
        src: asset12,
        preview: asset12Small,
        previewWidth: 360,
        kind: "site",
        width: 960,
        height: 1280,
        alt: "Actual site photograph for Pritesh Jain at Anand Villas, Dewas, view 3",
      },
      {
        src: asset11,
        preview: asset11Small,
        previewWidth: 480,
        kind: "render",
        width: 1280,
        height: 720,
        alt: "Proposed architectural elevation render for Pritesh Jain at Anand Villas, Dewas, view 1",
      },
    ],
  },
  {
    id: "suresh-rochwani-residence",
    title: "Oyster Residence",
    client: "Suresh Rochwani",
    location: "Oyster, Indore",
    featured: true,
    description:
      "A curved facade taking shape on site, with a proposed elevation showing the architectural design.",
    number: "03",
    type: "Residential construction",
    media: [
      {
        src: asset23,
        preview: asset23Small,
        previewWidth: 480,
        kind: "site",
        width: 1280,
        height: 960,
        alt: "Actual site photograph for Suresh Rochwani at Oyster, Indore, view 1",
      },
      {
        src: asset22,
        preview: asset22Small,
        previewWidth: 360,
        kind: "site",
        width: 960,
        height: 1280,
        alt: "Actual site photograph for Suresh Rochwani at Oyster, Indore, view 2",
      },
      {
        src: asset21,
        preview: asset21Small,
        previewWidth: 480,
        kind: "render",
        width: 720,
        height: 708,
        alt: "Proposed architectural elevation render for Suresh Rochwani at Oyster, Indore, view 1",
      },
    ],
  },
  {
    id: "tarun-hinduja-residence",
    title: "Civil Lines Residence",
    client: "Tarun Hinduja",
    location: "Civil Lines, Dewas",
    featured: true,
    description:
      "Construction photographs and proposed exterior views of this residence in Civil Lines.",
    number: "04",
    type: "Residential construction",
    media: [
      {
        src: asset31,
        preview: asset31Small,
        previewWidth: 360,
        kind: "site",
        width: 960,
        height: 1280,
        alt: "Actual site photograph for Tarun Hinduja at Civil Lines, Dewas, view 1",
      },
      {
        src: asset30,
        preview: asset30Small,
        previewWidth: 360,
        kind: "site",
        width: 960,
        height: 1280,
        alt: "Actual site photograph for Tarun Hinduja at Civil Lines, Dewas, view 2",
      },
      {
        src: asset32,
        preview: asset32Small,
        previewWidth: 480,
        kind: "render",
        width: 1280,
        height: 847,
        alt: "Proposed architectural elevation render for Tarun Hinduja at Civil Lines, Dewas, view 1",
      },
      {
        src: asset33,
        preview: asset33Small,
        previewWidth: 480,
        kind: "render",
        width: 1280,
        height: 879,
        alt: "Proposed architectural elevation render for Tarun Hinduja at Civil Lines, Dewas, view 2",
      },
    ],
  },
  {
    id: "tanadiya-residence",
    title: "Dewas Residence",
    client: "Tanadiya ji",
    location: "Dewas",
    description:
      "The site photograph and proposed elevation show two perspectives on this residential project.",
    number: "05",
    type: "Residential construction",
    featured: false,
    media: [
      {
        src: asset20,
        preview: asset20Small,
        previewWidth: 360,
        kind: "site",
        width: 960,
        height: 1280,
        alt: "Actual site photograph for Tanadiya ji at Dewas, view 1",
      },
      {
        src: asset19,
        preview: asset19Small,
        previewWidth: 480,
        kind: "render",
        width: 591,
        height: 394,
        alt: "Proposed architectural elevation render for Tanadiya ji at Dewas, view 1",
      },
    ],
  },
  {
    id: "harish-tolani-residence",
    title: "New Rani Bagh Residence",
    client: "Harish Tolani",
    location: "New Rani Bagh, Indore",
    description:
      "A site view shared with two architectural design views for the New Rani Bagh residence.",
    number: "06",
    type: "Residential construction",
    featured: false,
    media: [
      {
        src: asset27,
        preview: asset27Small,
        previewWidth: 480,
        kind: "site",
        width: 591,
        height: 334,
        alt: "Actual site photograph for Harish Tolani at New Rani Bagh, Indore, view 1",
      },
      {
        src: asset24,
        preview: asset24Small,
        previewWidth: 480,
        kind: "render",
        width: 893,
        height: 600,
        alt: "Proposed architectural elevation render for Harish Tolani at New Rani Bagh, Indore, view 1",
      },
      {
        src: asset25,
        preview: asset25Small,
        previewWidth: 480,
        kind: "render",
        width: 776,
        height: 600,
        alt: "Proposed architectural elevation render for Harish Tolani at New Rani Bagh, Indore, view 2",
      },
    ],
  },
  {
    id: "dhananjay-gaikwad-residence",
    title: "Dewas Residence",
    client: "Dhananjay Gaikwad",
    location: "Dewas",
    description:
      "Day and evening architectural renderings of the proposed residential elevation.",
    number: "07",
    type: "Residential design",
    featured: false,
    media: [
      {
        src: asset29,
        preview: asset29Small,
        previewWidth: 352,
        kind: "render",
        width: 938,
        height: 1280,
        alt: "Proposed architectural elevation render for Dhananjay Gaikwad at Dewas, view 1",
      },
      {
        src: asset28,
        preview: asset28Small,
        previewWidth: 335,
        kind: "render",
        width: 894,
        height: 1280,
        alt: "Proposed architectural elevation render for Dhananjay Gaikwad at Dewas, view 2",
      },
    ],
  },
  {
    id: "gopal-raghuvanshi-residence",
    title: "Shivom Estate Residence",
    client: "Gopal Raghuvanshi ji",
    location: "Shivom Estate",
    description:
      "Two proposed architectural views of the residence at Shivom Estate.",
    number: "08",
    type: "Residential design",
    featured: false,
    media: [
      {
        src: asset35,
        preview: asset35Small,
        previewWidth: 480,
        kind: "render",
        width: 1280,
        height: 1024,
        alt: "Proposed architectural elevation render for Gopal Raghuvanshi ji at Shivom Estate, view 1",
      },
      {
        src: asset34,
        preview: asset34Small,
        previewWidth: 480,
        kind: "render",
        width: 1280,
        height: 1024,
        alt: "Proposed architectural elevation render for Gopal Raghuvanshi ji at Shivom Estate, view 2",
      },
    ],
  },
  {
    id: "jaswani-bungalow",
    title: "Shivom Estate Bungalow",
    client: "Jaswani ji",
    location: "Shivom Estate",
    description:
      "A proposed front elevation for the bungalow at Shivom Estate.",
    number: "09",
    type: "Residential design",
    featured: false,
    media: [
      {
        src: asset36,
        preview: asset36Small,
        previewWidth: 480,
        kind: "render",
        width: 1206,
        height: 794,
        alt: "Proposed architectural elevation render for Jaswani ji at Shivom Estate, view 1",
      },
    ],
  },
  {
    id: "ankit-saxena-bungalow",
    title: "Aaradhaya Township Bungalow",
    client: "Ankit Saxena ji",
    location: "Aaradhaya Township",
    description:
      "An architectural rendering of the proposed bungalow at Aaradhaya Township.",
    number: "10",
    type: "Residential design",
    featured: false,
    media: [
      {
        src: asset37,
        preview: asset37Small,
        previewWidth: 480,
        kind: "render",
        width: 1280,
        height: 960,
        alt: "Proposed architectural elevation render for Ankit Saxena ji at Aaradhaya Township, view 1",
      },
    ],
  },
  {
    id: "anandvilla-building",
    title: "Anandvilla Residential Building",
    client: "Neeraj Vijayvergy",
    location: "Anandvilla, Dewas",
    number: "11",
    type: "Residential construction",
    featured: false,
    description:
      "The residential concrete frame and masonry shown in the company brochure, alongside the proposed elevation.",
    media: [
      {
        src: building,
        preview: buildingSmall,
        previewWidth: 320,
        kind: "site",
        width: 478,
        height: 325,
        alt: "Actual site photograph of the residential building for Neeraj Vijayvergy at Anandvilla, Dewas",
      },
      {
        src: buildingElevation,
        preview: buildingElevation,
        previewWidth: 478,
        kind: "render",
        width: 478,
        height: 339,
        alt: "Proposed architectural elevation render for Neeraj Vijayvergy at Anandvilla, Dewas",
      },
    ],
  },
];

export const projects = definitions.map((project) => ({
  ...project,
  image: project.media[0].src,
  smallImage: project.media[0].preview,
  smallWidth: project.media[0].previewWidth,
  width: project.media[0].width,
  height: project.media[0].height,
  alt: project.media[0].alt,
}));
export const featuredProjects = projects.filter((project) => project.featured);
