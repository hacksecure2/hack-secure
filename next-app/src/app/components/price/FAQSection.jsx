// src/components/FAQSection.tsx
"use client"; // This component uses client-side state

import React, { useState } from "react";

// You would typically fetch this data from a CMS
const faqData = [
  {
    question: "What is included in a penetration test?",
    answer:
      "A penetration test, or pen test, is a simulated cyber attack against your computer system to check for exploitable vulnerabilities. Our tests include network, web application, and social engineering assessments, concluding with a comprehensive report and remediation guidance.",
  },
  {
    question: "How quickly can you respond to a security incident?",
    answer:
      "Our Security Operations Center (SOC) operates 24/7/365. For clients with our Incident Response Retainer, we guarantee a response within 1 hour of a declared incident, with expert teams ready for immediate deployment.",
  },
  {
    question: "Do you provide compliance support?",
    answer:
      "Yes, we provide comprehensive compliance support for various standards including PCI DSS, HIPAA, GDPR, ISO 27001, and more. We help with gap analysis, policy creation, and audit preparation.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Absolutely. We understand that your security needs can change. You can upgrade or downgrade your plan at any time. Just contact our sales team, and we will adjust your subscription accordingly.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have extensive experience across a wide range of industries, including finance, healthcare, e-commerce, technology, and government sectors. Our threat intelligence is tailored to industry-specific risks.",
  },
  {
    question: "Do you offer custom security solutions?",
    answer:
      "Yes, for enterprise clients with unique needs, we offer fully customized security solutions. This can include bespoke threat hunting, custom security architecture design, and dedicated consulting services.",
  },
];

const AccordionItem  = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-4 px-2"
      >
        <div className="flex items-center">
          <span className="text-blue-500 mr-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </span>
          <span className="font-medium text-white">{question}</span>
        </div>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="p-4 pl-12 text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900/70 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>

        <div className="space-y-2 mb-20">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/30 p-10 rounded-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Organization?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Don't wait for a security incident to happen. Take proactive steps
            to protect your digital assets today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-blue-500 text-black font-semibold rounded-lg hover:bg-blue-300 transition-colors duration-300 transform hover:scale-105"
            >
              Start Your Security Journey
            </a>
            <a
              href="#"
              className="px-8 py-3 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 hover:border-gray-500 transition-colors duration-300"
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
