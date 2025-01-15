import React from 'react'
import Logo from "./Logo"
import Para from './Para'
import {motion} from "framer-motion"

const Navbar = () => {

    return (
        <motion.nav 
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", }}
            className='flex fixed md:absolute z-10 border-b-[1px] border-slate-800 backdrop-blur-xl items-center justify-between w-screen sm:px-10 px-5 py-5'>
            <Logo extraClass="text-base text-white sm:text-lg" text={"Developed by Abhimanyu Pratap Singh"}/>
            <div className='font-poppins hidden md:flex gap-5 items-center justify-between h-fit w-fit'>
                <a href="#about"><Para text={"About"} extraClass="font-medium text-white text-lg min-[900px]:text-xl"/></a>
                <a href="#projects"><Para text={"Projects"} extraClass="font-medium text-white text-lg min-[900px]:text-xl"/></a>
                <a href="#techStack"><Para text={"Tech-Stack"} extraClass="font-medium text-white text-lg min-[900px]:text-xl"/></a>
                <a href="#contact"><Para text={"Contact"} extraClass="font-medium text-white text-lg min-[900px]:text-xl"/></a>
            </div>
        </motion.nav>
    )
}

export default Navbar
