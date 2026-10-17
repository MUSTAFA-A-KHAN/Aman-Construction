# Content and asset sources

The refresh uses existing repository material. No stock images or generated images are presented as company projects.

## Business details

The cover of `../aman construction.pdf` supplies:

- AMAN Construction and the existing AC logo.
- Phone / WhatsApp: +91 9329370146 and +91 8878234168.
- Email: amanconstruction146@gmail.com.
- Office: 69, Ekta Nagar, Ujjain Road, Dewas (M.P.).

The previous contact page's placeholder number and generic email were replaced with these brochure details. Anandvilla is identified as a project location, not the office address.

## Project photography

Extracted directly from embedded images in the supplied PDF, converted to WebP with Pillow; no generative changes or upscaling:

| Asset in `src/assets/projects` | Source | Meaning |
| --- | --- | --- |
| `anandvilla-residence.webp` | Page 3, image xref 81, 478 × 349 | Actual construction photograph, Rajat Agrawal project, Anandvilla, Dewas |
| `anandvilla-residence-elevation.webp` | Page 3, image xref 82, 478 × 306 | Proposed architectural elevation, explicitly labelled as a render |
| `anandvilla-building.webp` | Page 4, image xref 88, 478 × 325 | Actual construction photograph, Neeraj Vhayvergy project, Anandvilla, Dewas |
| `anandvilla-building-elevation.webp` | Page 4, image xref 89, 478 × 339 | Proposed architectural elevation, explicitly labelled as a render |

The `-small` versions are 320 px responsive derivatives. Project titles describe the location and visible building type; they are not claimed to be official development names. Dates, completion status today, floor areas, and additional project scope were not supplied and are not invented. The photographs are labelled as construction in progress **when photographed**.

The source photographs are modest in resolution. Replacing them with original camera files is the next visual improvement if those become available.

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
