import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export const TimeInput = ({ className = "", ...props }: Props) => {
  return (
    <input
      type="time"
      className={clsx(
        "px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-2xl font-mono tabular-nums",
        className
      )}
      {...props}
    />
  );
};
