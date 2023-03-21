import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import {
  hourAtom,
  isClockInitializedAtom,
  isHardcodingTimeAtom,
  minuteAtom,
  secondAtom,
} from "../atoms";

export const useClockAtomsInitialization = () => {
  const setHour = useSetAtom(hourAtom);
  const setMinute = useSetAtom(minuteAtom);
  const setSecond = useSetAtom(secondAtom);
  const isHardcodingTime = useAtomValue(isHardcodingTimeAtom);
  const [isClockInitialized, setIsClockInitialized] = useAtom(
    isClockInitializedAtom
  );

  useEffect(() => {
    if (isHardcodingTime) return;

    const tick = () => {
      const date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());

      if (!isClockInitialized) setIsClockInitialized(true);
    };

    const timerId = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [
    isHardcodingTime,
    isClockInitialized,
    setIsClockInitialized,
    setHour,
    setMinute,
    setSecond,
  ]);
};
