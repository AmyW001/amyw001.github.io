import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PlayerCard from './PlayerCard';

describe('PlayerCard', () => {
  it('renders player name', () => {
    render(<PlayerCard />);
    expect(screen.getByText('Amy Welch')).toBeInTheDocument();
  });

  it('renders job title', () => {
    render(<PlayerCard />);
    expect(screen.getByText('Fullstack developer')).toBeInTheDocument();
  });

  it('renders avatar image', () => {
    render(<PlayerCard />);
    const avatar = screen.getByAltText('Avatar');
    expect(avatar).toBeInTheDocument();
  });

  it('renders star rating', () => {
    render(<PlayerCard />);
    const stars = screen.getAllByAltText('Star');
    expect(stars.length).toBe(5);
  });

  it('renders skills section', () => {
    render(<PlayerCard />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders medal icons for skills', () => {
    render(<PlayerCard />);
    const medals = screen.getAllByAltText('Medal');
    expect(medals.length).toBe(4);
  });
});
