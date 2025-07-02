"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { MotionStyle, Transition } from "motion/react";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 rounded-[inherit] pointer-events-none z-0 overflow-hidden",
        className
      )}
      style={{
        padding: `${borderWidth}px`,
        border: `${borderWidth}px solid transparent`,
        background:
          "linear-gradient(white, white) padding-box, transparent border-box",
        ...style,
      }}
    >
      <motion.div
        className="absolute"
        style={{
          top: `calc(50% - ${size / 2}px)`,
          left: `calc(50% - ${size / 2}px)`,
          width: `${size}px`,
          height: `${size}px`,
          background: `conic-gradient(from ${initialOffset}deg, transparent 0deg, transparent 300deg, ${colorFrom} 300deg, ${colorTo} 360deg)`,
          maskImage: `radial-gradient(circle at center, white 99%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle at center, white 99%, transparent 100%)`,
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
          pointerEvents: "none",
        }}
        animate={{
          rotate: reverse ? -360 : 360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
          ...transition,
        }}
      />
    </div>
  );
};
