import clsx from "clsx";

export const OutlineText = ({
  text,
  active,
  id,
}: {
  id?: string;
  text: string;
  active?: boolean;
}) => {
  return (
    <div
      id={id}
      className={clsx(
        "relative inline-block text-6xl md:text-9xl font-bold",
        "mr-6 md:mr-12",
        {
          [clsx(
            "opacity-10 text-gray-100 dark:text-gray-900",
            "text-stroke text-fill",
            "text-stroke-gray-900 text-fill-gray-100",
            "dark:text-stroke-gray-100 dark:text-fill-gray-900"
          )]: !active,
          [clsx(
            "opacity-90 text-gray-900 dark:text-gray-100",
            "drop-shadow-2xl"
          )]: active,
        }
      )}
    >
      {text}
    </div>
  );
};
