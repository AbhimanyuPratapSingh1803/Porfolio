import React from 'react'
import {motion} from 'framer-motion'
import Para from './Para';
const MenuItem = ({text, link, open, setOpen}) => {
    const [active, setActive] = React.useState(false);
    return (
        // <a href={link} className="text-white text-sm font-medium mt-1">
            <motion.div 
                variants={{
                    initial: {x: 80},
                    enter: ({x: 0, transition: {duration: 1.2, ease: [0.87, 0, 0.13, 1]}}),
                    exit: ({x: 80, transition: {duration: 1.2, ease: [0.87, 0, 0.13, 1]}})
                }}
                initial="initial"
                animate="enter" 
                exit="exit"
                onClick={() => {
                    link.scrollIntoView({behavior: 'smooth'});
                }}
                onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className='w-full cursor-pointer flex items-center justify-start gap-3'>
                <motion.div 
                    animate={active ? 'open' : 'closed'}
                    variants={{
                        open: {scale : 1, transition: {duration: 0.3}},
                        closed: {scale : 0, transition: {duration: 0.3}}
                    }}
                    className='size-4 min-[400px]:size-5 rounded-full bg-black'>
                </motion.div>
                <span onClick={() => setOpen(!open)} className='text-4xl min-[400px]:text-5xl min-[480px]:text-6xl uppercase font-bold text-black font-poppins'>
                    <span>{text}</span>
                </span>
            </motion.div>
        // </a>
    )
}

export default MenuItem
