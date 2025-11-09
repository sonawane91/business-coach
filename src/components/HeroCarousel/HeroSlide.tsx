interface Slide {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

interface SlideBackgroundProps {
  slide: Slide;
  isActive: boolean;
}

interface SlideContentProps {
  slide: Slide;
  isActive: boolean;
}

interface NavigationDotsProps {
  slides: Slide[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

// Reusable Slide Background Component
export const SlideBackground = ({ slide, isActive }: SlideBackgroundProps) => {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'
        }`}
      style={{
        backgroundImage: `url(${slide.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    />
  );
};

// Reusable Slide Content Component
export const SlideContent = ({ slide, isActive }: SlideContentProps) => {
  return (
    <div
      className={`transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 absolute'
        }`}
    >
      <h1
        className="font-black text-white mb-4 sm:mb-6 uppercase"
        style={{
          fontSize: 'clamp(40px, 8vw, 70px)',
          lineHeight: 'clamp(38px, 7.5vw, 65px)',
          fontFamily: 'Agency FB, Arial Black, sans-serif',
          letterSpacing: '0px',
          textAlign: 'left',
          maxWidth: '100%',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        {slide.title.split('\n').map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </h1>
      <p
        className="text-white mb-4 sm:mb-6 uppercase tracking-wide drop-shadow-lg"
        style={{
          fontSize: 'clamp(12px, 2.5vw, 14px)',
          maxWidth: '100%',
          textAlign: 'left'
        }}
      >
        {slide.subtitle}
      </p>
      <a
        href={slide.buttonLink}
        className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold uppercase tracking-wider transition duration-300 shadow-lg"
        style={{
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          padding: 'clamp(10px, 2vw, 12px) clamp(32px, 5vw, 40px)'
        }}
      >
        {slide.buttonText}
      </a>
    </div>
  );
};

// Reusable Navigation Dots Component
export const NavigationDots = ({ slides, currentSlide, onSlideChange }: NavigationDotsProps) => {
  return (
    <div className="absolute bottom-8 right-8 md:right-12 lg:right-16 z-20 flex gap-3">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
            ? 'bg-amber-500 w-8'
            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export type { Slide, SlideBackgroundProps, SlideContentProps, NavigationDotsProps };

