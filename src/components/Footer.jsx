import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {

  return (

    <footer
      className="
        mt-24
        bg-[var(--background2)]
        border-t
        border-[var(--borderr)]
      "
    >

      <div className="w-[85%] lg:w-[80%] m-auto py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">


          <div>

            <div className="flex items-center gap-3">

              <span className="size-3 rounded-full bg-[var(--primary)]">
              </span>

              <h1 className="text-[var(--text)] text-xl font-semibold">
                Portfolio
              </h1>

            </div>


            <p className="text-[var(--text-muted)] mt-6 leading-7 max-w-[350px]">

              Front-End Developer building beautiful,
              responsive web experiences with modern
              front-end technologies.

            </p>


            <div className="flex gap-3 mt-7">

              <a
                href="https://www.linkedin.com/in/waseem-marabi-b17b06326/"
                target="_blank"
                rel="noreferrer"
                className="
                  size-10
                  border
                  border-[var(--borderr)]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-[var(--text-muted)]
                  hover:text-[var(--text)]
                  hover:border-[var(--primary)]
                  hover:bg-[var(--primary-soft)]
                  transition-all
                  duration-300
                "
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>


              <a
                href="https://www.facebook.com/waseem.al.eyad"
                target="_blank"
                rel="noreferrer"
                className="
                  size-10
                  border
                  border-[var(--borderr)]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-[var(--text-muted)]
                  hover:text-[var(--text)]
                  hover:border-[var(--primary)]
                  hover:bg-[var(--primary-soft)]
                  transition-all
                  duration-300
                "
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>


              <a
                href="https://www.instagram.com/waseem_marabi"
                target="_blank"
                rel="noreferrer"
                className="
                  size-10
                  border
                  border-[var(--borderr)]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-[var(--text-muted)]
                  hover:text-[var(--text)]
                  hover:border-[var(--primary)]
                  hover:bg-[var(--primary-soft)]
                  transition-all
                  duration-300
                "
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>


              <a
                href="https://github.com/waseem-marabi1"
                target="_blank"
                rel="noreferrer"
                className="
                  size-10
                  border
                  border-[var(--borderr)]
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-[var(--text-muted)]
                  hover:text-[var(--text)]
                  hover:border-[var(--primary)]
                  hover:bg-[var(--primary-soft)]
                  transition-all
                  duration-300
                "
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

            </div>

          </div>



          <div>

            <h2 className="text-[var(--text)] font-semibold mb-6">
              Navigation
            </h2>

            <div className="flex flex-col gap-4 text-[var(--text-muted)]">

              <a
                href="#home"
                className="hover:text-[var(--primary)] transition-all"
              >
                Home
              </a>

              <a
                href="#skills"
                className="hover:text-[var(--primary)] transition-all"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-[var(--primary)] transition-all"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-[var(--primary)] transition-all"
              >
                Contact
              </a>

            </div>

          </div>



          <div>

            <h2 className="text-[var(--text)] font-semibold mb-6">
              What I Do
            </h2>

            <div className="flex flex-col gap-4 text-[var(--text-muted)]">

              <p>Front-End Development</p>

              <p>Responsive Web Design</p>

              <p>React & Tailwind Projects</p>

              <p>UI / UX Implementation</p>

              <p>Component Architecture</p>

            </div>

          </div>

        </div>


        <div
          className="
            border-t
            border-[var(--borderr)]
            mt-12
            pt-8
            text-center
          "
        >

          <p className="text-[var(--text-muted)] text-sm">
            © 2026 Waseem Marabi — All Rights Reserved
          </p>

        </div>

      </div>

    </footer>

  );

};

export default Footer;