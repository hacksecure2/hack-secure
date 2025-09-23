// src/components/PricingCard.tsx
import React from "react";


const PricingCard = ({
  icon,
  planName,
  description,
  price,
  features,
  ctaText,
  ctaLink,
  isPopular = false,
  isEnterprise = false,
}) => {
  const cardClasses = `
    relative flex flex-col p-8 rounded-xl h-full
    border transition-all duration-300 transform hover:scale-105
    ${
      isPopular
        ? "bg-gray-800/50 border-blue-600 shadow-blue-600/20 shadow-lg"
        : isEnterprise
        ? "bg-gray-900/50 border-purple-600"
        : "bg-gray-900/50 border-gray-700"
    }
  `;

  const buttonClasses = `
    w-full py-3 mt-auto font-semibold rounded-lg transition-colors duration-300
    ${
      isPopular
        ? "bg-blue-600 text-black hover:bg-blue-600"
        : "bg-gray-700 text-white hover:bg-gray-600"
    }
  `;

  return (
    <div className={cardClasses}>
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-black text-xs font-bold px-4 py-1 rounded-full uppercase">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex-grow">
        <div className="text-center mb-6">
          <div
            className={`inline-block p-3 rounded-lg mb-4 ${
              isPopular ? "bg-blue-600/10" : "bg-gray-700/50"
            }`}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-semibold text-white">{planName}</h3>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>

        <p className="text-center my-6">
          <span className="text-5xl font-bold text-white">${price}</span>
          <span className="text-gray-400">/month</span>
        </p>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href={ctaLink} className={`block text-center mt-8 ${buttonClasses}`}>
        {ctaText} &rarr;
      </a>
    </div>
  );
};

export default PricingCard;
