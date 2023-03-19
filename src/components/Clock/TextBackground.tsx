import { HOUR_TEXTS, MINUTE_MODIFIER_TEXTS, MINUTE_TEXTS } from "@/lib/time";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { hourTextAtom, minuteTextAtom } from "./atoms";

const OutlineText = ({ text, active }: { text: string; active?: boolean }) => {
  return (
    <div
      className={clsx(
        "relative inline-block text-6xl md:text-9xl font-bold",
        "mr-6 md:mr-12",
        {
          [clsx(
            "opacity-10 text-gray-100 dark:text-gray-900",
            "text-stroke text-fill",
            "text-stroke-gray-900 text-fill-gray-100",
            "dark:text-stroke-gray-100 dark:text-fill-gray-900"
          )]: !active,
          [clsx("opacity-90 text-gray-900 dark:text-gray-100", "drop-shadow-2xl")]: active,
        }
      )}
    >
      {text}
    </div>
  );
};

export const TextBackground = () => {
  const minuteText = useAtomValue(minuteTextAtom);
  const hourText = useAtomValue(hourTextAtom);

  return (
    <div className={clsx("fixed inset-20 max-w-4xl mx-auto select-none")}>
      {MINUTE_TEXTS.map((text) => {
        return (
          <OutlineText
            key={text}
            text={text}
            active={minuteText?.startsWith(text)}
          />
        );
      })}

      {MINUTE_MODIFIER_TEXTS.map((text) => (
        <OutlineText
          key={text}
          text={text}
          active={minuteText?.endsWith(text)}
        />
      ))}

      {HOUR_TEXTS.map((text) => (
        <OutlineText key={text} text={text} active={hourText === text} />
      ))}
    </div>
  );
};
