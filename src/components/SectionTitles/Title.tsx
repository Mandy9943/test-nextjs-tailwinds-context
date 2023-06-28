import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => {
  return (
    <h2
      className={`text-[#3A67CC] text-[20px] font-bold uppercase ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
