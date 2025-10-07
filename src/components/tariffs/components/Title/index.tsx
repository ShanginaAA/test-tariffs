import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const Title = () => {
  const titleRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && spanRef.current) {
      // Анимация основного текста
      animate(titleRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutCubic',
      });

      // Анимация выделенного слова
      animate(spanRef.current, {
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 600,
        easing: 'easeOutElastic(1, .5)',
        delay: 400,
      });
    }
  }, []);

  return (
    <h1
      ref={titleRef}
      className="absolute left-4 top-[94px] md:left-[352px] md:top-[153px] sm:top-[105px]
      font-[700] text-[22px] md:text-[40px] sm:text-2xl leading-[110%] tracking-[0.01em]"
    >
      Выбери подходящий для себя{' '}
      <span ref={spanRef} className="text-[#FDB056]">
        тариф
      </span>
    </h1>
  );
};

export default Title;
