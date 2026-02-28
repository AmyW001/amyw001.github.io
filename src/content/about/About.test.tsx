import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders player name', () => {
    render(<About />);
    expect(screen.getByText('Amy Welch')).toBeInTheDocument();
  });

  it('renders about text content', () => {
    render(<About />);
    expect(screen.getByText(/fullstack web developer/i)).toBeInTheDocument();
  });

  it('renders LinkedIn button', () => {
    render(<About />);
    const linkedInButton = screen.getByText('LinkedIn').closest('a');
    expect(linkedInButton).toHaveAttribute('href', 'https://www.linkedin.com/in/amy-welch-1a9b4b1b3/');
  });

  it('renders GitHub button', () => {
    render(<About />);
    const githubButton = screen.getByText('GitHub').closest('a');
    expect(githubButton).toHaveAttribute('href', 'https://github.com/amywelch');
  });

  it('renders Email button', () => {
    render(<About />);
    const emailButton = screen.getByText('Email').closest('a');
    expect(emailButton).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });

  it('renders all three contact buttons', () => {
    render(<About />);
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders icons for contact buttons', () => {
    render(<About />);
    expect(screen.getByAltText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByAltText('GitHub')).toBeInTheDocument();
    expect(screen.getByAltText('Email')).toBeInTheDocument();
  });
});
