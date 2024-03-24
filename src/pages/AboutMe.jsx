import { Link, useLocation } from 'react-router-dom';
import {useTheme} from "../contexts/ThemeContext.jsx";

import { FaGithub } from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function AboutMe() {
    const { isLightMode, toggleTheme } = useTheme();
    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return(
        <div className="flex flex-col lg:flex-row justify-center items-center mt-44 mb-36 mx-20">
            <div className={`w-48 h-48 mb-10 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:mb-0 rounded-full overflow-hidden flex items-center justify-center ${isLightMode ? "bg-gradient-to-r from-lightGradientInit to-lightGradientEnd" : "bg-gradient-to-r from-darkGradientInit to-darkGradientEnd"}`}>
                <img src="./images/pfp.jpg" alt="Profile Picture" className="w-11/12 h-11/12 object-cover rounded-full"/>
            </div>
            <div className={`${isLightMode ? "text-black" : "text-white"} md:max-w-sm lg:max-w-md sm:text-center lg:text-left lg:ml-8 flex flex-col`}>
                <p className={`text-xl font-bold`}>
                    Personal Information
                </p>
                <p>
                    My name is Adrian Villalobos, and I'm currently studying Software Engineering at ITCR, in my second year.
                </p>
                <p className={`text-xl font-bold mt-5`}>
                    Contact Information
                </p>
                <p>
                    You can contact me via email at <a href= "mailto:akhozdev@gmail.com"
                    className={`border-b ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}>
                    akhozdev@gmail.com</a> or on LinkedIn. Also, for more casual matters, feel free to reach out to me on Instagram or X (Twitter).
                </p>
                <p className={`text-xl font-bold mt-5`}>
                    Skills
                </p>
                <p>
                    Among my skills are mathematics, including linear algebra, differential and integral calculus, and of course, various programming skills that you can find in my <Link to='/PortfolioWeb/Skills' 
                    onClick={handleButtonClick} className={`border-b ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}>  skills section</Link>
                </p>
            </div>
            <div className={`${isLightMode ? "bg-gradient-to-r lg:bg-gradient-to-b from-lightGradientInit to-lightGradientEnd" : "bg-gradient-to-r lg:bg-gradient-to-b from-darkGradientInit to-darkGradientEnd"} flex lg:flex-col sm:flex-row space-x-2 lg:space-x-0 justify-center items-center rounded-xl overflow-hidden px-2 py-2 mt-16 lg:mt-0 xl:ml-96`}>
                <a href="https://www.instagram.com/adrian_jvp25/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110 ${isLightMode ? "text-black" : "text-white"}`}/>
                </a>

                <a href="https://github.com/akhoz" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={`text-3xl mr-3  my-2 md:transition-transform md:transform md:hover:scale-110 ${isLightMode ? "text-black" : "text-white"} mx-0`} />
                </a>

                <a href= "mailto:akhozdev@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SiGmail className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110 ${isLightMode ? "text-black" : "text-white"}`}/>
                </a>

                <a href="https://twitter.com/akhoz69" target="_blank" rel="noopener noreferrer">
                    <BsTwitterX className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110 ${isLightMode ? "text-black" : "text-white"}`} />
                </a>

                <a href="https://www.instagram.com/adrian_jvp25/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className={`text-3xl my-2 md:transition-transform md:transform md:hover:scale-110 ${isLightMode ? "text-black" : "text-white"}`}/>
                </a>
            </div>
        </div>
    );
}

export default AboutMe;