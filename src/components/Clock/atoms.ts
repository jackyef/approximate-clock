import { getHourText, getMinuteText } from "@/lib/time";
import { atom } from "jotai";

export const hourAtom = atom(0);
export const minuteAtom = atom(0);
export const secondAtom = atom(0);

export const minuteTextAtom = atom((get) => {
  return getMinuteText(get(minuteAtom));
});

export const hourTextAtom = atom((get) => {
  return getHourText(get(hourAtom), get(minuteAtom));
});
