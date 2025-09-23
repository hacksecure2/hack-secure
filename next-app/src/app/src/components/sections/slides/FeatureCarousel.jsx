import FeatureSlide from "./FeatureSlide";
// Data can be fetched from a CMS, but for this replica, we'll define it here.
const slidesData = [
  {
    iconSrc:
      "https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/custom-templates-en/ti-product-scheme/ti-icon.jpg", // replace icon
    title: "Threat Intelligence",
    heading: "Understand adversaries",
    description:
      "Supercharge your cyber security and defeat attacks before they begin with knowledge of how, when, where and why threat actors will strike.",
    imageSrc:
      "https://www.cyberross.com/_next/image?url=/assets/features/ti-interface-min.jpg&w=1920&q=75", // replace image
    imagePosition: "right",
  },
  {
    iconSrc: "/placeholders/icon-fraud-protection.png", // replace icon
    title: "Fraud Protection",
    heading: "Eliminate fraud",
    description:
      "Protect your business and customers from all online fraud risks with real-time fraud prevention and client-side digital identity protection.",
    imageSrc:
      "https://www.group-ib.com/wp-content/uploads/website_thumbnail_300h300.png", // replace image
    imagePosition: "left",
  },
  {
    iconSrc: "/placeholders/icon-managed-xdr.png", // replace icon
    title: "Managed XDR",
    heading: "Detect and disrupt attacks",
    description:
      "Stop attacks in their tracks with real-time threat detection and response for your endpoints, network, infrastructure, and email.",
    imageSrc:
      "https://www.cyberross.com/_next/image?url=/assets/features/mxdr-interface-min.jpg&w=1920&q=75", // replace image
    imagePosition: "right",
  },
  {
    iconSrc: "/placeholders/icon-attack-surface.png", // replace icon
    title: "Attack Surface Management",
    heading: "Manage your attack surface",
    description:
      "Continuously discover all external IT assets to mitigate risks and prevent breaches.",
    imageSrc:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQEQE6m61FcMpBRO5kydQWflZPaJCoYUYOy6v3ePpNXU7sLKQj1", // replace image
    imagePosition: "left",
  },
  {
    // New Slide 1
    iconSrc: "/placeholders/icon-digital-risk.png", // replace icon
    title: "Digital Risk Protection",
    heading: "Protect your brand",
    description:
      "Prevent damage to your brand and protect your customers by securing digital assets with AI-powered digital risk identification and remediation.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy4rPuEmM_ILKhPIIHFRukyaXkfu6dxvA_W1LcVR01hgN5Dm_", // replace image
    imagePosition: "right",
  },
  {
    // New Slide 2
    iconSrc: "/placeholders/icon-email-protection.png", // replace icon
    title: "Business Email Protection",
    heading: "Stop email threats",
    description:
      "Block, detonate and hunt for the most advanced email threats with patented email security technology.",
    imageSrc:
      "https://www.cyberross.com/_next/image?url=/assets/features/bep-interface-updated-min.jpg&w=1920&q=75", // replace image
    imagePosition: "left",
  },
];

const FeatureCarousel = () => {
  return (
    // The h-screen and overflow-y-scroll with snap utilities create the carousel effect.
    // This is a pure CSS approach, which is more performant than a JS-based slider.
    <div >
      {slidesData.map((slide, index) => (
        <FeatureSlide
          key={index}
          iconSrc={slide.iconSrc}
          title={slide.title}
          heading={slide.heading}
          description={slide.description}
          imageSrc={slide.imageSrc}
          imagePosition={slide.imagePosition}
        />
      ))}
    </div>
  );
};

export default FeatureCarousel;
