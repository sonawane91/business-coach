import { render, screen, fireEvent } from '@testing-library/react';
import { TestimonialCard, NavigationButton } from './Testimonial';

describe('TestimonialCard Component', () => {
  const mockTestimonial = {
    id: 1,
    name: 'TEST NAME',
    rating: 4,
    text: 'This is a test testimonial text for the card component.',
    image: 'test-image.png',
    backgroundColor: '#D4AF37'
  };

  const mockStarIcon = 'star-icon.svg';

  it('renders testimonial name', () => {
    render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    expect(screen.getByText('TEST NAME')).toBeInTheDocument();
  });

  it('renders testimonial text', () => {
    render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    expect(screen.getByText('This is a test testimonial text for the card component.')).toBeInTheDocument();
  });

  it('renders profile image with correct alt text', () => {
    render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const image = screen.getByAltText('TEST NAME');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.png');
  });

  it('renders 5 star icons', () => {
    render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const stars = screen.getAllByAltText('star');
    expect(stars).toHaveLength(5);
  });

  it('shows correct number of filled stars based on rating', () => {
    render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const stars = screen.getAllByAltText('star');

    // First 4 stars should be fully visible (rating is 4)
    expect(stars[0]).toHaveClass('opacity-100');
    expect(stars[1]).toHaveClass('opacity-100');
    expect(stars[2]).toHaveClass('opacity-100');
    expect(stars[3]).toHaveClass('opacity-100');

    // Last star should be faded
    expect(stars[4]).toHaveClass('opacity-30');
  });

  it('center card has larger width', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={true}
        backgroundColor="#438029"
        starIcon={mockStarIcon}
      />
    );
    const card = container.firstChild;
    expect(card).toHaveClass('w-full', 'sm:w-[400px]');
  });

  it('side card has smaller width', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const card = container.firstChild;
    expect(card).toHaveClass('w-full', 'sm:w-72');
  });

  it('center card has scale-110 on large screens', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={true}
        backgroundColor="#438029"
        starIcon={mockStarIcon}
      />
    );
    const card = container.firstChild;
    expect(card).toHaveClass('lg:scale-110');
  });

  it('side card has scale-75 and opacity on large screens', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const card = container.firstChild;
    expect(card).toHaveClass('lg:scale-75', 'lg:opacity-60');
  });

  it('side card is hidden on mobile', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const card = container.firstChild;
    expect(card).toHaveClass('hidden', 'lg:block');
  });

  it('center card is visible on mobile', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={true}
        backgroundColor="#438029"
        starIcon={mockStarIcon}
      />
    );
    const card = container.firstChild;
    expect(card).not.toHaveClass('hidden');
  });

  it('card has transition effects', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const card = container.firstChild;
    expect(card).toHaveClass('transition-all', 'duration-500');
  });

  it('card has shadow', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const cardInner = container.querySelector('.shadow-xl');
    expect(cardInner).toBeInTheDocument();
  });

  it('card has rounded corners', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const cardInner = container.querySelector('.rounded-3xl');
    expect(cardInner).toBeInTheDocument();
  });

  it('colored section has correct height', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const coloredSection = container.querySelector('.h-32');
    expect(coloredSection).toBeInTheDocument();
  });

  it('colored section has correct background color', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const coloredSection = container.querySelector('[style*="background"]') as HTMLElement;
    // Check for either hex or RGB representation
    const background = coloredSection.style.background;
    expect(background === '#D4AF37' || background === 'rgb(212, 175, 55)').toBe(true);
  });

  it('profile image is circular', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const imageContainer = container.querySelector('.rounded-full');
    expect(imageContainer).toBeInTheDocument();
  });

  it('profile image has white border', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const imageContainer = container.querySelector('.border-4.border-white');
    expect(imageContainer).toBeInTheDocument();
  });

  it('profile image has shadow', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const imageContainer = container.querySelector('.shadow-lg');
    expect(imageContainer).toBeInTheDocument();
  });

  it('profile image has correct size', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const imageContainer = container.querySelector('.w-32.h-32');
    expect(imageContainer).toBeInTheDocument();
  });

  it('white section has dashed border', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const whiteSection = container.querySelector('.bg-white') as HTMLElement;
    expect(whiteSection.style.border).toContain('dashed');
  });

  it('white section border does not include top', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const whiteSection = container.querySelector('.bg-white') as HTMLElement;
    // Check that border is set but borderTop is not applied (borderTop should be empty or 'none')
    expect(whiteSection.style.border).toBeTruthy();
    expect(whiteSection.style.borderTop === '' || whiteSection.style.borderTop === 'none').toBe(true);
  });

  it('name is uppercase and bold', () => {
    render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const name = screen.getByText('TEST NAME');
    expect(name).toHaveClass('uppercase', 'font-bold');
  });

  it('name has correct text color', () => {
    render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const name = screen.getByText('TEST NAME');
    expect(name).toHaveClass('text-gray-800');
  });

  it('testimonial text has correct styling', () => {
    render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const text = screen.getByText('This is a test testimonial text for the card component.');
    expect(text).toHaveClass('text-gray-700', 'leading-relaxed', 'text-sm');
  });

  it('content is centered', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const contentContainer = container.querySelector('.items-center.text-center');
    expect(contentContainer).toBeInTheDocument();
  });

  it('stars have correct size', () => {
    render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const stars = screen.getAllByAltText('star');
    stars.forEach(star => {
      expect(star).toHaveClass('w-8', 'h-8');
    });
  });

  it('stars have gap between them', () => {
    const { container } = render(
      <TestimonialCard
        testimonial={mockTestimonial}
        isCenter={false}
        backgroundColor="#D4AF37"
        starIcon={mockStarIcon}
      />
    );
    const starsContainer = container.querySelector('.flex.gap-2');
    expect(starsContainer).toBeInTheDocument();
  });
});

describe('NavigationButton Component', () => {
  const mockOnClick = jest.fn();
  const mockIcon = 'test-icon.svg';

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  describe('Left Position', () => {
    it('has correct aria-label for left direction', () => {
      render(
        <NavigationButton
          onClick={mockOnClick}
          icon={mockIcon}
          position="left"
        />
      );
      expect(screen.getByLabelText('Previous testimonial')).toBeInTheDocument();
    });

    it('image has Previous alt text', () => {
      render(
        <NavigationButton
          onClick={mockOnClick}
          icon={mockIcon}
          position="left"
        />
      );
      expect(screen.getByAltText('Previous')).toBeInTheDocument();
    });
  });

  describe('Right Position', () => {
    it('has correct aria-label for right direction', () => {
      render(
        <NavigationButton
          onClick={mockOnClick}
          icon={mockIcon}
          position="right"
        />
      );
      expect(screen.getByLabelText('Next testimonial')).toBeInTheDocument();
    });

    it('image has Next alt text', () => {
      render(
        <NavigationButton
          onClick={mockOnClick}
          icon={mockIcon}
          position="right"
        />
      );
      expect(screen.getByAltText('Next')).toBeInTheDocument();
    });
  });

  it('calls onClick when clicked', () => {
    render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
      />
    );
    const button = screen.getByLabelText('Previous testimonial');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('large button has correct size', () => {
    render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
        size="large"
      />
    );
    const img = screen.getByAltText('Previous');
    expect(img).toHaveClass('w-16', 'h-16');
  });

  it('small button has correct size', () => {
    render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
        size="small"
      />
    );
    const img = screen.getByAltText('Previous');
    expect(img).toHaveClass('w-10', 'h-10');
  });

  it('large button is hidden on mobile', () => {
    const { container } = render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
        size="large"
      />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('hidden', 'md:block');
  });

  it('small button is always visible', () => {
    const { container } = render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
        size="small"
      />
    );
    const button = container.querySelector('button');
    expect(button).not.toHaveClass('hidden');
  });

  it('button has hover effect', () => {
    const { container } = render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
      />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('hover:opacity-70');
  });

  it('button has transition', () => {
    const { container } = render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
      />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('transition', 'duration-300');
  });

  it('renders icon with correct src', () => {
    render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
      />
    );
    const img = screen.getByAltText('Previous');
    expect(img).toHaveAttribute('src', mockIcon);
  });

  it('large button has filter style', () => {
    render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
        size="large"
      />
    );
    const img = screen.getByAltText('Previous') as HTMLImageElement;
    expect(img.style.filter).toBe('brightness(0.8) contrast(1.2)');
  });

  it('small button has no filter style', () => {
    render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
        size="small"
      />
    );
    const img = screen.getByAltText('Previous') as HTMLImageElement;
    expect(img.style.filter).toBe('');
  });

  it('defaults to large size when size not specified', () => {
    render(
      <NavigationButton
        onClick={mockOnClick}
        icon={mockIcon}
        position="left"
      />
    );
    const img = screen.getByAltText('Previous');
    expect(img).toHaveClass('w-16', 'h-16');
  });
});

