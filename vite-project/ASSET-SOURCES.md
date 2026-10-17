# Content and asset sources

The refresh uses the supplied company material and WhatsApp export. No stock or AI-generated substitutes have been added. Supplied architectural renders are explicitly distinguished from actual site photographs.

## Business details

The cover of `../aman construction.pdf` supplies:

- AMAN Construction and the existing AC logo.
- Phone / WhatsApp: +91 9329370146 and +91 8878234168.
- Email: amanconstruction146@gmail.com.
- Office: 69, Ekta Nagar, Ujjain Road, Dewas (M.P.).

The previous contact page's placeholder number and generic email were replaced with these brochure details. Anandvilla is identified as a project location, not the office address.

## WhatsApp project images and client names

The user requested images and client names from `WhatsApp Chat with Shoukat.zip`. The 22 March 2026 messages explicitly caption the following groups. Matching adjacent images were checked visually against those captions before inclusion.

All filenames in this table have the prefix `IMG-20260322-WA` and suffix `.jpg`.

| Client as supplied | Location supplied | Included site photographs | Included proposed renders |
| --- | --- | --- | --- |
| Rajat Agarwal | Anand Villas, Dewas | 0013, 0014, 0015 | 0016, 0017 |
| Pritesh Jain | Anand Villas, Dewas | 0009, 0010, 0012 | 0011 |
| Suresh Rochwani | Oyster, Indore | 0022, 0023 | 0021 |
| Tarun Hinduja | Civil Lines, Dewas | 0030, 0031 | 0032, 0033 |
| Tanadiya ji | Dewas | 0020 | 0019 |
| Harish Tolani | New Rani Bagh, Indore | 0027 | 0024, 0025 |
| Dhananjay Gaikwad | Dewas | None supplied | 0028, 0029 |
| Gopal Raghuvanshi ji | Shivom Estate | None supplied | 0034, 0035 |
| Jaswani ji | Shivom Estate | None supplied | 0036 |
| Ankit Saxena ji | Aaradhaya Township | None supplied | 0037 |

This adds 27 distinct images for 10 named client groups. The existing Neeraj Vijayvergy brochure project remains, for 11 displayed project records and 29 gallery images; these are portfolio-display counts, not claims about the business's total completed projects.

- `0008`, `0018`, `0026`, and `0038` duplicate images already represented by cleaner originals or collages and were omitted.
- `0019` and `0027` were cropped only to remove black screenshot borders and phone UI. No building details or designer credits were removed. The original designer mark on `0037` is preserved.
- Images are converted to WebP, capped at 1280 pixels on their longest side, with small variants capped at 480 pixels. EXIF is not copied. No upscaling or generative edits are used.
- The higher-resolution `0014` site photograph replaces the earlier brochure image in the hero and About page. Four actual-site projects are featured on the homepage, with client names visible below each image.
- The chat spells the client's name **Rajat Agarwal**; this newer explicit caption takes precedence over the brochure's **Rajat Agrawal** spelling.
- The rendered project page in the export's `Aman Construction Brochar.pdf` confirms **Neeraj Vijayvergy**, correcting the previous website's **Vhayvergy** transcription.
- Shivom Estate and Aaradhaya Township are not assigned an inferred city. No completion dates, areas, project totals, or precise contractual scopes are invented.
- The complete ZIP, chat transcript, unrelated personal media, and review extracts are excluded from version control and the deployed build. Only the selected project assets and their relevant client/location metadata are published.
- A later standalone phone message in the chat is not treated as an instruction to replace the brochure-verified business contact numbers.

## Original brochure photography

Extracted directly from embedded images in the supplied PDF, converted to WebP with Pillow; no generative changes or upscaling:

| Asset in `src/assets/projects` | Source | Meaning |
| --- | --- | --- |
| `anandvilla-residence.webp` | Page 3, image xref 81, 478 × 349 | Actual construction photograph, Rajat Agrawal project, Anandvilla, Dewas |
| `anandvilla-residence-elevation.webp` | Page 3, image xref 82, 478 × 306 | Proposed architectural elevation, explicitly labelled as a render |
| `anandvilla-building.webp` | Page 4, image xref 88, 478 × 325 | Actual construction photograph, Neeraj Vijayvergy project, Anandvilla, Dewas |
| `anandvilla-building-elevation.webp` | Page 4, image xref 89, 478 × 339 | Proposed architectural elevation, explicitly labelled as a render |

The `-small` versions are 320 px responsive derivatives. Project titles describe the location and visible building type; they are not claimed to be official development names. Dates, completion status today, floor areas, and additional project scope were not supplied and are not invented. The photographs are labelled as construction in progress **when photographed**.

The Neeraj Vijayvergy project remains limited to the supplied brochure resolution. Rajat Agarwal's brochure images are retained in source history but superseded in the interface by the WhatsApp originals.

## Services, packages, and video

- Core specifications and drawings: brochure page 2.
- Package allowance summaries: existing pricing page and brochure pages 6–9.
- Exclusions: brochure page 10; existing exclusions are retained and clarified.
- Supervision, materials, updates, milestone payments: brochure page 11.
- Existing Premium / Style / Luxury rates of ₹1,550 / ₹1,750 / ₹1,950 per sq ft are retained as indicative rates. Page 8 contains conflicting rate/tax references; the site asks for a current written quote and does not promise an all-inclusive final price.
- The existing `src/assets/promo-video.mp4` is preserved on the About page. It is a Hindi construction guide, not project footage. It is mounted only after the visitor requests it and has no autoplay.
- No testimonials, awards, clients beyond the supplied project records, project totals, or years-of-experience claims have been added.

## Font

Manrope Latin variable font is self-hosted from `@fontsource-variable/manrope`. Its SIL Open Font License is included in `src/assets/fonts/OFL.txt`. No third-party font request is needed at runtime.

## Submission integration

The existing Formspree endpoint `https://formspree.io/f/xovazlrl` and original `name`, `email`, `phone`, and `message` field names are retained. Package and location context are additional fields. A successful HTTP response is required before the form clears or shows success; explicit API error responses are rejected. Formspree's documented fetch flow is at https://formspree.io/blog/formspree-ajax/.

Browser tests intercept form submissions locally. They never send a real enquiry. Inbox delivery and Formspree account configuration require verification by the account owner.
