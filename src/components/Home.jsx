import "../App.css";
import { useState, useEffect } from "react";

const Home = () => {

    const words = [
    "Frontend Developer",
    "React Developer",
    "Web Developer",
    "Full Stack Developer"
];

    const [charr, setcharr] = useState('');
    const [word, setword] = useState("");
    const [wordindex, setwordindex] = useState(0);
    const [ff, setff] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {

            const w = words[wordindex]

            setword(w)

            if (charr.length < w.length && ff == false) {
                setcharr(charr + w[charr.length])
            }

            if (charr.length >= w.length) {
                setff(true)
            }

            if (ff == true) {

                setcharr(charr.slice(0, -1))

                if (charr.length == 0) {

                    setff(false);

                    setwordindex(
                        (wordindex + 1) % words.length
                    );

                }
            }

        }, ff ? 100 : 150);

        return () => clearTimeout(timer)

    })


    return (

        <div
            id="home"
            className="grid gap-20 lg:gap-0 lg:grid-cols-2 px-8 pt-32"
        >

            <section className="flex flex-col gap-6 w-[100%] text-center items-center justify-center lg:justify-start lg:items-start">


                <div
                    className="
                        w-max
                        bg-[var(--primary-soft)]
                        border
                        border-[var(--primary-border)]
                        rounded-3xl
                        px-3
                        py-1
                        text-[var(--text-secondary1)]
                    "
                >
                    Available for opportunities
                </div>


                <h1 className="text-[var(--text)] text-4xl lg:text-5xl font-bold m-auto gap-2 items-center lg:items-start lg:m-0">

                    Hi! I'm{" "}

                    <span className="motion bg-[image:var(--td)] bg-clip-text text-transparent">
                        waseem
                    </span>

                    <br />

                    <span className="flex justify-center items-center lg:items-start lg:justify-start">
                        marabi
                    </span>

                </h1>


                <h2
                    className="
                        bg-[image:var(--reword)]
                        bg-clip-text
                        text-transparent
                        text-3xl
                        lg:text-5xl
                        font-bold
                        h-[50px]
                    "
                >
                    {charr}
                </h2>


                <p className="text-[var(--text-muted)] text-center lg:text-left">

                    Crafting beautiful,

                    <span className="text-[var(--text)]">
                        {" "}responsive web applications{" "}
                    </span>

                    with modern front-end technologies. Passionate about clean code,
                    elegant UI, and delightful user experiences.

                </p>


                <div className="flex gap-7 text-[var(--text)] flex-col lg:flex-row items-center">

                    <a href="#projects"
                        className="
                            w-100
                            lg:w-auto
                            shadow-[0_0_10px_var(--primary)]
                            rounded-4xl
                            py-3
                            px-5
                            bg-[var(--primary)]
                            hover:bg-[var(--primary-hover)]
                            cursor-pointer
                            transition-all
                            duration-300
                        "
                    >
                        View My Projects
                    </a>


                    <a href="#contact"
                        className="
                            w-100
                            lg:w-auto
                            border
                            border-[var(--borderr)]
                            rounded-4xl
                            py-3
                            px-5
                            cursor-pointer
                            hover:border-[var(--primary)]
                            transition-all
                            duration-300
                        "
                    >
                        Get In Touch
                    </a>

                </div>

            </section>


            <section className="flex justify-center items-center">

               <div className="flex flex-col w-[330px] px-6 py-4 text-sm rounded-3xl bg-[var(--surface)]
border border-[var(--borderr)] font-mono  shadow-[0_0_50px_var(--primary)] relative">

                    <div className="flex gap-2 justify-start items-center">

                        <div className="size-2 bg-red-500 rounded-full"></div>

                        <div className="size-2 bg-yellow-400 rounded-full"></div>

                        <div className="size-2 bg-green-500 rounded-full"></div>

                        <p className="text-[var(--text-muted)] ml-2">
                            waseem.jsx
                        </p>

                    </div>


                    <div className="flex flex-col gap-3">

    <div>
        <span className="text-purple-400">const </span>
        <span className="text-cyan-400">developer </span>
        <span className="text-[var(--text)]">= </span>
        <span className="text-yellow-400">{"{"}</span>
    </div>


    <div className="flex flex-col ml-5">

        <span className="text-[var(--text-muted)]">
            name:
            <span className="text-green-400"> "waseem marabi"</span>,
        </span>

        <span className="text-[var(--text-muted)]">
            role:
            <span className="text-green-400"> "Full-Stack Dev"</span>,
        </span>

        <span className="text-[var(--text-muted)]">
            stack:
            <span className="text-yellow-400"> {"["}</span>
        </span>

    </div>


    <div className="flex flex-col ml-10 text-green-400">

        <span>"HTML", "CSS",</span>

        <span>"JavaScript", "React",</span>

        <span>"Tailwind"</span>

    </div>


    <div className="text-yellow-400 ml-5">
        <span>{"]"}</span>
    </div>


    <div className="text-yellow-400">
        {"}"}
    </div>


    <div>

        <span className="text-[var(--text-muted)]">
            {">"}{" "}
        </span>

        <span className="text-indigo-400">
            ready_to_build()
        </span>

        <span className="text-cyan-400">
            {" "}✓
        </span>

    </div>

</div>


                    <div
                        className="
                            homemotion
                            absolute
                            -bottom-5
                            -left-4
                            border
                            border-[var(--primary-border)]
                            bg-[var(--background2)]
                            text-[var(--text)]
                            p-2
                            rounded-3xl
                        "
                    >
                        React Dev
                    </div>


                    <div
                        className="
                            homemotion
                            absolute
                            -top-5
                            -right-4
                            border
                            border-[var(--primary-border)]
                            bg-[var(--background2)]
                            text-[var(--accent)]
                            p-2
                            rounded-3xl
                        "
                    >
                        full stak
                    </div>

                </div>

            </section>

        </div>

    )
}

export default Home


// import "../App.css";
// import { useState, useEffect } from "react";
// const Home = () => {
//     const words = [
//         "Full Stack Developer",
//         "Frontend Developer",
//         "React Developer",
//     ];

//     const [charr, setcharr] = useState("");
//     const [wordIndex, setWordIndex] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);

//     useEffect(() => {
//         const currentWord = words[wordIndex];

//         const timer = setTimeout(() => {
//             if (!isDeleting) {
//                 setcharr(currentWord.slice(0, charr.length + 1));

//                 if (charr.length + 1 === currentWord.length) {
//                     setIsDeleting(true);
//                 }
//             } else {
//                 setcharr(currentWord.slice(0, charr.length - 1));

//                 if (charr.length === 0) {
//                     setIsDeleting(false);
//                     setWordIndex((prev) => (prev + 1) % words.length);
//                 }
//             }
//         }, isDeleting ? 200 : 200);

//         return () => clearTimeout(timer);
//     });
//     return (
//         <div className="px-5 pt-10">
//             <section className="flex flex-col gap-4">
//                 <div className="w-max bg-[var(--surface)] rounded-3xl px-2 py-1">
//                     <span className="size-2 bg-[var(--border)] rounded-full" />
//                     Available for opportunities</div>
//                 <h1 className="text-[var(--text)] text-5xl">
//                     Hi! I'm{" "}
//                     <span className="motion bg-[image:var(--td)] bg-clip-text text-transparent">
//                         waseem marabi
//                     </span>
//                 </h1>                <h2 className="text-[var(--text)] text-5xl">{[charr,"|"]}</h2>
//             </section>
//             <section>


//             </section>

//         </div>

//     )
// }

// export default Home