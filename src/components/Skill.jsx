import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({skill, extraClass}) => {
    return (
        <motion.div 
            initial={{ y: "-100%", opacity:0 }} // Initial state
            whileInView={{ y: 0, opacity:1 }} // Final state
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", }}
            className='flex-col gap-5 h-fit font-poppins mb-5 items-center justify-center'>
            <div className={`mx-auto size-10 min-[800px]:size-16 ${extraClass ? "mb-7" : "mb-4"}`}>
                <img src={skill.img} alt="Tech Image" />
            </div>
            <motion.p 
                initial={{ x: "-100%", opacity:0 }} // Initial state
                whileInView={{ x: 0, opacity:1 }} // Final state
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", }}
                className='text-center text-md text-wrap'>
                    {skill.name}
            </motion.p>
        </motion.div>
    )
}

export default Skill
