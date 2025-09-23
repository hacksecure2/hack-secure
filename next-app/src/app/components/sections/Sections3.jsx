// src/components/Replica_IMG_03.jsx
import Image from "next/image";
import GradientText from "./Items/GradientText";

const Section3 = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.cyberross.com/_next/image?url=/assets/rocks-together-1920-min.jpg&w=2048&q=75" // replace with actual background image: IMG_03_background.jpg
          alt="Abstract dark mountain landscape with blue glowing line"
          layout="fill"
          objectFit="cover"
          priority // Assuming this is an above-the-fold hero section
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/30 to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-16 flex justify-end">
        <div className="w-full md:w-3/5 lg:w-2/5 text-left ">
          <p className="text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed text-gray-200 mb-8">
            <span className="text-blue-400 font-medium">
              <GradientText
                className="text-xl md:text-2xl lg:text-4xl  leading-tight"
                gradientFrom="from-blue-400"
                gradientTo="to-blue-200"
              >
                Group-IB Threat Intelligence
              </GradientText>
            </span>{" "}
            solution is ranked as one of the best in class by Gartner,
            Forrester, IDC and other analysts
          </p>

          <div className="flex flex-col sm:flex-row md:justify-end items-start md:items-center gap-6 mb-4">
            {/* Gartner logo */}
            <div className="w-24 h-16 relative flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <Image
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1E_3gpzve36du7CnfVO1Vw7XFZakMY_VlsmIoqTFUwxgR9-y-" // replace with actual image: gartner_logo.png
                alt="Gartner logo"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            {/* Forrester logo */}
            <div className="w-28 h-16 relative flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <Image
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVi8VSqTb-cudH8HM4x3M8VjNJdcuMglNTQo6OQu_G4fAIoEZi" // replace with actual image: forrester_logo.png
                alt="Forrester logo"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            {/* IDC logo */}
            <div className="w-16 h-6 relative flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <Image
                src="/placeholders/idc_logo_placeholder.png" // replace with actual image: idc_logo.png
                alt="IDC logo"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Frost & Sullivan logo */}
          <div className="flex justify-start md:justify-end">
            <div className="w-48 h-8 relative flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <Image
                src="/placeholders/frost_sullivan_logo_placeholder.png" // replace with actual image: frost_sullivan_logo.png
                alt="Frost & Sullivan logo"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Section3;
