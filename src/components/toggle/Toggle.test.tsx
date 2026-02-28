import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toggle from './Toggle';
import { ThemeProvider } from '../../ThemeContext';

describe('Toggle', () => {
  it('renders toggle with checkbox', () => {
    render(
      <ThemeProvider>
        <Toggle />
      </ThemeProvider>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders sun and moon icons', () => {
    render(
      <ThemeProvider>
        <Toggle />
      </ThemeProvider>
    );
    expect(screen.getByAltText('Sun Icon')).toBeInTheDocument();
    expect(screen.getByAltText('Moon Icon')).toBeInTheDocument();
  });

  it('toggles theme when clicked', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <Toggle />
      </ThemeProvider>
    );
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    const initialChecked = checkbox.checked;
    
    await user.click(checkbox);
    
    expect(checkbox.checked).toBe(!initialChecked);
  });
});
