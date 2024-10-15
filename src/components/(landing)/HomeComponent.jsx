import React from "react";
import Header from "../HeaderComponent";
import HeroSection from "../HeroSection";
import { FeaturedProductSection } from "./FeaturedProductSection";
import CategorySection from "./CategorySection";
import AboutusSection from "./AboutusSection";
import TestimonialSection from "./TestimonialSection";
import CallToActionSection from "./CallToActionSection";
import FooterSection from "./FooterSection";

const HomeComponent = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedProductSection />
      <CategorySection />
      <AboutusSection />
      <TestimonialSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default HomeComponent;
