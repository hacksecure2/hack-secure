// src/components/Replica_PlatformSection.jsx
"use client"; // Required for useState and client-side interactivity

import { useState } from "react";
import ProductsTab from "./tabs/ProductsTab";
import ServicesTab from "./tabs/ServicesTab";
import SolutionsTab from "./tabs/SolutionsTab";
import GradientText from "./Items/GradientText";

const TABS = {
  SERVICES: "Services",
  SOLUTIONS: "LearnX",
};

const Replica_PlatformSection = () => {
  const [activeTab, setActiveTab] = useState(TABS.SERVICES);

  const renderContent = () => {
    switch (activeTab) {
      case TABS.SERVICES:
        return <ServicesTab />;
      case TABS.SOLUTIONS:
        return <SolutionsTab />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Content */}
        <h2 className="text-4xl md:text-5xl  leading-tight">
          Build for next-gen
          <br /> learners and innovators.
        </h2>
        <GradientText
          className="text-5xl md:text-6xl lg:text-7xl  leading-tight"
          gradientFrom="from-blue-400"
          gradientTo="to-blue-200"
        >
          Hack-Secure
        </GradientText>

        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12">
          where global learners come to master cybersecurity, secure digital
          assets, and lead the transformation of our digital world. All in one
          comprehensive platform.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-2 mb-8 p-1 bg-gray-900/80 rounded-lg max-w-sm mx-auto">
          {Object.values(TABS).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeTab === tab
                  ? "bg-gray-700 text-white shadow-md"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="bg-black border border-gray-800 rounded-lg p-6 md:p-10 min-h-[300px]">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};


export default Replica_PlatformSection;
