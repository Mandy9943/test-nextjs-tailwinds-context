import Carrousel from "components/Carrousel/Carrousel";
import ServiceCard from "./ServiceCard";

export default function SimpleSlider() {
  return (
    <Carrousel
      margin={48}
      numSlides={2}
      cards={[<ServiceCard />, <ServiceCard />, <ServiceCard />]}
    />
  );
}
