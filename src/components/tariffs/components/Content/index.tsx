import React from 'react';

const Content = () => {
  return (
    <div
      className="absolute top-[1237px] left-4 sm:top-[1334px] md:left-[352px] md:top-[1240px] 
    flex flex-col justify-center items-start p-3 md:p-5 gap-2.5 md:gap-[30px] rounded-[30px] 
    border-solid border-1 border-[#484D4E] w-[288px] sm:w-[343px] md:w-[1216px]"
    >
      <div
        className="flex flex-row justify-center items-center p-[10px_18px_12px] md:p-[16px_30px_18px] gap-2.5 
      bg-[#2D3233] rounded-[30px] border-solid border-1 border-[#81FE95]"
      >
        <span className="font-[500] text-[15px] sm:text-lg md:text-[28px] leading-[120%] text-[#81FE95]">
          гарантия возврата 30 дней
        </span>
      </div>
      <span className="w-[264px] sm:w-[319px] md:w-auto font-[400] text-[13px] sm:text-sm md:text-2xl leading-[130%] text-[#DCDCDC]">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4
        недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки,
        если ты не получишь видимых результатов.
      </span>
    </div>
  );
};

export default Content;
