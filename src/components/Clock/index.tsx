import clsx from "clsx";
import { useAtomValue, useSetAtom } from "jotai";
import { ActualClock } from "./ActualClock";
import { useClockAtomsInitialization } from "./hooks/useClockAtomsInitialization";
import { TextBackground } from "./TextBackground";
import {
  hourAtom,
  isClockInitializedAtom,
  isHardcodingTimeAtom,
  minuteAtom,
  secondAtom,
} from "./atoms";

export const Clock = () => {
  const setHourAtom = useSetAtom(hourAtom);
  const setMinuteAtom = useSetAtom(minuteAtom);
  const setSecondAtom = useSetAtom(secondAtom);
  const setIsHardcodingTime = useSetAtom(isHardcodingTimeAtom);
  const isClockInitialized = useAtomValue(isClockInitializedAtom);

  useClockAtomsInitialization();

  // TODO: Put nicer pending state UI here
  if (!isClockInitialized) return null;

  return (
    <>
      <input
        type="time"
        onChange={(e) => {
          const [hour, minute] = e.target.value.split(":");

          setHourAtom(parseInt(hour) % 12);
          setMinuteAtom(parseInt(minute));
          setSecondAtom(0);
          setIsHardcodingTime(true);
        }}
      />
      <div>
        <TextBackground />

        <div
          className={clsx("fixed top-4 mx-auto left-[50%] translate-x-[-50%]")}
        >
          <ActualClock />
        </div>
      </div>
    </>
  );
};
