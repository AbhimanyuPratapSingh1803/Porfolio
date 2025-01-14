import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const InfiniteText = ({ text, dir}) => {
    const slider = useRef(null);

    return (
        <div
            ref={slider}
            className="flex items-center font-poppins justify-start w-full h-fit overflow-hidden whitespace-nowrap opacity-30">
            <motion.p
                initial={{ x: 0 }}
                animate={{
                    x: "-100%"
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="relative uppercase text-[200px] leading-[150px] font-extrabold text-slate-500">
                {text}
            </motion.p>
            <motion.p
                initial={{ x: 0 }}
                animate={{
                    x: "-100%"
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="relative uppercase text-[200px] leading-[150px] font-extrabold text-slate-500">
                {text}
            </motion.p>
        </div>
    );
};

export default InfiniteText;
