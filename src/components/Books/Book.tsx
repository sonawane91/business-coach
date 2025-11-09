interface Book {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface BookButtonProps {
  book: Book;
  isSelected: boolean;
  onClick: () => void;
}

interface BookDisplayProps {
  book: Book;
}

// Reusable Book Selection Button Component
export const BookButton = ({ book, isSelected, onClick }: BookButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-lg font-bold uppercase text-white transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
      style={{
        background: isSelected
          ? '#438029 0% 0% no-repeat padding-box'
          : '#D4AF37 0% 0% no-repeat padding-box'
      }}
    >
      {book.title}
    </button>
  );
};

// Reusable Book Display Component
export const BookDisplay = ({ book }: BookDisplayProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Book Image - Left Side */}
      <div className="order-2 lg:order-1">
        <div className="relative">
          <img
            src={book.image}
            alt={book.title}
            className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Book Details - Right Side */}
      <div className="order-1 lg:order-2 text-center lg:text-left">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 uppercase"
          style={{ color: '#438029' }}
        >
          {book.title}
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          {book.description}
        </p>
        <button
          className="text-white font-bold px-10 py-4 rounded-lg uppercase tracking-wide transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ background: '#D4AF37' }}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export type { Book, BookButtonProps, BookDisplayProps };

