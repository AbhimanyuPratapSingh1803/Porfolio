import React from "react";
import { motion, useInView } from "motion/react";

const Para = ({ text, extraClass, duration, delayTime }) => {
    return FlipLink({ children: text, extraClass, duration, delayTime });
};

const FlipLink = ({
    children,
    extraClass,
    duration,
    delayTime = 0.015,
}) => {
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true });

    const elements = []; // Array to hold the JSX elements

    const words = children.split(" ");
    let charIndexCounter = 0;

    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
        const word = words[wordIndex];

        // Create a wrapper for each word
        const wordElements = [];
        for (let charIndex = 0; charIndex < word.length; charIndex++) {
            const char = word[charIndex];

            wordElements.push(
                <motion.pre
                    key={charIndexCounter}
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                    }}
                    transition={{
                        duration: duration,
                        ease: "easeInOut",
                        delay: delayTime * charIndexCounter,
                    }}
                    className="inline-block font-poppins"
                >
                    {char}
                </motion.pre>
            );

            charIndexCounter++;
        }

        // Add the word to the main array, wrapped in a span for styling and spacing
        elements.push(
            <motion.span
                key={`word-${wordIndex}`}
                className="inline-block mr-2"
                style={{ whiteSpace: "nowrap" }}
            >
                {wordElements}
            </motion.span>
        );
    }

    return (
        <motion.p
            ref={containerRef}
            initial="initial"
            animate={isInView ? "hovered" : "initial"}
            className={`relative ${extraClass} block overflow-hidden font-semibold`}
            style={{
                lineHeight: 1.25,
            }}
        >
            <div className="flex flex-wrap justify-center items-center">
                {elements} {/* Render the constructed elements */}
            </div>
        </motion.p>
    );
};

export default Para;
