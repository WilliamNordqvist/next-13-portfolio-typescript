import { useCallback, useEffect, useMemo, useState } from "react";

export const useIsMobile = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  const setWidth = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setWidth, false);

    return () => window.removeEventListener("resize", setWidth, false);
  }, [setWidth]);

  const isMobile = useMemo(() => screenWidth <= 480, [screenWidth]);
  const isDesktop = !isMobile;

  return { isMobile, isDesktop };
};
