import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('Tag', () => {
  it('renders with the provided text', () => {
    render(<Tag tagText="React" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders with different tag text', () => {
    render(<Tag tagText="TypeScript" />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
