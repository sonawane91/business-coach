import { render, screen, fireEvent } from '@testing-library/react';
import Subscribe from './index';

describe('Subscribe Component', () => {
  it('renders the section', () => {
    const { container } = render(<Subscribe />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('renders the main heading KUSHCHATURVEDI', () => {
    render(<Subscribe />);
    expect(screen.getByText('KUSHCHATURVEDI')).toBeInTheDocument();
  });

  it('main heading is uppercase and bold', () => {
    render(<Subscribe />);
    const heading = screen.getByText('KUSHCHATURVEDI');
    expect(heading).toHaveClass('uppercase', 'font-black');
  });

  it('renders the subtitle GLOBAL BUSINESS COACH', () => {
    render(<Subscribe />);
    expect(screen.getByText('GLOBAL BUSINESS COACH')).toBeInTheDocument();
  });

  it('subtitle is uppercase', () => {
    render(<Subscribe />);
    const subtitle = screen.getByText('GLOBAL BUSINESS COACH');
    expect(subtitle).toHaveClass('uppercase');
  });

  it('renders the description text', () => {
    render(<Subscribe />);
    expect(screen.getByText(/Behind the word mountains/i)).toBeInTheDocument();
  });

  it('renders horizontal divider line', () => {
    const { container } = render(<Subscribe />);
    const divider = container.querySelector('.h-px.bg-white');
    expect(divider).toBeInTheDocument();
  });

  it('renders SUBSCRIBE NOW heading in form', () => {
    render(<Subscribe />);
    const subscribeHeadings = screen.getAllByText('SUBSCRIBE NOW');
    expect(subscribeHeadings.length).toBeGreaterThan(0);
  });

  it('SUBSCRIBE NOW heading has gold color', () => {
    render(<Subscribe />);
    const heading = screen.getAllByText('SUBSCRIBE NOW')[0];
    expect(heading).toHaveStyle({ color: '#D4AF37' });
  });

  it('renders form description text', () => {
    render(<Subscribe />);
    expect(screen.getByText(/Don't miss our future updates/i)).toBeInTheDocument();
  });

  it('renders email input field', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id');
    expect(emailInput).toBeInTheDocument();
  });

  it('email input has correct type', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id');
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('email input is required', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id');
    expect(emailInput).toHaveAttribute('required');
  });

  it('renders submit button', () => {
    render(<Subscribe />);
    const buttons = screen.getAllByText('SUBSCRIBE NOW');
    const submitButton = buttons.find(el => el.tagName === 'BUTTON');
    expect(submitButton).toBeInTheDocument();
  });

  it('submit button has gold background', () => {
    render(<Subscribe />);
    const buttons = screen.getAllByText('SUBSCRIBE NOW');
    const submitButton = buttons.find(el => el.tagName === 'BUTTON');
    expect(submitButton).toHaveStyle({ background: '#D4AF37' });
  });

  it('can type in email input', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput.value).toBe('test@example.com');
  });

  it('clears email input after form submission', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id') as HTMLInputElement;
    const form = emailInput.closest('form') as HTMLFormElement;

    // Type email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');

    // Submit form
    fireEvent.submit(form);

    // Email should be cleared
    expect(emailInput.value).toBe('');
  });

  it('prevents default form submission', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id');
    const form = emailInput.closest('form') as HTMLFormElement;

    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    const preventDefaultSpy = jest.spyOn(submitEvent, 'preventDefault');

    form.dispatchEvent(submitEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('has gradient background', () => {
    const { container } = render(<Subscribe />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-gradient-to-r', 'from-yellow-600', 'via-yellow-500', 'to-green-600');
  });

  it('section has background image', () => {
    const { container } = render(<Subscribe />);
    const section = container.querySelector('section') as HTMLElement;
    expect(section.style.backgroundImage).toContain('url');
  });

  it('has correct container width', () => {
    const { container } = render(<Subscribe />);
    const mainContainer = container.querySelector('.max-w-\\[1200px\\]');
    expect(mainContainer).toBeInTheDocument();
  });

  it('has two-column grid layout', () => {
    const { container } = render(<Subscribe />);
    const gridContainer = container.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
    expect(gridContainer).toBeInTheDocument();
  });

  it('left text content is white', () => {
    const { container } = render(<Subscribe />);
    const leftContent = container.querySelector('.text-white');
    expect(leftContent).toBeInTheDocument();
  });

  it('left content has responsive text alignment', () => {
    const { container } = render(<Subscribe />);
    const leftContent = container.querySelector('.text-center.lg\\:text-left');
    expect(leftContent).toBeInTheDocument();
  });

  it('form card has white background', () => {
    const { container } = render(<Subscribe />);
    const formCard = container.querySelector('.bg-white.rounded-2xl');
    expect(formCard).toBeInTheDocument();
  });

  it('form card has shadow', () => {
    const { container } = render(<Subscribe />);
    const formCard = container.querySelector('.shadow-2xl');
    expect(formCard).toBeInTheDocument();
  });

  it('form card has rounded corners', () => {
    const { container } = render(<Subscribe />);
    const formCard = container.querySelector('.rounded-2xl');
    expect(formCard).toBeInTheDocument();
  });

  it('main heading has responsive font sizes', () => {
    render(<Subscribe />);
    const heading = screen.getByText('KUSHCHATURVEDI');
    expect(heading).toHaveClass('text-4xl', 'md:text-5xl');
  });

  it('subtitle has responsive font sizes', () => {
    render(<Subscribe />);
    const subtitle = screen.getByText('GLOBAL BUSINESS COACH');
    expect(subtitle).toHaveClass('text-xl', 'md:text-2xl');
  });

  it('description has responsive font sizes', () => {
    render(<Subscribe />);
    const description = screen.getByText(/Behind the word mountains/i);
    expect(description).toHaveClass('text-base', 'md:text-lg');
  });

  it('email input has border styling', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id');
    expect(emailInput).toHaveClass('border-b-2', 'border-gray-300');
  });

  it('email input has focus styling', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id');
    expect(emailInput).toHaveClass('focus:border-yellow-600', 'focus:outline-none');
  });

  it('submit button has hover effects', () => {
    render(<Subscribe />);
    const buttons = screen.getAllByText('SUBSCRIBE NOW');
    const submitButton = buttons.find(el => el.tagName === 'BUTTON');
    expect(submitButton).toHaveClass('hover:shadow-xl', 'hover:scale-105');
  });

  it('submit button has transition effects', () => {
    render(<Subscribe />);
    const buttons = screen.getAllByText('SUBSCRIBE NOW');
    const submitButton = buttons.find(el => el.tagName === 'BUTTON');
    expect(submitButton).toHaveClass('transition', 'duration-300');
  });

  it('submit button is uppercase', () => {
    render(<Subscribe />);
    const buttons = screen.getAllByText('SUBSCRIBE NOW');
    const submitButton = buttons.find(el => el.tagName === 'BUTTON');
    expect(submitButton).toHaveClass('uppercase');
  });

  it('submit button has correct text color', () => {
    render(<Subscribe />);
    const buttons = screen.getAllByText('SUBSCRIBE NOW');
    const submitButton = buttons.find(el => el.tagName === 'BUTTON');
    expect(submitButton).toHaveClass('text-white');
  });

  it('form has vertical spacing', () => {
    const { container } = render(<Subscribe />);
    const form = container.querySelector('form');
    expect(form).toHaveClass('space-y-6');
  });

  it('section has vertical padding', () => {
    const { container } = render(<Subscribe />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('py-16', 'md:py-20');
  });

  it('section has relative positioning', () => {
    const { container } = render(<Subscribe />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('relative');
  });

  it('divider has responsive margin', () => {
    const { container } = render(<Subscribe />);
    const divider = container.querySelector('.h-px.bg-white');
    expect(divider).toHaveClass('mx-auto', 'lg:mx-0');
  });

  it('description has responsive margin', () => {
    render(<Subscribe />);
    const description = screen.getByText(/Behind the word mountains/i);
    expect(description).toHaveClass('mx-auto', 'lg:mx-0');
  });

  it('form card has responsive padding', () => {
    const { container } = render(<Subscribe />);
    const formCard = container.querySelector('.bg-white.rounded-2xl');
    expect(formCard).toHaveClass('p-8', 'md:p-10');
  });

  it('main heading has tracking', () => {
    render(<Subscribe />);
    const heading = screen.getByText('KUSHCHATURVEDI');
    expect(heading).toHaveClass('tracking-wide');
  });

  it('subtitle has wide tracking', () => {
    render(<Subscribe />);
    const subtitle = screen.getByText('GLOBAL BUSINESS COACH');
    expect(subtitle).toHaveClass('tracking-widest');
  });

  it('subtitle has light font weight', () => {
    render(<Subscribe />);
    const subtitle = screen.getByText('GLOBAL BUSINESS COACH');
    expect(subtitle).toHaveClass('font-light');
  });

  it('form heading has responsive font sizes', () => {
    render(<Subscribe />);
    const formHeading = screen.getAllByText('SUBSCRIBE NOW')[0];
    expect(formHeading).toHaveClass('text-2xl', 'md:text-3xl');
  });

  it('form description has correct text color', () => {
    render(<Subscribe />);
    const formDescription = screen.getByText(/Don't miss our future updates/i);
    expect(formDescription).toHaveClass('text-gray-700');
  });

  it('email input has full width', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id');
    expect(emailInput).toHaveClass('w-full');
  });

  it('email input has transparent background', () => {
    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id');
    expect(emailInput).toHaveClass('bg-transparent');
  });

  it('grid has responsive gap', () => {
    const { container } = render(<Subscribe />);
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('gap-8', 'lg:gap-12');
  });

  it('grid items are centered', () => {
    const { container } = render(<Subscribe />);
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('items-center');
  });

  it('logs email to console on form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<Subscribe />);
    const emailInput = screen.getByPlaceholderText('Enter your mail id');
    const form = emailInput.closest('form') as HTMLFormElement;

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.submit(form);

    expect(consoleSpy).toHaveBeenCalledWith('Subscribing email:', 'test@example.com');

    consoleSpy.mockRestore();
  });
});

