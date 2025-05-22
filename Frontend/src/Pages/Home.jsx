import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import CategoryMarquee from "../Components/Category";
import TopAstrologersSection from "../Components/TopAstrologer";
import ChooseUs from "../Components/ChooseUs";
import ExpertSection from "../Components/ExpertSection";
import Testimonials from "../Components/Testimonial";
import FAQ from "../Components/Faq";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <CategoryMarquee />
      <TopAstrologersSection />
      <ChooseUs />
      <ExpertSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
