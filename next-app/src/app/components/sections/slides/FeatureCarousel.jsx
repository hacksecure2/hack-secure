import React from "react";
import Image from "next/image";
import GradientText from "../Items/GradientText";

const FeatureCarousel = () => {
  const data = [
    {
      head: "Threat Intelligence",
      title: "Understand adversaries",
      description:
        "Supercharge your cyber security and defeat attacks before they begin.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1757687907926-0e6659fc4ebf?w=800&auto-format&fit=crop&q=60&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHNoYWRlJTIwbG9ja3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      head: "Fraud Protection",
      title: "Eliminate fraud",
      description:
        "Protect your business and customers from all online fraud risks.",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto-format&fit=crop&w=2070&q=80",
    },
    {
      head: "Managed XDR",
      title: "Detect and disrupt attacks",
      description:
        "Stop attacks in their tracks with real-time threat detection.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1740055743729-0440f5f3b95f?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      head: "Attack Surface Management",
      title: "Manage your attack surface",
      description: "Continuously monitor and manage your attack surface.",
      imageUrl:
        "https://images.unsplash.com/photo-1641030902804-be3665f5c798?w=800&auto=format&fit=crop&q=60&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsdWUlMjBzaGFkZSUyMFVpJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    },
  ];

  // A reusable Card component to keep the code clean
  const FeatureCard = ({ item }) => (
    // THE CHANGE IS ON THIS LINE vvv
    <div className="group relative overflow-hidden rounded-xl shadow-lg h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/40">
      <Image
        src={item.imageUrl}
        alt={item.title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 text-white">
        <h3 className="text-md font-semibold uppercase tracking-wider text-cyan-400">
          <GradientText
            className="text-md md:text-lg lg:text-xl leading-tight"
            gradientFrom="from-blue-600"
            gradientTo="to-blue-300"
          >
            {item.head}
          </GradientText>
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold my-3">{item.title}</h1>
        <p className="text-md md:text-lg text-gray-200 max-w-sm">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {data.map((item, index) => {
          const isFullWidth = index === 0 || index === 3;

          return (
            <div
              key={item.head}
              className={`min-h-[70vh] ${isFullWidth ? "md:col-span-2" : ""}`}
            >
              <FeatureCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCarousel;
