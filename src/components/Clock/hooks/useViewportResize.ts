import { useEffect } from "react";

export const useViewportResize = (callback: ResizeObserverCallback) => {
  useEffect(() => {
    const observer = new ResizeObserver(callback);
    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, [callback]);
};
