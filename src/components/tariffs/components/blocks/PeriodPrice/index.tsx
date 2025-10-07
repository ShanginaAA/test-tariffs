import { TimerContext } from '@/context/TimerContext';
import React, { FC, useContext, useEffect, useState } from 'react';

type PeriodPriceProps = {
  period: string;
  price: number;
  fullPrice: number;
  isBest: boolean;
};

const PeriodPrice: FC<PeriodPriceProps> = ({ period, price, fullPrice, isBest }) => {
  const { timerFinished } = useContext(TimerContext);
  const [showDiscount, setShowDiscount] = useState(!timerFinished);

  console.log(showDiscount);
  useEffect(() => {
    if (timerFinished) {
      // Задержка для плавного перехода
      const timer = setTimeout(() => {
        setShowDiscount(false);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setShowDiscount(true);
    }
  }, [timerFinished]);

  return (
    <div
      className={`flex flex-col items-start md:items-center gap-3 sm:gap-4 md:gap-${
        isBest ? `4` : `[30px]`
      }`}
    >
      <span className="font-[500] text-base sm:text-lg md:text-[26px] leading-[120%]">
        {period}
      </span>
      <div className="flex flex-col items-end">
        {/* Скидочная цена */}
        <span
          className={`font-[600] text-[27px] sm:text-[34px] md:text-[50px] transition-all duration-500 leading-[100%] ${
            showDiscount
              ? 'opacity-100 transform translate-y-0 text-[#FDB056]'
              : 'opacity-0 transform -translate-y-2 absolute'
          } ${isBest && 'text-[#FDB056]'} `}
        >
          {price} ₽
        </span>

        {/* Полная цена */}
        <span
          className={`font-[600] text-[27px] sm:text-[34px] md:text-[50px] transition-all duration-500 leading-[100%] ${
            !showDiscount
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-2 absolute'
          } ${isBest ? 'text-[#FDB056]' : ''}`}
        >
          {fullPrice} ₽
        </span>

        <span
          className={`font-[400] text-sm sm:text-base md:text-2xl line-through leading-[120%] text-[#919191] 
            transition-opacity duration-500 ${showDiscount ? 'opacity-100' : 'opacity-0'}`}
        >
          {fullPrice} ₽
        </span>
      </div>
    </div>
  );
};

export default PeriodPrice;
