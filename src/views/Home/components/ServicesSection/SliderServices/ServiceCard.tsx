import { useState } from "react";
interface ServiceCardProps {
  title: string;
  description: string;
  img: React.ReactNode;
}
const ServiceCard = ({ title, description, img }: ServiceCardProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <a href="">
      <div
        className="h-full w-full relative"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="text-black hover:bg-customBlue  hover:text-white h-full w-full  min-h-[300px] py-[40px] px-[15px] md:px-[30px] shadow-custom3">
          {img}
          <h3 className="text-[22px] font-[600] mb-4">{title}</h3>
          <p className="text-sm mb-8">{description}</p>

          {isHover && (
            <span className="text-xl absolute bottom-8">Leer más</span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;
