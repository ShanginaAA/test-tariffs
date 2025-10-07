'use client';
import { TimerContext, TimerContextProps } from '@/context/TimerContext';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

export const TimerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [timerFinished, setTimerFinished] = useState<boolean>(false);

  const updateTimerFinished = useCallback((value: boolean) => {
    setTimerFinished(value);
  }, []);

  const timerContextValue: TimerContextProps = useMemo(
    () => ({ timerFinished, updateTimerFinished }),
    [timerFinished, updateTimerFinished],
  );
  return <TimerContext.Provider value={timerContextValue}>{children}</TimerContext.Provider>;
};
