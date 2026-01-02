"use client";
import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrollingUp(currentY < lastY);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isScrollingUp;
}
