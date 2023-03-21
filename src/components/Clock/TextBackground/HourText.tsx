import { HOUR_TEXTS } from "@/lib/time";
import { useAtomValue } from "jotai";
import { hourTextAtom } from "../atoms";
import { OutlineText } from "./OutlineText";
import { SingleTextLineContainer } from "./SingleTextLineContainer";

export const HourText = () => {
  const hourText = useAtomValue(hourTextAtom);
  const activeElementId = `bg-h-${hourText}`;

  return (
    <SingleTextLineContainer
      key={hourText}
      activeElementId={activeElementId}
      translateDirection="right"
    >
      {HOUR_TEXTS.map((text) => {
        const active = hourText === text;
        return <OutlineText key={text} text={text} active={active} />;
      })}
      {HOUR_TEXTS.map((text) => {
        const active = hourText === text;
        return (
          <OutlineText
            key={text}
            text={text}
            active={active}
            id={active ? activeElementId : undefined}
          />
        );
      })}
      {HOUR_TEXTS.map((text) => {
        const active = hourText === text;
        return <OutlineText key={text} text={text} active={active} />;
      })}
    </SingleTextLineContainer>
  );
};
