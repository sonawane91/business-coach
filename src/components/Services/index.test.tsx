import { render, screen } from '@testing-library/react';
import Services from './index';

describe('Services Component', () => {
  it('renders the section with correct id', () => {
    const { container } = render(<Services />);
    const section = container.querySelector('#services');
    expect(section).toBeInTheDocument();
  });

  it('renders the title with OUR in yellow', () => {
    render(<Services />);
    const ourSpan = screen.getByText('OUR');
    expect(ourSpan).toBeInTheDocument();
    expect(ourSpan).toHaveClass('text-yellow-600');
  });

  it('renders the title with SERVICES in green', () => {
    render(<Services />);
    const servicesSpan = screen.getByText('SERVICES');
    expect(servicesSpan).toBeInTheDocument();
    expect(servicesSpan).toHaveClass('text-green-700');
  });

  it('renders the description text', () => {
    render(<Services />);
    expect(screen.getByText(/We have conducted many mind power workshops/i)).toBeInTheDocument();
  });

  it('renders all five service boxes', () => {
    render(<Services />);
    expect(screen.getByText(/Science of.*Mind/)).toBeInTheDocument();
    expect(screen.getByText(/Science of.*Money$/)).toBeInTheDocument();
    expect(screen.getByText(/Stress.*Management/)).toBeInTheDocument();
    expect(screen.getByText(/Science of.*Money Advance/)).toBeInTheDocument();
    expect(screen.getByText(/Train the.*Trainer/)).toBeInTheDocument();
  });

  it('Science of Mind box has correct styling', () => {
    render(<Services />);
    const scienceOfMindTitle = screen.getByText(/Science of.*Mind/);
    const scienceOfMindBox = scienceOfMindTitle.closest('div.text-white');
    expect(scienceOfMindBox).toBeInTheDocument();
    expect(scienceOfMindBox).toHaveClass('rounded-3xl', 'shadow-lg');
  });

  it('Science of Money box has correct styling', () => {
    render(<Services />);
    const scienceOfMoneyTitle = screen.getByText(/Science of.*Money$/);
    const scienceOfMoneyBox = scienceOfMoneyTitle.closest('div.text-white');
    expect(scienceOfMoneyBox).toBeInTheDocument();
    expect(scienceOfMoneyBox).toHaveClass('rounded-3xl', 'shadow-lg');
  });

  it('renders decorative squares images', () => {
    const { container } = render(<Services />);
    const decorativeImages = container.querySelectorAll('img[alt=""]');
    expect(decorativeImages.length).toBe(2);
  });

  it('first decorative image is positioned at top left', () => {
    const { container } = render(<Services />);
    const firstDecorativeImage = container.querySelector('.absolute.top-8.left-12');
    expect(firstDecorativeImage).toBeInTheDocument();
  });

  it('first decorative image has correct opacity', () => {
    const { container } = render(<Services />);
    const firstDecorativeImage = container.querySelector('.absolute.top-8.left-12');
    expect(firstDecorativeImage).toHaveClass('opacity-30');
  });

  it('second decorative image has correct opacity', () => {
    const { container } = render(<Services />);
    const decorativeImages = container.querySelectorAll('img[alt=""]');
    const secondImage = decorativeImages[1];
    expect(secondImage).toHaveClass('opacity-40');
  });

  it('service boxes have rounded corners', () => {
    const { container } = render(<Services />);
    const serviceBoxes = container.querySelectorAll('.rounded-3xl');
    expect(serviceBoxes.length).toBeGreaterThanOrEqual(5);
  });

  it('service boxes have shadow effects', () => {
    const { container } = render(<Services />);
    const serviceBoxes = container.querySelectorAll('.shadow-lg');
    expect(serviceBoxes.length).toBeGreaterThanOrEqual(5);
  });

  it('service boxes have hover shadow effect', () => {
    const { container } = render(<Services />);
    const serviceBoxes = container.querySelectorAll('.hover\\:shadow-xl');
    expect(serviceBoxes.length).toBeGreaterThanOrEqual(5);
  });

  it('service boxes are clickable with cursor pointer', () => {
    const { container } = render(<Services />);
    const serviceBoxes = container.querySelectorAll('.cursor-pointer');
    expect(serviceBoxes.length).toBeGreaterThanOrEqual(5);
  });

  it('service boxes have transition effect', () => {
    const { container } = render(<Services />);
    const serviceBoxes = container.querySelectorAll('.transition');
    expect(serviceBoxes.length).toBeGreaterThanOrEqual(5);
  });

  it('renders arrow icons in service boxes', () => {
    const { container } = render(<Services />);
    const arrowIcons = container.querySelectorAll('svg path[d*="M13 7l5 5"]');
    expect(arrowIcons.length).toBe(5);
  });

  it('has correct container width', () => {
    const { container } = render(<Services />);
    const mainContainer = container.querySelector('.max-w-\\[1200px\\]');
    expect(mainContainer).toBeInTheDocument();
  });

  it('has two-column grid layout', () => {
    const { container } = render(<Services />);
    const gridContainer = container.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
    expect(gridContainer).toBeInTheDocument();
  });

  it('left section has responsive text alignment', () => {
    const { container } = render(<Services />);
    const leftSection = container.querySelector('.text-center.lg\\:text-left');
    expect(leftSection).toBeInTheDocument();
  });

  it('left section has top padding on large screens', () => {
    const { container } = render(<Services />);
    const leftSection = container.querySelector('.lg\\:pt-28');
    expect(leftSection).toBeInTheDocument();
  });

  it('title has responsive font sizes', () => {
    const { container } = render(<Services />);
    const title = container.querySelector('h2');
    expect(title).toHaveClass('text-4xl', 'md:text-5xl');
  });

  it('title is bold', () => {
    const { container } = render(<Services />);
    const title = container.querySelector('h2');
    expect(title).toHaveClass('font-bold');
  });

  it('description has correct text color', () => {
    render(<Services />);
    const description = screen.getByText(/We have conducted many mind power workshops/i);
    expect(description).toHaveClass('text-gray-700');
  });

  it('description has responsive font sizes', () => {
    render(<Services />);
    const description = screen.getByText(/We have conducted many mind power workshops/i);
    expect(description).toHaveClass('text-base', 'md:text-lg');
  });

  it('right section has relative positioning', () => {
    const { container } = render(<Services />);
    const rightSection = container.querySelector('.relative.min-h-\\[500px\\]');
    expect(rightSection).toBeInTheDocument();
  });

  it('right section has responsive min-height', () => {
    const { container } = render(<Services />);
    const rightSection = container.querySelector('.relative.min-h-\\[500px\\]');
    expect(rightSection).toHaveClass('md:min-h-[550px]', 'lg:min-h-[550px]');
  });

  it('left column services are positioned correctly', () => {
    const { container } = render(<Services />);
    const leftColumn = container.querySelector('.absolute.left-0.top-32');
    expect(leftColumn).toBeInTheDocument();
  });

  it('center column services are positioned correctly', () => {
    const { container } = render(<Services />);
    const centerColumn = container.querySelector('.absolute.left-1\\/2');
    expect(centerColumn).toBeInTheDocument();
    expect(centerColumn).toHaveClass('transform', '-translate-x-1/2');
  });

  it('right column services are positioned correctly', () => {
    const { container } = render(<Services />);
    const rightColumn = container.querySelector('.absolute.right-0.top-16');
    expect(rightColumn).toBeInTheDocument();
  });

  it('service boxes have white text', () => {
    const { container } = render(<Services />);
    const serviceBoxes = container.querySelectorAll('.text-white');
    expect(serviceBoxes.length).toBeGreaterThanOrEqual(5);
  });

  it('service titles are uppercase', () => {
    const { container } = render(<Services />);
    const serviceTitles = container.querySelectorAll('h3.uppercase');
    expect(serviceTitles.length).toBe(5);
  });

  it('service titles are centered', () => {
    const { container } = render(<Services />);
    const serviceTitles = container.querySelectorAll('h3.text-center');
    expect(serviceTitles.length).toBe(5);
  });

  it('service titles are bold', () => {
    const { container } = render(<Services />);
    const serviceTitles = container.querySelectorAll('h3.font-bold');
    expect(serviceTitles.length).toBe(5);
  });

  it('service titles have small text size', () => {
    const { container } = render(<Services />);
    const serviceTitles = container.querySelectorAll('h3.text-sm');
    expect(serviceTitles.length).toBe(5);
  });

  it('service boxes have vertical padding', () => {
    const { container } = render(<Services />);
    const serviceBoxes = container.querySelectorAll('.py-8');
    expect(serviceBoxes.length).toBeGreaterThanOrEqual(5);
  });

  it('left column has vertical spacing between services', () => {
    const { container } = render(<Services />);
    const leftColumn = container.querySelector('.absolute.left-0.top-32');
    expect(leftColumn).toHaveClass('space-y-8');
  });

  it('center column has vertical spacing between services', () => {
    const { container } = render(<Services />);
    const centerColumn = container.querySelector('.absolute.left-1\\/2');
    expect(centerColumn).toHaveClass('space-y-8');
  });

  it('section has gray background', () => {
    const { container } = render(<Services />);
    const section = container.querySelector('#services');
    expect(section).toHaveClass('bg-gray-50');
  });

  it('section has vertical padding', () => {
    const { container } = render(<Services />);
    const section = container.querySelector('#services');
    expect(section).toHaveClass('py-8', 'md:py-8');
  });

  it('arrow icons have correct size', () => {
    const { container } = render(<Services />);
    const arrowIcons = container.querySelectorAll('svg.w-6.h-6');
    expect(arrowIcons.length).toBe(5);
  });

  it('arrow icons have no fill', () => {
    const { container } = render(<Services />);
    const arrowIcons = container.querySelectorAll('svg[fill="none"]');
    expect(arrowIcons.length).toBe(5);
  });

  it('arrow icons have current color stroke', () => {
    const { container } = render(<Services />);
    const arrowIcons = container.querySelectorAll('svg[stroke="currentColor"]');
    expect(arrowIcons.length).toBe(5);
  });

  it('arrow containers are centered', () => {
    const { container } = render(<Services />);
    const arrowContainers = container.querySelectorAll('.flex.justify-center');
    expect(arrowContainers.length).toBeGreaterThanOrEqual(5);
  });

  it('decorative image has responsive size', () => {
    const { container } = render(<Services />);
    const firstDecorativeImage = container.querySelector('.absolute.top-8.left-12');
    expect(firstDecorativeImage).toHaveClass('w-16', 'h-16', 'md:w-20', 'md:h-20');
  });

  it('columns have correct widths', () => {
    const { container } = render(<Services />);
    const leftColumn = container.querySelector('.absolute.left-0.top-32');
    const centerColumn = container.querySelector('.absolute.left-1\\/2');
    const rightColumn = container.querySelector('.absolute.right-0.top-16');

    expect(leftColumn).toHaveClass('w-36');
    expect(centerColumn).toHaveClass('w-40');
    expect(rightColumn).toHaveClass('w-40');
  });

  it('service titles have tight line height', () => {
    const { container } = render(<Services />);
    const serviceTitles = container.querySelectorAll('h3.leading-tight');
    expect(serviceTitles.length).toBe(5);
  });
});

