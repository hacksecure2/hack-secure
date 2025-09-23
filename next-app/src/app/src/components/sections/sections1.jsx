// src/components/Replica_IMG_01.jsx
import Image from "next/image"; 
import GradientSlideButton from "../sections/Items/GradientButton";
import GradientText from "./Items/GradientText";

const Section1 = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.cyberross.com/_next/image?url=/bg-1920-min.jpg&w=2048&q=75"
          alt="Abstract cybersecurity background graphic"
          layout="fill"
          objectFit="cover"
        //   quality={98}
          priority // Assuming this hero section is above-the-fold
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>{" "}
        {/* Overlay to darken right side and ensure text readability */}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 py-16 md:px-16 lg:px-24">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-start md:items-center pt-24 pb-16">
          <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 text-left pr-0 md:pr-8">
            <p className="text-base tracking-wide text-gray-300 mb-4">
              Cybersecurity Products and Services
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl  leading-tight mb-6"
              style={{ lineHeight: "1.1" }}
            >
              Fight against <br />
              <span className="text-blue-500">
                <GradientText
                  className="text-5xl md:text-6xl lg:text-7xl  leading-tight"
                  gradientFrom="from-blue-400"
                  gradientTo="to-blue-200"
                >
                  CyberCrime
                </GradientText>
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md">
              Our cybersecurity, anti-fraud and brand protection solutions are
              powered by intelligence-driven technologies and the exceptional
              human proficiency of our experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200">
                Find your product
              </button>
              <GradientSlideButton>Talk to sales</GradientSlideButton>
            </div>
          </div>
          {/* Spacer div for the right side where the graphic is */}
          <div className="hidden md:block md:w-1/2 lg:w-3/5">
            {/* The background image itself handles this visual */}
          </div>
        </div>

        
      </div>
    </section>
  );
};


export default Section1;
