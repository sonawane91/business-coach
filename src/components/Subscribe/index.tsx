import { useState } from 'react';
import backgroundImage from '../../assets/Component 33 – 1.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section
      className="py-16 md:py-20 relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-green-600"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#d4af37'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-wide">
              KUSHCHATURVEDI
            </h2>
            <p className="text-xl md:text-2xl font-light tracking-widest mb-8 uppercase">
              GLOBAL BUSINESS COACH
            </p>
            <div className="w-full max-w-md h-px bg-white mb-8 mx-auto lg:mx-0"></div>
            <p className="text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts they live
            </p>
          </div>

          {/* Right Side - Subscribe Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold uppercase mb-3" style={{ color: '#D4AF37' }}>
              SUBSCRIBE NOW
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Don't miss our future updates! Get Subscribed Today!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail id"
                required
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-yellow-600 focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
              <button
                type="submit"
                className="text-white font-bold px-8 py-3 uppercase tracking-wide transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ background: '#D4AF37' }}
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

