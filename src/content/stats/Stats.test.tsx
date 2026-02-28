import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Stats from './Stats';

describe('Stats', () => {
  it('renders the Abilities heading', () => {
    render(<Stats />);
    expect(screen.getByText('Abilities')).toBeInTheDocument();
  });

  it('renders Professional section', () => {
    render(<Stats />);
    expect(screen.getByText('Professional')).toBeInTheDocument();
  });

  it('renders Hobbies section', () => {
    render(<Stats />);
    expect(screen.getByText('Hobbies')).toBeInTheDocument();
  });

  it('renders player name', () => {
    render(<Stats />);
    expect(screen.getByText('Amy Welch')).toBeInTheDocument();
  });

  it('renders technology list items', () => {
    render(<Stats />);
    expect(screen.getByText('Javascript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('PHP')).toBeInTheDocument();
  });

  it('renders hobby skill bars with tooltips', () => {
    render(<Stats />);
    expect(screen.getByRole('tooltip', { name: /Hiking/i })).toBeInTheDocument();
    expect(screen.getByRole('tooltip', { name: /Knitting/i })).toBeInTheDocument();
    expect(screen.getByRole('tooltip', { name: /Piano/i })).toBeInTheDocument();
  });

  it('renders all technology icons', () => {
    render(<Stats />);
    const jsIcon = screen.getByAltText('Javascript');
    expect(jsIcon).toBeInTheDocument();
  });
});
