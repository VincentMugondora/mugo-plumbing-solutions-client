import Hero from "../components/home/Hero";
// import Schedule from '../components/home/Schedule'
import About from "../components/home/About";
import PipeCleaning from "../components/home/PipeCleaning";
import Services from "../components/home/Service";
import TopPlumbers from '../components/home/TopPlumbers'
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialSection from "../components/home/TestimonialSection";
import Contact from "../components/home/Contact";
import PricingPlans from "../components/home/PricingPlans";
import AppointmentAndFAQ from "../components/home/AppointmentAndFaq";
import SpecialityMenu from "../components/home/SpecialtyMenu";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Hero />
      <About />
      <SpecialityMenu />
      <PipeCleaning />
      <TopPlumbers />
      <Services />
      <WhyChooseUs />
      <TestimonialSection />
      <PricingPlans />
      <AppointmentAndFAQ />
      <Contact />
      {/* <Schedule /> */}
    </div>
  );
};

export default HomePage;
