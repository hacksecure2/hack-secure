import GradientText from "../Items/GradientText";

const solutionColumns = [
  {
    title: "Quiz",
    links: [],
  },
  {
    title: "Top Investigations",
    links: [],
  },
  {
    title: "Blogs and Articles",
    links: [],
  },
  {
    title: "Tools",
    links: [],
  },
  {
    title: "Checklist and Template",
    links: [],
  },
  {
    title: "Audiobooks",
    links: [],
  },
  {
    title: "Events",
    links: [],
  },
  {
    title: "Micro Modules",
    links: [],
  },
  {
    title: "Podcasts",
    links: [],
  },
  {
    title: "Reports",
    links: [],
  },
  {
    title: "Cyber Laws and Policies",
    links: [],
  },
  {
    title: "Training Programs",
    links: [],
  },
  {
    title: "Community Projects",
    links: [],
  },
];

const SolutionsTab = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 text-center gap-8 py-8 text-gray-400">
      {solutionColumns.map((col) => (
        <div key={col.title} className="text-center">
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
