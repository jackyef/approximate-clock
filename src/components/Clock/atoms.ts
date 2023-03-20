import { getHourText, getMinuteText } from "@/lib/time";
import { atom } from "jotai";

const now = new Date();

export const hourAtom = atom(now.getHours());
export const minuteAtom = atom(now.getMinutes());
export const secondAtom = atom(now.getMinutes());

export const minuteTextAtom = atom((get) => {
  return getMinuteText(get(minuteAtom));
});

export const hourTextAtom = atom((get) => {
  return getHourText(get(hourAtom), get(minuteAtom));
});
