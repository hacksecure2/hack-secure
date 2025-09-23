// src/components/slides/FeatureSlide.jsx
import Image from 'next/image';
import PropTypes from 'prop-types';

const FeatureSlide = ({ iconSrc, title, heading, description, imageSrc, imagePosition = 'left' }) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className="min-h-[80%] w-full flex items-center justify-center snap-start bg-black text-white p-8 md:p-16">
      <div
        className={`w-full  mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 ${
          isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Image Column */}
        <div className="w-full md:w-[70%] flex justify-center px-4">
          <div className="relative w-[55vw] h-[65vh] group">
            {/* Using a simple div for the rounded container as the image itself isn't what's rounded */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 transform group-hover:scale-105 transition-transform duration-500 ease-in-out">
              <Image
                src={imageSrc} // replace with actual image
                alt={`${title} feature screenshot`}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="relative w-20 h-20 mb-6 transform hover:scale-110 transition-transform duration-300">
            <Image
              src={iconSrc} // replace with actual image
              alt={`${title} icon`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-blue-400 font-semibold mb-2">{title}</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">{heading}</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-md">{description}</p>
          <a
            href="#"
            className="group text-white font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          >
            Learn more
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

FeatureSlide.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf(['left', 'right']),
};

export default FeatureSlide;