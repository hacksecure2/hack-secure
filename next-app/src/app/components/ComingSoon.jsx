// src/components/ComingSoonPage.tsx
"use client"; // For the interactive elements if we add a live countdown later

import React, { useState, useEffect } from "react";
import Image from "next/image";
import GradientText from "./sections/Items/GradientText";

const ComingSoonPage = () => {
 
 
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-blue-950 text-white overflow-hidden p-4">
      {/* Background overlay/pattern - subtle, abstract */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/placeholders/coming_soon_bg_pattern.png" // Replace with an abstract pattern or image
          alt="Abstract background pattern"
          layout="fill"
          objectFit="cover"
          quality={50}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center bg-gray-900/40 backdrop-blur-sm border border-blue-700/50 rounded-lg p-8 md:p-12 shadow-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-400 mb-6 leading-tight">
          <GradientText
            className="text-6xl md:text-6xl "
            gradientFrom="from-blue-500"
            gradientTo="to-blue-100"
          >
          We're Crafting Something <br /> Amazing!
          </GradientText>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Our new platform is under construction and will be ready to launch
          very soon. Get ready for enhanced security, innovative features, and a
          seamless experience.
        </p>

        {/* Countdown Timer */}
        <div className="flex text-6xl text-blue-400 font-bold justify-center items-center space-x-4 mb-10">
          <GradientText
            className="text-6xl md:text-6xl "
            gradientFrom="from-blue-500"
            gradientTo="to-blue-100"
          >
            Coming Soon ......
          </GradientText>
        </div>

        {/* Email Subscription Form */}
        <p className="text-md text-gray-300 mb-4">
          Want to be the first to know when we launch? Join our mailing list!
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-5 py-3 bg-gray-700 border border-blue-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
          >
            Notify Me
          </button>
        </form>

        {/* Optional social links */}
        <div className="mt-10 text-gray-400 text-sm">
          Follow us on{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Twitter
          </a>
          ,{" "}
          <a href="#" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
          , or{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
