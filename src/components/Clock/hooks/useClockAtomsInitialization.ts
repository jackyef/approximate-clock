import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { hourAtom, minuteAtom, secondAtom } from "../atoms";

export const useClockAtomsInitialization = () => {
  const setHour = useSetAtom(hourAtom);
  const setMinute = useSetAtom(minuteAtom);
  const setSecond = useSetAtom(secondAtom);

  useEffect(() => {
    const tick = () => {
      const date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    };

    const timerId = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerId);
    };
  });
};
