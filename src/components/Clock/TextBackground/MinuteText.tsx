import { MINUTE_TEXTS } from "@/lib/time";
import { useAtomValue } from "jotai";
import { minuteTextAtom } from "../atoms";
import { OutlineText } from "./OutlineText";
import { SingleTextLineContainer } from "./SingleTextLineContainer";

export const MinuteText = () => {
  const minuteText = useAtomValue(minuteTextAtom);

  return (
    <SingleTextLineContainer key={minuteText} initialElementId="initialMinuteText">
      {MINUTE_TEXTS.map((text) => {
        const active = minuteText?.startsWith(text);

        return <OutlineText key={text} text={text} active={active} />;
      })}
      {MINUTE_TEXTS.map((text) => {
        const active = minuteText?.startsWith(text);

        return (
          <OutlineText
            key={text}
            id="initialMinuteText"
            text={text}
            active={active}
          />
        );
      })}
      {MINUTE_TEXTS.map((text) => {
        const active = minuteText?.startsWith(text);

        return <OutlineText key={text} text={text} active={active} />;
      })}
    </SingleTextLineContainer>
  );
};
