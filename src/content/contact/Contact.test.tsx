import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

const mockWindowOpen = vi.fn();
window.open = mockWindowOpen;

describe('Contact', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  it('opens CV in new tab when Download CV button is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<Contact />);
    
    const contactInfoSection = container.querySelector('section');
    if (contactInfoSection) {
      const downloadButton = within(contactInfoSection).getByRole('button', { name: 'Download CV' });
      await user.click(downloadButton);
      
      expect(mockWindowOpen).toHaveBeenCalledTimes(1);
      expect(mockWindowOpen).toHaveBeenCalledWith('/assets/Amy-CV.pdf', '_blank');
    }
  });

  it('renders Card components with data-testid', () => {
    const { container } = render(<Contact />);
    
    const cards = container.querySelectorAll('[data-testid="card"]');
    expect(cards.length).toBe(2);
  });

  it('renders ContactForm component', () => {
    render(<Contact />);
    
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders two sections (contactInfo and contactForm)', () => {
    const { container } = render(<Contact />);
    
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBe(2);
  });

  it('renders submit button in contact form', () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
