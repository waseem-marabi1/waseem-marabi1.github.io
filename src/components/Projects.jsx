import "../App.css";


class project {

    constructor(name, state, titel, skills, link, image, live) {
        this.name = name;
        this.titel = titel;
        this.state = state;
        this.skills = skills;
        this.link = link;
        this.image = image;
        this.live = live;
    }
}




let projectss = [

   new project(
    "MovieHub",
    "completed",
    "Movie website",
    ["HTML", "CSS"],
    "https://github.com/waseem-marabi1/moviehub",
    "/image/move.jpg",
    "https://waseem-marabi1.github.io/moviehub/"
),

    new project(
        "Lux-optics",
        "completed",
        "Optics website",
        ["HTML", "CSS"],
        "https://github.com/waseem-marabi1/lux-optics",
        "/image/lux.jpg",
        "https://waseem-marabi1.github.io/lux-optics/"
    ),

    new project(
        "DentalCare Clinic Website",
        "completed",
        "Dental clinic website",
        ["HTML", "Tailwind CSS"],
        "https://github.com/waseem-marabi1/DentalCare-Clinic-Website",
        "/image/dental.jpg",
        "https://waseem-marabi1.github.io/DentalCare-Clinic-Website/"
    ),

    new project(
        "Areen Store",
        "completed",
        "Online store",
        ["HTML", "Tailwind CSS", "JS"],
        "https://github.com/waseem-marabi1/AreenStore",
        "/image/areen.jpg"
        ,"https://areen-store-3zm1bm2mj-amermarabi-6098s-projects.vercel.app/"
    ),

    new project(
    "Portfolio",
    "completed",
    "Personal portfolio",
    ["HTML", "CSS", "JS", "React"],
    "https://github.com/waseem-marabi1/waseem-marabi1.github.io",
    "/image/pro.png",
    "https://waseem-marabi1.github.io/"
)
];


function pp(item) {

    return (

        <div
            className=" group bg-[var(--surface)] border border-[var(--borderr)] rounded-4xl 
            hover:border-[var(--primary)] hover:shadow-[0_0_3px_var(--accent)] duration-700
            "
        >
            <div
                style={{
                    backgroundImage: `url(${item.image})`
                }}
                className="  w-full relative  h-50 rounded-t-4xl
                    bg-center  bg-[length:100%_100%]
                    group-hover:bg-[length:110%_110%]  bg-no-repeat transition-all duration-700
                "
            >
                <span
                    className=" absolute  top-2 left-2 text-[var(--success)]  bg-green-500/10  border  border-green-500/20 rounded-4xl px-2 py-1 text-xs"
                >
                    {item.state}
                </span>
                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        absolute
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        bg-[var(--primary)]
                        hover:bg-[var(--primary-hover)]
                        cursor-pointer
                        rounded-3xl
                        text-[var(--text)]
                        px-4
                        py-2
                        text-sm
                    "
                >
                    View Project
                </a>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <h1
                    className="
                        text-[var(--text)]
                        group-hover:text-[var(--accent)]
                        transition-all
                        duration-300
                    "
                >
                    {item.name}
                </h1>
                <p className="text-[var(--text-muted)]">
                    {item.titel}
                </p>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row flex-wrap gap-2">
                        {item.skills.map((skill) => (
                            <span
                                key={skill}
                                className="
                                    bg-[var(--primary-soft)]
                                    border
                                    border-[var(--primary-border)]
                                    text-[var(----text-muted)]
                                    px-2
                                    py-0.5
                                    rounded-md
                                    text-xs
                                "
                            >
                                {skill}
                            </span>
                            
                        ))}
                    </div>
                    
                </div>
                {item.live && (
    <a
        href={item.live}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--accent)] hover:underline"
    >
        Live Project ↗
    </a>
)}
            </div>
        </div>

    )

}


const Projects = () => {

    return (

        <div id="projects">

            <section className="flex flex-col text-center gap-3 mt-20 px-10">

                <p className="text-sm text-[var(--primary)]">
                    My Work
                </p>

                <h1 className="text-[var(--text)] text-4xl font-semibold">
                    Featured Projects
                </h1>

                <div className="bg-[image:var(--td)] m-auto rounded-full w-62 h-0.5">
                </div>

                <p className="text-[var(--text-muted)]">
                    Real-world applications built with modern technologies and best practices.
                </p>

            </section>


            <section className="flex flex-col items-center mt-10">

                <div
                    id="theproject"
                    className="
                        w-[80%]
                        rounded-4xl
                        mt-10
                        grid
                        grid-cols-1
                        lg:grid-cols-3
                        gap-5
                    "
                >

                    {projectss.map(pp)}

                </div>

            </section>

        </div>

    )

}

export default Projects