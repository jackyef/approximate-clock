import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const SingleTextLineContainer = ({
  children,
  activeElementId,
  translateDirection = "left",
}: {
  children?: React.ReactNode;
  activeElementId?: string;
  translateDirection?: "left" | "right";
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const activeElement = containerRef.current.querySelector(
        `#${activeElementId}`
      );

      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }
  }, [activeElementId]);

  return (
    <div className="overflow-x-hidden py-8">
      <motion.div
        ref={containerRef}
        className={clsx(`w-full whitespace-nowrap`)}
        initial={{ x: 0 }}
        animate={{ x: translateDirection === "left" ? "-3%" : "5%" }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 20,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
