// modal with tailwind css
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  background?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  id?: string;
}
const Modal = ({
  isOpen,
  onClose,
  background,
  borderRadius,
  children,
  size,
  id,
}: ModalProps) => {
  const widthSizes = {
    xs: "w-1/4",
    sm: "w-1/2",
    md: "w-3/4",
    lg: "w-4/5",
    xl: "w-4/5",
    full: "w-full",
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } z-50 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-50 flex justify-center items-center`}
      id={id ? id : "modal"}
    >
      <div
        className={`relative bg-white rounded-lg  ${
          background ? background : "bg-white"
        } ${borderRadius ? borderRadius : "rounded-lg"} w-full  ${
          size ? `${widthSizes[size]}` : "w-full"
        }`}
      >
        <div className="absolute w-full flex justify-end px-4 pt-2 pb-4">
          <button
            className="text-3xl leading-none hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
