import { useState } from "react";
import "../App.css";
import "./Head.css";

const Head = () => {

  const [open, setopen] = useState(false)

  return (
    <div className="flex fixed top-0 left-0 w-full z-50 items-center justify-center">

      <nav className="w-full border-b border-[var(--borderr)] lg:w-[70%] lg:mt-6 m-auto h-[65px] lg:rounded-4xl bg-[var(--background2)] flex px-10 justify-between items-center">

        <div className="flex items-center gap-2">

          <div className="size-3 rounded-full bg-[var(--primary)]"></div>

          <h3 className="text-xl text-[var(--text)] font-semibold">
            waseem marabi
          </h3>

        </div>


        <div className="hidden lg:flex sec p-2 rounded-4xl gap-6">

          <a
            href="#home"
            className="p-1 rounded-4xl text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            Home
          </a>

          <a
            href="#skills"
            className="p-1 rounded-4xl text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="p-1 rounded-4xl text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="p-1 rounded-4xl text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            Contact
          </a>

        </div>

          <div
            className="
              border
              border-[var(--borderr)]
              px-4
              py-2
              rounded-3xl
              hover:border-[var(--primary)]
              transition-all
              duration-300
              cursor-pointer
              flex
              gap-2
            "
          >
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--primary)] text-white px-3 py-2 rounded-xl hover:opacity-80 transition-all"
            >
              View CV
            </a>

            <a
              href="/CV.pdf"
              download="Waseem_Marabi_CV.pdf"
              className="border hidden lg:inline-flex border-[var(--primary)] text-white px-3 py-2 rounded-xl hover:bg-[var(--primary)] transition-all"
            >
              Download CV
            </a>
          </div>


          <div
            className="lg:hidden text-[var(--text)] text-2xl p-2 cursor-pointer"
            onClick={() => setopen(!open)}
          >
            <i className="fa-solid fa-bars"></i>
          </div>


      </nav>


      <div
        style={{ display: open ? "flex" : "none" }}
        className="
          absolute
          w-[70%]
          top-24
          border
          border-[var(--borderr)]
          rounded-4xl
          flex
          flex-col
          m-auto
          px-10
          py-4
          bg-[var(--background2)]
        "
      >

        <a
          onClick={() => setopen(false)}
          href="#home"
          className="p-2 rounded-4xl text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          Home
        </a>

        <a
          onClick={() => setopen(false)}
          href="#skills"
          className="p-2 rounded-4xl text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          Skills
        </a>

        <a
          onClick={() => setopen(false)}
          href="#projects"
          className="p-2 rounded-4xl text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          Projects
        </a>

        <a
          onClick={() => setopen(false)}
          href="#contact"
          className="p-2 rounded-4xl text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          Contact
        </a>
         <a
              href="/CV.pdf"
              download="Waseem_Marabi_CV.pdf"
              className="border  border-[var(--primary)] text-white px-3 py-2 rounded-xl hover:bg-[var(--primary)] transition-all"
            >
              Download CV
            </a>
      </div>

    </div>
  );
};

export default Head;