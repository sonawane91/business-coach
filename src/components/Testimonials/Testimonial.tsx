interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
  backgroundColor: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isCenter: boolean;
  backgroundColor: string;
  starIcon: string;
}

interface NavigationButtonProps {
  onClick: () => void;
  icon: string;
  position: 'left' | 'right';
  size?: 'small' | 'large';
}

// Reusable TestimonialCard Component
export const TestimonialCard = ({ testimonial, isCenter, backgroundColor, starIcon }: TestimonialCardProps) => {
  const scale = isCenter ? 'lg:scale-110' : 'lg:scale-75 lg:opacity-60';
  const width = isCenter ? 'w-full sm:w-[400px]' : 'w-full sm:w-72';

  return (
    <div
      className={`flex-shrink-0 ${width} transition-all duration-500 ${scale} ${!isCenter ? 'hidden lg:block' : ''}`}
    >
      <div className="rounded-3xl shadow-xl h-full flex flex-col relative overflow-hidden">
        {/* Colored Background Section (Top Half) - No border */}
        <div
          className="h-32 relative rounded-t-3xl"
          style={{ background: backgroundColor }}
        >
          {/* Profile Image - Positioned to overlap colored section and white section */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* White Background Section (Bottom Half) - With dashed border */}
        <div
          className="bg-white rounded-b-3xl p-8 pt-20 flex-1"
          style={{
            border: '1px dashed #999',
            borderTop: 'none',
            borderImageSlice: 1,
            strokeDasharray: '10 5'
          }}
        >
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase">
              {testimonial.name}
            </h3>

            {/* Stars */}
            <div className="flex gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={starIcon}
                  alt="star"
                  className={`w-8 h-8 ${i < testimonial.rating ? 'opacity-100' : 'opacity-30'}`}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed text-sm">
              {testimonial.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Navigation Button Component
export const NavigationButton = ({ onClick, icon, position, size = 'large' }: NavigationButtonProps) => {
  const sizeClass = size === 'large' ? 'w-16 h-16' : 'w-10 h-10';
  const visibilityClass = size === 'large' ? 'hidden md:block' : '';
  const filterStyle = size === 'large' ? { filter: 'brightness(0.8) contrast(1.2)' } : {};
  const ariaLabel = position === 'left' ? 'Previous testimonial' : 'Next testimonial';
  const altText = position === 'left' ? 'Previous' : 'Next';

  return (
    <button
      onClick={onClick}
      className={`${visibilityClass} hover:opacity-70 transition duration-300`}
      aria-label={ariaLabel}
    >
      <img
        src={icon}
        alt={altText}
        className={sizeClass}
        style={filterStyle}
      />
    </button>
  );
};

export type { Testimonial, TestimonialCardProps, NavigationButtonProps };

