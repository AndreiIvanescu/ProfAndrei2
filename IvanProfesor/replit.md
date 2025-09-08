# Math Tutoring Landing Page

## Overview

This is a modern, professionally designed landing page for Andrei Ivan, a mathematics tutor specializing in Romanian national exams (Evaluarea Națională and Bacalaureat). The application is built as a full-stack solution with a React frontend showcasing tutoring services and a minimal Express backend prepared for future expansion with user authentication and booking functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using React with modern tooling and UI components:

- **React 18** with TypeScript for type safety and modern React features
- **Vite** as the build tool and development server for fast hot module replacement
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for server state management and API caching

The frontend follows a component-based architecture with:
- Page components in `/client/src/pages/`
- Reusable UI components in `/client/src/components/`
- Utility functions and configurations in `/client/src/lib/`
- Custom hooks in `/client/src/hooks/`

### Backend Architecture
The server is built with Express.js and uses a modular architecture:

- **Express.js** web server with TypeScript
- **Modular route registration** system in `/server/routes.ts`
- **Abstract storage interface** (`IStorage`) with in-memory implementation for development
- **Vite integration** for development mode with hot module replacement
- **HTTP middleware** for request logging and error handling

The backend is designed to be database-agnostic through the storage interface pattern, making it easy to swap between different persistence layers.

### Database Schema
Database setup uses Drizzle ORM with PostgreSQL:

- **Drizzle ORM** for type-safe database operations and migrations
- **PostgreSQL** as the target database (configured for Neon serverless)
- **User schema** with id, username, and password fields
- **Zod validation** schemas generated from Drizzle tables

The current schema includes a basic user model, prepared for authentication features.

### Development Environment
The project uses a modern development setup:

- **TypeScript** throughout the entire stack for type safety
- **ESBuild** for production server builds
- **PostCSS** with Tailwind for CSS processing
- **Path aliases** for clean imports (`@/` for client, `@shared/` for shared code)

### Styling and UI Framework
The application uses a sophisticated design system:

- **Tailwind CSS** with custom configuration and CSS variables
- **shadcn/ui** component library with the "new-york" style variant
- **Radix UI** primitives for accessibility and behavior
- **CSS custom properties** for theme customization
- **Responsive design** with mobile-first approach

### Build and Deployment
The build process is optimized for production:

- **Client bundle** built with Vite and output to `dist/public/`
- **Server bundle** built with ESBuild to `dist/`
- **Static asset serving** in production mode
- **Development mode** with integrated Vite dev server

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless database client
- **drizzle-orm**: Type-safe ORM for database operations
- **express**: Web application framework for Node.js
- **react**: UI library for building user interfaces
- **vite**: Build tool and development server

### UI and Component Libraries
- **@radix-ui/**: Complete suite of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **@tanstack/react-query**: Server state management and caching
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library with React components

### Development and Build Tools
- **typescript**: Static type checking
- **@vitejs/plugin-react**: React support for Vite
- **drizzle-kit**: Database migration and introspection tools
- **esbuild**: Fast JavaScript bundler for server builds

### Utility Libraries
- **wouter**: Lightweight client-side routing
- **zod**: TypeScript-first schema validation
- **date-fns**: Date utility library
- **clsx**: Utility for constructing className strings conditionally

### Session and Security
- **connect-pg-simple**: PostgreSQL session store for Express sessions (prepared for future authentication)

The application is designed to be easily deployable to platforms like Replit, Vercel, or similar services with minimal configuration changes.