import Skeleton from "components/Skeleton/Skeleton";
import { useAppContext } from "context/AppContext";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { iconsServices } from "utils/constants";
import ServiceCard from "./ServiceCard";
const Carrousel = dynamic(() => import("components/Carrousel/Carrousel"), {
  ssr: false,
});

export default function SimpleSlider() {
  const { state } = useAppContext();
  const [numSlides, setNumSlides] = useState(2);
  const cards = state.slides.loading
    ? [<Skeleton key={1} />, <Skeleton key={2} />, <Skeleton key={3} />]
    : state.slides.data.map((slide) => {
        return (
          <ServiceCard
            key={slide.id}
            title={slide.title}
            description={slide.description}
            img={<div className="mb-5">{iconsServices[slide.icon]}</div>}
          />
        );
      });

  // useEffect detect when screen size is 700px and update on resize event
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setNumSlides(1);
      } else {
        setNumSlides(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <Carrousel margin={48} numSlides={numSlides} cards={cards} />;
}
