import React from "react";
import FeatureCarousel from "./slides/FeatureCarousel";

const Feature = () => {
  const data = [
    {
      logo: "",
      head: "WHY HACK SECURE",
      title: "Understand adversaries",
      description:
        "Discover what makes Hack Secure the trusted choice for cybersecurity excellence
.",
    },
    {
      logo: "",
      head: "Fraud Protection",
      title: "Eliminate fraud",
      description:
        "Protect your business and customers from all online fraud risks with real-time fraud prevention and client-side digital identity protection.",
    },
    {
      logo: "",
      head: "Managed XDR",
      title: "Detect and disrupt attacks",
      description:
        "Stop attacks in their tracks with real-time threat detection and response for your endpoints, network, infrastructure, and email.",
    },
    {
      logo: "",
      head: "Attack Surface Management",
      title: "Manage your attack surface",
      description:
        "Continuously monitor and manage your attack surface to identify and remediate vulnerabilities before they can be exploited.",
    },
  ];

  return (
    <div>
      <FeatureCarousel data={data} />
    </div>
  );
};

export default Feature;
