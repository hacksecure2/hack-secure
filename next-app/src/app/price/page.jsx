import CompareFeaturesCTA from "../components/price/CompareFeaturesCTA";
import FAQSection from "../components/price/FAQSection";
import PricingSection from "../components/price/PricingSections";

const PricingPreviewPage = () => {
  return (
    // This component looks best on a dark, slightly textured background
    <div className="bg-black">
      <PricingSection />
      <CompareFeaturesCTA />
      <FAQSection />
    </div>
  );
};

export default PricingPreviewPage;
