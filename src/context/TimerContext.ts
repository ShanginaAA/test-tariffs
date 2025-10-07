import { createContext } from 'react';

export type TimerContextProps = {
  timerFinished: boolean;
  updateTimerFinished: (value: boolean) => void;
};

export const TimerContext = createContext<TimerContextProps>({
  timerFinished: false,
  updateTimerFinished: () => {},
});
