import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../ThemeContext';
import BackToTop from './BackToTop';

describe('BackToTop', () => {
  beforeEach(() => {
    window.scrollY = 0;
    vi.stubGlobal('scrollTo', vi.fn());
  });

  it('is hidden when page is near top', () => {
    render(
      <ThemeProvider>
        <BackToTop />
      </ThemeProvider>
    );
    const btn = screen.getByRole('button', { hidden: true });
    expect(btn).toHaveAttribute('aria-hidden', 'true');
  });

  it('becomes visible after scrolling down', () => {
    render(
      <ThemeProvider>
        <BackToTop />
      </ThemeProvider>
    );
    window.scrollY = 500;
    fireEvent.scroll(window);
    const btn = screen.getByRole('button', { hidden: true });
    expect(btn).toHaveAttribute('aria-hidden', 'false');
  });

  it('calls window.scrollTo when clicked', () => {
    render(
      <ThemeProvider>
        <BackToTop />
      </ThemeProvider>
    );
    window.scrollY = 500;
    fireEvent.scroll(window);
    const btn = screen.getByRole('button', { hidden: true });
    fireEvent.click(btn);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
