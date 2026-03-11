# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview build locally
- `npm install` - Install dependencies

## Architecture Overview

This is a reusable monument company website template built with Astro, React components, TypeScript, and Tailwind CSS. All company-specific content is centralized in `src/config/site.ts`.

### Project Structure
- **Astro Framework**: Uses Astro v5 with React integration for component hydration
- **React Components**: Main UI components in `src/components/` (Hero, Services, Gallery, Contact, etc.)
- **UI Library**: Comprehensive shadcn/ui component library in `src/components/ui/`
- **Styling**: Tailwind CSS v4 configured via Vite plugin
- **Assets**: Images stored in `src/assets/` with organized subdirectories for logos and landing page images

### Key Files
- `src/App.tsx` - Main application component that orchestrates all page sections
- `src/pages/index.astro` - Entry point that renders App with client-side hydration
- `src/layouts/Layout.astro` - Base HTML layout with global styles
- `src/components/ui/utils.ts` - Contains `cn()` utility for merging Tailwind classes

### Component Architecture
- Components follow shadcn/ui patterns with consistent styling
- Icon handling uses `IconWrapper` component for consistent icon presentation
- Image handling uses `ImageWithFallback` component for better UX
- All components are TypeScript with proper type definitions

### Styling Approach
- Uses Tailwind CSS v4 with the new Vite plugin integration
- Global styles in `src/styles/global.css` and `src/styles/index.css`
- Component-specific styling uses Tailwind utilities
- Consistent design system with slate color palette

### Dependencies
- Core: Astro, React, TypeScript, Tailwind CSS
- UI Components: Comprehensive shadcn/ui library including carousel, forms, dialogs
- Icons: Lucide React for consistent iconography
- Utilities: class-variance-authority, tailwind-merge for styling utilities