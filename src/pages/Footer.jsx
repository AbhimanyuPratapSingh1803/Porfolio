import React from 'react'
import RevealText from '../components/RevealText'
import CustomButton from '../components/CustomButton'
import { LuMails } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Para from '../components/Para';

const Footer = () => {
    return (
        <div id='contact' className='w-full relative h-[85vh] sm:h-screen flex-col p-10 items-center justify-center'>
            <div className='relative h-full z-5 w-full flex flex-col items-center justify-center bg-cyan-300 rounded-lg'>
                <div className='mx-8 flex-col items-center justify-center'>
                    <RevealText
                        text="Need an advantage over others?"
                        duration={0.4}
                        delayTime={0.017}
                        extraClass="font-semibold text-xs sm:text-xl text-black"
                    />
                    <RevealText
                        text="Let's Make it Happen"
                        duration={0.5}
                        delayTime={0.027}
                        extraClass="font-semibold text-[35px] sm:text-[45px] md:text-[60px] min-[900px]:text-7xl min-[1150px]:text-8xl text-black"
                    />
                    <Link to={"mailto:abhimanyusingh1533@gmail.com"}>
                        <CustomButton icon={<LuMails className='text-xl' />} text="Mail" extraClass="mx-auto mt-5 min-[640px]:mt-10 w-[150px] sm:w-[200px] py-2 sm:py-3 px-2 sm:px-10 text-black bg-cyan-500"/>
                    </Link>
                </div>
                <div className='flex w-full px-5 absolute mb-5 gap-5 text-black font-poppins bottom-0 justify-between items-center'>
                    <div className='flex-col text-sm sm:text-base items-center font-semibold justify-center'>
                        <p>© 2025 Abhimanyu Pratap Singh</p>
                        <p>All Rights Reserved</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 sm:gap-7'>
                        <div className='flex items-center cursor-pointer justify-center gap-2'>
                            <FaLinkedin className='text-3xl'/>
                            <Para text="LinkedIn" extraClass="font-semibold hidden sm:block text-lg"/>
                        </div>
                        <div className='flex relative cursor-pointer items-center justify-center gap-2'>
                            <FaGithubSquare className='text-3xl'/>
                            <Para text="GitHub" extraClass="font-semibold hidden sm:block text-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
