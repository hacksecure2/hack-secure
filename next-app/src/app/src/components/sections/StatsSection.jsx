// src/components/StatsSection.tsx
import React from "react";
import Image from "next/image";

// Data for the stats grid. This makes the component cleaner and easier to update.
const statsData = [
  { value: "1550+", label: "successful investigations" },
  { value: "400+", label: "employees" },
  { value: "600+", label: "enterprise customers" },
  { value: "60", label: "countries" },
  { value: "$1 bln", label: "saved for companies" },
  { value: "#1", label: "Incident Response Retainer vendor*" },
  { value: "120+", label: "patents and applications" },
  { value: "11", label: "unique Digital Crime Resistance Centers" },
];

const partnerLogos = ["INTERPOL", "EUROPOL", "AFRIPOL"];

const StatsSection = () => {
  return (
    <section className="relative w-full h-screen py-20 px-4 flex flex-col items-center justify-center bg-black">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1594047752131-1ec0a6dfa4fc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Abstract blue digital background"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className="absolute inset-0 " /> {/* Dark overlay for contrast */}
      </div>

      <div className="relative z-10 max-w-7xl w-full text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-12">
          We know how to ensure your safety
        </h2>

        {/* Stats Container with glassmorphism effect */}
        <div className="border border-blue-800/50 bg-blue-950/30 backdrop-blur-md rounded-lg overflow-hidden">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="p-8 text-center border-b border-r border-blue-800/50 
                           md:[&:nth-child(4n)]:border-r-0 
                           sm:[&:nth-child(2n)]:border-r-0 
                           md:border-r 
                           [&]:border-b"
              >
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Partner Section */}
          <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-300">
            <p className="text-sm">
              Group-IB’s mission is to fight against cybercrime
            </p>
            <span className="hidden md:block text-gray-600">/</span>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm">
                Partner and active collaborator in global investigations:
              </p>
              <div className="flex items-center gap-3">
                {partnerLogos.map((logo) => (
                  <div
                    key={logo}
                    className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-blue-700/50 text-white text-xs font-semibold hover:bg-blue-700/20 hover:border-blue-500 transition-all duration-300 cursor-pointer"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
