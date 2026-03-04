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

  it("renders enabled View Code links with correct href", () => {
    render(<Projects />);

    const links = screen.getAllByRole("link", { name: /view code/i });

    expect(links.length).toBeGreaterThan(0);

    links.forEach((link) => {
      expect(link).toHaveAttribute("href", expect.stringContaining("github.com"));
    });
  });
});
