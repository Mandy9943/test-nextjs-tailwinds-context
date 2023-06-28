import triangleImage from "assets/Home/triangle.png";
import mainImage from "assets/Home/working.png";
import Image from "next/image";
const MainSection = () => {
  return (
    <div className="bg-customBlue3 max-h-[50vh]- pt-44 relative">
      <div className="grid grid-cols-2 gap-8">
        <div className="pl-28 mb-32 mt-10">
          <h1 className="text-[64px] font-bold text-white mb-7 max-w-[400px]">
            Es tiempo de maquetar
          </h1>
          <p className="text-white text-[20px]  max-w-[600px] font-light">
            Debes usar <b> NextJS</b> y <b> Tailwind CSS</b> . Cada sección de
            la página debe ser un componente individual. Usa el módulo{" "}
            <b> next-intl</b> para internacionalización. Usa la imaginación para
            desarrollar el
            <b> responsive</b> de la versión móvil.
          </p>
        </div>

        <div className="relative">
          <Image className="absolute " alt="working" src={mainImage} />
        </div>
      </div>

      <div className="absolute z-10 bottom-[-70px] left-[20%]">
        <Image src={triangleImage} alt="" />
      </div>
    </div>
  );
};

export default MainSection;
