import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import Footer from "./pages/Footer";
import Burger from "./components/Burger";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";

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
    ];
    const menu = useRef(null);
    const { scrollYProgress } = useScroll({
        target: menu,
    });

    const [showBurger, setShowBurger] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((value) => {
            setShowBurger(value > 0.05);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    const [isActive, setIsActive] = useState(false);
    return (
        <div ref={menu} className="bg-[#000319] text-white relative w-full">
            {/* <div className='absolute inset-0 bg-[url("/topography.svg")] text-white opacity-[0.07]'></div> */}
            <div>
                <Burger isActive={isActive} setIsActive={setIsActive} show={showBurger} />
            </div>
            <Landing />
            <About />
            <Projects techs={techs} />
            <TechStack techs={techs} />
            <Footer />
        </div>
    );
}

export default App;
