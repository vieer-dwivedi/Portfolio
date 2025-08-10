# Overview

This is a professional portfolio website for Vieer Dwivedi, a DevOps Engineer with expertise in multi-cloud infrastructure (AWS, Azure, GCP), Kubernetes, and DevSecOps practices. The application is built as a modern full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing professional experience, skills, certifications, and projects in an interactive and visually appealing manner.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom design system including cloud provider brand colors (AWS orange, Azure blue, GCP green)
- **Animations**: Framer Motion for smooth animations and micro-interactions
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Development**: tsx for TypeScript execution in development
- **Build Process**: esbuild for fast production bundling
- **Routing**: Express router with API prefix structure
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Definition**: Type-safe schema using drizzle-zod for validation
- **User Table**: Basic user structure with UUID primary keys
- **Migration System**: Drizzle Kit for database migrations and schema management

## Component Architecture
- **Design System**: Comprehensive UI component library following shadcn/ui patterns
- **Atomic Design**: Reusable components for cards, buttons, forms, and layout elements
- **Portfolio Sections**: Modular components for hero, about, skills, experience, certifications, projects, and contact
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: ARIA-compliant components using Radix UI primitives

## Styling Strategy
- **CSS Framework**: Tailwind CSS with custom configuration
- **Design Tokens**: CSS custom properties for consistent theming
- **Typography**: Inter font family for modern, professional appearance
- **Color Palette**: Professional color scheme with cloud provider brand integration
- **Component Variants**: Class Variance Authority (CVA) for type-safe component styling

# External Dependencies

## Cloud Provider Integration
- **Neon Database**: Serverless PostgreSQL database using @neondatabase/serverless driver
- **Multi-cloud Focus**: Architecture supports deployment across AWS, Azure, and GCP environments

## Development Tools
- **Replit Integration**: Specialized plugins for Replit development environment including error overlay and cartographer
- **Font Awesome**: Icon library for technology and social media icons
- **Google Fonts**: Inter font family for typography

## UI and Animation Libraries
- **Radix UI**: Complete set of accessible, unstyled UI primitives
- **Framer Motion**: Production-ready motion library for React animations
- **Embla Carousel**: Lightweight carousel component for project showcases
- **Lucide React**: Modern icon library for interface elements

## Form and Data Management
- **React Hook Form**: Performant forms with easy validation
- **Hookform Resolvers**: Integration with validation libraries
- **Date-fns**: Modern JavaScript date utility library
- **Zod**: TypeScript-first schema validation

## Development and Build Tools
- **Vite**: Fast build tool with HMR and optimized bundling
- **TypeScript**: Static type checking for enhanced developer experience
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

## Session and Security
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Nanoid**: URL-safe unique string ID generator
- **Environment Configuration**: Secure handling of database URLs and API keys