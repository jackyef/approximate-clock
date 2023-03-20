import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const SingleTextLineContainer = ({
  children,
  initialElementId,
}: {
  children?: React.ReactNode;
  initialElementId?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const startingElement = containerRef.current.querySelector(
        `#${initialElementId}`
      );

      if (startingElement) {
        startingElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  }, [initialElementId]);

  return (
    <div className="overflow-x-hidden py-8">
      <motion.div
        ref={containerRef}
        className={clsx(`w-full whitespace-nowrap`)}
        initial={{ x: 0 }}
        animate={{ x: "-30%" }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 60 * 2,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
