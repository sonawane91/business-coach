import { render, screen, fireEvent } from '@testing-library/react';
import { BookButton, BookDisplay } from './Book';

describe('BookButton Component', () => {
  const mockBook = {
    id: 1,
    title: 'TEST BOOK',
    description: 'Test description',
    image: 'test-image.png'
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders book title', () => {
    render(<BookButton book={mockBook} isSelected={false} onClick={mockOnClick} />);
    expect(screen.getByText('TEST BOOK')).toBeInTheDocument();
  });

  it('applies green background when selected', () => {
    render(<BookButton book={mockBook} isSelected={true} onClick={mockOnClick} />);
    const button = screen.getByText('TEST BOOK');
    expect(button).toHaveStyle({ background: '#438029 0% 0% no-repeat padding-box' });
  });

  it('applies yellow background when not selected', () => {
    render(<BookButton book={mockBook} isSelected={false} onClick={mockOnClick} />);
    const button = screen.getByText('TEST BOOK');
    expect(button).toHaveStyle({ background: '#D4AF37 0% 0% no-repeat padding-box' });
  });

  it('calls onClick when clicked', () => {
    render(<BookButton book={mockBook} isSelected={false} onClick={mockOnClick} />);
    const button = screen.getByText('TEST BOOK');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('has correct styling classes', () => {
    render(<BookButton book={mockBook} isSelected={false} onClick={mockOnClick} />);
    const button = screen.getByText('TEST BOOK');
    expect(button).toHaveClass(
      'px-6',
      'py-3',
      'rounded-lg',
      'font-bold',
      'uppercase',
      'text-white',
      'transition',
      'shadow-lg'
    );
  });

  it('has hover effects', () => {
    render(<BookButton book={mockBook} isSelected={false} onClick={mockOnClick} />);
    const button = screen.getByText('TEST BOOK');
    expect(button).toHaveClass('hover:shadow-xl', 'hover:scale-105');
  });

  it('has transition and transform classes', () => {
    render(<BookButton book={mockBook} isSelected={false} onClick={mockOnClick} />);
    const button = screen.getByText('TEST BOOK');
    expect(button).toHaveClass('transition', 'duration-300', 'transform');
  });

  it('has small text size', () => {
    render(<BookButton book={mockBook} isSelected={false} onClick={mockOnClick} />);
    const button = screen.getByText('TEST BOOK');
    expect(button).toHaveClass('text-sm');
  });

  it('has white text color', () => {
    render(<BookButton book={mockBook} isSelected={false} onClick={mockOnClick} />);
    const button = screen.getByText('TEST BOOK');
    expect(button).toHaveClass('text-white');
  });
});

describe('BookDisplay Component', () => {
  const mockBook = {
    id: 1,
    title: 'DISPLAY TEST BOOK',
    description: 'This is a test description for the book display component.',
    image: 'test-book-image.png'
  };

  it('renders book title', () => {
    render(<BookDisplay book={mockBook} />);
    expect(screen.getByText('DISPLAY TEST BOOK')).toBeInTheDocument();
  });

  it('renders book description', () => {
    render(<BookDisplay book={mockBook} />);
    expect(screen.getByText('This is a test description for the book display component.')).toBeInTheDocument();
  });

  it('renders book image with correct alt text', () => {
    render(<BookDisplay book={mockBook} />);
    const image = screen.getByAltText('DISPLAY TEST BOOK');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-book-image.png');
  });

  it('renders BUY NOW button', () => {
    render(<BookDisplay book={mockBook} />);
    expect(screen.getByText('BUY NOW')).toBeInTheDocument();
  });

  it('has grid layout with responsive columns', () => {
    const { container } = render(<BookDisplay book={mockBook} />);
    const grid = container.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
    expect(grid).toBeInTheDocument();
  });

  it('book image has correct styling classes', () => {
    render(<BookDisplay book={mockBook} />);
    const image = screen.getByAltText('DISPLAY TEST BOOK');
    expect(image).toHaveClass('w-full', 'max-w-lg', 'mx-auto', 'rounded-lg', 'shadow-2xl');
  });

  it('book title has green color', () => {
    render(<BookDisplay book={mockBook} />);
    const title = screen.getByText('DISPLAY TEST BOOK');
    expect(title).toHaveStyle({ color: '#438029' });
  });

  it('book title is uppercase and bold', () => {
    render(<BookDisplay book={mockBook} />);
    const title = screen.getByText('DISPLAY TEST BOOK');
    expect(title).toHaveClass('uppercase', 'font-bold');
  });

  it('book title has correct size classes', () => {
    render(<BookDisplay book={mockBook} />);
    const title = screen.getByText('DISPLAY TEST BOOK');
    expect(title).toHaveClass('text-4xl', 'md:text-5xl');
  });

  it('BUY NOW button has yellow background', () => {
    render(<BookDisplay book={mockBook} />);
    const button = screen.getByText('BUY NOW');
    expect(button).toHaveStyle({ background: '#D4AF37' });
  });

  it('BUY NOW button has hover effects', () => {
    render(<BookDisplay book={mockBook} />);
    const button = screen.getByText('BUY NOW');
    expect(button).toHaveClass('hover:shadow-xl', 'hover:scale-105');
  });

  it('BUY NOW button has correct styling classes', () => {
    render(<BookDisplay book={mockBook} />);
    const button = screen.getByText('BUY NOW');
    expect(button).toHaveClass(
      'text-white',
      'font-bold',
      'px-10',
      'py-4',
      'rounded-lg',
      'uppercase',
      'tracking-wide',
      'transition',
      'shadow-lg'
    );
  });

  it('has responsive text alignment (center on mobile, left on large screens)', () => {
    const { container } = render(<BookDisplay book={mockBook} />);
    const textContainer = container.querySelector('.text-center.lg\\:text-left');
    expect(textContainer).toBeInTheDocument();
  });

  it('image container is on left side on large screens (order-1)', () => {
    const { container } = render(<BookDisplay book={mockBook} />);
    const imageContainer = container.querySelector('.order-2.lg\\:order-1');
    expect(imageContainer).toBeInTheDocument();
  });

  it('text container is on right side on large screens (order-2)', () => {
    const { container } = render(<BookDisplay book={mockBook} />);
    const textContainer = container.querySelector('.order-1.lg\\:order-2');
    expect(textContainer).toBeInTheDocument();
  });

  it('has correct gap between grid items', () => {
    const { container } = render(<BookDisplay book={mockBook} />);
    const grid = container.querySelector('.gap-8.lg\\:gap-12');
    expect(grid).toBeInTheDocument();
  });

  it('grid items are centered', () => {
    const { container } = render(<BookDisplay book={mockBook} />);
    const grid = container.querySelector('.items-center');
    expect(grid).toBeInTheDocument();
  });

  it('description has correct text styling', () => {
    render(<BookDisplay book={mockBook} />);
    const description = screen.getByText('This is a test description for the book display component.');
    expect(description).toHaveClass('text-gray-700', 'text-base', 'md:text-lg', 'leading-relaxed', 'mb-8');
  });

  it('title has correct margin bottom', () => {
    render(<BookDisplay book={mockBook} />);
    const title = screen.getByText('DISPLAY TEST BOOK');
    expect(title).toHaveClass('mb-6');
  });

  it('image is wrapped in relative positioned div', () => {
    const { container } = render(<BookDisplay book={mockBook} />);
    const relativeDiv = container.querySelector('.relative');
    expect(relativeDiv).toBeInTheDocument();
  });
});

