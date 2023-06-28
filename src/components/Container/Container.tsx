import React from "react";
interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[80%] w-full">{children}</div>{" "}
    </div>
  );
};

export default Container;
