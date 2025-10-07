import React, { FC } from 'react';

type DescriptionProps = {
  text: string;
  isBest: boolean;
};

const Description: FC<DescriptionProps> = ({ text, isBest }) => {
  return (
    <div
      className={`flex flex-row content-center items-start py-2.5 px-0 gap-2.5 w-[120px] ${
        isBest ? `md:w-[328px]` : `md:w-[204px]`
      }`}
    >
      <span className="font-[400] text-sm md:text-base leading-[130%]">{text}</span>
    </div>
  );
};

export default Description;
