import { MINUTE_TEXTS } from "@/lib/time";
import { useAtomValue } from "jotai";
import { minuteTextAtom } from "../atoms";
import { OutlineText } from "./OutlineText";
import { SingleTextLineContainer } from "./SingleTextLineContainer";

export const MinuteText = () => {
  const minuteText = useAtomValue(minuteTextAtom)?.replace(/ (past|to)/, "");

  const activeElementId = `bg-m-${minuteText?.replace(" ", "")}`;

  return (
    <SingleTextLineContainer activeElementId={activeElementId}>
      {MINUTE_TEXTS.map((text) => {
        const active = minuteText?.startsWith(text);

        return <OutlineText key={text} text={text} active={active} />;
      })}
      {MINUTE_TEXTS.map((text) => {
        const active = minuteText?.startsWith(text);

        return (
          <OutlineText
            key={text}
            id={active ? activeElementId : undefined}
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
