import { DesignIcon } from "components/icons";
import { useState } from "react";
const ServiceCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="h-full w-full relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="text-black hover:bg-customBlue  hover:text-white h-full w-full  min-h-[300px] py-[40px] px-[30px] shadow-custom3">
        <DesignIcon className="mb-4" />

        <h3 className="text-[22px] font-[600] mb-4">
          Pruebas y depuración de problemas
        </h3>
        <p className="text-sm mb-8">
          Debes ser capaz de identificar y solucionar problemas de
          visualización, problemas de compatibilidad, etc. Este card está en
          versión hover.
        </p>

        {isHover && (
          <a href="#" className="text-xl absolute bottom-8">
            Leer más
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
