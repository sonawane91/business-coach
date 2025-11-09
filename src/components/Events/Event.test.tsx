import { render, screen, fireEvent } from '@testing-library/react';
import { EventCard, ScrollButton } from './Event';

describe('EventCard Component', () => {
  const mockEvent = {
    id: 1,
    title: 'TEST EVENT',
    description: 'This is a test event description.',
    image: 'test-event-image.png'
  };

  it('renders event title', () => {
    render(<EventCard event={mockEvent} />);
    expect(screen.getByText('TEST EVENT')).toBeInTheDocument();
  });

  it('renders event description', () => {
    render(<EventCard event={mockEvent} />);
    expect(screen.getByText('This is a test event description.')).toBeInTheDocument();
  });

  it('renders event image with correct alt text', () => {
    render(<EventCard event={mockEvent} />);
    const image = screen.getByAltText('TEST EVENT');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-event-image.png');
  });

  it('renders BOOK NOW button', () => {
    render(<EventCard event={mockEvent} />);
    expect(screen.getByText('BOOK NOW')).toBeInTheDocument();
  });

  it('is visible by default (isActive true)', () => {
    const { container } = render(<EventCard event={mockEvent} />);
    const card = container.firstChild;
    expect(card).not.toHaveClass('hidden');
  });

  it('has hidden class on mobile when not active', () => {
    const { container } = render(<EventCard event={mockEvent} isActive={false} />);
    const card = container.firstChild;
    expect(card).toHaveClass('hidden');
  });

  it('shows on desktop even when not active', () => {
    const { container } = render(<EventCard event={mockEvent} isActive={false} />);
    const card = container.firstChild;
    expect(card).toHaveClass('md:block');
  });

  it('has correct card styling classes', () => {
    const { container } = render(<EventCard event={mockEvent} />);
    const card = container.firstChild;
    expect(card).toHaveClass(
      'flex-shrink-0',
      'bg-white',
      'rounded-lg',
      'shadow-lg',
      'overflow-hidden'
    );
  });

  it('has correct width classes', () => {
    const { container } = render(<EventCard event={mockEvent} />);
    const card = container.firstChild;
    expect(card).toHaveClass('w-[calc(33.333%-16px)]', 'min-w-[280px]');
  });

  it('image has hover scale effect', () => {
    render(<EventCard event={mockEvent} />);
    const image = screen.getByAltText('TEST EVENT');
    expect(image).toHaveClass('hover:scale-110', 'transition', 'duration-500');
  });

  it('image has correct styling', () => {
    render(<EventCard event={mockEvent} />);
    const image = screen.getByAltText('TEST EVENT');
    expect(image).toHaveClass('w-full', 'h-full', 'object-cover');
  });

  it('image container has correct height', () => {
    const { container } = render(<EventCard event={mockEvent} />);
    const imageContainer = container.querySelector('.h-56');
    expect(imageContainer).toBeInTheDocument();
  });

  it('title has green color', () => {
    render(<EventCard event={mockEvent} />);
    const title = screen.getByText('TEST EVENT');
    expect(title).toHaveStyle({ color: '#438029' });
  });

  it('title is uppercase and bold', () => {
    render(<EventCard event={mockEvent} />);
    const title = screen.getByText('TEST EVENT');
    expect(title).toHaveClass('uppercase', 'font-bold');
  });

  it('title has correct size', () => {
    render(<EventCard event={mockEvent} />);
    const title = screen.getByText('TEST EVENT');
    expect(title).toHaveClass('text-xl');
  });

  it('description has correct styling', () => {
    render(<EventCard event={mockEvent} />);
    const description = screen.getByText('This is a test event description.');
    expect(description).toHaveClass('text-gray-700', 'leading-relaxed', 'text-sm', 'mb-5');
  });

  it('BOOK NOW button has yellow background', () => {
    render(<EventCard event={mockEvent} />);
    const button = screen.getByText('BOOK NOW');
    expect(button).toHaveStyle({ background: '#D4AF37' });
  });

  it('BOOK NOW button has correct styling', () => {
    render(<EventCard event={mockEvent} />);
    const button = screen.getByText('BOOK NOW');
    expect(button).toHaveClass(
      'text-white',
      'font-bold',
      'px-6',
      'py-2',
      'uppercase',
      'tracking-wide',
      'transition',
      'shadow-md'
    );
  });

  it('BOOK NOW button has hover effect', () => {
    render(<EventCard event={mockEvent} />);
    const button = screen.getByText('BOOK NOW');
    expect(button).toHaveClass('hover:shadow-lg');
  });

  it('BOOK NOW button has small text size', () => {
    render(<EventCard event={mockEvent} />);
    const button = screen.getByText('BOOK NOW');
    expect(button).toHaveClass('text-xs');
  });

  it('details container has correct padding', () => {
    const { container } = render(<EventCard event={mockEvent} />);
    const detailsContainer = container.querySelector('.p-5');
    expect(detailsContainer).toBeInTheDocument();
  });

  it('has responsive text alignment', () => {
    const { container } = render(<EventCard event={mockEvent} />);
    const detailsContainer = container.querySelector('.text-center.md\\:text-left');
    expect(detailsContainer).toBeInTheDocument();
  });

  it('card has hover shadow effect', () => {
    const { container } = render(<EventCard event={mockEvent} />);
    const card = container.firstChild;
    expect(card).toHaveClass('hover:shadow-xl', 'transition', 'duration-300');
  });
});

describe('ScrollButton Component', () => {
  const mockOnClick = jest.fn();
  const mockIcon = 'test-icon.svg';

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  describe('Left Direction', () => {
    it('renders with left position', () => {
      const { container } = render(
        <ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />
      );
      const button = container.querySelector('.left-0');
      expect(button).toBeInTheDocument();
    });

    it('has correct aria-label for left direction', () => {
      render(<ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />);
      expect(screen.getByLabelText('Scroll left')).toBeInTheDocument();
    });

    it('image has Previous alt text', () => {
      render(<ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />);
      expect(screen.getByAltText('Previous')).toBeInTheDocument();
    });
  });

  describe('Right Direction', () => {
    it('renders with right position', () => {
      const { container } = render(
        <ScrollButton direction="right" onClick={mockOnClick} icon={mockIcon} />
      );
      const button = container.querySelector('.right-0');
      expect(button).toBeInTheDocument();
    });

    it('has correct aria-label for right direction', () => {
      render(<ScrollButton direction="right" onClick={mockOnClick} icon={mockIcon} />);
      expect(screen.getByLabelText('Scroll right')).toBeInTheDocument();
    });

    it('image has Next alt text', () => {
      render(<ScrollButton direction="right" onClick={mockOnClick} icon={mockIcon} />);
      expect(screen.getByAltText('Next')).toBeInTheDocument();
    });
  });

  it('calls onClick when clicked', () => {
    render(<ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />);
    const button = screen.getByLabelText('Scroll left');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('has correct common styling classes', () => {
    const { container } = render(
      <ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass(
      'absolute',
      'top-1/2',
      '-translate-y-1/2',
      'z-10',
      'transition',
      'duration-300'
    );
  });

  it('is hidden on mobile', () => {
    const { container } = render(
      <ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('hidden', 'md:flex');
  });

  it('has hover opacity effect', () => {
    const { container } = render(
      <ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('hover:opacity-70');
  });

  it('renders icon with correct src', () => {
    render(<ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />);
    const img = screen.getByAltText('Previous');
    expect(img).toHaveAttribute('src', mockIcon);
  });

  it('icon has correct size classes', () => {
    render(<ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />);
    const img = screen.getByAltText('Previous');
    expect(img).toHaveClass('w-5', 'h-9');
  });

  it('button is flexbox container with centered items', () => {
    const { container } = render(
      <ScrollButton direction="left" onClick={mockOnClick} icon={mockIcon} />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('items-center', 'justify-center');
  });
});

