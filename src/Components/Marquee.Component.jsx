import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const threshold = 10;
const MARQUEE_TEXT = "I'm Lokesh Yadav -\u00A0";
const REPEAT_COUNT = 3;

export default function Marquee() {
  const [scrollDir, setScrollDir] = useState("DOWN");
  const lastScrollY = useRef(window.scrollY);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const diff = window.scrollY - lastScrollY.current;
          if (Math.abs(diff) > threshold) {
            setScrollDir(diff > 0 ? "DOWN" : "UP");
            lastScrollY.current = window.scrollY;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate left for DOWN, right for UP
  const animateX = scrollDir === "UP" ? "0%" : "-100%";
  const initialX = scrollDir === "UP" ? "-100%" : "0%";

  return (
    <div
      className="w-full py-20 px-5 bg-red-600 text-white rounded-3xl overflow-hidden flex"
      aria-label="Scrolling marquee with name Lokesh Yadav"
    >
      {[...Array(REPEAT_COUNT)].map((_, i) => (
        <motion.h1
          key={i}
          className="flex whitespace-nowrap text-9xl tracking-wide"
          initial={{ x: initialX }}
          animate={{ x: animateX }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 5,
          }}
        >
          {MARQUEE_TEXT}
        </motion.h1>
      ))}
    </div>
  );
}
