// src/components/Replica_IMG_01.jsx
import Image from "next/image";
import GradientSlideButton from "./Items/GradientButton";
import GradientText from "./Items/GradientText";

const Section1 = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://miro.medium.com/v2/resize:fit:1400/1*_FB4RpcDAfJPVUkVCiQIzA.jpeg"
          alt="Abstract cybersecurity background graphic"
          layout="fill"
          objectFit="cover"
          priority // Assuming this hero section is above-the-fold
        />
        {/* MODIFIED: Gradient changed to darken the left side for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/30 to-transparent"></div>{" "}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 md:px-16 lg:px-24">
        {/* Main Content */}
        {/* MODIFIED: Added perspective for 3D transform effect on child */}
        <div
          className="flex flex-col md:flex-row w-full mx-auto md:items-center justify-end"
          style={{ perspective: "1200px" }}
        >
          {/* Spacer div for the left side (now empty) */}
          <div className="hidden md:block md:w-1/2 lg:w-2/5">
            {/* This is now the empty space on the left */}
          </div>

          {/* MODIFIED: Text content is now the second item, pushed to the right */}
          <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 text-left md:text-right pl-0 md:pl-8 transform origin-right md:rotate-y-[-10deg] lg:mr-20 bg-black/50 p-10 rounded-lg backdrop-blur-xl transition-transform duration-500 hover:rotate-y-0">
            <p className="text-base tracking-wide text-gray-300 mb-4">
              Master the art of secure innovation With
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6"
              style={{ lineHeight: "1.1" }}
            >
              Hack Secure <br />
              <span className="text-blue-500">
                <GradientText
                  className="text-5xl md:text-6xl lg:text-7xl leading-tight"
                  gradientFrom="from-blue-400"
                  gradientTo="to-blue-200"
                >
                  CyberSecurity Solutions.
                </GradientText>
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md ml-auto">
              We’re not just a company—we’re a mission. Hack Secure Global is
              redefining cybersecurity through elite operations, breakthrough
              education, and strategic digital&nbsp;defense.
            </p>
            {/* MODIFIED: Aligned buttons to the right on medium screens and up */}
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200">
                Start Adventure
              </button>
              <GradientSlideButton>Learn more</GradientSlideButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
