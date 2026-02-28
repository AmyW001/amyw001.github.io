import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillBar from './SkillBar';

describe('SkillBar', () => {
  it('renders with text label', () => {
    const { container } = render(<SkillBar label="JavaScript" value={7} />);
    const label = container.querySelector('[class*="label"]');
    expect(label).toHaveTextContent('JavaScript');
  });

  it('renders with icon', () => {
    render(
      <SkillBar 
        iconSrc="/icon.svg" 
        iconAlt="React Icon" 
        value={8} 
      />
    );
    const icon = screen.getByAltText('React Icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', '/icon.svg');
  });

  it('renders correct number of filled segments', () => {
    const { container } = render(<SkillBar value={5} max={9} />);
    const filled = container.querySelectorAll('[class*="segmentFilled"]');
    const empty = container.querySelectorAll('[class*="segmentEmpty"]');
    expect(filled.length).toBe(5);
    expect(empty.length).toBe(4);
  });

  it('clamps value to max', () => {
    const { container } = render(<SkillBar value={15} max={9} />);
    const filled = container.querySelectorAll('[class*="segmentFilled"]');
    expect(filled.length).toBe(9);
  });

  it('clamps negative values to 0', () => {
    const { container } = render(<SkillBar value={-5} max={9} />);
    const filled = container.querySelectorAll('[class*="segmentFilled"]');
    expect(filled.length).toBe(0);
  });

  it('renders tooltip when provided', () => {
    render(<SkillBar label="TypeScript" value={7} tooltip="Expert level" />);
    expect(screen.getByRole('tooltip')).toHaveTextContent('Expert level');
  });

  it('uses default max value of 9', () => {
    const { container } = render(<SkillBar value={9} />);
    const segments = container.querySelectorAll('[class*="segment"]');
    expect(segments.length).toBe(9);
  });
});
