interface IProps {
  h?: string;
  className?: string;
}
const Skeleton = ({ h = "300px", className = "" }: IProps) => {
  return (
    <div className="animate-pulse flex flex-col space-y-4">
      <div
        className={`rounded-xl bg-gray-300 ${className}`}
        style={{
          height: h,
        }}
      ></div>
    </div>
  );
};

export default Skeleton;
