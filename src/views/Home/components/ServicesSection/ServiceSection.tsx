import { MainButton } from "components/Buttons";
import Container from "components/Container/Container";
import SectionSubTitle from "components/SectionTitles/Subtitles";
import SectionTitle from "components/SectionTitles/Title";
import { ArrowRight } from "components/icons";
import { motion } from "framer-motion";
import { slideAnimation } from "utils/motion";
import SliderServices from "./SliderServices/SliderServices";

const ServiceSection = () => {
  return (
    <section id="services">
      <Container>
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-[40%_60%] gap-14"
          {...slideAnimation("up")}
        >
          <div className="text-center xl:text-left flex w-full flex-col items-center xl:block">
            <SectionTitle className="mb-5 ">Servicios</SectionTitle>
            <SectionSubTitle className="mb-5">
              Esta info te llega desde un servicio externo
            </SectionSubTitle>
            <p className="max-w-[420px] mb-7">
              Consultando el servicio en
              https://react-frontend.pages.dev/slides.json, debes usar Context
              para enviar los datos que necesitas en la sección de abajo. A la
              derecha tiene un slide o carrusel.
            </p>
            <MainButton className="flex ">
              Ver más <ArrowRight className=" ml-2 text-[14px]" />
            </MainButton>
          </div>
          <div>
            <SliderServices />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceSection;
