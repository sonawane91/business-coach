import { useState, useEffect } from 'react';
import heroBackground1 from '../../assets/Component 17 – 3.png';
import heroBackground2 from '../../assets/headway-F2KRf_QfCqw-unsplash.png';
import heroBackground3 from '../../assets/samantha-gades-fIHozNWfcvs-unsplash.png';
import { SlideBackground, SlideContent, NavigationDots, type Slide } from './HeroSlide';

const slides: Slide[] = [
  {
    title: 'GLOBAL\nBUSINESS\nCOACH',
    subtitle: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'BUY NOW',
    buttonLink: '#books',
    backgroundImage: heroBackground1
  },
  {
    title: 'TRANSFORM\nYOUR\nBUSINESS',
    subtitle: 'Expert coaching and guidance to help you reach your business goals.',
    buttonText: 'LEARN MORE',
    buttonLink: '#services',
    backgroundImage: heroBackground2
  },
  {
    title: 'ACHIEVE\nYOUR\nGOALS',
    subtitle: 'Proven strategies and insights from years of global business experience.',
    buttonText: 'GET STARTED',
    buttonLink: '#contact',
    backgroundImage: heroBackground3
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden mt-20">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <SlideBackground
          key={index}
          slide={slide}
          isActive={currentSlide === index}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-screen min-h-[600px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-start justify-center lg:justify-end h-full pt-32 lg:pt-40">
          {/* Text Content - Top Right Aligned */}
          <div className="flex flex-col items-start text-left px-4 sm:px-8 max-w-xl w-full lg:mr-48 xl:mr-64">
            {slides.map((slide, index) => (
              <SlideContent
                key={index}
                slide={slide}
                isActive={currentSlide === index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <NavigationDots
        slides={slides}
        currentSlide={currentSlide}
        onSlideChange={goToSlide}
      />
    </section>
  );
};

export default HeroCarousel;

