import React from "react";

interface SectionSubTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionSubTitle = ({
  children,
  className = "",
}: SectionSubTitleProps) => {
  return (
    <h3
      className={`text-[#0F0F0F] text-[36px] font-[600] max-w-[450px] ${className}`}
    >
      {children}
    </h3>
  );
};

export default SectionSubTitle;
