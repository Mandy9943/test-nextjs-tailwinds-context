import img1 from "assets/Home/coding1.png";
import img2 from "assets/Home/coding2.png";
import img3 from "assets/Home/coding3.png";
import img4 from "assets/Home/coding4.png";
import img5 from "assets/Home/coding5.png";
import Container from "components/Container/Container";
import SectionSubTitle from "components/SectionTitles/Subtitles";
import SectionTitle from "components/SectionTitles/Title";
import Image from "next/image";
const AboutUsSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 text-right gap-14">
        {/* Image section */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 max-h-[580px] ">
          <div className="col-span-1 row-span-2 relative rounded-[5px]">
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
            <Image src={img4} alt="" className="w-full h-full rounded-[5px]" />
          </div>
          <div className="col-span-2 row-span-1 rounded-[5px]">
            <Image src={img5} alt="" className="w-full h-full rounded-[5px]" />
          </div>
        </div>

        {/* Text section */}
        <div className="max-w-[90%]">
          <SectionTitle className="mb-5">Sobre Nosotros</SectionTitle>
          <div className="flex w-full justify-end">
            <SectionSubTitle className="mb-5 text-right w-full">
              Traduce solo este título maravilloso y el navbar
            </SectionSubTitle>
          </div>

          <p className="text-lg font-[300] mb-4">
            Usted debe tener un sólido conocimiento de HTML y CSS. Debe
            comprender la arquitectura de componentes de React. Debe tener buena
            atención al detalle, organización del código, habilidades de
            comunicación efectiva y capacidad para trabajar en equipo.
          </p>

          <h4 className="text-[#606060] text-[22px] font-[700] mb-4">
            Usa Context para acceder a los títulos de abajo desde la sección
            anterior
          </h4>

          <div className="flex w-full justify-end gap-4 mb-4">
            <p className="text-[#606060]">Pruebas y depuración de problemas</p>
            <div className="flex justify-center items-center border-[1px] border-[#3D93FF] w-5 h-5 rounded-full">
              <div className="flex justify-center align-center border-[1px] bg-[#3D93FF] w-2 h-2 rounded-full"></div>
            </div>
          </div>
          <div className="flex w-full justify-end gap-4 mb-4">
            <p className="text-[#606060]">Pruebas y depuración de problemas</p>
            <div className="flex justify-center items-center border-[1px] border-[#3D93FF] w-5 h-5 rounded-full">
              <div className="flex justify-center align-center border-[1px] bg-[#3D93FF] w-2 h-2 rounded-full"></div>
            </div>
          </div>
          <div className="flex w-full justify-end gap-4 mb-4">
            <p className="text-[#606060]">Pruebas y depuración de problemas</p>
            <div className="flex justify-center items-center border-[1px] border-[#3D93FF] w-5 h-5 rounded-full">
              <div className="flex justify-center align-center border-[1px] bg-[#3D93FF] w-2 h-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsSection;
