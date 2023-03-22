import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { minuteTextAtom } from "../atoms";
import { HourText } from "./HourText";
import { MinuteText } from "./MinuteText";
import { ModifierText } from "./ModifierText";

export const TextBackground = () => {
  const minuteText = useAtomValue(minuteTextAtom);
  const isExactHour = minuteText === null;

  return (
    <div
      className={clsx(
        "fixed w-full mx-auto select-none text-center space-y-2 translate-y-[-50%] top-[50%]"
      )}
    >
      <MinuteText />

      <LayoutGroup>
        <div
          className={clsx("flex flex-col", {
            "flex-col-reverse": isExactHour,
          })}
        >
          <motion.div layout layoutId="modifierText">
            <ModifierText />
          </motion.div>
          <motion.div layout layoutId="hourText">
            <HourText />
          </motion.div>
        </div>
      </LayoutGroup>
    </div>
  );
};
