interface MainButtonProps {
  children?: React.ReactNode;
  className?: string;
}
const MainButton = ({ children, className }: MainButtonProps) => {
  return (
    <button
      className={`
      ${className}
      rounded-full 
      bg-customBlue2 
      shadow-custom2 
      text-white 
      px-6 py-2 flex gap-2 
      items-center 
      font-[600]
      text-[24px]
      justify-center
      hover:bg-white hover:text-customBlue hover:font-semibold transition duration-300 ease-in-out
     `}
    >
      {children}
    </button>
  );
};

export default MainButton;
