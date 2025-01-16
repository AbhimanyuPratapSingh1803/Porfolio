import React from "react";
import RevealText from "../components/RevealText";
import {easeInOut, motion} from "framer-motion";
import CustomButton from "../components/CustomButton";
import Navbar from "../components/Navbar";
import { AuroraBackground } from "../components/ui/AuroraBackground";

const Landing = () => {
    return (
        <AuroraBackground>
        <div className="h-[110vh] relative w-full">
            <Navbar />
            <div className=" h-full w-full">
                <div className="flex h-full w-full items-center justify-center flex-col">
                    <div className="w-full">
                            <motion.div 
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: easeInOut }}
                                className="flex flex-col items-center mb-14 justify-center">
                                {/* <RevealText
                                    delayTime={0.035}
                                    duration={0.5}
                                    extraClass="-mb-2 hidden md:flex text-[35px] md:text-[38px] min-[980px]:text-[50px] min-[1160px]:text-[60px] sm:mx-10 pb-0 text-white"
                                    text={"Turning Imagination and Ideas into"}
                                />
                                <RevealText
                                    delayTime={0.035}
                                    duration={0.5}
                                    extraClass="-mb-2 w-full text-[30px] min-[400px]:text-[33px] min-[520px]:text-[40px] md:hidden pb-0 text-white"
                                    text={"Turning Imagination"}
                                />
                                <RevealText
                                    delayTime={0.035}
                                    duration={0.5}
                                    extraClass="-mb-1 w-full text-[30px] min-[400px]:text-[35px] min-[520px]:text-[40px] md:hidden pb-0 text-white"
                                    text={"and Ideas into"}
                                />
                                <RevealText
                                    delayTime={0.035}
                                    duration={0.5}
                                    extraClass="text-[32px] min-[400px]:text-[38px] min-[520px]:text-[50px] md:text-[50px] min-[1160px]:text-[60px] text-cyan-300"
                                    text={"Real Life Products."}
                                />
                                <RevealText
                                    delayTime={0.009}
                                    duration={0.5}
                                    extraClass="text-sm min-[400px]:text-base mx-5 md:text-xl text-slate-500 pt-5 text-center"
                                    text={
                                        "Hi i'am Abhimanyu Pratap Singh, A Full Stack Developer"
                                    }
                                /> */}
                                <p className="text-white font-bold text-2xl min-[400px]:text-[33px] min-[550px]:text-4xl sm:text-5xl text-center md:text-[38px] md:leading-[45px] lg:text-5xl xl:text-6xl font-poppins mx-5 min-[550px]:mx-10">Turning Imagination and Ideas into</p>
                                <p className="text-cyan-300 font-bold text-3xl min-[400px]:text-4xl min-[550px]:text-5xl sm:text-6xl text-center md:text-[38px] md:leading-[45px] lg:text-5xl xl:text-6xl font-poppins mx-5 min-[550px]:mx-10 mb-5">Real Life Products.</p>
                                <p className="text-slate-500 mx-5 min-[550px]:mx-10 font-poppins text-center text-xs min-[400px]:text-sm min-[550px]:text-base sm:text-lg xl:text-xl font-semibold">Hi i'am Abhimanyu Pratap Singh, A Full Stack Developer</p>
                                <CustomButton
                                    text="Let's Connect"
                                    extraClass="mx-auto mt-5 min-[640px]:mt-10 max-[400px]:text-sm w-[150px] min-[400px]:w-[190px] md:w-[200px] py-2 sm:py-3 px-2 sm:px-10 text-black bg-cyan-300"
                                />
                            </motion.div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#000319] to-transparent pointer-events-none"></div>
        </div>
        </AuroraBackground>
    );
};

export default Landing;
