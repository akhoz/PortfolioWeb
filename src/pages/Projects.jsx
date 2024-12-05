import { useState } from "react";
import BackgroundBlogCard from "../components/ProjectCard.jsx";


function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Fullstack");


  return (
    <div className="flex flex-col w-full h-grow items-center justify-center mt-40">
      <h1 className="text-white text-4xl">
        My Projects
      </h1>
      <BackgroundBlogCard />
    </div>
  );
}

export default Projects;
