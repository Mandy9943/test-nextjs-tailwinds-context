import img1 from "assets/Home/coding1.png";
import img2 from "assets/Home/coding2.png";
import img3 from "assets/Home/coding3.png";
import img4 from "assets/Home/coding4.png";
import img5 from "assets/Home/coding5.png";
import Container from "components/Container/Container";
import SectionSubTitle from "components/SectionTitles/Subtitles";
import SectionTitle from "components/SectionTitles/Title";
import Skeleton from "components/Skeleton/Skeleton";
import { useAppContext } from "context/AppContext";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { slideAnimation } from "utils/motion";
const AboutUsSection = () => {
  const t = useTranslations("AboutUs");

  return (
    <section id="about">
      <Container>
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 text-right gap-14"
          {...slideAnimation("up")}
        >
          {/* Image section */}
          <div className="w-full flex justify-center order-2 xl:order-1">
            <div className="grid grid-cols-3 grid-rows-3 gap-4 max-h-[580px]  max-w-[600px]">
              <div className="col-span-1 row-span-2 relative rounded-[5px] ">
                <div className="absolute bg-customBlue w-full h-full left-[-24px] top-[-24px] z-[-10] rounded-[10px]"></div>
                <Image
                  src={img1}
                  alt=""
                  className="h-full w-full  rounded-[5px] object-cover"
                />
              </div>
              <div className="col-span-2 row-span-1 rounded-[5px] ">
                <Image
                  src={img2}
                  alt=""
                  className="h-full w-full rounded-[5px] object-fill"
                />
              </div>
              <div className="col-span-1 row-span-1 rounded-[5px]">
                <Image
                  src={img3}
                  alt=""
                  className="h-full w-full rounded-[5px] object-fill"
                />
              </div>
              <div className="col-span-1 row-span-2 rounded-[5px] relative">
                <div className="absolute bg-[#3D93FF] w-full h-full right-[-24px] bottom-[-24px] z-[-10] rounded-[10px]"></div>
                <Image
                  src={img4}
                  alt=""
                  className="w-full h-full rounded-[5px]"
                />
              </div>
              <div className="col-span-2 row-span-1 rounded-[5px]">
                <Image
                  src={img5}
                  alt=""
                  className="w-full h-full rounded-[5px]"
                />
              </div>
            </div>
          </div>

          {/* Text section */}
          <div className="max-w-[90%] text-center xl:items-end xl:text-right flex w-full flex-col items-center xl:items-en order-1 xl:order-2">
            <SectionTitle className="mb-5 flex">Sobre Nosotros</SectionTitle>
            <div className="flex w-full justify-center xl:justify-end">
              <SectionSubTitle className="mb-5 xl:text-right w-full">
                {t("title")}
              </SectionSubTitle>
            </div>

            <p className="text-lg font-[300] mb-4">
              Usted debe tener un sólido conocimiento de HTML y CSS. Debe
              comprender la arquitectura de componentes de React. Debe tener
              buena atención al detalle, organización del código, habilidades de
              comunicación efectiva y capacidad para trabajar en equipo.
            </p>

            <DataSection />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutUsSection;

const DataSection = () => {
  const { state } = useAppContext();

  const tiles = state.slides.loading
    ? [
        <Skeleton h="30px" className="mb-4" key={1} />,
        <Skeleton h="30px" className="mb-4" key={2} />,
        <Skeleton h="30px" className="mb-4" key={3} />,
      ]
    : state.slides.data.map((slide) => {
        return (
          <div
            className="flex w-full xl:justify-end justify-center gap-4 mb-4"
            key={slide.id}
          >
            <p className="text-[#606060]">{slide.title}</p>
            <div className="flex justify-center items-center border-[1px] border-[#3D93FF] w-5 h-5 rounded-full">
              <div className="flex justify-center align-center border-[1px] bg-[#3D93FF] w-2 h-2 rounded-full"></div>
            </div>
          </div>
        );
      });

  return (
    <>
      <h4 className="text-[#606060] text-[22px] font-[700] mb-4">
        Usa Context para acceder a los títulos de abajo desde la sección
        anterior
      </h4>
      {tiles}
    </>
  );
};
