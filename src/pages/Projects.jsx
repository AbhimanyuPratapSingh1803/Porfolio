import React from "react";
import ProjectCard from "../components/ProjectCard";
import RevealText from "../components/RevealText";

const Projects = ({techs}) => {

    return (
        <div id="projects" className="min-h-screen w-screen px-5 sm:px-8 text-3xl lg:px-14 xl:px-32 flex flex-col items-center justify-start gap-20 pb-20 pt-20">
            <div class="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#000319] to-transparent pointer-events-none"></div>
            <div className="flex flex-col items-center justify-center sm:gap-4 min-[500px]:px-5">
                <RevealText
                    text="Here are some of my Projects"
                    duration={0.5}
                    extraClass="font-semibold hidden sm:flex text-3xl min-[600px]:text-4xl md:text-5xl text-cyan-300"
                />
                <RevealText
                    text="Here are some of"
                    duration={0.5}
                    extraClass="font-semibold flex sm:hidden text-3xl min[360px]:text-4xl min-[500px]:text-5xl text-cyan-300"
                />
                <RevealText
                    text="My Projects"
                    duration={0.5}
                    extraClass="font-semibold flex sm:hidden text-3xl min[360px]:text-4xl min-[500px]:text-5xl text-cyan-300"
                />
                <RevealText
                    text="Featured projects developed with passion to drive results."
                    duration={0.2}
                    delayTime={0.01}
                    extraClass="font-semibold hidden sm:flex text-sm min-[600px]:text-base md:text-lg text-slate-500"
                />
                <RevealText
                    text="Featured projects developed with passion."
                    duration={0.2}
                    delayTime={0.01}
                    extraClass="font-semibold flex sm:hidden mt-5 text-xs min-[500px]:text-sm text-slate-500"
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-20 w-full">
                <div className="flex xl:flex-row flex-col items-center w-full justify-center gap-10">
                    <ProjectCard
                        techs={techs}
                        currTechs={[3,4,2,5,7,8]}
                        imgSrc="/Curate.png"
                        Title="Curate - Blog App"
                        gitLink = "https://github.com/AbhimanyuPratapSingh1803/Curate"
                        liveLink = "https://curate-theta-two.vercel.app/"
                        description="A Full Stack MERN Blog App, with all the features you will need in a blog application."
                    />
                    <ProjectCard
                        techs={techs}
                        currTechs={[3,4,2,10,9]}
                        imgSrc="/MindScribe.png"
                        Title="MindScribe - Notes App"
                        gitLink = "https://github.com/AbhimanyuPratapSingh1803/MindScribe"
                        liveLink = "https://mindscribe-alpha.vercel.app/"
                        description="A Notes App to capture your thoughts, organize your ideas, and turn inspiration into action."
                    />
                </div>
                <div className="flex xl:flex-row flex-col items-center w-full justify-center gap-10">
                    <ProjectCard
                        techs={techs}
                        currTechs={[3,4,2,11]}
                        imgSrc="/Curate.png"
                        Title="Developer Portfolio"
                        gitLink = "https://github.com/AbhimanyuPratapSingh1803/Curate"
                        liveLink = "https://curate-theta-two.vercel.app/"
                        description="Personal portfolio meticulously crafted to showcase my creations."
                    />
                    <ProjectCard
                        techs={techs}
                        currTechs={[3,4,2,5,7,12,13]}
                        imgSrc="/Admin_Dashboard.png"
                        Title="Admin Dashboard"
                        gitLink = "https://github.com/AbhimanyuPratapSingh1803/Instinctive-assignment"
                        liveLink = "https://instinctive-assignment-red.vercel.app/"
                        description="Admin Dashboard for empowering your decisions with insights and efficiency at your fingertips."
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
