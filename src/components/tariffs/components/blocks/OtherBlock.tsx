import React, { FC, useState } from 'react';
import PeriodPrice from './PeriodPrice';
import Description from './Description';
import Sale from './Sale';
import { TariffData } from '@/types/tariff.type';
import styles from './Block.module.scss';

type OtherBlock = TariffData & {
  index: number;
};

const positionClasses = [
  'left-[820px]',
  'left-[1074px]', // 820 + 254
  'left-[1328px]', // 820 + 254*2
];

const OtherBlock: FC<OtherBlock> = ({ index, period, price, full_price, is_best, text }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const blockClasses = [
    positionClasses[index - 1],
    styles.selectable,
    isSelected ? styles.selected : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      onClick={handleClick}
      className={`absolute ${blockClasses} top-[511px] flex flex-col item-center p-[70px_21px_26px] gap-4 isolate 
      bg-[#313637] rounded-[40px] border-solid border-2 border-[#484D4E] w-[240px] h-[335px]`}
    >
      <div className="flex flex-col item-center gap-10">
        <PeriodPrice period={period} price={price} fullPrice={full_price} isBest={is_best} />
        <Description text={text} isBest={is_best} />
        {/* <div className="flex flex-row content-center items-start py-2.5 px-0 gap-2.5 w-[204px]">
          <span className="font-[400] text-base leading-[130%]">Привести тело в порядок</span>
        </div> */}
      </div>
      <Sale price={price} fullPrice={full_price} isBest={is_best} />
    </div>
  );
};

export default OtherBlock;
