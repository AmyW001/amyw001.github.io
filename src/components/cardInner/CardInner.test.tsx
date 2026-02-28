import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardInner from './CardInner';

describe('CardInner', () => {
  it('renders child content', () => {
    render(
      <CardInner>
        <div>Inner content</div>
      </CardInner>
    );
    expect(screen.getByText('Inner content')).toBeInTheDocument();
  });

  it('renders corner decorative elements', () => {
    const { container } = render(
      <CardInner>
        <p>Content</p>
      </CardInner>
    );
    const corners = container.querySelectorAll('span');
    expect(corners.length).toBe(4);
  });

  it('renders without children', () => {
    render(<CardInner />);
    expect(screen.getByTestId('card-inner')).toBeInTheDocument();
  });
});
