import React from "react";
import RevealText from "../components/RevealText";
import { easeInOut, motion } from "framer-motion";
import CustomButton from "../components/CustomButton";
import { AuroraBackground } from "../components/ui/AuroraBackground";
import { Link } from "react-router-dom";

const Landing = ({ links }) => {
    return (
        // <AuroraBackground>
        <div id="home" className="h-[110vh] relative w-full">
            <div className=" h-full w-full">
                <div className="flex relative h-full w-full items-center justify-center flex-col">
                    <motion.div
                        initial={{ opacity: 0,}}
                        animate={{ opacity: 1,}}
                        transition={{ duration: 1.5, ease: easeInOut }}
                    >
                        <div className="absolute z-0 animate-blob animation-delay-2000 bg-yellow-500 mix-blend-screen filter blur-2xl opacity-50 size-36 min-[400px]:size-44 min-[450px]:size-48 min-[500px]:size-56 sm:size-64 md:size-72 rounded-full top-1/4 left-[7%] min-[450px]:left-[15%] md:left-[25%]"></div>
                        <div className="absolute z-0 animate-blob animation-delay-4000 bg-orange-400 mix-blend-screen filter blur-2xl opacity-50 size-36 min-[400px]:size-44 min-[450px]:size-48 min-[500px]:size-56 sm:size-64 md:size-72 rounded-full top-[25%] left-[35%] md:left-[40%]"></div>
                        <div className="absolute z-0 animate-blob bg-blue-500 mix-blend-screen filter blur-2xl opacity-50 size-36 min-[400px]:size-44 min-[450px]:size-48 min-[500px]:size-56 sm:size-64 md:size-72 rounded-full top-1/3 left-[45%] min-[450px]:left-[45%] min-[500px]:left-[50%] md:left-[55%]"></div>
                    </motion.div>
                    <div className="w-full absolute z-1">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: easeInOut }}
                            className="flex flex-col items-center mb-14 justify-center">
                            <p className="text-white font-bold text-2xl min-[400px]:text-[33px] min-[550px]:text-4xl sm:text-5xl text-center md:text-[38px] md:leading-[45px] lg:text-5xl xl:text-6xl font-poppins mx-5 min-[550px]:mx-10">
                                Turning Imagination and Ideas into
                            </p>
                            <p className="text-cyan-300 font-bold text-3xl min-[400px]:text-4xl min-[550px]:text-5xl sm:text-6xl text-center md:text-[38px] md:leading-[45px] lg:text-5xl xl:text-6xl font-poppins mx-5 min-[550px]:mx-10 mb-5">
                                Real Life Products.
                            </p>
                            <p className="text-slate-300 mx-5 min-[550px]:mx-10 font-poppins text-center text-xs min-[400px]:text-sm min-[550px]:text-base sm:text-lg xl:text-xl font-semibold">
                                Hi i'am Abhimanyu Pratap Singh, A Full Stack
                                Developer
                            </p>
                            <Link to={"mailto:abhimanyusingh1533@gmail.com"}>
                                <CustomButton
                                    text="Let's Connect"
                                    extraClass="mx-auto mt-5 min-[640px]:mt-10 max-[400px]:text-sm w-[150px] min-[400px]:w-[190px] md:w-[200px] py-2 sm:py-3 px-2 sm:px-10 text-black bg-cyan-300"
                                />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#000319] to-transparent pointer-events-none"></div>
        </div>
        // </AuroraBackground>
    );
};

export default Landing;
