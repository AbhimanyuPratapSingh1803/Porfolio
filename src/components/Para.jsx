import React from "react";
import { motion } from "motion/react";

const Para = ({ text, extraClass }) => {
    return (
        FlipLink({ children : text, extraClass : extraClass })
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, extraClass }) => {
  return (
    <motion.p
      initial="initial"
      whileHover="hovered"
      className={`relative block ${extraClass} cursor-pointer font-poppins overflow-hidden whitespace-nowrap`}
      style={{
        lineHeight: 1.3,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.p>
  );
};

export default Para;
