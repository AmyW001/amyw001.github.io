import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 550): boolean {
  const isClient = typeof window !== "undefined";

  const getInitial = () => {
    if (!isClient) return false;
    return window.innerWidth < breakpoint;
  };

  const [isMobile, setIsMobile] = useState<boolean>(getInitial);

  useEffect(() => {
    if (!isClient) return;

    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const handleChange = (ev: MediaQueryListEvent) => {
      setIsMobile(ev.matches);
    };

    setIsMobile(mq.matches);
    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
    };
  }, [breakpoint, isClient]);

  return isMobile;
}
