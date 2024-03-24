import { useTheme } from "../contexts/ThemeContext";
import SkillCard from "../components/SkillCard";

function Skills() {
    const { isLightMode } = useTheme();

    return (
        <div className={`flex flex-col justify-center items-center mt-52 my-64`} >
            <p className={`${isLightMode ? "text-black" : "text-white"} text-xl font-bold`}>Backend</p>
            <hr className={`border-t-4 px-10 mx-auto ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
            <div className="flex flex-wrap justify-center items-center">
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>

            </div>     


            <p className={`${isLightMode ? "text-black" : "text-white"} text-xl font-bold mt-44`}>Frontend</p>
            <hr className={`border-t-4 px-10 mx-auto ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
            <div className="flex flex-wrap justify-center items-center">
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
            </div>     

            <p className={`${isLightMode ? "text-black" : "text-white"} text-xl font-bold mt-44`}>Artificial Intelligence</p>
            <hr className={`border-t-4 px-24 mx-auto ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
            <div className="flex flex-wrap justify-center items-center">
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
            </div>    

            <p className={`${isLightMode ? "text-black" : "text-white"} text-xl font-bold mt-44`}>Programming Languages</p>
            <hr className={`border-t-4 px-28 mx-auto ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
            <div className="flex flex-wrap justify-center items-center">
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
            </div>    

            <p className={`${isLightMode ? "text-black" : "text-white"} text-xl font-bold mt-44`}>Other tools</p>
            <hr className={`border-t-4 px-12 mx-auto ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
            <div className="flex flex-wrap justify-center items-center">
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
                <SkillCard 
                    imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    title="C/CPP"
                    text="aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaa"/>
            </div>    
        </div>
    );
}

export default Skills;