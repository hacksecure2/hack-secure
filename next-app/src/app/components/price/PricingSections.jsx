// src/components/PricingSection.tsx
import React from "react";
import PricingCard from "./PricingCard";

// Icons for each plan
const ShieldIcon = () => (
  <svg
    className="w-8 h-8 text-cyan-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944L12 22l9-1.056v-9.447z"
    ></path>
  </svg>
);
const BoltIcon = () => (
  <svg
    className="w-8 h-8 text-cyan-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    ></path>
  </svg>
);
const CrownIcon = () => (
  <svg
    className="w-8 h-8 text-purple-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 18v-2a4 4 0 014-4h6a4 4 0 014 4v2M5 18a2 2 0 00-2 2h18a2 2 0 00-2-2M12 2v4M5 7l2-4m10 4l-2-4"
    ></path>
  </svg>
);

const pricingData = [
  {
    icon: <ShieldIcon />,
    planName: "Human Tier",
    description:
      "Perfect for small to medium businesses starting their security journey",
    price: "2,500",
    features: [
      "Podcasts",
      "Community Access",
      "Case Studies",
      "Official Quiz",
      "Blog and Articles",
      "Checklist and Templates",
      "Audiobooks",
      "Tools - Limited Time",
      "Human Courses",
      "Cyber Laws and Policies",
      "Community Projects",
      " CTFs",
      " Bootcamps",
    ],
    ctaText: "Get Started",
    ctaLink: "#",
  },
  {
    icon: <BoltIcon />,
    planName: "Pro Tier",
    description:
      "Comprehensive security for growing enterprises with complex needs",
    price: "5,000",
    features: [
      "Investigations",
      " Micro Modules",
      "Webinars",
      "Solutions",
      "Release Notes",
      "Pro Courses",
      "Training Programs",
      "Priority Support",
      "Bootcamps",
    ],
    ctaText: "Most Popular",
    ctaLink: "#",
    isPopular: true,
  },
  {
    icon: <CrownIcon />,
    planName: "Elite Tier",
    description:
      "Maximum protection for large enterprises and high-risk industries",
    price: "10,000",
    features: [
      "Top Investigations",
      "Sessions",
      "Webinars",
      "Solutions",
      "Release  Notes",
      "Training Programs",
      "Elite Courses",
      "1 on 1 Mentorship",
    ],
    ctaText: "Contact Sales",
    ctaLink: "#",
    isEnterprise: true,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gray-900/70 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your Security Level
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-400">
          Comprehensive cybersecurity solutions tailored to your organization's
          size, industry, and risk profile. All plans include our 30-day
          money-back guarantee.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-start">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            icon={plan.icon}
            planName={plan.planName}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            ctaText={plan.ctaText}
            ctaLink={plan.ctaLink}
            isPopular={plan.isPopular}
            isEnterprise={plan.isEnterprise}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
