import { render, screen, fireEvent, act } from '@testing-library/react';
import HeroCarousel from './index';

// Mock the auto-play timer
jest.useFakeTimers();

describe('HeroCarousel Component', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it('renders the hero section', () => {
    const { container } = render(<HeroCarousel />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('renders all three slides content', () => {
    render(<HeroCarousel />);

    // First slide content
    expect(screen.getByText('GLOBAL')).toBeInTheDocument();
    const businessElements = screen.getAllByText('BUSINESS');
    expect(businessElements.length).toBeGreaterThan(0);
    expect(screen.getByText('COACH')).toBeInTheDocument();

    // Second slide content
    expect(screen.getByText('TRANSFORM')).toBeInTheDocument();
    const yourElements = screen.getAllByText('YOUR');
    expect(yourElements.length).toBeGreaterThan(0);

    // Third slide content
    expect(screen.getByText('ACHIEVE')).toBeInTheDocument();
    expect(screen.getByText('GOALS')).toBeInTheDocument();
  });

  it('renders first slide button', () => {
    render(<HeroCarousel />);
    expect(screen.getByText('BUY NOW')).toBeInTheDocument();
  });

  it('renders second slide button', () => {
    render(<HeroCarousel />);
    expect(screen.getByText('LEARN MORE')).toBeInTheDocument();
  });

  it('renders third slide button', () => {
    render(<HeroCarousel />);
    expect(screen.getByText('GET STARTED')).toBeInTheDocument();
  });

  it('renders all slide subtitles', () => {
    render(<HeroCarousel />);
    expect(screen.getByText(/Lorem ipsum is simply dummy text/i)).toBeInTheDocument();
    expect(screen.getByText(/Expert coaching and guidance/i)).toBeInTheDocument();
    expect(screen.getByText(/Proven strategies and insights/i)).toBeInTheDocument();
  });

  it('renders navigation dots', () => {
    render(<HeroCarousel />);
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument();
  });

  it('first slide is active by default', () => {
    render(<HeroCarousel />);
    const firstDot = screen.getByLabelText('Go to slide 1');
    expect(firstDot).toHaveClass('bg-amber-500', 'w-8');
  });

  it('changes slide when navigation dot is clicked', () => {
    render(<HeroCarousel />);
    const secondDot = screen.getByLabelText('Go to slide 2');

    fireEvent.click(secondDot);

    expect(secondDot).toHaveClass('bg-amber-500', 'w-8');
  });

  it('auto-advances to next slide after 5 seconds', () => {
    render(<HeroCarousel />);
    const firstDot = screen.getByLabelText('Go to slide 1');
    const secondDot = screen.getByLabelText('Go to slide 2');

    // Initially first slide is active
    expect(firstDot).toHaveClass('bg-amber-500');

    // Fast-forward time by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Second slide should now be active
    expect(secondDot).toHaveClass('bg-amber-500');
  });

  it('cycles back to first slide after last slide', () => {
    render(<HeroCarousel />);
    const firstDot = screen.getByLabelText('Go to slide 1');

    // Advance through all slides (5s each)
    act(() => {
      jest.advanceTimersByTime(5000); // Slide 2
      jest.advanceTimersByTime(5000); // Slide 3
      jest.advanceTimersByTime(5000); // Should cycle back to Slide 1
    });

    expect(firstDot).toHaveClass('bg-amber-500');
  });

  it('pauses auto-play when navigation dot is clicked', () => {
    render(<HeroCarousel />);
    const secondDot = screen.getByLabelText('Go to slide 2');

    // Click to go to second slide
    fireEvent.click(secondDot);

    // Should be on second slide
    expect(secondDot).toHaveClass('bg-amber-500');

    // Advance time by 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Should still be on second slide (auto-play paused)
    expect(secondDot).toHaveClass('bg-amber-500');
  });

  it('has correct section styling', () => {
    const { container } = render(<HeroCarousel />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('relative', 'w-full', 'min-h-screen', 'overflow-hidden', 'mt-20');
  });

  it('has correct content container styling', () => {
    const { container } = render(<HeroCarousel />);
    const contentContainer = container.querySelector('.max-w-7xl');
    expect(contentContainer).toBeInTheDocument();
  });

  it('button links have correct href', () => {
    render(<HeroCarousel />);
    const buyNowButton = screen.getByText('BUY NOW');
    expect(buyNowButton).toHaveAttribute('href', '#books');

    const learnMoreButton = screen.getByText('LEARN MORE');
    expect(learnMoreButton).toHaveAttribute('href', '#services');

    const getStartedButton = screen.getByText('GET STARTED');
    expect(getStartedButton).toHaveAttribute('href', '#contact');
  });

  it('inactive navigation dots have correct styling', () => {
    render(<HeroCarousel />);
    const secondDot = screen.getByLabelText('Go to slide 2');
    expect(secondDot).toHaveClass('bg-white', 'bg-opacity-50', 'hover:bg-opacity-75');
  });

  it('active navigation dot is wider', () => {
    render(<HeroCarousel />);
    const firstDot = screen.getByLabelText('Go to slide 1');
    expect(firstDot).toHaveClass('w-8');
  });

  it('content is positioned correctly', () => {
    const { container } = render(<HeroCarousel />);
    const contentWrapper = container.querySelector('.flex.items-start.justify-center');
    expect(contentWrapper).toHaveClass('lg:justify-end', 'pt-32', 'lg:pt-40');
  });

  it('has z-index for content layering', () => {
    const { container } = render(<HeroCarousel />);
    const contentContainer = container.querySelector('.z-10');
    expect(contentContainer).toBeInTheDocument();
  });

  it('navigation dots are positioned at bottom right', () => {
    const { container } = render(<HeroCarousel />);
    const dotsContainer = container.querySelector('.absolute.bottom-8.right-8');
    expect(dotsContainer).toBeInTheDocument();
  });

  it('has responsive padding for content', () => {
    const { container } = render(<HeroCarousel />);
    const textContent = container.querySelector('.px-4.sm\\:px-8');
    expect(textContent).toBeInTheDocument();
  });

  it('has responsive margin for positioning', () => {
    const { container } = render(<HeroCarousel />);
    const textContent = container.querySelector('.lg\\:mr-48.xl\\:mr-64');
    expect(textContent).toBeInTheDocument();
  });
});

