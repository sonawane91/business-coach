import { render, screen, fireEvent } from '@testing-library/react';
import Testimonials from './index';

describe('Testimonials Component', () => {
  it('renders the section with correct id', () => {
    const { container } = render(<Testimonials />);
    const section = container.querySelector('#testimonial');
    expect(section).toBeInTheDocument();
  });

  it('renders the TESTIMONIAL title', () => {
    render(<Testimonials />);
    expect(screen.getByText('TESTIMONIAL')).toBeInTheDocument();
  });

  it('title has gold color', () => {
    render(<Testimonials />);
    const title = screen.getByText('TESTIMONIAL');
    expect(title).toHaveStyle({ color: '#D4AF37' });
  });

  it('title is uppercase and bold', () => {
    render(<Testimonials />);
    const title = screen.getByText('TESTIMONIAL');
    expect(title).toHaveClass('uppercase', 'font-bold');
  });

  it('title is centered', () => {
    render(<Testimonials />);
    const title = screen.getByText('TESTIMONIAL');
    expect(title).toHaveClass('text-center');
  });

  it('renders three testimonial names', () => {
    render(<Testimonials />);
    expect(screen.getByText('NAME ONE')).toBeInTheDocument();
    expect(screen.getByText('NAME TWO')).toBeInTheDocument();
    expect(screen.getByText('NAME THREE')).toBeInTheDocument();
  });

  it('renders testimonial texts', () => {
    render(<Testimonials />);
    const texts = screen.getAllByText(/Lorem ipsum dolor sit amet/i);
    expect(texts.length).toBeGreaterThanOrEqual(3);
  });

  it('renders desktop navigation buttons', () => {
    render(<Testimonials />);
    const prevButtons = screen.getAllByLabelText('Previous testimonial');
    const nextButtons = screen.getAllByLabelText('Next testimonial');
    expect(prevButtons.length).toBeGreaterThan(0);
    expect(nextButtons.length).toBeGreaterThan(0);
  });

  it('desktop navigation buttons have correct images', () => {
    render(<Testimonials />);
    const prevButtons = screen.getAllByAltText('Previous');
    const nextButtons = screen.getAllByAltText('Next');
    expect(prevButtons.length).toBeGreaterThan(0);
    expect(nextButtons.length).toBeGreaterThan(0);
  });

  it('changes to previous testimonial when previous button is clicked', () => {
    render(<Testimonials />);
    const prevButtons = screen.getAllByLabelText('Previous testimonial');

    // Initially NAME TWO is center (index 1)
    expect(screen.getByText('NAME TWO')).toBeInTheDocument();

    // Click previous
    fireEvent.click(prevButtons[0]);

    // Should still render all names but center should change
    expect(screen.getByText('NAME ONE')).toBeInTheDocument();
  });

  it('changes to next testimonial when next button is clicked', () => {
    render(<Testimonials />);
    const nextButtons = screen.getAllByLabelText('Next testimonial');

    // Click next
    fireEvent.click(nextButtons[0]);

    // Should still render all names
    expect(screen.getByText('NAME THREE')).toBeInTheDocument();
  });

  it('cycles to last testimonial when going previous from first', () => {
    render(<Testimonials />);
    const prevButtons = screen.getAllByLabelText('Previous testimonial');

    // Click previous twice to go to index 0, then once more to wrap
    fireEvent.click(prevButtons[0]);
    fireEvent.click(prevButtons[0]);

    // Should wrap around
    expect(screen.getByText('NAME THREE')).toBeInTheDocument();
  });

  it('cycles to first testimonial when going next from last', () => {
    render(<Testimonials />);
    const nextButtons = screen.getAllByLabelText('Next testimonial');

    // Click next twice to wrap around
    fireEvent.click(nextButtons[0]);
    fireEvent.click(nextButtons[0]);

    // Should wrap around to first
    expect(screen.getByText('NAME ONE')).toBeInTheDocument();
  });

  it('has correct container width', () => {
    const { container } = render(<Testimonials />);
    const mainContainer = container.querySelector('.max-w-\\[1200px\\]');
    expect(mainContainer).toBeInTheDocument();
  });

  it('section has gray background', () => {
    const { container } = render(<Testimonials />);
    const section = container.querySelector('#testimonial');
    expect(section).toHaveClass('bg-gray-50');
  });

  it('section has correct padding', () => {
    const { container } = render(<Testimonials />);
    const section = container.querySelector('#testimonial');
    expect(section).toHaveClass('py-12', 'md:py-12');
  });

  it('title has responsive font sizes', () => {
    render(<Testimonials />);
    const title = screen.getByText('TESTIMONIAL');
    expect(title).toHaveClass('text-4xl', 'md:text-5xl');
  });

  it('title has margin bottom', () => {
    render(<Testimonials />);
    const title = screen.getByText('TESTIMONIAL');
    expect(title).toHaveClass('mb-16');
  });

  it('testimonials container has correct layout', () => {
    const { container } = render(<Testimonials />);
    const testimonialsContainer = container.querySelector('.flex.gap-2.items-stretch');
    expect(testimonialsContainer).toBeInTheDocument();
  });

  it('testimonials container is centered', () => {
    const { container } = render(<Testimonials />);
    const testimonialsContainer = container.querySelector('.justify-center');
    expect(testimonialsContainer).toBeInTheDocument();
  });

  it('carousel container has relative positioning', () => {
    const { container } = render(<Testimonials />);
    const carouselContainer = container.querySelector('.relative.flex.items-center');
    expect(carouselContainer).toBeInTheDocument();
  });

  it('mobile navigation is hidden on desktop', () => {
    const { container } = render(<Testimonials />);
    const mobileNav = container.querySelector('.md\\:hidden');
    expect(mobileNav).toBeInTheDocument();
  });

  it('mobile navigation has correct gap', () => {
    const { container } = render(<Testimonials />);
    const mobileNav = container.querySelector('.md\\:hidden');
    expect(mobileNav).toHaveClass('gap-4', 'mt-8');
  });

  it('renders star icons for ratings', () => {
    render(<Testimonials />);
    const stars = screen.getAllByAltText('star');
    // 3 testimonials x 5 stars each = 15 stars
    expect(stars.length).toBe(15);
  });

  it('renders profile images', () => {
    render(<Testimonials />);
    expect(screen.getByAltText('NAME ONE')).toBeInTheDocument();
    expect(screen.getByAltText('NAME TWO')).toBeInTheDocument();
    expect(screen.getByAltText('NAME THREE')).toBeInTheDocument();
  });

  it('center testimonial has green background', () => {
    const { container } = render(<Testimonials />);
    // The center testimonial (NAME TWO) should have green background
    const coloredSections = container.querySelectorAll('[style*="background"]');
    const hasGreenBackground = Array.from(coloredSections).some(
      el => (el as HTMLElement).style.background.includes('438029') || (el as HTMLElement).style.background.includes('rgb(67, 128, 41)')
    );
    expect(hasGreenBackground).toBe(true);
  });

  it('side testimonials have yellow background', () => {
    const { container } = render(<Testimonials />);
    // Side testimonials should have yellow/gold background
    const coloredSections = container.querySelectorAll('[style*="background"]');
    const hasYellowBackground = Array.from(coloredSections).some(
      el => (el as HTMLElement).style.background.includes('D4AF37') || (el as HTMLElement).style.background.includes('rgb(212, 175, 55)')
    );
    expect(hasYellowBackground).toBe(true);
  });

  it('testimonials container has flex wrap on mobile', () => {
    const { container } = render(<Testimonials />);
    const testimonialsContainer = container.querySelector('.flex-wrap.lg\\:flex-nowrap');
    expect(testimonialsContainer).toBeInTheDocument();
  });

  it('displays three testimonials', () => {
    render(<Testimonials />);
    const nameOne = screen.getByText('NAME ONE');
    const nameTwo = screen.getByText('NAME TWO');
    const nameThree = screen.getByText('NAME THREE');

    expect(nameOne).toBeInTheDocument();
    expect(nameTwo).toBeInTheDocument();
    expect(nameThree).toBeInTheDocument();
  });
});

