import { MINUTE_MODIFIER_TEXTS } from "@/lib/time";
import { useAtomValue } from "jotai";
import { minuteTextAtom } from "../atoms";
import { OutlineText } from "./OutlineText";
import { SingleTextLineContainer } from "./SingleTextLineContainer";

export const ModifierText = () => {
  const minuteText = useAtomValue(minuteTextAtom);

  const activeElementId = (() => {
    if (minuteText === null) return "bg-mm-oclock";
    if (minuteText.endsWith("past")) return "bg-mm-past";
    if (minuteText.endsWith("to")) return "bg-mm-to";
    return undefined;
  })();

  return (
    <SingleTextLineContainer
      translateDirection="right"
      activeElementId={activeElementId}
    >
      {MINUTE_MODIFIER_TEXTS.map((text) => (
        <OutlineText
          key={text}
          text={text}
          id={`bg-mm-${text}`}
          active={minuteText?.endsWith(text)}
        />
      ))}
      <OutlineText
        key={"o'clock"}
        text={"o'clock"}
        id="bg-mm-oclock"
        active={minuteText === null}
      />
    </SingleTextLineContainer>
  );
};
