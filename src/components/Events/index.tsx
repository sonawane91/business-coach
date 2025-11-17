import { useRef, useState } from 'react';
import event1Image from '../../assets/headway-F2KRf_QfCqw-unsplash.png';
import event2Image from '../../assets/the-climate-reality-project-Hb6uWq0i4MI-unsplash.png';
import event3Image from '../../assets/samantha-gades-fIHozNWfcvs-unsplash.png';
import leftArrow from '../../assets/Component 28 – 1.svg';
import rightArrow from '../../assets/Component 30 – 1.svg';
import { EventCard, ScrollButton, type Event } from './Event';

const Events = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const events: Event[] = [
    {
      id: 1,
      title: 'EVENT - 01',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: event1Image
    },
    {
      id: 2,
      title: 'EVENT - 02',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: event2Image
    },
    {
      id: 3,
      title: 'EVENT - 03',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: event3Image
    },
    {
      id: 4,
      title: 'EVENT - 04',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: event1Image
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const goToPreviousMobile = () => {
    setCurrentMobileIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToNextMobile = () => {
    setCurrentMobileIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="events" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase">
          <span style={{ color: '#D4AF37' }}>UPCOMING</span>{' '}
          <span style={{ color: '#438029' }}>EVENTS</span>
        </h2>

        {/* Carousel Container */}
        <div className="relative px-12 md:px-16">
          {/* Left Arrow */}
          <ScrollButton direction="left" onClick={() => scroll('left')} icon={leftArrow} />

          {/* Events Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                isActive={index === currentMobileIndex}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <ScrollButton direction="right" onClick={() => scroll('right')} icon={rightArrow} />
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={goToPreviousMobile}
            className="hover:opacity-70 transition duration-300"
            aria-label="Previous event"
          >
            <img src={leftArrow} alt="Previous" className="w-8 h-8" />
          </button>
          <button
            onClick={goToNextMobile}
            className="hover:opacity-70 transition duration-300"
            aria-label="Next event"
          >
            <img src={rightArrow} alt="Next" className="w-8 h-8" />
          </button>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Events;

