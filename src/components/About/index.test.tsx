import { render, screen } from '@testing-library/react';
import About from './index';

describe('About Component', () => {
  it('renders the section with correct id', () => {
    const { container } = render(<About />);
    const section = container.querySelector('#about');
    expect(section).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<About />);
    const heading = screen.getByText(/About KushChaturvedi/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading with Kush Chaturvedi name', () => {
    render(<About />);
    const subheading = screen.getByText(/^Kush Chaturvedi$/i);
    expect(subheading).toBeInTheDocument();
  });

  it('renders the first paragraph about CMD', () => {
    render(<About />);
    const paragraph = screen.getByText(/Chairman and Managing Director/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the second paragraph about training', () => {
    render(<About />);
    const paragraph = screen.getByText(/trained more than 700\+ persons/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the profile image with correct alt text', () => {
    render(<About />);
    const image = screen.getByAltText('Kush Chaturvedi');
    expect(image).toBeInTheDocument();
  });

  it('applies correct background styling to left section', () => {
    const { container } = render(<About />);
    const leftSection = container.querySelector('.bg-gradient-to-br');
    expect(leftSection).toBeInTheDocument();
    expect(leftSection).toHaveClass('from-green-700', 'via-green-600', 'to-yellow-500');
  });

  it('has responsive grid layout', () => {
    const { container } = render(<About />);
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveClass('grid-cols-1', 'lg:grid-cols-2');
  });

  it('applies correct max-width to container', () => {
    const { container } = render(<About />);
    const mainContainer = container.querySelector('.max-w-\\[1200px\\]');
    expect(mainContainer).toBeInTheDocument();
  });

  it('has correct text alignment (center on mobile, right on large screens)', () => {
    const { container } = render(<About />);
    const textContainer = container.querySelector('.text-center.lg\\:text-right');
    expect(textContainer).toBeInTheDocument();
  });

  it('renders with shadow and rounded corners', () => {
    const { container } = render(<About />);
    const cardContainer = container.querySelector('.shadow-2xl.rounded-lg');
    expect(cardContainer).toBeInTheDocument();
  });

  it('image has object-cover class for proper scaling', () => {
    render(<About />);
    const image = screen.getByAltText('Kush Chaturvedi');
    expect(image).toHaveClass('object-cover');
  });
});

