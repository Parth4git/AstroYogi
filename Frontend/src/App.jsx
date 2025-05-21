import CategoryMarquee from "./Components/Category";
import ExpertSection from "./Components/ExpertSection";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Testimonials from "./Components/Testimonial";
import FAQ from "./Components/Faq";
import TopAstrologersSection from "./Components/TopAstrologer";
import ChooseUs from "./Components/ChooseUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <ExpertSection />
      <CategoryMarquee />
      <TopAstrologersSection />

      <ChooseUs />
      <Testimonials />
      {/* <FAQ />
      <Footer /> */}
    </>
  );
}

export default App;
