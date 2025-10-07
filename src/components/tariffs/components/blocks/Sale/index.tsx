import React, { FC } from 'react';

type SaleProps = {
  price: number;
  fullPrice: number;
  isBest: boolean;
};

const Sale: FC<SaleProps> = ({ price, fullPrice, isBest }) => {
  const percent = ((fullPrice - price) / fullPrice) * 100;
  const discountPercent = Math.round(percent / 10) * 10;
  return (
    <div
      className={`absolute top-[0px] ${
        isBest
          ? `md:left-[50px] left-[196px] sm:left-[233px]`
          : `md:left-[51px] left-[217px] sm:left-[262px]`
      } flex flex-row content-center items-center p-[3px_6px] md:p-[5px_8px] gap-2.5 bg-[#FD5656] rounded-t-none 
      rounded-b-md md:rounded-b-lg poppins-sale text-[13px] sm:text-base md:text-[22px]`}
    >
      <span>-{discountPercent}%</span>
    </div>
  );
};

export default Sale;
