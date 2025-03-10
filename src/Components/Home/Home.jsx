import React from "react";
import Herosection from "../HomeFirst/HeroSection";
import AboutSection from "../HomeFirst/AboutSection";
import Service from "../HomeFirst/Service";
import WhyChoose from "../HomeFirst/WhyChoose";
import WhyChooseOne from "../HomeFirst/WhyChooseOne";
import ReviewSider from "../HomeFirst/ReviewSider";
import LatestProjectSection from "../HomeFirst/LatestProjectSection";
import FormSection from "../HomeFirst/FormSection";

function Home() {
  return <div>
    <Herosection />
    <AboutSection />
    <Service />
    <WhyChoose />
    <WhyChooseOne />
    <ReviewSider />
    <LatestProjectSection />
    <FormSection />

  </div>;
}

export default Home;
