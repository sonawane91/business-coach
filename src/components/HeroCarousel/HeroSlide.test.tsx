import { render, screen, fireEvent } from '@testing-library/react';
import { SlideBackground, SlideContent, NavigationDots } from './HeroSlide';

describe('SlideBackground Component', () => {
  const mockSlide = {
    title: 'TEST TITLE',
    subtitle: 'Test subtitle',
    buttonText: 'TEST BUTTON',
    buttonLink: '#test',
    backgroundImage: 'test-bg-image.png'
  };

  it('renders with background image', () => {
    const { container } = render(<SlideBackground slide={mockSlide} isActive={true} />);
    const bgDiv = container.firstChild as HTMLElement;
    expect(bgDiv).toHaveStyle({
      backgroundImage: `url(${mockSlide.backgroundImage})`
    });
  });

  it('has opacity-100 when active', () => {
    const { container } = render(<SlideBackground slide={mockSlide} isActive={true} />);
    const bgDiv = container.firstChild;
    expect(bgDiv).toHaveClass('opacity-100');
  });

  it('has opacity-0 when not active', () => {
    const { container } = render(<SlideBackground slide={mockSlide} isActive={false} />);
    const bgDiv = container.firstChild;
    expect(bgDiv).toHaveClass('opacity-0');
  });

  it('has correct positioning', () => {
    const { container } = render(<SlideBackground slide={mockSlide} isActive={true} />);
    const bgDiv = container.firstChild;
    expect(bgDiv).toHaveClass('absolute', 'inset-0');
  });

  it('has cover background size', () => {
    const { container } = render(<SlideBackground slide={mockSlide} isActive={true} />);
    const bgDiv = container.firstChild as HTMLElement;
    expect(bgDiv).toHaveStyle({
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    });
  });

  it('has transition classes', () => {
    const { container } = render(<SlideBackground slide={mockSlide} isActive={true} />);
    const bgDiv = container.firstChild;
    expect(bgDiv).toHaveClass('transition-opacity', 'duration-700');
  });

  it('has no-repeat background', () => {
    const { container } = render(<SlideBackground slide={mockSlide} isActive={true} />);
    const bgDiv = container.firstChild;
    expect(bgDiv).toHaveClass('bg-cover', 'bg-no-repeat');
  });
});

describe('SlideContent Component', () => {
  const mockSlide = {
    title: 'FIRST LINE\nSECOND LINE\nTHIRD LINE',
    subtitle: 'This is a test subtitle for the slide',
    buttonText: 'CLICK ME',
    buttonLink: '#test-link',
    backgroundImage: 'test-bg.png'
  };

  it('renders slide title', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    expect(screen.getByText('FIRST LINE')).toBeInTheDocument();
    expect(screen.getByText('SECOND LINE')).toBeInTheDocument();
    expect(screen.getByText('THIRD LINE')).toBeInTheDocument();
  });

  it('renders slide subtitle', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    expect(screen.getByText('This is a test subtitle for the slide')).toBeInTheDocument();
  });

  it('renders button with correct text', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    expect(screen.getByText('CLICK ME')).toBeInTheDocument();
  });

  it('button has correct href', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const button = screen.getByText('CLICK ME');
    expect(button).toHaveAttribute('href', '#test-link');
  });

  it('has opacity-100 when active', () => {
    const { container } = render(<SlideContent slide={mockSlide} isActive={true} />);
    const contentDiv = container.firstChild;
    expect(contentDiv).toHaveClass('opacity-100');
  });

  it('has opacity-0 and absolute positioning when not active', () => {
    const { container } = render(<SlideContent slide={mockSlide} isActive={false} />);
    const contentDiv = container.firstChild;
    expect(contentDiv).toHaveClass('opacity-0', 'absolute');
  });

  it('title has correct styling classes', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const title = screen.getByText('FIRST LINE').closest('h1');
    expect(title).toHaveClass('font-black', 'text-white', 'uppercase');
  });

  it('title has responsive margins', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const title = screen.getByText('FIRST LINE').closest('h1');
    expect(title).toHaveClass('mb-4', 'sm:mb-6');
  });

  it('title splits multi-line text correctly', () => {
    const { container } = render(<SlideContent slide={mockSlide} isActive={true} />);
    const titleLines = container.querySelectorAll('h1 div');
    expect(titleLines).toHaveLength(3);
  });

  it('subtitle has correct styling', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const subtitle = screen.getByText('This is a test subtitle for the slide');
    expect(subtitle).toHaveClass('text-white', 'uppercase', 'tracking-wide', 'drop-shadow-lg');
  });

  it('subtitle has responsive margins', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const subtitle = screen.getByText('This is a test subtitle for the slide');
    expect(subtitle).toHaveClass('mb-4', 'sm:mb-6');
  });

  it('button has correct styling classes', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const button = screen.getByText('CLICK ME');
    expect(button).toHaveClass(
      'inline-block',
      'bg-green-700',
      'hover:bg-green-800',
      'text-white',
      'font-bold',
      'uppercase',
      'tracking-wider',
      'transition',
      'shadow-lg'
    );
  });

  it('button has transition duration', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const button = screen.getByText('CLICK ME');
    expect(button).toHaveClass('duration-300');
  });

  it('has transition classes', () => {
    const { container } = render(<SlideContent slide={mockSlide} isActive={true} />);
    const contentDiv = container.firstChild;
    expect(contentDiv).toHaveClass('transition-opacity', 'duration-700');
  });

  it('title uses Agency FB font family', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const title = screen.getByText('FIRST LINE').closest('h1') as HTMLElement;
    expect(title.style.fontFamily).toContain('Agency FB');
  });

  it('title has text shadow', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const title = screen.getByText('FIRST LINE').closest('h1') as HTMLElement;
    expect(title.style.textShadow).toBe('2px 2px 4px rgba(0,0,0,0.3)');
  });

  it('uses clamp for responsive font sizes on title', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const title = screen.getByText('FIRST LINE').closest('h1') as HTMLElement;
    expect(title.style.fontSize).toContain('clamp');
  });

  it('uses clamp for responsive font sizes on subtitle', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const subtitle = screen.getByText('This is a test subtitle for the slide') as HTMLElement;
    expect(subtitle.style.fontSize).toContain('clamp');
  });

  it('uses clamp for responsive padding on button', () => {
    render(<SlideContent slide={mockSlide} isActive={true} />);
    const button = screen.getByText('CLICK ME') as HTMLElement;
    expect(button.style.padding).toContain('clamp');
  });
});

describe('NavigationDots Component', () => {
  const mockSlides = [
    {
      title: 'SLIDE 1',
      subtitle: 'Subtitle 1',
      buttonText: 'BUTTON 1',
      buttonLink: '#1',
      backgroundImage: 'bg1.png'
    },
    {
      title: 'SLIDE 2',
      subtitle: 'Subtitle 2',
      buttonText: 'BUTTON 2',
      buttonLink: '#2',
      backgroundImage: 'bg2.png'
    },
    {
      title: 'SLIDE 3',
      subtitle: 'Subtitle 3',
      buttonText: 'BUTTON 3',
      buttonLink: '#3',
      backgroundImage: 'bg3.png'
    }
  ];

  const mockOnSlideChange = jest.fn();

  beforeEach(() => {
    mockOnSlideChange.mockClear();
  });

  it('renders correct number of dots', () => {
    render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument();
  });

  it('active dot has amber background', () => {
    render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const firstDot = screen.getByLabelText('Go to slide 1');
    expect(firstDot).toHaveClass('bg-amber-500');
  });

  it('active dot is wider', () => {
    render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const firstDot = screen.getByLabelText('Go to slide 1');
    expect(firstDot).toHaveClass('w-8');
  });

  it('inactive dots have white background with opacity', () => {
    render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const secondDot = screen.getByLabelText('Go to slide 2');
    expect(secondDot).toHaveClass('bg-white', 'bg-opacity-50');
  });

  it('inactive dots have hover effect', () => {
    render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const secondDot = screen.getByLabelText('Go to slide 2');
    expect(secondDot).toHaveClass('hover:bg-opacity-75');
  });

  it('calls onSlideChange when dot is clicked', () => {
    render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const secondDot = screen.getByLabelText('Go to slide 2');
    fireEvent.click(secondDot);
    expect(mockOnSlideChange).toHaveBeenCalledWith(1);
  });

  it('all dots are rounded', () => {
    render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const firstDot = screen.getByLabelText('Go to slide 1');
    expect(firstDot).toHaveClass('rounded-full');
  });

  it('has transition classes', () => {
    render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const firstDot = screen.getByLabelText('Go to slide 1');
    expect(firstDot).toHaveClass('transition-all', 'duration-300');
  });

  it('container has correct positioning', () => {
    const { container } = render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const dotsContainer = container.firstChild;
    expect(dotsContainer).toHaveClass('absolute', 'bottom-8', 'right-8');
  });

  it('container has responsive right positioning', () => {
    const { container } = render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const dotsContainer = container.firstChild;
    expect(dotsContainer).toHaveClass('md:right-12', 'lg:right-16');
  });

  it('container has correct z-index', () => {
    const { container } = render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const dotsContainer = container.firstChild;
    expect(dotsContainer).toHaveClass('z-20');
  });

  it('dots have gap between them', () => {
    const { container } = render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const dotsContainer = container.firstChild;
    expect(dotsContainer).toHaveClass('flex', 'gap-3');
  });

  it('inactive dots have standard size', () => {
    render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );
    const secondDot = screen.getByLabelText('Go to slide 2');
    expect(secondDot).toHaveClass('w-3', 'h-3');
  });

  it('updates active state when currentSlide changes', () => {
    const { rerender } = render(
      <NavigationDots
        slides={mockSlides}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    );

    const firstDot = screen.getByLabelText('Go to slide 1');
    expect(firstDot).toHaveClass('bg-amber-500');

    // Change to second slide
    rerender(
      <NavigationDots
        slides={mockSlides}
        currentSlide={1}
        onSlideChange={mockOnSlideChange}
      />
    );

    const secondDot = screen.getByLabelText('Go to slide 2');
    expect(secondDot).toHaveClass('bg-amber-500');
  });
});

