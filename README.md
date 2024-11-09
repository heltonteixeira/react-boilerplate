# React Modern Boilerplate Template

A modern React boilerplate with TypeScript, Tailwind CSS, ESLint, and Prettier pre-configured.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast frontend tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 🎯 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 📏 [ESLint](https://eslint.org/) - Pluggable linting utility for JavaScript and TypeScript
- 💖 [Prettier](https://prettier.io/) - Opinionated code formatter
- 🔧 VS Code configuration included
  - Recommended extensions
  - Format on save
  - ESLint integration

## Quick Start

### Using this template

1. Click the "Use this template" button above
2. Create a new repository from this template
3. Clone your new repository
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## VS Code Extensions

This template includes settings for the following recommended extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Error Lens
- GitLens
- Path Intellisense

## Project Structure

```
.
├── .vscode/                # VS Code configuration
├── public/                 # Public assets
├── src/                    # Application source code
│   ├── assets/            # Static assets (images, fonts, etc.)
│   ├── components/        # React components
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .eslintrc.cjs          # ESLint configuration
├── .prettierrc            # Prettier configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```
