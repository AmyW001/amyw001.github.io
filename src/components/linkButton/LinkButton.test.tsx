import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
  it('renders with button text', () => {
    render(<LinkButton buttonText="Click Me" href="https://example.com" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders with correct href attribute', () => {
    render(<LinkButton buttonText="GitHub" href="https://github.com" />);
    const link = screen.getByText('GitHub').closest('a');
    expect(link).toHaveAttribute('href', 'https://github.com');
  });

  it('opens in new tab with correct attributes', () => {
    render(<LinkButton buttonText="Link" href="https://example.com" />);
    const link = screen.getByText('Link').closest('a');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders with an icon when provided', () => {
    render(
      <LinkButton 
        buttonText="GitHub" 
        href="https://github.com" 
        icon="/icon.svg"
        iconAlt="GitHub Icon"
      />
    );
    const icon = screen.getByAltText('GitHub Icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', '/icon.svg');
  });

  it('uses button text as alt text when iconAlt is not provided', () => {
    render(
      <LinkButton 
        buttonText="GitHub" 
        href="https://github.com" 
        icon="/icon.svg"
      />
    );
    expect(screen.getByAltText('GitHub')).toBeInTheDocument();
  });
});
