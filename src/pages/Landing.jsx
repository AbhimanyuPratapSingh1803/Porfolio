import React from "react";
import RevealText from "../components/RevealText";
import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { AuroraBackground } from "../components/ui/Aurora-background";

const Landing = () => {
    return (
        // <AuroraBackground>
            <div className="h-[107vh] relative w-full">
                <Navbar />
                <div className="h-full w-full">
                    <div className=" flex h-full w-full items-center justify-center flex-col">
                        <div className=" flex flex-col items-center justify-center">
                            <RevealText
                                delayTime={0.015}
                                duration={0.5}
                                extraClass="-mb-2 hidden md:flex text-[35px] md:text-[38px] min-[980px]:text-[50px] min-[1160px]:text-[60px] sm:mx-10 pb-0 text-white"
                                text={"Turning Imagination and Ideas into"}
                            />
                            <RevealText
                                delayTime={0.015}
                                duration={0.5}
                                extraClass="-mb-2 mx-auto text-[30px] min-[400px]:text-[35px] min-[520px]:text-[40px] md:hidden pb-0 text-white"
                                text={"Turning Imagination"}
                            />
                            <RevealText
                                delayTime={0.015}
                                duration={0.5}
                                extraClass="-mb-1 mx-auto text-[30px] min-[400px]:text-[35px] min-[520px]:text-[40px] md:hidden pb-0 text-white"
                                text={"and Ideas into"}
                            />
                            <RevealText
                                delayTime={0.015}
                                duration={0.5}
                                extraClass="text-[32px] mx-auto min-[400px]:text-[40px] min-[520px]:text-[50px] md:text-[50px] min-[1160px]:text-[60px] text-cyan-300"
                                text={"Real Life Products."}
                            />
                            <RevealText
                                delayTime={0.009}
                                duration={0.5}
                                extraClass="text-sm min-[400px]:text-base mx-5 md:text-xl text-slate-500 pt-5 text-center"
                                text={
                                    "Hi i'am Abhimanyu Pratap Singh, A Full Stack Developer"
                                }
                            />
                            <CustomButton
                                text="Let's Connect"
                                extraClass="mx-auto mt-5 min-[640px]:mt-10 max-[400px]:text-sm w-[150px] min-[400px]:w-[190px] md:w-[200px] py-2 sm:py-3 px-2 sm:px-10 text-black bg-cyan-300"
                            />
                        </div>
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#000319] to-transparent pointer-events-none"></div>
            </div>
        // </AuroraBackground>
    );
};

export default Landing;
