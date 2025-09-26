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
      head: "Empower",
      title: "Eliminate fraud",
      description:
        "We offer a wide range of services from expert-led webinars and sessions to hands-on workshops and real-world cyber investigation support. Whether you're looking to learn, train, or secure, our services are designed to deliver impact and build resilience across every level.
.",
    },
    {
      logo: "",
      head: "INNOVATE",
      title: "Innovate with Hack Secure: Partnering for a Safer Cyber World",
      description:
        "Partner with Hack Secure to drive innovation, share knowledge, make a global impact in cybersecurity. From academic and corporates to communities and international. We welcome partnerships that aim to build a safer world..",
    },
    {
      logo: "",
      head: "Cybersecurity Education, Reinvented
",
      title: "The Next Generation of Cybersecurity Education",
      description:
        "HackSecure LearnX is your gateway to real-world cybersecurity learning. Dive into expert-curated content, live sessions, CTFs, case studies, and hands-on challenges all built to sharpen your skills and fuel your growth. Whether you're a beginner or a pro, there's always more to explore..",
    },
  ];

  return (
    <div>
      <FeatureCarousel data={data} />
    </div>
  );
};

export default Feature;
