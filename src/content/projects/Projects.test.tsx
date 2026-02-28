import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  it('renders the Projects heading', () => {
    render(<Projects />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders project cards', () => {
    render(<Projects />);
    // Check for a known project title from projects.json
    expect(screen.getByText(/Laravel Project - Jobs Board/i)).toBeInTheDocument();
  });

  it('renders View Code buttons', () => {
    render(<Projects />);
    const codeButtons = screen.getAllByText('View Code');
    expect(codeButtons.length).toBeGreaterThan(0);
  });

  it('renders View Demo buttons', () => {
    render(<Projects />);
    const demoButtons = screen.getAllByText('View Demo');
    expect(demoButtons.length).toBeGreaterThan(0);
  });

  it('renders project tags', () => {
    render(<Projects />);
    // Check for tags that should exist in projects.json
    const laravelTags = screen.getAllByText('Laravel');
    expect(laravelTags.length).toBeGreaterThan(0);
    const reactTags = screen.getAllByText('React');
    expect(reactTags.length).toBeGreaterThan(0);
  });

  it('renders project images', () => {
    const { container } = render(<Projects />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('renders project descriptions', () => {
    render(<Projects />);
    expect(screen.getByText(/full-stack CRUD application/i)).toBeInTheDocument();
  });

  it('renders links with correct href attributes', () => {
    render(<Projects />);
    const codeButtons = screen.getAllByText('View Code');
    const firstLink = codeButtons[0].closest('a');
    expect(firstLink).toHaveAttribute('href');
    expect(firstLink?.getAttribute('href')).toContain('github.com');
  });
});
