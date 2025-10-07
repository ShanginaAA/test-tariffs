import React from 'react';
import Image from 'next/image';

const Attention = () => {
  return (
    <div
      className="absolute top-[920px] left-[16px] sm:top-[1018px] md:left-[820px] md:top-[866px] 
    bg-[#2D3233] rounded-[20px] flex flex-row items-start py-3.5 pl-3 pr-5 sm:py-3.5 sm:pl-3 
    md:py-4.5 md:pl-5 gap-2 w-[288px] sm:w-[343px] md:w-[499px]"
    >
      <Image src="/alert.png" height={'24'} width={'26'} alt="Внимание" />
      <span className="font-[400] text-xs md:text-base leading-[130%] w-[218px] sm:w-[267px] md:w-[427px]">
        Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
      </span>
    </div>
  );
};

export default Attention;
