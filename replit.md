# Overview

This is a full-stack web application built with React frontend and Express.js backend, focusing on SAP Core Banking services. The application uses a modern tech stack with TypeScript, Tailwind CSS for styling, and shadcn/ui components for the user interface. The backend is set up with Express.js and uses Drizzle ORM with PostgreSQL for database operations. The application appears to be a landing page or marketing site for SAP banking solutions and services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **Animation**: Framer Motion for smooth animations and transitions

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **API Design**: RESTful API structure with /api prefix for all routes

## Development Setup
- **Monorepo Structure**: Client and server code organized in separate directories
- **Shared Code**: Common types and schemas in shared directory
- **Hot Module Replacement**: Vite dev server with HMR for fast development
- **TypeScript Configuration**: Strict type checking across all modules

## Component System
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation resolvers
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Built-in accessibility features through Radix UI components

## Data Layer
- **Schema Definition**: Centralized database schema using Drizzle ORM
- **Type Safety**: Automatic TypeScript types generated from database schema
- **Migrations**: Database migrations managed through Drizzle Kit
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: TypeScript ORM for database operations and migrations

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Unstyled, accessible UI components
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for smooth transitions

## Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution environment for development
- **PostCSS**: CSS processing with Autoprefixer

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## State Management
- **TanStack Query**: Server state management and caching
- **Wouter**: Minimalist routing library for React

## Development Environment
- **Replit Integration**: Specialized plugins for Replit development environment
- **Runtime Error Overlay**: Development error handling and display