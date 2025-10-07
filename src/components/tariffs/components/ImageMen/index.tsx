import { animate } from 'animejs';
import React, { RefObject, useCallback, useEffect, useRef } from 'react';

const ImageMen = () => {
  const imageRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback((e: MouseEvent) => {
    return {
      moveX: (e.clientX / window.innerWidth - 0.5) * 30,
      moveY: (e.clientY / window.innerHeight - 0.5) * 30,
    };
  }, []);

  useEffect(() => {
    let isAnimating = false;

    const handleMouseMove = (e: MouseEvent): void => {
      if (!imageRef.current || isAnimating) return;

      isAnimating = true;

      const { moveX, moveY } = calculatePosition(e);

      animate(imageRef.current, {
        translateX: moveX,
        translateY: moveY,
        duration: 300,
        easing: 'easeOutQuad',
        complete: () => {
          isAnimating = false;
        },
      });
    };

    // Throttle mousemove events для производительности
    let throttleTimeout: NodeJS.Timeout | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleMouseMove(e);
          throttleTimeout = null;
        }, 16); // ~60 кадров в секунду
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return (): void => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className="absolute left-[110px] top-[166px] sm:left-[125px] sm:top-[177px] md:left-[352px] md:top-[359px]
      w-[99px] h-[200px] sm:w-[124px] sm:h-[250px] md:w-[380px] md:h-[767px]"
    >
      <img src="/img.png" alt="Мужчина" className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageMen;
