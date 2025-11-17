import { render, screen, fireEvent } from '@testing-library/react';
import Books from './index';

describe('Books Component', () => {
  it('renders the section with correct id', () => {
    const { container } = render(<Books />);
    const section = container.querySelector('#books');
    expect(section).toBeInTheDocument();
  });

  it('renders all four book buttons', () => {
    render(<Books />);
    const buttons = screen.getAllByRole('button');
    const bookButtons = buttons.filter(btn =>
      btn.textContent === 'BOOK-01' ||
      btn.textContent === 'BOOK-02' ||
      btn.textContent === 'BOOK-03' ||
      btn.textContent === 'BOOK-04'
    );
    expect(bookButtons).toHaveLength(4);
  });

  it('defaults to BOOK-02 being selected', () => {
    render(<Books />);
    const buttons = screen.getAllByRole('button');
    const book02Button = buttons.find(btn => btn.textContent === 'BOOK-02');

    // Check if BOOK-02 button has the green background (selected state)
    expect(book02Button).toHaveStyle({ background: '#438029 0% 0% no-repeat padding-box' });
  });

  it('displays BOOK-02 content by default', () => {
    render(<Books />);
    // The title should appear in the display area
    const titles = screen.getAllByText('BOOK-02');
    expect(titles.length).toBeGreaterThan(1); // Button + Display title
  });

  it('changes selected book when button is clicked', () => {
    render(<Books />);
    const buttons = screen.getAllByRole('button');
    const book01Button = buttons.find(btn => btn.textContent === 'BOOK-01');

    // Click BOOK-01 button
    if (book01Button) {
      fireEvent.click(book01Button);

      // Check if BOOK-01 button now has the green background (selected state)
      expect(book01Button).toHaveStyle({ background: '#438029 0% 0% no-repeat padding-box' });
    }
  });

  it('updates displayed book content when different book is selected', () => {
    render(<Books />);

    // Click BOOK-03 button
    const buttons = screen.getAllByRole('button');
    const book03Button = buttons.find(btn => btn.textContent === 'BOOK-03');

    if (book03Button) {
      fireEvent.click(book03Button);

      // Check if BOOK-03 is now displayed (should have multiple instances: button + display)
      const book03Elements = screen.getAllByText('BOOK-03');
      expect(book03Elements.length).toBeGreaterThan(1);
    }
  });

  it('renders book image with correct alt text', () => {
    render(<Books />);
    const image = screen.getByAltText('BOOK-02'); // Default selection
    expect(image).toBeInTheDocument();
  });

  it('renders BUY NOW button', () => {
    render(<Books />);
    const buyButton = screen.getByText('BUY NOW');
    expect(buyButton).toBeInTheDocument();
  });

  it('renders book description text', () => {
    render(<Books />);
    const description = screen.getByText(/mind power workshops/i);
    expect(description).toBeInTheDocument();
  });

  it('applies correct styling to selected book button', () => {
    render(<Books />);
    const buttons = screen.getAllByRole('button');
    const book02Button = buttons.find(btn => btn.textContent === 'BOOK-02');

    if (book02Button) {
      expect(book02Button).toHaveClass('px-6', 'py-3', 'rounded-lg', 'font-bold', 'uppercase', 'text-white');
    }
  });

  it('applies correct container width', () => {
    const { container } = render(<Books />);
    const mainContainer = container.querySelector('.max-w-\\[1200px\\]');
    expect(mainContainer).toBeInTheDocument();
  });

  it('has responsive grid layout for book display', () => {
    const { container } = render(<Books />);
    const gridContainer = container.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
    expect(gridContainer).toBeInTheDocument();
  });

  it('buttons have hover effects', () => {
    render(<Books />);
    const buttons = screen.getAllByRole('button');
    const book01Button = buttons.find(btn => btn.textContent === 'BOOK-01');

    if (book01Button) {
      expect(book01Button).toHaveClass('hover:shadow-xl', 'hover:scale-105');
    }
  });

  it('unselected buttons have yellow background', () => {
    render(<Books />);
    const buttons = screen.getAllByRole('button');
    const book01Button = buttons.find(btn => btn.textContent === 'BOOK-01');

    if (book01Button) {
      expect(book01Button).toHaveStyle({ background: '#D4AF37 0% 0% no-repeat padding-box' });
    }
  });

  it('book title in display has green color', () => {
    const { container } = render(<Books />);
    const titleElement = container.querySelector('h2[style*="color"]');
    expect(titleElement).toBeInTheDocument();
  });
});

