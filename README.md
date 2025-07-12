# Software Consulting Agency Website

A modern, high-performance landing page for a software consulting agency built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Aceternity UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes (dark mode support)
- **Analytics**: Vercel Analytics

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles and CSS variables
├── components/            
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx     # shadcn/ui button
│   │   └── aceternity/    # Aceternity UI components
│   ├── sections/          # Page sections
│   │   └── hero.tsx       # Hero section component
│   └── providers.tsx      # Theme provider
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Features Implemented

- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS with custom design system
- ✅ Dark mode support
- ✅ Responsive design
- ✅ SEO optimized metadata
- ✅ Performance optimizations
- ✅ Animated hero section
- ✅ Aceternity UI components

## Design System

The project uses a custom color palette defined in CSS variables that supports both light and dark modes. Colors are based on the specifications in `Spec.md`.

## Next Steps

According to the specification, the following sections need to be implemented:

1. Services Section (BentoGrid)
2. Case Studies Showcase (CardSpotlight)
3. Technology Stack Display
4. Process Section
5. Testimonials
6. Contact Section

Each section should include the specified animations and interactive elements from the specification.