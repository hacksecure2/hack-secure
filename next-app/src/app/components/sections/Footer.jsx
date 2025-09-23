// src/components/Footer.tsx
import React from "react";
import Image from "next/image";
import GradientButton from "./Items/GradientButton";

const footerLinks = [
  {
    category: "Products",
    links: [
      { text: "Threat Intelligence", href: "#" },
      { text: "Fraud Protection", href: "#" },
      { text: "Managed XDR", href: "#" },
      { text: "Attack Surface Management", href: "#" },
      { text: "Digital Risk Protection", href: "#" },
      { text: "Business Email Protection", href: "#" },
      { text: "Unified Risk Platform", href: "#" },
      { text: "Integrations", href: "#" },
    ],
  },
  {
    category: "Resources",
    links: [
      { text: "Research Hub", href: "#" },
      { text: "Success Stories", href: "#" },
      { text: "Knowledge Hub", href: "#" },
      { text: "Certificates", href: "#" },
      { text: "Webinars", href: "#" },
      { text: "Podcasts", href: "#" },
      { text: "TOP Investigations", href: "#" },
      { text: "Ransomware Notes", href: "#" },
    ],
  },
  {
    category: "Partners",
    links: [
      { text: "Partner Program", href: "#" },
      { text: "MSSP and MDR Partner Program", href: "#" },
      { text: "Technology Partners", href: "#" },
      { text: "Partner Locator", href: "#" },
    ],
  },
  {
    category: "Company",
    links: [
      { text: "About Group-IB", href: "#" },
      { text: "Team", href: "#" },
      { text: "CERT-GIB", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Internship", href: "#" },
      { text: "Sustainability", href: "#" },
      { text: "Media Center", href: "#" },
      { text: "Contact", href: "#" },
    ],
  },
];

const ArrowLink= ({
  href,
  children,
}) => (
  <a
    href={href}
    className="group font-semibold text-white flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
  >
    {children}
    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
      &rarr;
    </span>
  </a>
);

const SocialIcon= ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section: Sitemap */}
        <div className="grid grid-cols-2 text-2xl m-auto ml-10 md:grid-cols-5  gap-8">
          HACK-VERSE
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h3 className="text-white  font-semibold mb-4">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors text-xl duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* This empty div is a spacer to align the arrow links below */}
          <div className="hidden md:block"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 ml-10 text-2xl gap-8 mt-12">
          <ArrowLink href="#">Subscription plans</ArrowLink>
          <ArrowLink href="#">Services</ArrowLink>
          <ArrowLink href="#">Resource Center</ArrowLink>
        </div>

        {/* Middle Section: Contact & Subscribe */}
        <div className="border-t border-gray-800 mt-16 pt-12 grid grid-cols-1 ml-10 text-xl lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <a
                href="mailto:info@group-ib.com"
                className="hover:text-white transition-colors duration-200"
              >
                info@group-ib.com
              </a>
              <div className="flex items-center space-x-4 mt-4">
                {/* Inlined SVGs for performance, could also be a component library like react-icons */}
                <SocialIcon href="#">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 15.75c0 .414-.336.75-.75.75h-1.5c-.414 0-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75h1.5c.414 0 .75.336.75.75v6.5zm4.5 0c0 .414-.336.75-.75.75h-1.5c-.414 0-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75h1.5c.414 0 .75.336.75.75v6.5zm4.5 0c0 .414-.336.75-.75.75h-1.5c-.414 0-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75h1.5c.414 0 .75.336.75.75v3.5z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
            <div>
              <p className="mb-2">APAC: +65 3159 3798</p>
              <p className="mb-2">EU & NA: +31 20 226 90 90</p>
              <p>MEA: +971 4 568 1785</p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">
              Subscribe to stay up to date with the latest cyber threat trends
            </h3>
            {/* Placeholder for a subscription form */}
            <form action="#" className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                // className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
              >
                <GradientButton>Subscribe</GradientButton>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-gray-800 mt-16 pt-8 ml-10 text-xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg text-center md:text-left">
            © 2003 - 2025 Group-IB is a global leader in the fight against
            cybercrime, protecting customers around the world by preventing
            breaches, eliminating fraud and protecting brands.
          </p>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="#" className="text-lg hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-lg hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
