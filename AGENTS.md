# Agent Guidelines

## User Preferences
- **Project Structure**: Multi-themed website.
- **Primary Theme (Main app)**: Matrix Aesthetic, Digital Rain, Green/Black, High-Tech/Cyberpunk.
- **Secondary Theme (Corporate app)**: New York Times / White House style. Pure white background, black text, elegant serif fonts, sharp newspaper-like borders, strict monochrome.
- **Tech Stack**: React + Vite

## Workflows
- Always update this file after significant changes.
- Use `.agent/workflows` for repeatable tasks.
- Keep the `theme-*` logic separated in `root` layouts to isolate CSS properties between sections.

## Common Gotchas
- Ensure the Canvas Matrix Rain effect performs well and doesn't block the main thread.
- Corporate styles must not leak into the Matrix theme scope. Always wrap Corporate styling behind the `.theme-corporate` wrapper class.
- Project copy is theme-specific: use `matrixDescription` for Matrix and `corporateDescription` for Corporate so tone stays isolated per theme.
- Project tech badges should reflect the real local project stack, not assumptions from the live site.
- Portfolio tech badges should stay user-facing and code-focused; avoid hosting or backend service labels unless they are intentionally part of the presentation.
- The Newspaper (Corporate) footer must remain slim and compact. Keep padding tight (e.g. `py-3 md:py-4`) and preserve the double-line border (`border-t-4 border-double border-black`). Avoid large blank spaces (`pb-24`) at the bottom of the main wrapper.

## Suggestions
- Decouple project presentation details (such as custom scaling, crop levels, sepia states, hover behavior) from components by defining them directly as metadata inside `projects.json` to keep layout files strictly data-driven.
- Consider moving format helpers (like title casing or string replacements) to a dedicated `src/utils/format.js` module, allowing reuse between themes and the simulated AI chat brain component.
