# Overview

This is a full-stack web application built with React frontend and Express.js backend, designed as a modern web platform with a focus on professional services. The application uses a monorepo structure with shared TypeScript types and schemas, implementing a clean separation between client and server code while maintaining type safety throughout the stack.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Build Tool**: Vite for fast development and optimized production builds
- **Animation**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript for type-safe server development
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **API Design**: RESTful API structure with /api prefix routing convention
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development

## Component System
- **UI Library**: Comprehensive shadcn/ui component system built on Radix UI primitives
- **Design System**: Consistent theming with CSS custom properties and Tailwind CSS variables
- **Accessibility**: Built-in accessibility features through Radix UI components
- **Responsive Design**: Mobile-first approach with Tailwind CSS responsive utilities

## Development Architecture
- **Monorepo Structure**: Client, server, and shared code organized in dedicated directories
- **Type Safety**: Shared TypeScript types and schemas between frontend and backend
- **Build System**: Separate build processes for development and production environments
- **Hot Module Replacement**: Vite dev server with HMR for rapid development

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for database operations
- **Schema Management**: Centralized database schema with automatic TypeScript type generation
- **Migrations**: Database migrations managed through Drizzle Kit
- **Validation**: Zod schemas for runtime type validation and form validation

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting with connection pooling
- **Drizzle ORM**: TypeScript-first ORM for database operations and schema management
- **Drizzle Kit**: Database migration and schema management tools

## UI and Styling
- **Radix UI**: Unstyled, accessible UI primitives for building design systems
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind CSS
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Fast build tool and development server with TypeScript support
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **ESBuild**: Fast JavaScript bundler for production builds

## Animation and Interaction
- **Framer Motion**: Production-ready motion library for React animations
- **Embla Carousel**: Lightweight carousel library for image and content sliders

## Form and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries

## Query and State Management
- **TanStack Query**: Powerful data synchronization for React applications
- **Class Variance Authority**: Utility for creating type-safe component variants
- **CLSX**: Utility for constructing className strings conditionally