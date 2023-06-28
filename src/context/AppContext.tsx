import { createContext, useContext, useEffect, useState } from "react"; // =================================================================================
import { ReactFrontedPagesRepository } from "services/ReactFrontedPagesRepository";
import { ISlide } from "types/slides.interface";

// =================================================================================
interface IAppState {
  slides: {
    data: ISlide[];
    loading: boolean;
    error: string;
  };
}
const initialState: IAppState = {
  slides: {
    data: [],
    loading: true,
    error: "",
  },
};
const AppContext = createContext({
  state: initialState,
});

export const AppProvider = ({ children }) => {
  const [slides, setSlides] = useState<ISlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSlides = async () => {
      const repository = new ReactFrontedPagesRepository();
      try {
        const slides = await repository.getSlides();
        setSlides(slides);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSlides();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state: {
          slides: {
            data: slides,
            loading,
            error,
          },
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
export default AppContext;
