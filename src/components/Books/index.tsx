import { useState } from 'react';
import book1Image from '../../assets/top-view-pile-books.png';
import { BookButton, BookDisplay, type Book } from './Book';
// TODO: Add different book images to assets folder and import them here
// import book2Image from '../assets/book-2.png';
// import book3Image from '../assets/book-3.png';
// import book4Image from '../assets/book-4.png';

const Books = () => {
  const books: Book[] = [
    {
      id: 1,
      title: 'BOOK-01',
      description: 'We have conducted many mind power workshops and helped people find and achieve their goal, solve their problems in life and career, discover their passion and work towards it and power to take quick and wise decisions. Thousands of people are benefited and become successful through his mind-power training.',
      image: book1Image
    },
    {
      id: 2,
      title: 'BOOK-02',
      description: 'We have conducted many mind power workshops and helped people find and achieve their goal, solve their problems in life and career, discover their passion and work towards it and power to take quick and wise decisions. Thousands of people are benefited and become successful through his mind-power training.',
      image: book1Image // Replace with book2Image when available
    },
    {
      id: 3,
      title: 'BOOK-03',
      description: 'We have conducted many mind power workshops and helped people find and achieve their goal, solve their problems in life and career, discover their passion and work towards it and power to take quick and wise decisions. Thousands of people are benefited and become successful through his mind-power training.',
      image: book1Image // Replace with book3Image when available
    },
    {
      id: 4,
      title: 'BOOK-04',
      description: 'We have conducted many mind power workshops and helped people find and achieve their goal, solve their problems in life and career, discover their passion and work towards it and power to take quick and wise decisions. Thousands of people are benefited and become successful through his mind-power training.',
      image: book1Image // Replace with book4Image when available
    }
  ];

  const [selectedBook, setSelectedBook] = useState<Book>(books[1]); // Default to BOOK-02

  return (
    <section id="books" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Book Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {books.map((book) => (
            <BookButton
              key={book.id}
              book={book}
              isSelected={selectedBook.id === book.id}
              onClick={() => setSelectedBook(book)}
            />
          ))}
        </div>

        {/* Selected Book Display */}
        <BookDisplay book={selectedBook} />
      </div>
    </section>
  );
};

export default Books;

