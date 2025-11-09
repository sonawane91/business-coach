interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface EventCardProps {
  event: Event;
  isActive?: boolean;
}

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  icon: string;
}

// Reusable Event Card Component
export const EventCard = ({ event, isActive = true }: EventCardProps) => {
  return (
    <div className={`flex-shrink-0 w-[calc(33.333%-16px)] min-w-[280px] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ${!isActive ? 'hidden md:block' : ''}`}>
      {/* Event Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Event Details */}
      <div className="p-5 text-center md:text-left">
        <h3
          className="text-xl font-bold mb-3 uppercase"
          style={{ color: '#438029' }}
        >
          {event.title}
        </h3>
        <p className="text-gray-700 mb-5 leading-relaxed text-sm">
          {event.description}
        </p>
        <button
          className="text-white font-bold px-6 py-2 uppercase tracking-wide transition duration-300 shadow-md hover:shadow-lg text-xs"
          style={{ background: '#D4AF37' }}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

// Reusable Scroll Button Component
export const ScrollButton = ({ direction, onClick, icon }: ScrollButtonProps) => {
  const positionClass = direction === 'left' ? 'left-0' : 'right-0';
  const ariaLabel = direction === 'left' ? 'Scroll left' : 'Scroll right';

  return (
    <button
      onClick={onClick}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 z-10 hover:opacity-70 transition duration-300 hidden md:flex items-center justify-center`}
      aria-label={ariaLabel}
    >
      <img src={icon} alt={direction === 'left' ? 'Previous' : 'Next'} className="w-5 h-9" />
    </button>
  );
};

export type { Event, EventCardProps, ScrollButtonProps };

