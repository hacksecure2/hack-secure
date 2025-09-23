import GradientText from "../Items/GradientText";

const solutionColumns = [
  {
    title: "By Use Case",
    links: [
      "Ransomware Protection",
      "Phishing and Scam Protection",
      "Bot Protection",
      "Dark Web and Deep Web Monitoring",
      "Data Leak Detection",
      "Anti-Piracy",
      "Building CTI Program",
    ],
  },
  {
    title: "By Role",
    links: [
      "CISO",
      "Head of Fraud",
      "Head of Brand Protection",
      "Head of Threat Intelligence",
    ],
  },
  {
    title: "By Industry",
    links: [
      "Law Enforcement",
      "Regulatory Compliance",
      "Retail and e-Commerce",
      "Crypto Industry",
      "Governments",
      "Telecom and Service Providers",
      "Online Gambling and Betting",
      "Financial Services",
      "Insurance Sector",
      "OT/ICS Cybersecurity",
      "Manufacturing Industry",
    ],
  },
];

const SolutionsTab = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 text-gray-400">
      {solutionColumns.map((col) => (
        <div key={col.title} className="text-start">
          <div className="mb-6 ">
            <GradientText
              className="text-md md:text-lg lg:text-xl  leading-tight"
              gradientFrom="from-blue-400"
              gradientTo="to-blue-200"
            >
              {col.title}
            </GradientText>
          </div>
          <ul className="space-y-3">
            {col.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


export default SolutionsTab;
