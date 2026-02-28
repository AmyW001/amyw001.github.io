# Portfolio 2026

## Development

### Prerequisites
- Node.js v25.6.1 or higher

### Getting Started
```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm test -- --run` - Run tests once

## Testing

This project uses Vitest and React Testing Library for testing.

### Running Tests
```bash
# Run tests in watch mode (re-runs on file changes)
npm test

# Run tests once
npm test -- --run

# Run a specific test file
npm test -- Tag.test

# Run tests with coverage report
npm run test:coverage
```

### Test Files
Test files are located next to their corresponding components with the `.test.tsx` extension. For example:
- `src/components/tag/Tag.tsx` → `src/components/tag/Tag.test.tsx`

## Deployment

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

### Deploy to GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-2026/', // Replace with the repo name
})
```

3. Add to `package.json` scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in your repository settings (Settings → Pages → Source: gh-pages branch)