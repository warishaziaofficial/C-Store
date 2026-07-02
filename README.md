# C-Store — Convenience Store Frontend

A modern, responsive C-Store (Convenience Store) frontend built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** Shadcn UI
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, categories, best sellers, promotions, and more |
| `/products` | Full product catalog |
| `/categories` | Browse all categories |
| `/categories/[slug]` | Category detail with filtered products |
| `/deals` | Deals & promotions |
| `/store-locator` | Find nearby stores |
| `/about` | About C-Store |
| `/contact` | Contact form |
| `/faq` | Frequently asked questions |

## Project Structure

```
app/                  # Next.js App Router pages
components/
  ui/                 # Shadcn UI primitives
  home/               # Home page sections
  products/           # Product cards and grids
  layout/             # Navbar, footer, page headers
lib/
  data/               # Dummy JSON data
  types.ts            # TypeScript interfaces
  utils.ts            # Utility functions
public/images/        # Static image assets
```

## Notes

- Frontend-only — no backend, authentication, or database
- Product images sourced from Unsplash
- Cart and user icons are UI placeholders only
