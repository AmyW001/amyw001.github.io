import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../../ThemeContext';

describe('Header', () => {
  it('renders the main title', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getAllByText('Amy Welch')[0]).toBeInTheDocument();
  });

  it('renders the job title', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getAllByText('Fullstack Developer')[0]).toBeInTheDocument();
  });

  it('renders the theme toggle', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders avatar images', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    const avatars = screen.getAllByAltText('Avatar');
    expect(avatars.length).toBeGreaterThan(0);
  });

  it('renders welcome message', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    // The typewriter effect will eventually display this text
    expect(screen.getByText(/Welcome to my portfolio!/i)).toBeInTheDocument();
  });
});
