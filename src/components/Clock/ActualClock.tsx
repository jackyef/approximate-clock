import { forwardRef, useState } from "react";
import clsx from "clsx";
import { useAtomValue, useSetAtom } from "jotai";
import { AnimatePresence, motion } from "framer-motion";
import {
  hourAtom,
  isHardcodingTimeAtom,
  minuteAtom,
  secondAtom,
} from "./atoms";
import { Settings } from "iconoir-react";
import { TimeInput } from "./TimeInput";
import { getCurrentHHmm } from "@/lib/time";

const SingleCharacter = forwardRef((props: { character: string }, ref) => {
  return (
    <motion.div
      // @ts-ignore
      ref={ref}
      className={clsx("inline-block tabular-nums font-mono")}
      initial={{ y: -15, opacity: 0, rotateX: "90deg" }}
      animate={{ y: 0, opacity: 1, rotateX: "0deg" }}
      exit={{ y: 15, opacity: 0, rotateX: "90deg" }}
      transition={{ duration: 0.3 }}
    >
      {props.character}
    </motion.div>
  );
});

SingleCharacter.displayName = "SingleCharacter";

export const ActualClock = () => {
  const [showClockSettings, setShowClockSettings] = useState(false);
  const setHourAtom = useSetAtom(hourAtom);
  const setMinuteAtom = useSetAtom(minuteAtom);
  const setSecondAtom = useSetAtom(secondAtom);
  const setIsHardcodingTime = useSetAtom(isHardcodingTimeAtom);

  const hour = useAtomValue(hourAtom);
  const hourDigits = String(hour % 12).split("");

  if (hourDigits.length === 1) hourDigits.unshift("0");

  const amOrPm = hour < 12 ? "AM" : "PM";

  const second = useAtomValue(secondAtom);
  const secondDigits = String(second).padStart(2, "0").split("");
  const minute = useAtomValue(minuteAtom);
  const minuteDigits = String(minute).padStart(2, "0").split("");

  return (
    <div
      onBlur={(e) => {
        // Hide the TimeInput if the user clicks outside this div
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setShowClockSettings(false);
          setIsHardcodingTime(false);
        }
      }}
      className={clsx(
        "text-xl",
        "flex flex-col items-center transition-opacity",
        "opacity-60 focus-within:opacity-100 hover:opacity-100"
      )}
    >
      <div className={clsx("flex items-center")}>
        <AnimatePresence mode="popLayout">
          {hourDigits.map((character, index) => (
            <SingleCharacter
              key={`h-${character}-${index}`}
              character={character}
            />
          ))}
          <div key={"spacer1"} className="inline-block w-2" />
          {minuteDigits.map((character, index) => (
            <SingleCharacter
              key={`m-${character}-${index}`}
              character={character}
            />
          ))}
          <div key={"spacer2"} className="inline-block w-2" />
          {secondDigits.map((character, index) => (
            <SingleCharacter
              key={`s-${character}-${index}`}
              character={character}
            />
          ))}
          <div key={"spacer3"} className="inline-block w-2" />
          {String(amOrPm)
            .split("")
            .map((character, index) => (
              <SingleCharacter
                key={`postfix-${character}-${index}`}
                character={character}
              />
            ))}

          <button
            className="ml-4"
            onClick={() => {
              if (!showClockSettings) {
                setShowClockSettings(true);
              } else {
                setShowClockSettings(false);
                setIsHardcodingTime(false);
              }
            }}
          >
            <Settings height="1em" width="1em" />
          </button>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showClockSettings && (
          <motion.div
            className="mt-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
          >
            <TimeInput
              shouldFocusOnMount
              defaultValue={getCurrentHHmm()}
              onChange={(e) => {
                const [hour, minute] = e.target.value.split(":");

                setHourAtom(parseInt(hour));
                setMinuteAtom(parseInt(minute));
                setSecondAtom(0);
                setIsHardcodingTime(true);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
