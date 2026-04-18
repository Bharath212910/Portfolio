import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "fade" | "slide" | "zoom" | "blur" | "rotate";

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(20px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(20px)" },
  },
  rotate: {
    initial: { opacity: 0, rotateX: -15, y: 30 },
    animate: { opacity: 1, rotateX: 0, y: 0 },
    exit: { opacity: 0, rotateX: 15, y: -30 },
  },
};

export default function PageTransition({
  children,
  variant = "slide",
  duration = 0.6,
}: {
  children: ReactNode;
  variant?: Variant;
  duration?: number;
}) {
  return (
    <motion.div
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      exit={variants[variant].exit}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      className="pt-28 pb-20 min-h-screen"
    >
      {children}
    </motion.div>
  );
}
