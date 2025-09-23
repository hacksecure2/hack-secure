import React from 'react'
import Section1 from './sections/sections1'
import Replica_PlatformSection from './sections/PlatformSection'
import Section3 from './sections/Sections3'
import FeatureCarouselPage from './sections/slides/FeatureCarousel'
import Footer from './sections/Footer'
import StatsSection from "./sections/StatsSection";

const Homepage = () => {
  return (
    <div>
        <Section1/>
        <Replica_PlatformSection/>
        <Section3/>
        <FeatureCarouselPage/>
        <StatsSection/>
        <Footer/>
    </div>
  )
}

export default Homepage