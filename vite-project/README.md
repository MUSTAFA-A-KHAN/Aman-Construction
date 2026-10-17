# AMAN Construction

React, TypeScript, Vite, and hash routing. The existing GitHub Pages base path and Formspree endpoint are preserved.

## Local development

Use Node 22+ and pnpm 10.34.7:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the URL printed by Vite, including `/Aman-Construction/`.

```sh
pnpm build
pnpm preview
```

The build includes the TypeScript check. GitHub Actions installs the matching pnpm version and builds/deploys `dist` on pushes to `main`.

## Updating content

- `src/data.ts`: business contact details, process copy, and package allowances.
- `src/project-data.ts`: client/project records and gallery media. Each image is explicitly marked `site` or `render`; preserve that distinction.
- `src/assets/projects`: optimized local WebP images and smaller variants.
- `ASSET-SOURCES.md`: image-to-client mappings, original filenames, and verified business sources.
- `src/components/EnquiryForm.tsx`: the retained Formspree integration. Do not replace successful server confirmation with a simulated success state.

The original WhatsApp export and private review material are ignored by Git and are not shipped with the website. Only selected project images and relevant client/location metadata are used.

## Browser verification

The root `artifacts/verify.cjs` checks the production preview at `http://127.0.0.1:4173/Aman-Construction/`. It uses Playwright and axe installed outside the application, so no production dependencies were added for QA.

On Windows PowerShell, from the repository root:

```powershell
npm install --prefix "$env:TEMP/aman-qa" --no-package-lock playwright @axe-core/playwright
node artifacts/verify.cjs
```

The script uses the installed Microsoft Edge browser. `QA_BROWSER`, `QA_BASE_URL`, and `QA_NODE_MODULES` can override the browser channel, preview URL, and QA dependency directory.

Tests cover 320, 390, 768, and 1440 px layouts; six routes; mobile navigation; client galleries and filters; package and project enquiry context; reduced motion; and form validation and submission states. All form requests are intercepted locally. No test enquiry is sent to the live business inbox.

See `../artifacts/verification.json` for recorded results and `../artifacts/REVIEW.md` for screenshots and verification limits.
