# AMAN Construction refresh — 17 October 2026

## Delivered

- Preserved the AC logo and navy/gold identity; added warm neutral surfaces, self-hosted Manrope typography, architectural line details, and a compact sticky header.
- Rebuilt the homepage around services, actual project photographs, company principles, process, packages, and contact actions.
- Retained all existing routes and the GitHub Pages hash/base-path configuration; added `/projects`.
- Read the supplied WhatsApp ZIP and matched project images to its explicit client captions. Added 27 distinct images for 10 named clients, alongside the retained brochure project: 11 displayed projects, 29 gallery images.
- Added client names, project locations, image galleries with previous/next controls and thumbnails, full-size image links, and site-photo/design-only filters.
- Clearly distinguished actual photographs from proposed architectural renders. Used the higher-resolution Rajat Agarwal photograph in the hero. Corrected Neeraj Vijayvergy's name using the visually verified brochure supplied in the ZIP.
- Verified business phone, WhatsApp, email, and office address from company material; removed placeholder contact information.
- Connected package selection and project enquiries to the existing Formspree form. Added validation, pending state, timeout/error recovery, preserved input on failure, and success only after a successful server response.
- Used short CSS transitions, optional section movement, reduced-motion support, keyboard focus states, and a skip link. No fixed contact controls cover content.
- Optimized project assets as local WebP files, reserved image dimensions, lazy-loaded below-fold images, and deferred the existing video until requested.
- Aligned GitHub Actions with the existing pnpm lockfile using pnpm 10.34.7 and Node 22.

## Verification

| Check | Result |
| --- | --- |
| TypeScript and production Vite build | Passed |
| Frozen-lockfile dependency installation | Passed |
| Six routes at 320, 390, 768, and 1440 px | 24 layout checks passed; no horizontal overflow |
| axe WCAG A/AA scans at mobile and desktop sizes | 12 scans; zero reported violations |
| JavaScript page errors | None during browser verification |
| Mobile hero enquiry action | Visible above the fold |
| Menu open/close, Escape focus return, route selection | Passed |
| Client galleries, previous/next, photo/render modes, filters | Passed; 7 projects with site photos and 4 with design-only images |
| Every gallery image | All 29 decoded successfully; no failed image requests |
| Package/project enquiry prefill | Passed |
| Required fields, invalid email and phone | Passed; invalid data makes no request |
| Mock HTTP failure, network failure, explicit unconfirmed response | Correct error state; input retained |
| Mock confirmed submission and retry/reset | Passed |
| Video | No MP4 request until requested; media metadata loads successfully |
| Reduced motion and keyboard skip link | Passed |
| Private export in production output | No ZIP, transcript, or unrelated chat media shipped |
| Git whitespace check | Passed |

The detailed browser record is [verification.json](verification.json); the repeatable test is [verify.cjs](verify.cjs). A final targeted check confirmed the brochure-corrected Neeraj Vijayvergy name and image alt text after the full suite.

## Screenshots

- [Desktop before/after comparison](comparison-desktop.jpg)
- [Mobile before/after comparison](comparison-mobile.jpg)
- [Final desktop homepage](after-desktop.png)
- [Final mobile homepage](after-mobile.png)
- [Client gallery — desktop excerpt](whatsapp-gallery-desktop.png)
- [Client gallery — mobile excerpt](whatsapp-gallery-mobile.png)
- [All projects — desktop](projects-desktop.png)
- [All projects — mobile](projects-mobile.png)
- [Enquiry page — desktop](contact-desktop.png)
- [Enquiry page — mobile](contact-mobile.png)

## Limits and remaining notes

- Changes are in the local repository; no production deployment was triggered.
- Form submissions were mocked in the browser. Live Formspree account configuration and inbox delivery were not tested by sending a real enquiry.
- The in-app browser preview surface was unavailable. Screenshots and interactive verification were completed with headless Microsoft Edge through Playwright against the production build.
- The existing React SWC/Vite combination emits a non-blocking `esbuild` deprecation warning. The build succeeds; the framework/plugin was not changed.
- Package material contains conflicting rate/tax references, so existing rates remain indicative and visitors are directed to a current written quotation.
- The retained Neeraj project uses the lower-resolution brochure images; the other selected projects now use the supplied WhatsApp media.

Source-to-client mappings and image classifications are documented in [ASSET-SOURCES.md](../vite-project/ASSET-SOURCES.md). The raw WhatsApp export and review extracts remain private source material outside the website build.
