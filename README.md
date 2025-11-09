# Business Couch - Kush Chaturvedi Global Business Coach

A modern, responsive website built with React, TypeScript, and Tailwind CSS v4, featuring a component-based architecture with comprehensive test coverage.

## 🚀 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modular component architecture with TypeScript
- ✅ Modern UI with Tailwind CSS v4
- ✅ Auto-playing carousel with manual navigation
- ✅ Interactive testimonials and events sections
- ✅ Form handling with email subscription
- ✅ Smooth scrolling navigation
- ✅ Comprehensive test suite with Jest (349 tests)
- ✅ Fast development with Vite
- ✅ ESLint for code quality

## 📦 Tech Stack

- **Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.17
- **Build Tool**: Vite 7.1.7
- **Testing**: Jest 30.2.0 + React Testing Library 16.3.0
- **Linting**: ESLint 9.36.0

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: Version 20.19+ or 22.12+ recommended
- **npm**: Comes with Node.js

### Installation

1. **Clone the repository** (if not already done):
```bash
git clone <repository-url>
cd business-couch
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 📜 Available Commands

### Development

```bash
# Start development server with hot reload
npm run dev
```
- Starts Vite development server
- Opens at `http://localhost:5173/`
- Hot Module Replacement (HMR) enabled
- Fast refresh for React components

### Building

```bash
# Build for production
npm run build
```
- Compiles TypeScript
- Builds optimized production bundle
- Output in `dist/` directory

```bash
# Preview production build
npm run preview
```
- Serves the production build locally
- Useful for testing before deployment

### Testing

```bash
# Run all tests
npm test
```
- Runs all 349 tests across 12 test suites
- Uses Jest with jsdom environment

```bash
# Run tests in watch mode (for development)
npm run test:watch
```
- Watches for file changes
- Re-runs affected tests automatically
- Interactive mode for focused testing

```bash
# Generate test coverage report
npm run test:coverage
```
- Creates coverage report in `coverage/` directory
- Shows coverage statistics in terminal
- Generates HTML report for detailed analysis

```bash
# Run specific test file
npm test -- Navbar
npm test -- HeroCarousel
npm test -- Books
```

```bash
# Run tests with verbose output
npm test -- --verbose
```

### Linting

```bash
# Run ESLint to check code quality
npm run lint
```
- Checks all TypeScript/JavaScript files
- Reports code quality issues
- Enforces coding standards

## 📁 Project Structure

```
business-couch/
├── public/
│   ├── images/             # Public image assets
│   └── vite.svg            # Vite logo
├── src/
│   ├── assets/             # Static assets (images, SVGs)
│   │   ├── Logo.png
│   │   ├── Component *.svg
│   │   └── *.png, *.jpg
│   ├── components/         # React components
│   │   ├── Navbar/
│   │   │   ├── index.tsx
│   │   │   └── index.test.tsx
│   │   ├── HeroCarousel/
│   │   │   ├── index.tsx
│   │   │   ├── index.test.tsx
│   │   │   ├── HeroSlide.tsx
│   │   │   └── HeroSlide.test.tsx
│   │   ├── About/
│   │   │   ├── index.tsx
│   │   │   └── index.test.tsx
│   │   ├── Services/
│   │   │   ├── index.tsx
│   │   │   └── index.test.tsx
│   │   ├── Books/
│   │   │   ├── index.tsx
│   │   │   ├── index.test.tsx
│   │   │   ├── Book.tsx
│   │   │   └── Book.test.tsx
│   │   ├── Events/
│   │   │   ├── index.tsx
│   │   │   ├── index.test.tsx
│   │   │   ├── Event.tsx
│   │   │   └── Event.test.tsx
│   │   ├── Testimonials/
│   │   │   ├── index.tsx
│   │   │   ├── index.test.tsx
│   │   │   ├── Testimonial.tsx
│   │   │   └── Testimonial.test.tsx
│   │   └── Subscribe/
│   │       ├── index.tsx
│   │       └── index.test.tsx
│   ├── __mocks__/          # Jest mocks
│   │   └── fileMock.ts     # Mock for image imports in tests
│   ├── App.tsx             # Main application component
│   ├── App.css             # Application styles
│   ├── index.css           # Global styles & Tailwind directives
│   ├── main.tsx            # Application entry point
│   ├── types.d.ts          # TypeScript type declarations
│   └── setupTests.ts       # Jest setup configuration
├── jest.config.ts          # Jest configuration
├── tsconfig.json           # TypeScript configuration (root)
├── tsconfig.app.json       # TypeScript config for app
├── tsconfig.node.json      # TypeScript config for Node
├── tsconfig.test.json      # TypeScript config for tests
├── vite.config.ts          # Vite configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Project dependencies & scripts
```

## 🧩 Components Overview

### Navbar
- Responsive navigation bar with logo
- Mobile menu support
- Smooth scroll to sections
- **Tests**: 3 test cases

### HeroCarousel
- Auto-playing image carousel
- Manual navigation with dots
- Multiple slides with different content
- Responsive design
- **Tests**: 72 test cases (index + HeroSlide)

### About
- Two-column layout with gradient background
- Profile image and biography
- Responsive text alignment
- **Tests**: 12 test cases

### Services
- Scattered layout with service boxes
- Custom colors for different services
- Hover effects
- **Tests**: 47 test cases

### Books
- Interactive book selection buttons
- Dynamic content display
- Image and description for each book
- **Tests**: 44 test cases (index + Book)

### Events
- Horizontal scrolling carousel
- Desktop and mobile navigation
- Event cards with images
- **Tests**: 57 test cases (index + Event)

### Testimonials
- Three-card carousel layout
- Star rating display
- Center card emphasis
- Navigation buttons
- **Tests**: 96 test cases (index + Testimonial)

### Subscribe
- Email subscription form
- Form validation
- Responsive two-column layout
- **Tests**: 52 test cases

## 🧪 Testing

### Test Coverage Summary

```
✅ Test Suites: 12 passed, 12 total
✅ Tests: 349 passed, 349 total
✅ Coverage: 100% of all components
```

### Running Tests

```bash
# All tests
npm test

# Specific component
npm test -- Navbar
npm test -- HeroCarousel
npm test -- Books
npm test -- Events
npm test -- Testimonials

# Watch mode (for active development)
npm run test:watch

# Coverage report
npm run test:coverage
```

### Test Files Location

All test files are co-located with their components using the `.test.tsx` extension:
- `src/components/ComponentName/index.test.tsx`
- `src/components/ComponentName/SubComponent.test.tsx`

## 🎨 Customization

### Adding New Images

1. **For component imports**: Place in `src/assets/`
```tsx
import myImage from '../../assets/my-image.png';
```

2. **For public access**: Place in `public/images/`
```html
<img src="/images/my-image.jpg" alt="Description" />
```

### Updating Colors

The project uses custom color scheme:
- **Gold/Yellow**: `#D4AF37`
- **Green**: `#438029`

To change colors, search and replace these hex codes throughout the components.

### Modifying Content

1. **Navigation Links**: Edit `src/components/Navbar/index.tsx`
2. **Hero Slides**: Edit `src/components/HeroCarousel/index.tsx`
3. **Services**: Edit `src/components/Services/index.tsx`
4. **Books**: Edit `src/components/Books/index.tsx`
5. **Events**: Edit `src/components/Events/index.tsx`
6. **Testimonials**: Edit `src/components/Testimonials/index.tsx`

## 📱 Responsive Design

The site uses Tailwind CSS responsive breakpoints:

- **sm**: 640px and up (mobile landscape)
- **md**: 768px and up (tablets)
- **lg**: 1024px and up (desktops)
- **xl**: 1280px and up (large desktops)

All components are fully responsive and tested on various screen sizes.

## 🔧 Configuration Files

### `jest.config.ts`
- Jest testing framework configuration
- Module name mapping for images/CSS
- Test environment setup (jsdom)
- Coverage collection settings

### `vite.config.ts`
- Vite build tool configuration
- React plugin setup
- Development server settings

### `tsconfig.json` (multiple)
- TypeScript compiler options
- Different configs for app, tests, and Node
- Path mappings and module resolution

### `postcss.config.js`
- PostCSS configuration for Tailwind CSS v4
- Autoprefixer setup

### `eslint.config.js`
- ESLint rules and plugins
- Code quality standards
- React-specific linting rules

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Hosting

The `dist/` folder can be deployed to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `dist/` contents

## 🐛 Troubleshooting

### Development Server Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Test Failures

```bash
# Clear Jest cache
npm test -- --clearCache

# Run tests with verbose output
npm test -- --verbose
```

### Build Errors

```bash
# Check TypeScript errors
npx tsc --noEmit

# Run linter
npm run lint
```

**Built with ❤️ using React + TypeScript + Tailwind CSS**
