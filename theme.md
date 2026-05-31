# Flowbase Cozy Theme

## Design Direction
Flowbase should feel like a calm but fresh workroom for planning, writing, mapping, and reviewing ideas. The interface should stay modern and clean, with compact controls, low-contrast borders, airy surfaces, and soft color accents that help users scan without feeling loud.

## Color Palette
- App background: fresh warm paper `#f6f4ec`
- Surface: airy mint cream `#fbfff8`
- Raised surface: warm white `#ffffff`
- Text: fresh muted ink `#2d2f2c`
- Secondary text: sage gray `#667269`
- Border: low-contrast sage sand `#e0e6d8`
- Primary action: fresh teal `#2f9f8f`
- Clay/coral accent: `#e26f5c`
- Soft amber: `#d69a2d`
- Sage: `#6da45f`
- Lavender: `#8f73d9`
- Dusty rose: `#d66f9a`
- Board blue: `#3f94d3`

## Typography
- Use the system sans-serif stack through Tailwind and browser defaults.
- Headings should be calm and readable, usually semibold instead of extra-bold.
- Sidebar labels should stay compact: `12px-13px` for items and `10px` uppercase group labels.
- Avoid negative letter spacing. Use subtle uppercase tracking only for small metadata and group labels.

## Spacing And Shape
- Keep dashboard spacing dense but breathable: `16px-20px` page gutters and `8px-16px` internal panel spacing.
- Use `8px` border radius for app panels, controls, menu rows, and cards unless a component needs a slightly softer container.
- Prefer low shadows and soft borders over heavy elevation.
- Avoid nested visual cards. Use panels for major dashboard regions and simple blocks for repeated items.

## Sidebar Rules
- Expanded sidebar width should be about `248px`; collapsed width should be about `76px`.
- Show logo mark and product name in expanded mode.
- In collapsed mode, keep only icons visible and use button titles for hover context.
- Group menu items under Workspace, Create, and System labels.
- Use lucide icons for all navigation and action icons.
- Icons should be colorful but muted, using the palette above rather than neon tones.
