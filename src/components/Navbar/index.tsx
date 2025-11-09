import { useState } from 'react';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 pl-4 sm:pl-6 md:pl-8 lg:pl-10">
            <a href="#home" className="block">
              <img
                src={logo}
                alt="Kush Chaturvedi - Global Business Coach"
                className="w-[200px] md:w-[230px] lg:w-[261px] h-auto"
                style={{ maxHeight: '68px' }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href="#about"
              className="text-gray-700 hover:text-green-700 px-1 py-2 text-sm font-medium transition uppercase tracking-wider whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-green-700 px-1 py-2 text-sm font-medium transition uppercase tracking-wider whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="#books"
              className="text-gray-700 hover:text-green-700 px-1 py-2 text-sm font-medium transition uppercase tracking-wider whitespace-nowrap"
            >
              Books
            </a>
            <a
              href="#testimonial"
              className="text-gray-700 hover:text-green-700 px-1 py-2 text-sm font-medium transition uppercase tracking-wider whitespace-nowrap"
            >
              Testimonial
            </a>
            <a
              href="#events"
              className="text-gray-700 hover:text-green-700 px-1 py-2 text-sm font-medium transition uppercase tracking-wider whitespace-nowrap"
            >
              Upcoming Events
            </a>
            <a
              href="#contact"
              className="ml-3 bg-gradient-to-r from-amber-500 to-green-600 hover:from-amber-600 hover:to-green-700 text-white px-8 py-3 text-sm font-semibold transition uppercase tracking-wider shadow-md rounded-sm whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a
              href="#about"
              className="text-gray-700 hover:bg-gray-100 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:bg-gray-100 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
            >
              Services
            </a>
            <a
              href="#books"
              className="text-gray-700 hover:bg-gray-100 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
            >
              Books
            </a>
            <a
              href="#testimonial"
              className="text-gray-700 hover:bg-gray-100 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
            >
              Testimonial
            </a>
            <a
              href="#events"
              className="text-gray-700 hover:bg-gray-100 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
            >
              Upcoming Events
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-amber-500 to-green-600 text-white block px-3 py-2 rounded-md text-base font-semibold uppercase tracking-wide text-center mx-3 mt-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

