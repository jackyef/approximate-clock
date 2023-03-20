import { HOUR_TEXTS } from "@/lib/time";
import { useAtomValue } from "jotai";
import { hourTextAtom } from "../atoms";
import { OutlineText } from "./OutlineText";
import { SingleTextLineContainer } from "./SingleTextLineContainer";

export const HourText = () => {
  const hourText = useAtomValue(hourTextAtom);

  return (
    <SingleTextLineContainer initialElementId="initialHourText">
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
            id={active ? "initialHourText" : undefined}
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
