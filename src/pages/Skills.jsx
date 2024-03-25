import { useTheme } from "../contexts/ThemeContext";
import SkillCard from "../components/SkillCard";

function Skills() {
    const { isLightMode } = useTheme();

    return (
        <div className={`flex flex-col justify-center items-center mt-52 my-64`} >
            <p className={`${isLightMode ? "text-black" : "text-white"} text-xl font-bold`}>Web Technologies</p>
            <hr className={`border-t-4 px-20 mx-auto ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
            <div className="flex flex-wrap justify-center items-start">
                <SkillCard
                    link='https://devdocs.io/html/' 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    title="HTML"
                    text="I learned HTML while studying web development and have since used it proficiently in multiple projects"/>
                <SkillCard
                    link='https://devdocs.io/css/'
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    title="CSS"
                    text="I've become skilled in CSS through web development studies, using it effectively across numerous projects."/>
                <SkillCard 
                    link="https://devdocs.io/javascript/"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    title="JavaScript"
                    text="Through my web development journey, I've honed my skills in JavaScript, employing it adeptly in various projects."/>
                <SkillCard 
                    link="https://react.dev/blog/2023/03/16/introducing-react-dev"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    title="React"
                    text="React is the JavaScript framework I've used the most. This page is built with that technology."/>
                <SkillCard 
                    link="https://tailwindcss.com/"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    title="Tailwind CSS"
                    text="Tailwind CSS is the CSS framework I've handled the most and prefer the most. This page was developed using that technology."/>
                <SkillCard 
                    link="https://vitejs.dev/"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                    title="Vite"
                    text="Currently, Vite is the application builder I use for my web projects."/>
            </div>      

            <p className={`${isLightMode ? "text-black" : "text-white"} text-xl font-bold mt-44`}>Artificial Intelligence</p>
            <hr className={`border-t-4 px-24 mx-auto ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
            <div className="flex flex-wrap justify-center items-start">
                <SkillCard 
                    link="https://docs.python.org/3/"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    title="Python"
                    text="Python was the first language I learned, and I currently use many of its frameworks and libraries for my AI projects."/>
                <SkillCard 
                    link="https://scikit-learn.org/stable/"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
                    title="Sklearn"
                    text="Scikit-learn was the first library I used for ML. I have experience with various of its Classification and Regression models."/>
                <SkillCard
                    link="https://opencv.org/"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-plain.svg"
                    title="OpenCV"
                    text="I have used various models and functions of OpenCV in facial detection and face anti-spoofing projects."/>
                <SkillCard 
                    link="https://numpy.org/doc/"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
                    title="Numpy"
                    text="I have experience handling various numpy functions for data preparation and cleaning in my ML projects."/>
                <SkillCard 
                    link="https://pandas.pydata.org/docs/"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
                    title="Pandas"
                    text="I have experience utilizing various pandas functions for data preparation, analysis, and manipulation in my ML projects."/>
            </div>    

            <p className={`${isLightMode ? "text-black" : "text-white"} text-xl font-bold mt-44`}>Others</p>
            <hr className={`border-t-4 px-8 mx-auto ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
            <div className="flex flex-wrap justify-center items-start">
                <SkillCard 
                    link="https://git-scm.com/doc"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
                    title="Git"
                    text="I have experience using Git and its CLI as a version control system for my projects."/>
                <SkillCard 
                    link="https://docs.kernel.org/"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                    title="Linux"
                    text="I have experience with Linux distributions. I currently use Fedora, and I have also used Arch-based distributions."/>
                <SkillCard
                    link="#"
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="Programming Languages"
                    text="I have also had experience with various programming languages such as C++, C#, Java, and Kotlin."/>
            </div>    
        </div>
    );
}

export default Skills;