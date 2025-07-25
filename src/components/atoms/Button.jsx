import React from "react";

const Button = ({className,text}) => {
  return (
    <div className={`${className} bg-[#FF7043] px-5 py-2 text-white rounded-lg cursor-pointer hover:bg-[#FF5722] font-semibold transition-all duration-300`}>
    {text}
    </div>
  );
};

export default Button;