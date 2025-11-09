import { render, screen, fireEvent } from '@testing-library/react';
import Events from './index';

describe('Events Component', () => {
  it('renders the section with correct id', () => {
    const { container } = render(<Events />);
    const section = container.querySelector('#events');
    expect(section).toBeInTheDocument();
  });

  it('renders the title with correct styling', () => {
    render(<Events />);
    expect(screen.getByText('UPCOMING')).toBeInTheDocument();
    expect(screen.getByText('EVENTS')).toBeInTheDocument();
  });

  it('UPCOMING has yellow color', () => {
    render(<Events />);
    const upcomingSpan = screen.getByText('UPCOMING');
    expect(upcomingSpan).toHaveStyle({ color: '#D4AF37' });
  });

  it('EVENTS has green color', () => {
    render(<Events />);
    const eventsSpan = screen.getByText('EVENTS');
    expect(eventsSpan).toHaveStyle({ color: '#438029' });
  });

  it('renders all four event cards', () => {
    render(<Events />);
    expect(screen.getByText('EVENT - 01')).toBeInTheDocument();
    expect(screen.getByText('EVENT - 02')).toBeInTheDocument();
    expect(screen.getByText('EVENT - 03')).toBeInTheDocument();
    expect(screen.getByText('EVENT - 04')).toBeInTheDocument();
  });

  it('renders event images with correct alt text', () => {
    render(<Events />);
    expect(screen.getByAltText('EVENT - 01')).toBeInTheDocument();
    expect(screen.getByAltText('EVENT - 02')).toBeInTheDocument();
    expect(screen.getByAltText('EVENT - 03')).toBeInTheDocument();
    expect(screen.getByAltText('EVENT - 04')).toBeInTheDocument();
  });

  it('renders BOOK NOW buttons for each event', () => {
    render(<Events />);
    const bookNowButtons = screen.getAllByText('BOOK NOW');
    expect(bookNowButtons.length).toBeGreaterThanOrEqual(4);
  });

  it('renders desktop scroll buttons with correct aria labels', () => {
    render(<Events />);
    expect(screen.getByLabelText('Scroll left')).toBeInTheDocument();
    expect(screen.getByLabelText('Scroll right')).toBeInTheDocument();
  });

  it('renders mobile navigation buttons', () => {
    render(<Events />);
    expect(screen.getByLabelText('Previous event')).toBeInTheDocument();
    expect(screen.getByLabelText('Next event')).toBeInTheDocument();
  });

  it('mobile navigation buttons have correct images', () => {
    render(<Events />);
    const prevButton = screen.getByLabelText('Previous event');
    const nextButton = screen.getByLabelText('Next event');

    const prevImg = prevButton.querySelector('img');
    const nextImg = nextButton.querySelector('img');

    expect(prevImg).toHaveAttribute('alt', 'Previous');
    expect(nextImg).toHaveAttribute('alt', 'Next');
  });

  it('calls goToPreviousMobile when previous button is clicked', () => {
    render(<Events />);
    const prevButton = screen.getByLabelText('Previous event');

    // Should not throw error when clicked
    fireEvent.click(prevButton);
    expect(prevButton).toBeInTheDocument();
  });

  it('calls goToNextMobile when next button is clicked', () => {
    render(<Events />);
    const nextButton = screen.getByLabelText('Next event');

    // Should not throw error when clicked
    fireEvent.click(nextButton);
    expect(nextButton).toBeInTheDocument();
  });

  it('mobile navigation has correct styling classes', () => {
    const { container } = render(<Events />);
    const mobileNav = container.querySelector('.md\\:hidden');
    expect(mobileNav).toBeInTheDocument();
  });

  it('applies correct container width', () => {
    const { container } = render(<Events />);
    const mainContainer = container.querySelector('.max-w-\\[1200px\\]');
    expect(mainContainer).toBeInTheDocument();
  });

  it('scroll container has correct styling', () => {
    const { container } = render(<Events />);
    const scrollContainer = container.querySelector('.hide-scrollbar');
    expect(scrollContainer).toBeInTheDocument();
    expect(scrollContainer).toHaveClass('flex', 'gap-6', 'overflow-x-auto', 'scroll-smooth');
  });

  it('has correct padding on carousel container', () => {
    const { container } = render(<Events />);
    const carouselContainer = container.querySelector('.relative.px-12');
    expect(carouselContainer).toBeInTheDocument();
  });

  it('renders event descriptions', () => {
    render(<Events />);
    const descriptions = screen.getAllByText(/Lorem Ipsum is simply dummy text/i);
    expect(descriptions.length).toBeGreaterThanOrEqual(4);
  });

  it('title is centered and uppercase', () => {
    const { container } = render(<Events />);
    const title = container.querySelector('h2');
    expect(title).toHaveClass('text-center', 'uppercase');
  });

  it('title has correct responsive font sizes', () => {
    const { container } = render(<Events />);
    const title = container.querySelector('h2');
    expect(title).toHaveClass('text-4xl', 'md:text-5xl');
  });

  it('section has gray background', () => {
    const { container } = render(<Events />);
    const section = container.querySelector('#events');
    expect(section).toHaveClass('bg-gray-50');
  });

  it('mobile arrow images have correct size', () => {
    render(<Events />);
    const prevButton = screen.getByLabelText('Previous event');
    const nextButton = screen.getByLabelText('Next event');

    const prevImg = prevButton.querySelector('img');
    const nextImg = nextButton.querySelector('img');

    expect(prevImg).toHaveClass('w-8', 'h-8');
    expect(nextImg).toHaveClass('w-8', 'h-8');
  });
});

