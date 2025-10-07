import React, { ButtonHTMLAttributes, FC } from 'react';

const CButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      className="absolute top-[1066px] left-4 sm:top-[1155px] md:left-[820px] md:top-[1026px] w-[288px] sm:w-[343px] md:w-[352px] 
    flex flex-row justify-center items-center py-4 sm:py-[20px] px-[60px] bg-[#FDB056] rounded-[20px] cursor-pointer animate-pulse"
    >
      <span className="font-[700] text-lg md:text-xl leading-[130%] text-[#191E1F]">Купить</span>
    </button>
  );
};

export default CButton;
