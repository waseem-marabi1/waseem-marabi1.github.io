
import { useEffect, useRef, useState } from "react";
import "../App.css";
import "./Skills.css";

const Skills = () => {
const skills = [
    { name: "HTML5", level: 90, color: "#f15a24" },
    { name: "CSS3", level: 85, color: "#2965f1" },
    { name: "JavaScript", level: 75, color: "#f7df1e" },
    { name: "React.js", level: 70, color: "#61dafb" },
    { name: "Tailwind CSS", level: 85, color: "#38bdf8" },
    { name: "Bootstrap", level: 75, color: "#7952b3" },
    { name: "Git", level: 70, color: "#f05032" },
    { name: "GitHub", level: 80, color: "#b8b8c7" },
];


    const [page, setpage] = useState(0);

    const [start, setstart] = useState(false);

    const [numbers, setnumbers] = useState(
        skills.map(() => 0)
    );

    const section = useRef(null);


    const skillsPerPage = 4;

    const totalPages = Math.ceil(
        skills.length / skillsPerPage
    );


    const startIndex = page * skillsPerPage;

    const visibleSkills = skills.slice(
        startIndex,
        startIndex + skillsPerPage
    );


    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting && !start) {

                    setstart(true);

                }

            },

            {
                threshold: 0.3
            }

        );


        if (section.current) {

            observer.observe(section.current);

        }


        return () => observer.disconnect();

    }, [start]);



    useEffect(() => {

        if (!start) return;


        let number = 0;


        const up = setInterval(() => {

            number += 4;


            if (number >= 100) {

                number = 100;

                setnumbers(
                    skills.map(() => 100)
                );

                clearInterval(up);


                setTimeout(() => {

                    skills.forEach((skill, index) => {

                        let current = 100;


                        const down = setInterval(() => {

                            current--;


                            setnumbers((old) => {

                                const copy = [...old];

                                copy[index] = current;

                                return copy;

                            });


                            if (current <= skill.level) {

                                clearInterval(down);

                            }

                        }, 30);

                    });

                }, 200);

            } else {

                setnumbers(
                    skills.map(() => number)
                );

            }

        }, 30);


        return () => clearInterval(up);

    }, [start]);



    const next = () => {

        if (page < totalPages - 1) {

            setpage(page + 1);

        }

    };


    const previous = () => {

        if (page > 0) {

            setpage(page - 1);

        }

    };


    return (

        <section
            ref={section}
            id="skills"
            className="skills-section"
        >


            <div className="skills-title">

                <p>
                    TECHNICAL EXPERTISE
                </p>


                <h1>
                    Front-End Skills
                </h1>


                <div className="skills-line"></div>


                <h3>
                    The front-end technologies I use to build modern,
                    responsive web
                    <br />
                    experiences.
                </h3>

            </div>



            <div className="skills-container">


                <button
                    onClick={previous}
                    disabled={page === 0}
                    className="skills-arrow"
                >
                    ‹
                </button>



                <div className="skills-list">

                    {visibleSkills.map((skill, index) => {

                        const realIndex =
                            startIndex + index;


                        return (

                            <div
                                className="skill"
                                key={skill.name}
                            >

                                <div
                                    className="skill-circle"
                                    style={{
                                        "--skill-color": skill.color,
                                        "--percentage":
                                            `${numbers[realIndex] * 3.6}deg`
                                    }}
                                >

                                    <div className="skill-inside">

                                        <span>
                                            {numbers[realIndex]}%
                                        </span>

                                    </div>

                                </div>


                                <h2>
                                    {skill.name}
                                </h2>

                            </div>

                        );

                    })}

                </div>



                <button
                    onClick={next}
                    disabled={page === totalPages - 1}
                    className="skills-arrow"
                >
                    ›
                </button>

            </div>



            <div className="skills-dots">

                {Array.from({
                    length: totalPages
                }).map((_, index) => (

                    <span
                        key={index}
                        onClick={() => setpage(index)}
                        className={
                            page === index
                                ? "dot active-dot"
                                : "dot"
                        }
                    ></span>

                ))}

            </div>


        </section>

    );

};

export default Skills;

// import "../App.css";

// const Skills = () => {

//     return (
//         <div id="skills" className="">
//             <section className="flex flex-col text-center gap-3 mt-32 px-10">
//                 <p className="text-sm text-[var(--primary)]">TECHNICAL EXPERTISE</p>
//                 <h1 className="text-white text-4xl font-semibold ">Front-End Skills</h1>
//                 <div className="bg-[image:var(--td)] m-auto rounded-full w-62 h-0.5"></div>
//                 <p className="text-[var(--text-muted)]">The front-end technologies I use to build modern, responsive web experiences.</p>
//             </section>

//             <section className="flex justify-center mt-15 gap-3">
//                 <div className="border-1 cursor-pointer text-sm size-10 flex my-auto  justify-center items-center text-center border-gray-700/50 hover:border-gray-500  rounded-full text-white "><i class="fa-solid fa-angle-left"></i></div>
//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
//                     <div><div className=" shadow-[0_0_6px_orange] size-28 flex text-white font-semibold text-2xl items-center justify-center rounded-full border-8 border-orange-700 ">95%</div>
//                         <p className="text-white pt-3 text-center">HTML5</p>
//                     </div>
//                     <div><div className=" shadow-[0_0_6px_blue] size-28 flex text-white font-semibold text-2xl items-center justify-center rounded-full border-8 border-blue-700">90%</div>
//                         <p className="text-white pt-3 text-center">CSS3</p>
//                     </div>
//                     <div> <div className=" shadow-[0_0_6px_yellow] size-28 flex text-white font-semibold text-2xl items-center justify-center rounded-full border-8 border-yellow-400">85%</div>
//                         <p className="text-white pt-3 text-center">JavaScript</p>
//                     </div>
//                     <div> <div className=" shadow-[0_0_6px_blue] size-28 flex text-white font-semibold text-2xl items-center justify-center rounded-full border-8 border-blue-300">90%</div>
//                         <p className="text-white pt-3 text-center">React.js</p>
//                     </div>
//                     <div><div className="hidden  shadow-[0_0_6px_red] size-28 flex text-white font-semibold text-2xl items-center justify-center rounded-full border-8 border-red-400">99%</div>
//                         <p className="hidden text-white pt-3 text-center">Tailwind CSS</p>
//                     </div>
//                     <div> <div className="hidden shadow-[0_0_6px_purple]  size-28 flex text-white font-semibold text-2xl items-center justify-center rounded-full border-8 border-purple-500">80%</div>
//                         <p className="hidden text-white pt-3 text-center">Bootstrap</p>
//                     </div>

//                 </div>
//                 <div className=" border-1 cursor-pointer text-sm size-10 flex my-auto  justify-center items-center text-center border-gray-700/50 hover:border-gray-500  rounded-full text-white "><i class="fa-solid fa-angle-right"></i></div>

//             </section>
//             <div className="flex text-center justify-center items-center gap-2">
//                 <span className="h-2 w-5 bg-gray-700 mt-10 rounded-full focus:bg-purple-400 cursor-pointer"></span>
//                 <span className="h-2 w-2 bg-gray-700 mt-10 rounded-full focus:bg-purple-400 cursor-pointer"></span>
//             </div >
//             <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent mt-10"></div>
//         </div>
//     )
// }
// export default Skills
