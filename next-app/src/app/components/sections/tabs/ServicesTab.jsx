import GradientText from "../Items/GradientText";

const serviceColumns = [
  {
    title: "Workshops",
    links: [],
  },
  {
    title: "Sessions",
    links: [],
  },
  {
    title: "Webinars",
    links: [],
  },
  {
    title: "Cyber Investigation",
    links: [],
  },
];

const ServicesTab = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 text-center md:grid-cols-1 gap-8 py-8 text-gray-400">
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
