import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import styles from './button.module.css';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button buttonText="Click me" />);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('renders with primary color variant by default', () => {
    render(<Button buttonText="Primary Button" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain(styles.primary);
  });

  it('renders with specified color variant', () => {
    render(<Button buttonText="Secondary Button" colorVariant="secondary" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain(styles.secondary);
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Button buttonText="Disabled Button" disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button.className).toContain(styles.disabled);
  });

  it('renders as enabled by default', () => {
    render(<Button buttonText="Enabled Button" />);
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  it('renders with correct button type', () => {
    render(<Button buttonText="Submit" buttonType="submit" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('renders with button type by default', () => {
    render(<Button buttonText="Default Type" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button buttonText="Clickable" onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button buttonText="Disabled" disabled={true} onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders with icon when provided', () => {
    render(<Button buttonText="With Icon" icon="/icon.svg" iconAlt="Test Icon" />);
    const icon = screen.getByAltText('Test Icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', '/icon.svg');
  });

  it('uses buttonText as alt text when iconAlt is not provided', () => {
    render(<Button buttonText="Download" icon="/download.svg" />);
    const icon = screen.getByAltText('Download');
    expect(icon).toBeInTheDocument();
  });

  it('renders without icon when not provided', () => {
    render(<Button buttonText="No Icon" />);
    const button = screen.getByRole('button');
    expect(button.querySelector('img')).not.toBeInTheDocument();
  });
});
