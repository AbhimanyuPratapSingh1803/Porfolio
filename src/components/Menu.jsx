import React from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'
import Para from './Para'
import {motion} from 'framer-motion'

const Menu = ({open, setOpen}) => {
    const items = [
        {
            name:"Home",
            link:"/"
        },
        {
            name:"About",
            link:"#about"
        },
        {
            name:"Projects",
            link:"#projects"
        },
        {
            name:"Tech-Stack",
            link:"#techStack"
        },
        {
            name:"Contact",
            link:"#contact"
        },
    ]
    return (
        <motion.div 
            variants={{
                initial: {x: "100%"},
                enter: {x: "0", transition: {duration: 0.8, ease: [0.87, 0, 0.13, 1]}},
                exit: {x: "100%", transition: {duration: 0.8, ease: [0.87, 0, 0.13, 1]}}
            }}
            initial="initial" 
            animate="enter" 
            exit="exit"
            className='flex fixed top-0 z-[19] right-0 h-screen w-full items-center justify-center'>
            <div className='w-0 sm:w-1/4 md:w-2/5 min-[1000px]:w-1/2 xl:w-3/5 min-[1450px]:w-2/3 h-full backdrop-blur-lg'></div>
            <div className='w-full sm:w-3/4 md:w-3/5 min-[1000px]:w-1/2 xl:w-2/5 min-[1450px]:w-1/3 h-full py-20 px-5 bg-cyan-500 flex flex-col items-start justify-between'>
                <div className='w-full h-full flex flex-col justify-start items-start gap-4'>
                    <div className='w-full font-poppins text-black border-b-2 border-black'>
                        <span className='pb-5 font-medium'>Navigation</span>
                    </div>
                    {items.map((item, i) => (
                        <MenuItem key={i} text={item.name} link={item.link} i={i} open={open} setOpen={setOpen}/>
                    ))}
                </div>
                <div className='flex flex-col items-center bg-cyan-500 justify-center w-full'>
                    <div className='w-full font-poppins text-black border-b-2 border-black'>
                        <span className='pb-5 font-medium'>Socials</span>
                    </div>
                    <br />
                    <div className='flex items-center justify-start w-full ml-20 gap-4'>
                        <Link to={"https://www.linkedin.com/in/abhimanyu-pratap-singh-254127263/"}>
                            <Para text={"LinkedIn"} extraClass="text-black font-semibold text-xl"/>
                        </Link>
                        <Link to={"https://github.com/AbhimanyuPratapSingh1803"}>
                            <Para text={"GitHub"} extraClass="text-black font-semibold text-xl"/>
                        </Link>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Menu
