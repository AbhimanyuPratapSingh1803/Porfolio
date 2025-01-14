import React from 'react'
import {motion} from 'framer-motion'

const CustomText = ({text, extraClass}) => {
    return (
        <div className='w-full h-full overflow-y-hidden'>
            <motion.p
                initial={{ y: "100%", opacity:0 }}
                whileInView={{ y: 0, opacity:1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", }}
                className={extraClass}>
                {text}
            </motion.p>
        </div>
    )
}

export default CustomText
