import aboutImage from '../../assets/kush_chaturvedi.png';
import backgroundPattern from '../../assets/Component 19 – 1.svg';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-lg overflow-hidden">
          {/* Left Side - Gradient Background with Text */}
          <div
            className="bg-gradient-to-br from-green-700 via-green-600 to-yellow-500 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center text-center lg:text-right relative"
            style={{
              backgroundImage: `url(${backgroundPattern})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
              About KushChaturvedi
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-8">
              Mr. Kush Chaturvedi , Chairman and Managing Director (CMD) of
              AatmanirbharShiksha Companies, began his journey about 10 years
              back as a self-help group in the training sector on proprietorship
              basis. He has progressed in leaps and bounds.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-wide">
              Kush Chaturvedi
            </h3>

            <p className="text-base md:text-lg leading-relaxed">
              Mr. Kush Chaturvedi has trained more than 700+ persons on sales
              process and various smart business strategies for ICICI Prudential
              and ICICI Bank.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-64 md:h-96 lg:h-auto min-h-[400px]">
            <img
              src={aboutImage}
              alt="Kush Chaturvedi"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

