import { createContext, useContext, useEffect, useState } from "react"; // =================================================================================
import { ReactFrontedPagesRepository } from "services/ReactFrontedPagesRepository";
import { ISlide } from "types/slides.interface";

// =================================================================================
const initialState = {
  slides: [],
};
const AppContext = createContext({
  state: initialState,
});

export const AppProvider = ({ children }) => {
  const [slides, setSlides] = useState<ISlide[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const reactFrontedRepository = new ReactFrontedPagesRepository();
      const slides = await reactFrontedRepository.getSlides();
      setSlides(slides);
    };
    fetchSlides();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state: {
          slides,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
export default AppContext;
