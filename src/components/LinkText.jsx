import React from 'react'
import {motion} from 'framer-motion'

const LinkText = ({text}) => {
    const [active, setActive] = React.useState(false);
    return (
        <motion.div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className='w-full flex items-center justify-center'>
            <motion.div 
                animate={active ? 'open' : 'closed'}
                variants={{
                    open: {scale : 1, transition: {duration: 0.3}},
                    closed: {scale : 0, transition: {duration: 0.4}}
                }}
                className='size-5 rounded-full bg-black'>
            </motion.div>
            <span 
                animate={active ? 'open' : 'closed'}
                variants={{
                    open: {scale : 1, transition: {duration: 0.3}},
                    closed: {scale : 0, transition: {duration: 0.4}}
                }}
                className='text-6xl uppercase font-semibold text-black font-poppins'>
                {text}
            </span>
        </motion.div>
    )
}

export default LinkText
