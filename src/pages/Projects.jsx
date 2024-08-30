import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

// Projects Technologies
import { FaRust } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

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
      <div className="grid grid-cols-1 gap-2 w-3/4 items-center justify-center md:grid-cols-2 lg:grid-cols-3">
        {selectedCategory === "Fullstack" && (
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

        {selectedCategory === "Frontend" && (
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

        {selectedCategory === "Backend" && (
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
