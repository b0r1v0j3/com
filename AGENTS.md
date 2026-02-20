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

## Suggestions
- None yet.
