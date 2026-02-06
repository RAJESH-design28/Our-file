import Hero from "../components/Home/Hero";
import PopularProperties from "../components/Home/PopularProperties";
import ServiceSection from "../components/Home/ServiceSection";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularProperties />
      <ServiceSection />
      <Testimonials />
    </div>
  );
};

export default Home;
