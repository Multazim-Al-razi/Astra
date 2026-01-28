# Astrabyte

A modern e-commerce frontend built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Product catalog with categories and filters
- 🛒 Shopping cart with local storage persistence
- 🔍 Global search functionality
- 🌐 Internationalization (i18n) support (English & Bengali)
- 📱 Responsive design with mobile-first approach
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- ♿ Accessibility features
- 🧪 Testing setup with Jest and Playwright

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI + shadcn/ui
- **State Management:** React Context + Zustand
- **Forms:** React Hook Form + Zod
- **Testing:** Jest + React Testing Library + Playwright
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Multazim-Al-razi/Astra.git
cd Astra

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Running Tests

```bash
# Unit tests
pnpm test

# E2E tests
pnpm exec playwright test
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── product/     # Product-related components
│   ├── cart/        # Cart components
│   ├── layout/      # Layout components
│   └── ...
├── context/         # React context providers
├── hooks/           # Custom React hooks
├── i18n/            # Internationalization config
├── lib/             # Utility functions and mock data
├── services/        # API service layer
├── types/           # TypeScript types
└── ...
```

## License

MIT
