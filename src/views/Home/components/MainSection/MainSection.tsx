import triangleImage from "assets/Home/triangle.png";
import mainImage from "assets/Home/working.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideAnimation } from "utils/motion";
const MainSection = () => {
  return (
    <section id="home" className="bg-customBlue3 max-h-[50vh]- pt-44 relative">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <motion.div
          className="px-5 sm:px-10 lg:pr-0 lg:pl-28 mb-10 mt-0 md:mb-32 md:mt-10"
          {...slideAnimation("left")}
        >
          <h1 className="text-[42px] md:text-[52px] lg:text-[64px] font-bold text-white mb-7 max-w-[400px]">
            Es tiempo de maquetar
          </h1>
          <p className="text-white text-[18px] sm:text-[20px]  max-w-[600px] font-light">
            Debes usar <b> NextJS</b> y <b> Tailwind CSS</b> . Cada sección de
            la página debe ser un componente individual. Usa el módulo{" "}
            <b> next-intl</b> para internacionalización. Usa la imaginación para
            desarrollar el
            <b> responsive</b> de la versión móvil.
          </p>
        </motion.div>

        <motion.div className="relative" {...slideAnimation("right")}>
          <Image
            className=" md:absolute md:translate-y-[100px] xl:translate-y-0"
            alt="working"
            src={mainImage}
          />
        </motion.div>
      </div>

      <div className="absolute z-10 bottom-[-70px] left-[20%]">
        <Image src={triangleImage} alt="" />
      </div>
    </section>
  );
};

export default MainSection;
