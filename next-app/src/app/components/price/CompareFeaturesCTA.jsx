// src/components/CompareFeaturesCTA.tsx
import React from "react";

const CompareFeaturesCTA = () => {
  return (
    <section className="bg-gray-900/70 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Need Help Choosing?{" "}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Compare Features
          </a>
        </h2>

        <div className="border border-gray-700 rounded-lg p-8 sm:p-12 bg-gray-900/50">
          <p className="text-lg text-gray-400 mb-6">
            Not sure which plan is right for you? Schedule a free consultation
            to discuss your specific security needs.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-blue-500 text-black font-semibold rounded-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
          >
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompareFeaturesCTA;
