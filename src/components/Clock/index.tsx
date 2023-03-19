import clsx from "clsx";
import { ActualClock } from "./ActualClock";
import { useClockAtomsInitialization } from "./hooks/useClockAtomsInitialization";
import { TextBackground } from "./TextBackground";

export const Clock = () => {
  useClockAtomsInitialization();

  return (
    <div>
      <TextBackground />

      <div className={clsx("fixed top-4 mx-auto left-[50%] translate-x-[-50%]")}>
        <ActualClock />
      </div>
    </div>
  );
};
