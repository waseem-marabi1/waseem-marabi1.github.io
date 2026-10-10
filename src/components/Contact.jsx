import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";


const Contact = () => {

    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const sendEmail = (e) => {

        e.preventDefault();

        setLoading(true);
        setError(false);


        emailjs.sendForm(

            "service_16uvobd",
            "template_gfoyj0y",
            e.target,
            "upIjlF8770esNdbCD"

        )

            .then(() => {

                setSent(true);
                setLoading(false);
                e.target.reset();

            })

            .catch((error) => {

                console.log(error);

                setError(true);
                setLoading(false);

            });

    };


    return (

        <div id="contact" className="mt-28 pb-20">


            <section className="flex flex-col text-center gap-3 px-10">

                <p className="text-sm text-[var(--primary)]">
                    SAY HELLO
                </p>

                <h1 className="text-[var(--text)] text-4xl font-semibold">
                    Get In Touch
                </h1>

                <div className="bg-[image:var(--td)] m-auto rounded-full w-24 h-0.5">
                </div>

                <p className="text-[var(--text-muted)] text-sm">

                    Open to freelance projects, internships, and full-time opportunities.

                    <br />

                    Let's build something great together.

                </p>

            </section>


            <section className="w-[85%] lg:w-[75%] max-w-[1050px] m-auto mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">


                <div
                    className="
                        bg-[var(--surface)]
                        border
                        border-[var(--primary-border)]
                        rounded-3xl
                        p-7
                    "
                >

                    <div className="text-4xl mb-4">
                        👨‍💻
                    </div>

                    <h1 className="text-[var(--text)] text-xl font-semibold">
                        Waseem Marabi
                    </h1>

                    <p className="text-[var(--text-muted)] mt-4 text-sm leading-6">
                        Front-End Developer. I enjoy building modern,
                        responsive web applications and I'm always open
                        to new opportunities.
                    </p>


                    <div className="flex flex-col gap-5 mt-8">


                        <div className="flex gap-4 items-center">

                            <span>📍</span>

                            <div>

                                <p className="text-[var(--text-muted)] text-xs">
                                    Location
                                </p>

                                <p className="text-[var(--text)] text-sm">
                                    Palestine
                                </p>

                            </div>

                        </div>


                        <div className="flex gap-4 items-center">

                            <span>📧</span>

                            <div>

                                <p className="text-[var(--text-muted)] text-xs">
                                    Email
                                </p>

                                <p className="text-[var(--text)] text-sm">
                                    waseemmarabicod@gmail.com
                                </p>

                            </div>

                        </div>


                        <div className="flex gap-4 items-center">

                            <span>💼</span>

                            <div>

                                <p className="text-[var(--text-muted)] text-xs">
                                    Focus
                                </p>

                                <p className="text-[var(--text)] text-sm">
                                    Front-End Development
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                <div
                    className="
                        bg-[var(--surface)]
                        border
                        border-[var(--borderr)]
                        rounded-3xl
                        p-7
                        min-h-[430px]
                    "
                >


                    {!sent ? (

                        <form onSubmit={sendEmail}>

                            <h1 className="text-[var(--text)] text-xl font-semibold mb-7">
                                Send a Message
                            </h1>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                    className="
                                        bg-[var(--surface-transparent)]
                                        border
                                        border-[var(--borderr)]
                                        rounded-xl
                                        p-3
                                        text-sm
                                        text-[var(--text)]
                                        outline-none
                                        focus:border-[var(--primary)]
                                        transition-all
                                    "
                                />


                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
                                    className="
                                        bg-[var(--surface-transparent)]
                                        border
                                        border-[var(--borderr)]
                                        rounded-xl
                                        p-3
                                        text-sm
                                        text-[var(--text)]
                                        outline-none
                                        focus:border-[var(--primary)]
                                        transition-all
                                    "
                                />


                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    className="
                                        bg-[var(--surface-transparent)]
                                        border
                                        border-[var(--borderr)]
                                        rounded-xl
                                        p-3
                                        text-sm
                                        text-[var(--text)]
                                        outline-none
                                        focus:border-[var(--primary)]
                                        transition-all
                                    "
                                />


                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone No. (optional)"
                                    className="
                                        bg-[var(--surface-transparent)]
                                        border
                                        border-[var(--borderr)]
                                        rounded-xl
                                        p-3
                                        text-sm
                                        text-[var(--text)]
                                        outline-none
                                        focus:border-[var(--primary)]
                                        transition-all
                                    "
                                />

                            </div>


                            <textarea
                                name="message"
                                placeholder="Your message..."
                                required
                                className="
                                    w-full
                                    h-32
                                    resize-none
                                    bg-[var(--surface-transparent)]
                                    border
                                    border-[var(--borderr)]
                                    rounded-xl
                                    p-3
                                    text-sm
                                    text-[var(--text)]
                                    outline-none
                                    focus:border-[var(--primary)]
                                    transition-all
                                    mt-4
                                "
                            ></textarea>


                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    w-full
                                    mt-4
                                    p-3
                                    rounded-xl
                                    text-[var(--text)]
                                    font-semibold
                                    bg-[var(--primary)]
                                    hover:bg-[var(--primary-hover)]
                                    transition-all
                                    duration-300
                                    cursor-pointer
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                "
                            >

                                {loading ? "Sending..." : "Send Message"}

                            </button>


                            {error && (

                                <p className="text-red-400 text-sm text-center mt-3">
                                    Failed to send message. Please try again.
                                </p>

                            )}

                        </form>

                    ) : (


                        <div
                            className="
                                h-full
                                min-h-[370px]
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                            "
                        >

                            <div
                                className="
                                    size-16
                                    rounded-full
                                    bg-green-500/10
                                    border
                                    border-green-500/30
                                    flex
                                    items-center
                                    justify-center
                                    text-[var(--success)]
                                    text-3xl
                                    mb-5
                                "
                            >
                                ✓
                            </div>


                            <h1 className="text-[var(--text)] text-2xl font-semibold">
                                Message Sent!
                            </h1>


                            <p
                                className="
                                    text-[var(--text-muted)]
                                    text-sm
                                    mt-3
                                    max-w-[300px]
                                    leading-6
                                "
                            >
                                Thank you for reaching out.
                                I'll get back to you as soon as possible.
                            </p>


                            <button
                                onClick={() => setSent(false)}
                                className="
                                    mt-7
                                    border
                                    border-[var(--primary)]
                                    text-[var(--accent)]
                                    hover:bg-[var(--primary)]
                                    hover:text-[var(--text)]
                                    transition-all
                                    duration-300
                                    rounded-xl
                                    px-5
                                    py-2
                                    text-sm
                                    cursor-pointer
                                "
                            >
                                Send Another Message
                            </button>

                        </div>

                    )}

                </div>

            </section>

        </div>

    );

};

export default Contact;