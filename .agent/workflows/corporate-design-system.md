---
description: How to maintain and extend the Corporate Design System
---
# Corporate Design System Workflow

This workflow ensures that the Corporate site maintains its intended New York Times / White House editorial aesthetic.

## 1. Core Principles
- **Monochrome & High Contrast**: Strict adherence to true black (`#000000` or `text-gray-900`/`1000`) on optic white (`#ffffff`).
- **Typography First**: 
  - Subheaders and Meta tags should use crisp sans-serif fonts in small caps.
  - Body text and primary headers should heavily utilize elegant serif fonts.
- **Structural Lines**: Use stark, newspaper-like borders (`border-t-2`, `border-b`) to delineate sections rather than background colors or drop shadows.
- **Absence of Color**: Color should be used *exclusively* for active states (like selection backgrounds) or extremely subtle interactions, rather than static decoration.

## 2. When adding new components
- Avoid using rounded corners (`rounded-md`, `rounded-full`). The aesthetic relies on sharp, hard vertices.
- Avoid using colored backgrounds for sections. Use horizontal line separators to divide content.
- For interactive elements (like buttons), a simple border and an inverted hover state (black background, white text) is preferred over gradients or colored buttons.

## 3. Reference Implementation
See `src/CorporateApp.jsx` for the definitive implementation of these principles in the primary layouts.
