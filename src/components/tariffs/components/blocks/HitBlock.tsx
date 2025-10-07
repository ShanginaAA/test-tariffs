import React, { FC, useState } from 'react';
import PeriodPrice from './PeriodPrice';
import Description from './Description';
import Sale from './Sale';
import { TariffData } from '@/types/tariff.type';
import styles from './Block.module.scss';

type HitBlock = TariffData & {
  className: string;
};

const HitBlock: FC<HitBlock> = ({ className, period, price, full_price, is_best, text }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const blockClasses = [styles.selectable, isSelected ? styles.selected : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      onClick={handleClick}
      className={`absolute left-4 xs:top-[425px] md:left-[820px] md:top-[307px] w-[288px] h-auto sm:w-[343px] 
      md:w-[748px] md:h-[190px] flex flex-col justify-center items-start md:items-end pl-5 pt-5 pb-5 pr-4 sm:pl-[30px] md:p-[30px_80px_26px_19px] gap-4 isolate 
      bg-[#313637] rounded-[20px] md:rounded-[34px] border-solid border-2 ${blockClasses}`}
    >
      <div className="flex flex-row justify-center items-center gap-5 sm:gap-[30px] md:gap-10">
        <PeriodPrice period={period} price={price} fullPrice={full_price} isBest={is_best} />
        <Description text={text} isBest={is_best} />
      </div>
      {is_best && (
        <span className="absolute left-[246px] top-[6px] text-[13px] sm:left-[295px] sm:text-base md:left-[682px] md:top-[10px] font-[500] md:text-[22px] leading-[130%] text-[#FDB056] tracking-[0.03em]">
          хит!
        </span>
      )}

      <Sale price={price} fullPrice={full_price} isBest={is_best} />
    </div>
  );
};

export default HitBlock;
