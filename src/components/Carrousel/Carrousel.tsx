import { AngleLeft, AngleRight } from "components/icons";
import React from "react";

interface Props {
  cards: JSX.Element[];
  margin?: number;
  numSlides?: number;
}

const Carrousel: React.FC<Props> = ({
  cards,
  numSlides = 2,
  margin = 24,
}: Props) => {
  const [slide, setSlide] = React.useState(0);
  const [activeBullet, setActiveBullet] = React.useState(0);
  const visibleCards = cards.slice(slide, slide + numSlides);

  const moveSlide = (direction: "right" | "left") => {
    if (direction === "right") {
      if (slide < cards.length - numSlides) {
        setSlide(slide + 1);
        setActiveBullet(activeBullet + 1);
      }
    } else {
      if (slide > 0) {
        setSlide(slide - 1);
        setActiveBullet(activeBullet - 1);
      }
    }
  };

  return (
    <div className="relative w-full px-9 md:px-10">
      <div className="flex flex-row items-center justify-between w-full ">
        <div className="flex items-center justify-center absolute h-full top-0 left-0">
          <ArrowButton moveSlide={moveSlide} arrowDirection="left" />
        </div>
        <div className="flex items-center justify-center absolute bottom-[-50px] left-0 w-full">
          {Array.from(
            { length: cards.length - numSlides + 1 },
            (_, i) => i
          ).map((index) => (
            <button
              key={index}
              className={`w-5 h-5 m-1 rounded-full flex items-center justify-center border border-black bg-[#3D93FF] hover:bg-gray-400 hover:text-gray-900`}
              onClick={() => {
                setSlide(index);
                setActiveBullet(index);
              }}
            >
              <span
                className={`w-[7px] h-[7px] rounded-full  ${
                  activeBullet === index ? "bg-black opacity-70" : "bg-white"
                } `}
              ></span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center absolute h-full top-0 right-0">
          <ArrowButton moveSlide={moveSlide} arrowDirection="right" />
        </div>
      </div>
      <div className="">
        <div className="flex transition-all">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="w-full"
              style={{
                marginRight: index !== visibleCards.length - 1 && `${margin}px`,
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;

interface ArrowButtonProps {
  moveSlide: (arrowDirection: string) => void;
  arrowDirection: "left" | "right";
}

const ArrowButton = ({ moveSlide, arrowDirection }: ArrowButtonProps) => {
  return (
    <button
      className="p-1 m-1 rounded-full text-gray-800 hover:text-gray-900"
      onClick={() => moveSlide(arrowDirection)}
    >
      {arrowDirection === "left" ? (
        <AngleLeft className="text-customBlue text-[29px]" />
      ) : (
        <AngleRight className="text-customBlue text-[29px]" />
      )}
    </button>
  );
};
