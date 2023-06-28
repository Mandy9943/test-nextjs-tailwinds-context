import { useEffect } from "react";

const useClickOutside = (componentId: string, callback: () => void) => {
  // onClick outisde
  const handleOutsideClick = (e: any) => {
    if (e.target.id === componentId) {
      callback();
    }
  };

  // useEffect to detect click outside
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, false);

    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);
};

export default useClickOutside;
