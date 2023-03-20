import clsx from "clsx";
import { useEffect, useState } from "react";
import { ActualClock } from "./ActualClock";
import { useClockAtomsInitialization } from "./hooks/useClockAtomsInitialization";
import { TextBackground } from "./TextBackground";


export const Clock = () => {
  const [hasHydrated, setHasHydrated] = useState(false);
  useClockAtomsInitialization();

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  // TODO: Put nicer pending state UI here
  if (!hasHydrated) return null

  return (
    <div>
      <TextBackground />

      <div className={clsx("fixed top-4 mx-auto left-[50%] translate-x-[-50%]")}>
        <ActualClock />
      </div>
    </div>
  );
};
