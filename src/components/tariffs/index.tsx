'use client';

import React, { ChangeEvent, MouseEvent, MouseEventHandler, useEffect, useState } from 'react';
import Image from 'next/image';
import HitBlock from './components/blocks/HitBlock';
import OtherBlock from './components/blocks/OtherBlock';
import Attention from './components/Attention';
import PrivacyPolicy from './components/PrivacyPolicy';
import CButton from '../Buttons/CButton';
import Content from './components/Content';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { fetchTariffs, selectTariffs } from '@/lib/store/tariffs';
import { useAppSelector } from '@/lib/hooks/useAppSelector';

const positionClasses = [
  'top-[366px] sm:top-[425px]',
  'top-[528px] sm:top-[587px]',
  'top-[657px] sm:top-[729px]',
  'top-[786px] sm:top-[871px]',
];

const Tariffs = () => {
  const dispatch = useAppDispatch();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const tariffs = useAppSelector(selectTariffs);

  useEffect(() => {
    dispatch(fetchTariffs());

    const handleResize = () => setIsMobile(window.innerWidth <= 375);
    window.addEventListener('resize', handleResize);
    console.log(isMobile);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    setShowError(false);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setShowError(!isChecked);
  };

  return (
    <>
      <h1
        className="absolute left-4 top-[94px] md:left-[352px] md:top-[153px] sm:top-[105px]
      font-[700] text-[22px] md:text-[40px] sm:text-2xl leading-[110%] tracking-[0.01em]"
      >
        Выбери подходящий для себя <span className="text-[#FDB056]">тариф</span>
      </h1>
      <div
        className="absolute left-[110px] top-[166px] sm:left-[125px] sm:top-[177px] md:left-[352px] md:top-[359px]
      w-[99px] h-[200px] sm:w-[124px] sm:h-[250px] md:w-[380px] md:h-[767px]"
      >
        <img src="/img.png" alt="Мужчина" />
      </div>

      {[...tariffs]
        .reverse()
        .map((x, i) =>
          x.is_best ? (
            <HitBlock className={`border-[#FDB056] ${positionClasses[i]}`} key={i} {...x} />
          ) : isMobile ? (
            <HitBlock key={i} className={`${positionClasses[i]}`} {...x} />
          ) : (
            <OtherBlock key={i} index={i} {...x} />
          ),
        )}
      <Attention />
      <PrivacyPolicy showError={showError} isChecked={isChecked} onClick={handleChange} />
      <CButton onClick={handleClick} />
      <span
        className="absolute left-[16px] top-[1131px] sm:top-[1238px] md:left-[820px] md:top-[1106px] 
      w-[288px] sm:w-[343px] md:w-[748px] font-[400] text-[10px] md:text-sm leading-[120%] text-[#9B9B9B]"
      >
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для
        получения пожизненного доступа к приложению. Пользователь соглашается, что данные
        кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг
        сервиса в случае желания пользователя.
      </span>
      <Content />
    </>
  );
};

export default Tariffs;
