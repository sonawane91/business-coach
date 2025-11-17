import { useState } from 'react';
import leftArrow from '../../assets/Icon feather-arrow-left-circle.svg';
import rightArrow from '../../assets/Icon feather-arrow-left-circle-1.svg';
import starIcon from '../../assets/Icon awesome-star.svg';
import testimonialImage from '../../assets/Component 9 – 1.png';
import { TestimonialCard, NavigationButton, type Testimonial } from './Testimonial';

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'NAME ONE',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit',
      image: testimonialImage,
      backgroundColor: '#D4AF37'
    },
    {
      id: 2,
      name: 'NAME TWO',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
      image: testimonialImage,
      backgroundColor: '#438029'
    },
    {
      id: 3,
      name: 'NAME THREE',
      rating: 3,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit',
      image: testimonialImage,
      backgroundColor: '#D4AF37'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start with center testimonial

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    return [testimonials[prev], testimonials[currentIndex], testimonials[next]];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="testimonial" className="py-12 md:py-12 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase" style={{ color: '#D4AF37' }}>
          TESTIMONIAL
        </h2>

        {/* Testimonials Carousel */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <NavigationButton
            onClick={goToPrevious}
            icon={leftArrow}
            position="left"
            size="large"
          />

          {/* Testimonials Container */}
          <div className="flex gap-2 items-stretch justify-center flex-wrap lg:flex-nowrap max-w-full">
            {visibleTestimonials.map((testimonial, index) => {
              const isCenter = index === 1;
              const backgroundColor = isCenter ? '#438029' : '#D4AF37';

              return (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  isCenter={isCenter}
                  backgroundColor={backgroundColor}
                  starIcon={starIcon}
                />
              );
            })}
          </div>

          {/* Right Arrow */}
          <NavigationButton
            onClick={goToNext}
            icon={rightArrow}
            position="right"
            size="large"
          />
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <NavigationButton
            onClick={goToPrevious}
            icon={leftArrow}
            position="left"
            size="small"
          />
          <NavigationButton
            onClick={goToNext}
            icon={rightArrow}
            position="right"
            size="small"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

