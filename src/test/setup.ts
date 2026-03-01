import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  (window as any).matchMedia = (query: string) => {
    const m = query.match(/max-width:\s*(\d+)px/);
    const max = m ? parseInt(m[1], 10) : NaN;
    return {
      matches: typeof window !== 'undefined' && !Number.isNaN(max) ? window.innerWidth <= max : false,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      onchange: null,
    };
  };
}
