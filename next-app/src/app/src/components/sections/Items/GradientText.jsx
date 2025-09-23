import React from "react";

const GradientText = ({
  children,
  className = "",
  gradientFrom = "from-blue-400",
  gradientTo = "to-blue-200",
  ...props
}) => {
  return (
    <span
      {...props}
      className={`
        bg-gradient-to-r 
        ${gradientFrom} 
        ${gradientTo} 
        text-transparent 
        bg-clip-text 
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default GradientText;