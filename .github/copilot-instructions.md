# GitHub Copilot Instructions — scaleFlow

These rules apply to every task in this repository. Follow them strictly.

---

## 1. Always Plan First — Wait for Approval

Before writing any code or making changes:

1. Provide a clear, numbered implementation plan listing every file that will be created or modified and what changes will be made.
2. **Stop and wait for explicit approval** from the user before proceeding.
3. Do not start implementation until the user says "go", "approved", "start", or similar.

---

## 2. Always Verify Output Before Calling Work Complete

**After every implementation — no exceptions — run a verification check before git push or telling the user the work is done.**

### Verification checklist (run in order):

1. **Run `npm run build`** — must complete with `✓ built` and zero errors. Warnings about deprecated classes must also be fixed.
2. **Check the running dev server** (`npm run dev`) — open the browser and visually confirm the affected sections render correctly with no console errors.
3. **Fix any errors found** before proceeding. Do not push broken code.
4. Only after all checks pass: proceed to git pull → add → commit → push.
5. Only after the push succeeds: tell the user the work is complete.

> If a build or dev server is already running from a previous step, check its output rather than starting a new one.

---

## 3. Git Pull & Push After Every Feature or Bug Fix

After verification passes (see Rule 2), run these commands in order:

```bash
git pull
git add .
git commit -m "<type>: <short description>"
git push
```

- Use conventional commit prefixes: `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`
- Never force-push (`--force`) without explicit user confirmation.
- Never amend published commits.

---

## 4. Always Update README and This File After Every Task

After every completed feature, design change, or structural update:

1. **Update `README.md`** — reflect the new stack versions, sections, component structure, and any design notes that changed.
2. **Update `.github/copilot-instructions.md`** — update the stack table, conventions, and any rules that are now outdated.
3. Commit both files together with the feature commit (do not make a separate commit just for docs).

This keeps the project self-documenting and future work starts with accurate context.

---

## 5. Always Check Available Packages First

Before suggesting or using any library:

1. Read `package.json` to check what is already installed.
2. Use existing packages and their installed versions in all generated code.
3. **Do not assume a package is available** if it is not listed in `package.json`.

### If a new package is needed:

- Suggest it with the **recommended version** (e.g., `"lucide-react": "^1.16.0"`).
- Explain why it is needed.
- **Wait for approval before installing.**

### Current project stack (keep this updated):

| Package           | Version |
| ----------------- | ------- |
| react             | ^19.2.6 |
| react-dom         | ^19.2.6 |
| vite              | ^8.0.14 |
| @tailwindcss/vite | ^4.3.0  |
| tailwindcss       | ^4.3.0  |
| daisyui           | ^5.5.20 |
| lucide-react      | ^1.16.0 |

---

## 6. Code Style & Conventions

- **Framework**: React 19 functional components with hooks — no class components.
- **Styling**: Tailwind CSS v4 utility classes + DaisyUI v5 component classes. No inline styles.
- **Tailwind v4**: No `tailwind.config.js`. All config lives in `src/index.css` via `@import "tailwindcss"` and `@plugin "daisyui"`. Use `@tailwindcss/vite` plugin in `vite.config.js`.
- **Deprecated Tailwind v3 classes**: Use `shrink-0` not `flex-shrink-0`. Use `bg-linear-to-br` not `bg-gradient-to-br`. Always check for v4 equivalents.
- **Theming**: Use DaisyUI semantic tokens (`bg-base-100`, `text-base-content`, etc.) for theme-aware surfaces. Dark sections (About, Services, CTA, Footer) use explicit `bg-indigo-900` and look the same in both themes — this is intentional.
- **Dark/Light theme**: Toggled via `data-theme` attribute on `<html>` (DaisyUI v5 still uses this pattern). Theme state is persisted in `localStorage`. Managed by `ThemeToggle.jsx`.
- **Icons**: Use `lucide-react` icons only. No other icon library.
- **Exports**: All components are exported via `src/components/index.js` barrel file — add every new component there.
- **Routing**: This is a single-page landing site using anchor links (`#section`). Do not add a routing library unless explicitly requested.
- **File naming**: PascalCase for component files (e.g., `ThemeToggle.jsx`), camelCase for utilities.
- **Component naming**: Every exported component must have a clear, descriptive name that matches its file and appears correctly in React DevTools. Sub-components (used inside a section) live in their own files with matching export names (e.g., `StatCard.jsx` exports `StatItem`).

---

## 7. Component Architecture

The project splits UI into **section components** (one per page section) and **named sub-components** (repeated UI elements).

### Section components (in `src/components/`):

`Header` · `Hero` · `About` · `CaseStudies` · `Services` · `Pricing` · `FAQ` · `Testimonials` · `CTA` · `Footer`

### Sub-components (reusable named pieces):

| File                  | Export            | Used In      |
| --------------------- | ----------------- | ------------ |
| `StatCard.jsx`        | `StatItem`        | About        |
| `ServiceCard.jsx`     | `ServiceItem`     | Services     |
| `PortfolioCard.jsx`   | `CaseStudyRow`    | CaseStudies  |
| `TestimonialCard.jsx` | `TestimonialCard` | Testimonials |
| `PricingCard.jsx`     | `PricingCard`     | Pricing      |
| `FaqItem.jsx`         | `FaqItem`         | FAQ          |
| `ThemeToggle.jsx`     | `ThemeToggle`     | Header       |

### Data layer (`src/utils/constants.js`):

`NAV_LINKS` · `STATS` · `CASE_STUDIES` · `SERVICES` · `PRICING_PLANS` · `FAQ_ITEMS` · `TESTIMONIALS`

When adding a new section, always: create a section component + any needed sub-component + add data to `constants.js` + export from `index.js`.

---

## 8. Design System

- **Primary brand color**: `indigo-900` (dark sections, buttons)
- **Accent / CTA**: `yellow-400` (highlighted text, CTA buttons)
- **Decorative elements**: Colorful CSS `<div>` blocks (`bg-green-400`, `bg-yellow-400`, `bg-red-400`, `bg-blue-400`, etc.) serve as illustration placeholders. Use `absolute` positioning with `rotate-*` utilities and `pointer-events-none` wrapper.
- **Typography**: Poppins font (100–900 weights), loaded via Google Fonts in `index.css`. Section headings use `font-black`.
- **Border radius**: `rounded-2xl` for cards, `rounded-3xl` for section blocks.

---

## 9. No Over-Engineering

- Only make changes that are directly requested or clearly necessary.
- Do not add extra features, refactoring, or "improvements" beyond the task scope.
- Do not add docstrings or comments to code you didn't change.
- Do not create markdown documentation files unless explicitly asked.
