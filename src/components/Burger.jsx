import { div } from 'motion/react-client'
import React, { useState } from 'react'
import Menu from './Menu';
import { AnimatePresence } from "framer-motion";

const Burger = ({isActive, setIsActive, show}) => {
    const customClass = show ? "md:scale-100" : "md:scale-0";
    return (
        <div>
            <button onClick={() => setIsActive(!isActive)} className={`btn ring-0 ${customClass} transition-all cursor-pointer hover:scale-90 fixed top-0 right-0 mr-6 mt-3 md:mt-9 hover:bg-cyan-400 z-20 bg-cyan-300 btn-circle size-[50px] md:size-16 flex-col items-center justify-center`}>
                <span className={`h-[2px] transition-all ${isActive ? "rotate-45 mt-[0px]" : ""} rounded-xl bg-black w-1/2`}></span>
                <span className={`h-[2px] transition-all ${isActive ? "-rotate-45 -mt-[10px]" : ""} rounded-xl bg-black w-1/2`}></span>
            </button>
            <AnimatePresence mode='wait'>
                {isActive && <Menu open={isActive} setOpen={setIsActive} />}
            </AnimatePresence>
        </div>
    )
}

export default Burger
