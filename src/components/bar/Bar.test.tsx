import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Bar from './Bar';

describe('Bar', () => {
  it('renders the bar element', () => {
    render(<Bar />);
    expect(screen.getByTestId('bar')).toBeInTheDocument();
  });
});
