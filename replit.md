# Portfolio Website - Full Stack Application

## Overview

This is a Korean language portfolio website for 윤기산 (Yoon Ki San), a business entrepreneur and investor. The application showcases their business ventures including online shopping malls (Witter, Orpu, Haute), real estate investments, and cryptocurrency investments. The site is built as a modern full-stack web application with a React frontend and Express backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and animations
- **3D Graphics**: Three.js for interactive background elements
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Prepared for PostgreSQL-based sessions
- **API Design**: RESTful endpoints with proper error handling
- **Development**: Hot module replacement with Vite integration

### UI/UX Design System
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Design Token**: CSS custom properties for theming
- **Typography**: Inter font family
- **Color Scheme**: Blue-based palette with light/dark mode support
- **Responsive Design**: Mobile-first approach using Tailwind breakpoints

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with animated 3D background
2. **About Section**: Personal background and achievements
3. **Skills Section**: Business capabilities with interactive 3D elements
4. **Projects Section**: Business portfolio (Witter, Orpu, Haute shopping malls)
5. **Contact Section**: Contact form with validation

### Data Management
- **Portfolio Data**: Centralized data structure in `client/src/data/portfolio.ts`
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Form Validation**: Zod schemas for contact form and user registration

### 3D Interactive Elements
- **Background Animation**: Three.js geometric shapes with subtle animations
- **Skills Visualization**: Interactive 3D objects representing different business areas
- **Performance**: Optimized rendering with proper cleanup and responsive design

## Data Flow

1. **Static Content**: Portfolio data served from local data files
2. **Contact Form**: Client-side validation → API endpoint → Server processing
3. **User Management**: Database schema prepared for user authentication
4. **Session Handling**: PostgreSQL-based session store configuration

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **three**: 3D graphics library
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **tailwindcss**: Utility-first CSS framework

### UI Components
- **@radix-ui/***: Accessible UI primitives
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant utilities

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20
- **Port Configuration**: 5000 (backend) with external port 80
- **Hot Reload**: Vite dev server with Express integration
- **Database**: Neon Database connection via environment variables

### Production Build
- **Frontend Build**: Vite builds to `dist/public`
- **Backend Build**: esbuild bundles server to `dist/index.js`
- **Static Assets**: Served by Express in production
- **Environment**: Production detection via NODE_ENV

### Deployment Configuration
- **Autoscale**: Replit autoscale deployment target
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Database Setup
- **Migration System**: Drizzle Kit for schema management
- **Schema Location**: `shared/schema.ts`
- **Migration Command**: `npm run db:push`

## Changelog

Changelog:
- June 19, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.