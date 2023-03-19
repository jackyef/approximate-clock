import { forwardRef } from "react";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { AnimatePresence, motion } from "framer-motion";
import { hourAtom, minuteAtom, secondAtom } from "./atoms";

const SingleCharacter = forwardRef((props: { character: string }, ref) => {
  return (
    <motion.div
      // @ts-ignore
      ref={ref}
      className={clsx("inline-block tabular-nums")}
      initial={{ y: -15, opacity: 0, rotateX: '90deg' }}
      animate={{ y: 0, opacity: 1, rotateX: '0deg' }}
      exit={{ y: 15, opacity: 0, rotateX: '90deg' }}
      transition={{ duration: 0.3 }}
    >
      {props.character}
    </motion.div>
  );
});

SingleCharacter.displayName = "SingleCharacter";

export const ActualClock = () => {
  const hour = useAtomValue(hourAtom);
  const hourDigits = String(hour % 12).split("");

  if (hourDigits.length === 1) hourDigits.unshift("0");

  const amOrPm = hour < 12 ? "AM" : "PM";

  const second = useAtomValue(secondAtom);
  const secondDigits = String(second).split("");

  if (secondDigits.length === 1) secondDigits.unshift("0");

  const minute = useAtomValue(minuteAtom);
  const minuteDigits = String(minute).split("");

  if (minuteDigits.length === 1) minuteDigits.unshift("0");

  return (
    <div className={clsx("text-xl")}>
      <AnimatePresence mode="popLayout">
        {hourDigits.map((character, index) => (
          <SingleCharacter
            key={`h-${character}-${index}`}
            character={character}
          />
        ))}
        <div key={"spacer1"} className="inline-block w-1" />
        {minuteDigits.map((character, index) => (
          <SingleCharacter
            key={`m-${character}-${index}`}
            character={character}
          />
        ))}
        <div key={"spacer2"} className="inline-block w-1" />
        {secondDigits.map((character, index) => (
          <SingleCharacter
            key={`s-${character}-${index}`}
            character={character}
          />
        ))}
        <div key={"spacer3"} className="inline-block w-1" />
        {String(amOrPm)
          .split("")
          .map((character, index) => (
            <SingleCharacter
              key={`postfix-${character}-${index}`}
              character={character}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};
