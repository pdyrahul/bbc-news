"use client";
import { useEffect, useState, useRef } from "react";

export default function useScrollDirection() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    lastY.current = Math.floor(window.scrollY);
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = Math.floor(window.scrollY); 
          if (Math.abs(currentY - lastY.current) > 5) {
            setIsScrollingUp(currentY < lastY.current);
            lastY.current = currentY;
          }
          
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isScrollingUp;
}