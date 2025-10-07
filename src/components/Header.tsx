'use client';
import { TimerContext } from '@/context/TimerContext';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState(5);
  const [isBlinking, setIsBlinking] = useState(false);
  const { updateTimerFinished } = useContext(TimerContext);

  useEffect(() => {
    updateTimerFinished(timeLeft === 0);
    if (timeLeft <= 0) return;
    setIsBlinking(timeLeft <= 30 && timeLeft > 0);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      minutes: mins.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0'),
    };
  };

  const { minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center gap-1 bg-[#1D5B43] pt-2 pb-2">
      <div>
        <h2 className="text-sm  md:text-2xl sm:text-lg  font-semibold leading-[130%]">
          Успейте открыть пробную неделю
        </h2>
      </div>
      <div className="flex flex-row items-center content-center gap-2">
        <Image src="/star.png" height={14} width={14} alt="Звезда" />
        <div
          className={`flex flex-row items-center gap-1.5 font-bold text-[#ffbb00] leading-[110%] 
          text-[28px] md:text-[40px] sm:text-[32px] ${
            isBlinking ? 'animate-pulse text-red-700' : ''
          }`}
        >
          <p>{minutes[0]}</p>
          <p>{minutes[1]}</p>
          <p className="leading-[130%]">:</p>
          <p>{seconds[0]}</p>
          <p>{seconds[1]}</p>
        </div>

        <Image src="/star.png" height={14} width={14} alt="Звезда" />
      </div>
    </div>
  );
};

export default Header;
