import clsx from "clsx";
import { useAtomValue } from "jotai";
import { hourAtom, minuteAtom, secondAtom } from "./atoms";

const SingleCharacter = (props: { character: string }) => {
  return <div className={clsx("inline-block tabular-nums")}>{props.character}</div>;
};

const Hours = () => {
  const hour = useAtomValue(hourAtom);
  const digits = String(hour % 12).split("");

  if (digits.length === 1) digits.unshift("0");

  return (
    <>
      {digits.map((character, index) => (
        <SingleCharacter key={`h-${index}`} character={character} />
      ))}
    </>
  );
};

const Minutes = () => {
  const minute = useAtomValue(minuteAtom);
  const digits = String(minute).split("");

  if (digits.length === 1) digits.unshift("0");

  return (
    <>
      {digits.map((character, index) => (
        <SingleCharacter key={`m-${index}`} character={character} />
      ))}
    </>
  );
};
const Seconds = () => {
  const second = useAtomValue(secondAtom);
  const digits = String(second).split("");

  if (digits.length === 1) digits.unshift("0");

  return (
    <>
      {digits
        .map((character, index) => (
          <SingleCharacter key={`s-${index}`} character={character} />
        ))}
    </>
  );
};

export const ActualClock = () => {
  const hour = useAtomValue(hourAtom);
  const amOrPm = hour < 12 ? "AM" : "PM";

  return (
    <div className={clsx('text-xl')}>
      <Hours />
      <div className="inline-block w-1" />
      <Minutes />
      <div className="inline-block w-1" />
      <Seconds />
      <div className="inline-block w-1" />
      {String(amOrPm)
        .split("")
        .map((character, index) => (
          <SingleCharacter key={`postfix-${index}`} character={character} />
        ))}
    </div>
  );
};
