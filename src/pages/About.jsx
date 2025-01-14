import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import RevealText from "../components/RevealText";

const About = () => {
    return (
        <div className="bg-neutral-800">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const text = "Hi 👋 I'm Abhimanyu Pratap Singh — a developer passionate about building innovative and impactful digital solutions. I love collaborating, improving, and staying ahead with best practices."

    const words = text.split(" ");

    return (
        <section id="about" ref={targetRef} className="relative h-[400vh] bg-[#000319]">
            <div className='sticky top-0 inset-0 bg-[url("/topography.svg")] text-white opacity-[0.07]'></div>
            <div className="sticky top-0 flex flex-col gap-10 py-28 h-screen justify-center items-center overflow-hidden">
                <RevealText
                    text="About Me"
                    duration={0.5}
                    delayTime={0.057}
                    extraClass="font-semibold text-5xl text-cyan-300"
                />
                <motion.div className="px-5 min-[460px]:px-10 min-[685px]:px-16 min-[1045px]:px-32">
                    <p className="text-[35px] min-[400px]:text-[40px] min-[460px]:text-[45px] sm:text-[55px] min-[920px]:text-[55px] min-[1300px]:text-7xl flex flex-wrap justify-center leading-[36px] min-[460px]:leading-[44px] sm:leading-[48px] min-[920px]:leading-[50px] font-semibold font-Bebas Neue 15 text-slate-100">
                        {words.map((word, i) => {
                            const start = i/words.length;
                            const end = start + 1/words.length;
                            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
                            return (
                                <span key={i} className="mr-2 relative">
                                    <span className="opacity-5 absolute">{word}</span>
                                    <motion.span style={{opacity : opacity}}>{word}</motion.span>
                                </span>
                            )
                        })}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;