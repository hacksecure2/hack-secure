import Image from "next/image";

const productItems = [
  {
    icon: "https://tse1.mm.bing.net/th/id/OIP.F-6z57Sd3B4vxdF7vn8Z1gAAAA?pid=ImgDet&w=148&h=117&c=7&o=7&rm=3",
    label: "Understand adversaries",
  },
  {
    icon: "https://tse1.mm.bing.net/th/id/OIP.74IYnravDTRAS80HsR2M5gHaKX?pid=ImgDet&w=174&h=244&c=7",
    label: "Fight fraud",
  },
  {
    icon: "https://tse1.mm.bing.net/th/id/OIP.EZ7FYLouEWVVYzMPP5wBCQHaGU?pid=ImgDet&w=174&h=148&c=7g",
    label: "Detect and disrupt attacks",
  },
  {
    icon: "https://tse1.mm.bing.net/th/id/OIP.JFs8bzzjBKEmpXy9fvWeSAAAAA?w=250&h=250&rs=1&pid=ImgDetMain",
    label: "Manage your attack surface",
  },
  {
    icon: "https://tse2.mm.bing.net/th/id/OIP.TWRKG6fXho_s4P5sFndeOAAAAA?pid=ImgDet&w=128&h=128&c=7",
    label: "Protect your brand",
  },
  {
    icon: "https://tse1.explicit.bing.net/th/id/OIP.BZcodgcq_n7UjrHCrCH3UAAAAA?pid=ImgDet&w=128&h=167&c=7",
    label: "Stop email threats",
  },
];

const ProductsTab = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-8">
      {productItems.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-start text-center p-4 border border-gray-800 rounded-lg hover:border-blue-500/50 hover:bg-gray-900/50 transition-all duration-300 cursor-pointer"
        >
          <div className="relative w-24 h-24 mb-4 transform group-hover:scale-110 transition-transform duration-300">
            <Image
              src={item.icon} // replace with actual image
              alt={`${item.label} icon`}
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <p className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductsTab;
