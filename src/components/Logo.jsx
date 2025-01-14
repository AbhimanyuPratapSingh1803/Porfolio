import React from "react";
import { motion } from "motion/react";

const Para = ({ text, extraClass }) => {
    return (
        <motion.p
            initial="initial"
            whileHover="hovered"
            className={`font-poppins ${extraClass} relative cursor-pointer whitespace-nowrap font-medium w-[210px] sm:w-[238px] overflow-hidden`}>
            <motion.div>
                <motion.p
                    className="inline-block pb-1"
                    variants={{
                        initial: { x: 0 },
                        hovered: { x: "-35%" },
                    }}
                    transition = {{
                        duration : 0.5,
                        ease: "anticipate",
                        type : "tween",
                    }}
                >
                    {text}
                </motion.p>
            </motion.div>
        </motion.p>
    );
};

export default Para;
