export const MINUTE_TEXTS = [
  "five",
  "ten",
  "a quarter",
  "twenty",
  "half",
] as const;

export const MINUTE_MODIFIER_TEXTS = ["to", "past"] as const;
type MinuteModifer = typeof MINUTE_MODIFIER_TEXTS[number];
type MinuteText =
  | typeof MINUTE_TEXTS[number]
  | `${typeof MINUTE_TEXTS[number]} ${MinuteModifer}`;

export const getMinuteText = (minute: number): MinuteText | null => {
  let result: MinuteText | null = null;

  // These are intentionally 2 min early because we only want to show the approximate time
  // Technically they should be 2.5 min early, but I'm rounding down to 2 min
  if (minute >= 3) result = "five past";
  if (minute >= 8) result = "ten past";
  if (minute >= 13) result = "a quarter past";
  if (minute >= 18) result = "twenty past";
  if (minute >= 28) result = "half past";
  if (minute >= 38) result = "twenty to";
  if (minute >= 43) result = "a quarter to";
  if (minute >= 48) result = "ten to";
  if (minute >= 53) result = "five to";

  return result;
};

type HourDigit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 0;

export const HOUR_TEXTS = [
  "twelve",
  "two",
  "one",
  "three",
  "eight",
  "five",
  "seven",
  "eleven",
  "nine",
  "six",
  "ten",
  "four",
] as const;

export type HourText = typeof HOUR_TEXTS[number];

const hourTextMap: Record<HourDigit, HourText> = {
  0: "twelve",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
};

export const getHourText = (hours: number, minutes: number) => {
  let result;
  if (minutes <= 30) result = hours;
  else result = hours + 1;

  return hourTextMap[(result % 12) as HourDigit];
};
