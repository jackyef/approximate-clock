import clsx from "clsx";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { useViewportResize } from "../hooks/useViewportResize";

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

  const scrollActiveElementIntoView = useCallback(() => {
    if (containerRef.current) {
      const activeElement = containerRef.current.querySelector(
        `#${activeElementId}`
      );

      if (activeElement) {
        // Apparently only one smooth scroll can happen at a time, at least for Chrome
        // https://stackoverflow.com/questions/66586455/why-doesnt-scrollintoview-work-on-two-simultaneous-elements
        // activeElement.scrollIntoView({
        //   behavior: "smooth",
        //   inline: "center",
        // });

        // So we do some math and use `scrollTo()` instead
        const baseX = (activeElement as HTMLDivElement).offsetLeft;
        const activeElementWidth = (activeElement as HTMLDivElement).offsetWidth;
        containerRef.current.scrollTo({
          left: baseX + activeElementWidth / 2 - containerRef.current.offsetWidth / 2,
          behavior: "smooth",
        })
      }
    }
  }, [activeElementId]);

  useEffect(() => {
    scrollActiveElementIntoView();
  }, [scrollActiveElementIntoView]);

  useViewportResize(scrollActiveElementIntoView);

  return (
    <div 
    ref={containerRef} className="overflow-x-hidden py-4 md:py-8">
      <motion.div
        className={clsx(`w-full whitespace-nowrap`)}
        initial={{ x: 0 }}
        animate={{ x: translateDirection === "left" ? "-3%" : "5%" }}
        exit={{ x: 0, opacity: 0 }}
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
