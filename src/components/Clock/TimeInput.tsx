import clsx from "clsx";
import { InputHTMLAttributes, useEffect, useRef } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  shouldFocusOnMount?: boolean;
};

export const TimeInput = ({ className = "", shouldFocusOnMount = false, ...props }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocusOnMount) {
      ref.current?.focus();
    }
  }, [])

  return (
    <input
      ref={ref}
      type="time"
      className={clsx(
        "px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-2xl font-mono tabular-nums",
        className
      )}
      {...props}
    />
  );
};
