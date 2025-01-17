import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import throttle from 'lodash/throttle';
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import Footer from "./pages/Footer";
import Burger from "./components/Burger";
import Navbar from "./components/Navbar";
import { useScroll} from "framer-motion";

function App() {
    const techs = [
        {
            name: "HTML",
            img: "/html.svg",
        },
        {
            name: "CSS",
            img: "/css.svg",
        },
        {
            name: "JavaScript",
            img: "/js.svg",
        },
        {
            name: "React",
            img: "/React.svg",
        },
        {
            name: "TailwindCSS",
            img: "/Tailwind.svg",
        },
        {
            name: "Node",
            img: "/Node.svg",
        },
        {
            name: "JAVA",
            img: "/java.svg",
        },
        {
            name: "Express",
            img: "/ex.svg",
        },
        {
            name: "MongoDB",
            img: "/Mongo.svg",
        },
        {
            name: "Firebase",
            img: "/Fire.svg",
        },
        {
            name: "Redux",
            img: "/Redux.svg",
        },
        {
            name: "Framer Motion",
            img: "/Framer.svg",
        },
        {
            name: "Prisma",
            img: "/Prisma.svg",
        },
        {
            name: "Supabase",
            img: "/Supabase.svg",
        },
        {
            name: "GitHub",
            img: "/github.svg",
        },
        {
            name: "PostgreSQL",
            img: "/postgresql.svg",
        },
        {
            name: "Postman",
            img: "/postman.svg",
        },
        {
            name: "Python",
            img: "/python.svg",
        },
        {
            name: "MySQL",
            img: "/mysql.svg",
        },
    ];
    const menu = useRef(null);
    const [showBurger, setShowBurger] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const techStackRef = useRef(null);
    const footerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: menu,
    });
    
    useEffect(() => {
        const throttledHandler = throttle((value) => {
            setShowBurger(value > 0.09);
        }, 100);
    
        const unsubscribe = scrollYProgress.onChange(throttledHandler);
    
        return () => {
            unsubscribe();
            throttledHandler.cancel();
        };
    }, [scrollYProgress]);

    let links={
        about: aboutRef,
        projects: projectsRef,
        techStack: techStackRef,
        footer: footerRef
    };

    useEffect(() => {
        links.about = aboutRef.current;
        links.projects = projectsRef.current;
        links.techStack = techStackRef.current;
        links.footer = footerRef.current;
    }, []);
    
    
    return (
        <div ref={menu} className="bg-[#000319] text-white relative w-full">
            <ReactLenis
                root
                options={{
                    lerp : 0.05,
                }}
            >
                {/* <div className='absolute inset-0 bg-[url("/topography.svg")] text-white opacity-[0.07]'></div> */}
                <Navbar links={links} />
                <div>
                    <Burger
                        isActive={isActive}
                        setIsActive={setIsActive}
                        show={showBurger}
                    />
                </div>
                <Landing
                />
                <About ref={aboutRef} />
                <Projects ref={projectsRef} techs={techs} />
                <TechStack ref={techStackRef} techs={techs} />
                <Footer ref={footerRef} />
            </ReactLenis>
        </div>
    );
}

export default App;
