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
  const isClockInitialized = useAtomValue(isClockInitializedAtom);

  useClockAtomsInitialization();

  // TODO: Put nicer pending state UI here
  if (!isClockInitialized) return null;

  return (
    <>
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
