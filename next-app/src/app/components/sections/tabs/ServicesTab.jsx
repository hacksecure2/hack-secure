import GradientText from "../Items/GradientText";

const serviceColumns = [
  {
    title: "Audit & Consulting",
    links: [
      "Penetration Testing",
      "Security Assessment",
      "Compliance & Consulting",
      "Red Teaming",
    ],
  },
  {
    title: "Education & Training",
    links: [
      "Training for Technical Specialists",
      "Cybersecurity Awareness Workshop",
      "Incident Response Simulation Game",
      "All Training Programs",
    ],
  },
  {
    title: "Digital Forensics & Incident Response",
    links: [
      "Incident Response",
      "Incident Response Retainer",
      "Incident Response Readiness Assessment",
      "Compromise Assessment",
      "Digital Forensics",
    ],
  },
  {
    title: "Hi-Tech Crime Investigation",
    links: ["Cyber Investigation", "Investigation Subscription"],
  },
];

const ServicesTab = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 text-start md:grid-cols-4 gap-8 py-8 text-gray-400">
      {serviceColumns.map((col) => (
        <div key={col.title}>
          <div className="mb-6">
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


export default ServicesTab;
