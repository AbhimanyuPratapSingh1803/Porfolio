import React from "react";
import RevealText from "../components/RevealText";
import Skill from "../components/Skill";

const TechStack = ({ techs }) => {
    return (
        <div id="techStack" className="min-h-screen w-full py-20 px-10 sm:px-16 md:px-32 flex-col items-center justify-center">
            <RevealText
                text="Tech Stack and Technologies"
                duration={0.5}
                delayTime={0.02}
                extraClass="font-semibold text-center text-5xl text-cyan-300"
            />
            <div className="flex flex-col pt-20">
                <div className="flex items-center justify-center flex-wrap gap-5 sm:gap-8">
                    {techs.map((tech, index) => (
                        <Skill key={index} extraClass={index === 6 ? "mb-4" : null} skill={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
