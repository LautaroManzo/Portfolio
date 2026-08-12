import { useEffect, useState } from "react";

/** Posición vertical del scroll, para la flecha del hero y el botón "volver arriba". */
export const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
};
