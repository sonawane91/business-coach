import decorativeSquares from '../../assets/Component 16 – 1.svg';

const Services = () => {
  return (
    <section id="services" className="py-8 md:py-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:pt-28 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-yellow-600">OUR</span>{' '}
              <span className="text-green-700">SERVICES</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We have conducted many mind power workshops and helped people find
              and achieve their goal, solve their problems in life and career,
              discover their passion and work towards it and power to take quick
              and wise decisions. Thousands of people are benefited and become
              successful through his mind-power training.
            </p>
          </div>

          {/* Right Side - Service Boxes in Scattered 3-Column Layout */}
          <div className="relative min-h-[500px] md:min-h-[550px] lg:min-h-[550px]">
            {/* Decorative image - overlapping squares */}
            <img
              src={decorativeSquares}
              alt=""
              className="absolute top-8 left-12 w-16 h-16 md:w-20 md:h-20 opacity-30 z-0"
            />

            {/* Column 1 - Left */}
            <div className="absolute left-0 top-32 space-y-8 w-36">
              {/* Science of Mind */}
              <div className="text-white p-6 py-8 rounded-3xl shadow-lg hover:shadow-xl transition cursor-pointer" style={{ background: '#D4AF37' }}>
                <h3 className="text-sm font-bold mb-4 uppercase text-center leading-tight">
                  Science of<br />Mind
                </h3>
                <div className="flex justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Science of Money Advance */}
              <div className="text-white p-6 py-8 rounded-3xl shadow-lg hover:shadow-xl transition cursor-pointer" style={{ background: '#438029' }}>
                <h3 className="text-sm font-bold mb-4 uppercase text-center leading-tight">
                  Science of<br />Money Advance
                </h3>
                <div className="flex justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Column 2 - Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-8 space-y-8 w-40">
              {/* Science of Money */}
              <div className="text-white p-6 py-8 rounded-3xl shadow-lg hover:shadow-xl transition cursor-pointer" style={{ background: '#438029' }}>
                <h3 className="text-sm font-bold mb-4 uppercase text-center leading-tight">
                  Science of<br />Money
                </h3>
                <div className="flex justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Train the Trainer */}
              <div className="text-white p-6 py-8 rounded-3xl shadow-lg hover:shadow-xl transition cursor-pointer" style={{ background: '#D4AF37' }}>
                <h3 className="text-sm font-bold mb-4 uppercase text-center leading-tight">
                  Train the<br />Trainer
                </h3>
                <div className="flex justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Column 3 - Right */}
            <div className="absolute right-0 top-16 w-40">
              {/* Stress Management */}
              <div className="text-white p-6 py-8 rounded-3xl shadow-lg hover:shadow-xl transition cursor-pointer" style={{ background: '#D4AF37' }}>
                <h3 className="text-sm font-bold mb-4 uppercase text-center leading-tight">
                  Stress<br />Management
                </h3>
                <div className="flex justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Decorative squares below Stress Management */}
              <div className="mt-6 flex justify-center">
                <img
                  src={decorativeSquares}
                  alt=""
                  className="w-20 h-20 opacity-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

