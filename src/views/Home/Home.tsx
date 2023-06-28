import MainLayout from "components/Layouts/MainLayout";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import MainSection from "./components/MainSection/MainSection";
import ServiceSection from "./components/ServicesSection/ServiceSection";

const Home = () => {
  return (
    <MainLayout>
      <MainSection />

      <div className="mb-[200px]" />

      <ServiceSection />

      <div className="mb-[150px]" />

      <AboutUsSection />

      <div className="mb-[250px]" />
    </MainLayout>
  );
};

export default Home;
