import { MINUTE_MODIFIER_TEXTS } from "@/lib/time";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { minuteTextAtom } from "../atoms";
import { HourText } from "./HourText";
import { MinuteText } from "./MinuteText";
import { OutlineText } from "./OutlineText";

export const TextBackground = () => {
  const minuteText = useAtomValue(minuteTextAtom);

  return (
    <div
      className={clsx(
        "fixed mt-20 w-full mx-auto select-none text-center space-y-2"
      )}
    >
      <MinuteText />
      <div>
        {MINUTE_MODIFIER_TEXTS.map((text) => (
          <OutlineText
            key={text}
            text={text}
            active={minuteText?.endsWith(text)}
          />
        ))}
      </div>

      <HourText />
    </div>
  );
};
