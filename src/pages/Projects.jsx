import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

// Projects Technologies
import { FaRust } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { GiBilledCap } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { SiFrontendmentor } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaTicket } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { BsBuildingFillGear } from "react-icons/bs";
import { SiCplusplus } from "react-icons/si";
import { IoGameController } from "react-icons/io5";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Fullstack");


  return (
    <div className="flex flex-col w-full h-grow items-center justify-center mt-40">
      <h1 className="text-white text-4xl">
        My Projects
      </h1>
      <div className="flex flex-col w-full items-center justify-center text-myGray space-y-2 mt-20 mb-14 md:space-y-0 md:w-3/4 md:flex-row md:space-x-4 lg:justify-start ">
        <button onClick={() => setSelectedCategory("Fullstack")} className="relative">
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform -translate-x-4 ${selectedCategory === "Fullstack" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &lt;
          </span>
          <span className="ml-4">Fullstack</span>
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform translate-x-4 ${selectedCategory === "Fullstack" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &nbsp;/&gt;
          </span>
        </button>
        <button onClick={() => setSelectedCategory("Frontend")} className="relative">
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform -translate-x-4 ${selectedCategory === "Frontend" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &lt;
          </span>
          <span className="ml-4">Frontend</span>
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform translate-x-4 ${selectedCategory === "Frontend" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &nbsp;/&gt;
          </span>
        </button>
        <button onClick={() => setSelectedCategory("Backend")} className="relative">
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform -translate-x-4 ${selectedCategory === "Backend" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &lt;
          </span>
          <span className="ml-4">Backend</span>
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform translate-x-4 ${selectedCategory === "Backend" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &nbsp;/&gt;
          </span>
        </button>
        <button onClick={() => setSelectedCategory("AI - ML - DS")} className="relative">
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform -translate-x-4 ${selectedCategory === "AI - ML - DS" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &lt;
          </span>
          <span className="ml-4">AI - ML - DS</span>
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform translate-x-4 ${selectedCategory === "AI - ML - DS" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &nbsp;/&gt;
          </span>
        </button>
        <button onClick={() => setSelectedCategory("Others")} className="relative">
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform -translate-x-4 ${selectedCategory === "Others" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &lt;
          </span>
          <span className="ml-4">Others</span>
          <span
            className={`text-myAquamarine absolute transition-all duration-500 ease-in-out transform translate-x-4 ${selectedCategory === "Others" ? "opacity-100 translate-x-0" : "opacity-0"
              }`}
          >
            &nbsp;/&gt;
          </span>
        </button>
      </div>
      <div className="grid gap-y-5 grid-cols-1 w-full items-center justify-center md:grid-cols-2 lg:grid-cols-3 pl-20">
        {selectedCategory === "Fullstack" && (
          <>
            <ProjectCard
              repository="https://github.com/akhoz/Iconic-Caps"
              icon={<GiBilledCap />}
              title="Iconic Caps"
              description="Iconic Caps began as a database project where we created a MySQL database, normalized it, and worked with cursors and triggers, among other tasks. The goal was to integrate it into a website with a minimalist and efficient design, ensuring smooth data handling and performance optimization."
              collabolators={{
                "Ram": "https://github.com/RamchelOrtiz",
                "Hector": "https://github.com/hectorcaravacavargas"
              }}
              technologies={[
                FaReact,
                FaNodeJs,
                SiTailwindcss,
                DiMysql
              ]}
            />
            <ProjectCard
              repository="https://github.com/akhoz/Football-Insights"
              icon={<IoIosFootball />}
              title="Football Insights"
              description="Football Insights originated from a university project requiring the development of an application that leverages an API (in this case, API-FOOTBALL) to filter information through various criteria. It also features a Firebase database, user management, and login functionality with Google and X (Twitter)."
              collabolators={{
                "Ram": "https://github.com/RamchelOrtiz",
                "Hector": "https://github.com/hectorcaravacavargas"
              }}
              technologies={[
                FaVuejs,
                FaPython,
                SiTailwindcss,
                IoLogoFirebase
              ]}
            />
            <ProjectCard
              repository="https://github.com/akhoz/Web-Scraping-Game-Crawler"
              icon={<IoGameController />}
              title="Web Scraper: Game Crawler"
              description="This project was our first foray into full-stack development. It features a web scraper that gathers information about games from sites like G2A and PlayStation. This data is then used to generate a frontend, which is connected via Flask, creating a cohesive and interactive application."
              collabolators={{
                "iZackk": "https://www.izackk.com",
                "Hector": "https://github.com/hectorcaravacavargas"
              }}
              technologies={[
                FaVuejs,
                FaPython,
              ]}
            />
          </>
        )}

        {selectedCategory === "Frontend" && (
          <>
            <ProjectCard
              repository="https://github.com/akhoz/PortfolioWeb"
              icon={<FaGithub />}
              title="Web Portfolio"
              description="This portfolio website emerged from the need to showcase my skills and provide better access to my abilities, projects, and overall persona. It is built using React and Tailwind CSS, designed to offer a seamless and visually appealing user experience while highlighting my work and expertise."
              collabolators={{
                "---": "https://github.com/akhoz"
              }}
              technologies={[
                FaReact,
                SiTailwindcss
              ]}
            />
            <ProjectCard
              repository="https://github.com/akhoz/MarkerLandingPage"
              icon={<SiFrontendmentor />}
              title="Marker Landing Page"
              description="This project stems from my desire to learn frontend development and originates from Frontend Mentor. It served as both a practical exercise and my introduction to TypeScript, providing a hands-on experience in applying new skills and understanding key concepts in frontend design."
              collabolators={{
                "---": "https://github.com/akhoz"
              }}
              technologies={[
                FaReact,
                SiTypescript,
                SiTailwindcss
              ]}
            />
          </>
        )}

        {selectedCategory === "Backend" && (
          <>
            <ProjectCard
              repository="https://github.com/iZackk26/Tickets-Manager"
              icon={<FaTicket />}
              title="Tickets Manager"
              description="Tickets Manager is a server designed to handle user requests for purchasing tickets to a fictional stadium. The server features an automated ticketing system that selects the best seats based on specific parameters. It is equipped with threads, priority lists, and other components to ensure efficient and optimal ticket processing."
              collabolators={{
                "iZackk": "https://www.izackk.com"
              }}
              technologies={[
                FaRust,
                SiCsharp
              ]}
            />
            <ProjectCard
              icon={<BsBuildingFillGear />}
              title="Enterprise Managment Handler"
              description="This project originated during my data structures course and involves an enterprise management system. It includes features for handling payroll, product stock, and more. Developed in C++, it utilizes a wide range of data structures to manage various aspects of the system efficiently."
              collabolators={{
                "iZackk": "https://www.izackk.com"
              }}
              technologies={[
                SiCplusplus
              ]}
            />
            <ProjectCard
              icon={<BsInstagram />}
              title="Third Project"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex et dolor sagittis, eu vestibulum lorem tincidunt. Nullam euismod, nisi vel interdum fringilla, nisl ipsum ultricies arcu, vitae malesuada velit ligula ac nisi."
              collabolators={{
                "Ram": "https://www.izackk.com",
                "Hector": "https://www.izackk.com"
              }}
              technologies={[
                FaRust
              ]}
            />
          </>
        )}

        {selectedCategory === "AI - ML - DS" && (
          <>
            <ProjectCard
              icon={<FaGithub />}
              title="Hello World"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex et dolor sagittis, eu vestibulum lorem tincidunt. Nullam euismod, nisi vel interdum fringilla, nisl ipsum ultricies arcu, vitae malesuada velit ligula ac nisi."
              collabolators={{
                "iZackk": "https://www.izackk.com"
              }}
              technologies={[
                FaRust
              ]}
            />
            <ProjectCard
              icon={<BsTwitterX />}
              title="Second Project"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex et dolor sagittis, eu vestibulum lorem tincidunt. Nullam euismod, nisi vel interdum fringilla, nisl ipsum ultricies arcu, vitae malesuada velit ligula ac nisi."
              collabolators={{
                "Ram": "https://www.izackk.com",
                "Hector": "https://www.izackk.com"
              }}
              technologies={[
                FaVuejs,
                FaPython
              ]}
            />
            <ProjectCard
              icon={<BsInstagram />}
              title="Third Project"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex et dolor sagittis, eu vestibulum lorem tincidunt. Nullam euismod, nisi vel interdum fringilla, nisl ipsum ultricies arcu, vitae malesuada velit ligula ac nisi."
              collabolators={{
                "Ram": "https://www.izackk.com",
                "Hector": "https://www.izackk.com"
              }}
              technologies={[
                FaRust
              ]}
            />
          </>
        )}

        {selectedCategory === "Others" && (
          <>
            <ProjectCard
              icon={<FaGithub />}
              title="Hello World"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex et dolor sagittis, eu vestibulum lorem tincidunt. Nullam euismod, nisi vel interdum fringilla, nisl ipsum ultricies arcu, vitae malesuada velit ligula ac nisi."
              collabolators={{
                "iZackk": "https://www.izackk.com"
              }}
              technologies={[
                FaRust
              ]}
            />
            <ProjectCard
              icon={<BsTwitterX />}
              title="Second Project"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex et dolor sagittis, eu vestibulum lorem tincidunt. Nullam euismod, nisi vel interdum fringilla, nisl ipsum ultricies arcu, vitae malesuada velit ligula ac nisi."
              collabolators={{
                "Ram": "https://www.izackk.com",
                "Hector": "https://www.izackk.com"
              }}
              technologies={[
                FaVuejs,
                FaPython
              ]}
            />
            <ProjectCard
              icon={<BsInstagram />}
              title="Third Project"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex et dolor sagittis, eu vestibulum lorem tincidunt. Nullam euismod, nisi vel interdum fringilla, nisl ipsum ultricies arcu, vitae malesuada velit ligula ac nisi."
              collabolators={{
                "Ram": "https://www.izackk.com",
                "Hector": "https://www.izackk.com"
              }}
              technologies={[
                FaRust
              ]}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
