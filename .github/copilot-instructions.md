# GitHub Copilot Instructions — scaleFlow

These rules apply to every task in this repository. Follow them strictly.

---

## 1. Always Plan First — Wait for Approval

Before writing any code or making changes:

1. Provide a clear, numbered implementation plan listing every file that will be created or modified and what changes will be made.
2. **Stop and wait for explicit approval** from the user before proceeding.
3. Do not start implementation until the user says "go", "approved", "start", or similar.

---

## 2. Git Pull & Push After Every Feature or Bug Fix

After every completed feature or bug fix (not mid-task), run these commands in order:

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

## 3. Always Check Available Packages First

Before suggesting or using any library:

1. Read `package.json` to check what is already installed.
2. Use existing packages and their installed versions in all generated code.
3. **Do not assume a package is available** if it is not listed in `package.json`.

### If a new package is needed:

- Suggest it with the **recommended version** (e.g., `"lucide-react": "^0.441.0"`).
- Explain why it is needed.
- **Wait for approval before installing.**

### Current project stack (keep this updated):

| Package      | Version            |
| ------------ | ------------------ |
| react        | ^18.3.1            |
| react-dom    | ^18.3.1            |
| vite         | ^8.0.3             |
| tailwindcss  | ^3.4.3             |
| daisyui      | ^3.2.2             |
| lucide-react | (see package.json) |

---

## 4. Code Style & Conventions

- **Framework**: React 18 functional components with hooks — no class components.
- **Styling**: Tailwind CSS utility classes + DaisyUI component classes. No inline styles.
- **Theming**: Use DaisyUI semantic tokens (`bg-base-100`, `text-base-content`, etc.) for theme-aware colors. Avoid hardcoded light-only colors for large layout surfaces.
- **Dark/Light theme**: Toggled via `data-theme` attribute on `<html>` (DaisyUI v3 pattern). Theme state is persisted in `localStorage`.
- **Icons**: Use `lucide-react` icons only. No other icon library.
- **Exports**: All components are exported via `src/components/index.js` barrel file — add every new component there.
- **Routing**: This is a single-page landing site using anchor links (`#section`). Do not add a routing library unless explicitly requested.
- **File naming**: PascalCase for component files (e.g., `ThemeToggle.jsx`), camelCase for utilities.

---

## 5. No Over-Engineering

- Only make changes that are directly requested or clearly necessary.
- Do not add extra features, refactoring, or "improvements" beyond the task scope.
- Do not add docstrings or comments to code you didn't change.
- Do not create markdown documentation files unless explicitly asked.
