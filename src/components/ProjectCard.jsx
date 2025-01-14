import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ imgSrc, techs, currTechs, Title, description, gitLink, liveLink }) => {
    const [hover, setHover] = useState(false);

    useEffect(() => {
        Aos.init({ once: true });
    }, []);

    return (
        <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out-sine"
            data-aos-duration="500"
            className="w-full md:w-1/2 z-9"
        >
            <div
                onMouseLeave={() => setHover(false)}
                onMouseEnter={() => setHover(true)}
                className={`p-8 font-poppins hover:scale-105 hover:shadow-xl hover:shadow-cyan-800 bg-[#000319] transition-all border-[1px] shadow-2xl shadow-cyan-950 border-slate-800 flex flex-col items-start justify-center gap-5 rounded-2xl`}
            >
                <div className="rounded-3xl h-72 px-12 pt-5 overflow-y-hidden overflow-x-hidden bg-gradient-to-r backdrop-blur-lg from-gray-900 via-cyan-950 to-slate-900 p-4">
                    <img
                        className={`rounded-xl ${hover ? "scale-105" : "scale-100"} rotate-3 transition-all shadow-xl shadow-cyan-950`}
                        src={imgSrc}
                        alt="ProjectImage"
                    />
                </div>
                <div className="flex flex-col p-3 gap-3 items-start justify-center">
                    <p className="text-2xl text-cyan-300 font-semibold">{Title}</p>
                    <p className="text-xl text-gray-500">{description}</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div
                        className="avatar-group tooltip tooltip-bottom tooltip-info overflow-visible -space-x-3 rtl:space-x-reverse"
                        data-tip="Tech Stack"
                    >
                        {currTechs.map((val, idx) => (
                            <div
                                key={idx}
                                className="relative avatar cursor-pointer bg-slate-800 border-[2px] border-slate-600 rounded-full p-[5px]"
                            >
                                <div className="w-7">
                                    <img className="rounded-btn" src={techs[val].img} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-5 text-2xl justify-between">
                        <Link
                            to={liveLink}
                            className="tooltip cursor-pointer tooltip-bottom tooltip-info"
                            data-tip="Live Website"
                        >
                            <FaGlobeAmericas />
                        </Link>
                        <Link
                            to={gitLink}
                            className="tooltip cursor-pointer tooltip-bottom tooltip-info"
                            data-tip="Github Repo"
                        >
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;