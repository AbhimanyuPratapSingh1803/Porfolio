import React from "react";
import { isBrowser, motion, useInView } from "framer-motion";

const CustomButton = ({text, icon, extraClass}) => {
    return (
        <div className="mx-auto">
            <button className={`z-20 flex items-center justify-center gap-3 ${extraClass} mt-10 text-center font-bold font-poppins text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]`}>
                {icon}
                {text}
            </button>
        </div>
    );
};

export default CustomButton;
