import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders child content', () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(<Card />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('renders multiple children', () => {
    render(
      <Card>
        <h1>Title</h1>
        <p>Paragraph</p>
      </Card>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
  });
});
