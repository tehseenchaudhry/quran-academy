import React from "react";
import ServicesHeroSection from "../components/services/ServicesHeroSection";
import ServicesCards from "../components/services/ServicesCards";
import ServicesOverview from "../components/services/ServicesOverview";

const Services = () => {
  return (
    <>
      <ServicesHeroSection />
       <ServicesOverview/>
      <ServicesCards/>
    </>
  );
};

export default Services;