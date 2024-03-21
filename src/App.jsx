import './App.css'
import Header from "./components/Header.jsx";
import ProfilePicture from "./components/ProfilePicture.jsx";
import {useTheme} from "./contexts/ThemeContext.jsx";
import OutlineButton from './components/OutlineButton.jsx';
import CustomCard from './components/CustomCard.jsx';
import Footer from "./components/Footer.jsx";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function App() {
    const { isLightMode, toggleTheme } = useTheme();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow flex-col items-center mt-36">
                <ProfilePicture className="" />
                <h1 className={`mt-3 text-3xl ${isLightMode ? "text-black" : "text-white"}`}>
                    Adrian Villalobos
                </h1>
                <p className={`mt-2 mx-12 md:mx-48 text-center ${isLightMode ? "text-black" : "text-white"}`}>
                    Hello, I'm Adrian, a software developer from Costa Rica.
                    In this website you can find some of my projects and information about me.
                    I am a student at TEC, currently in my second year. Additionally, my main 
                    focus is on Artificial Intelligence and web development.
                </p>

                <div className="my-5 px-5 text-center space-y-8 md:space-y-2 md:space-x-2">
                    <OutlineButton text="View Linkedin" link="/" />
                    <OutlineButton text="View GitHub" link="https://github.com/akhoz" />
                </div>

                <IoIosArrowDropdownCircle className={`hidden md:block text-6xl animate-bounce my-10 md:my-16 ${isLightMode ? "text-lightGradientInit" : "text-darkGradientInit"}`} />

                <div className='flex flex-grow flex-col justify-center text-center space-y-5 mb-5 px-3 md:space-y-0 md:space-x-5 md:mb-24 md:flex-row md:w-fit'>
                    <CustomCard  imgSrc='wallhaven-3lyrvy_1920x1080.png' alt='AboutMeIMG' title='About Me' description='Here you can find general information about me.' />
                    <CustomCard  imgSrc='wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='wallhaven-3lyrvy_1920x1080.png' alt='SkillsIMG' title='Skills' description='Discover my skills in tech and math.' />
                </div>

                <div className='flex flex-row mt-10 mb-4 opacity-50 space-x-2 items-center justify-center'>
                    <a href="https://github.com/akhoz" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={`text-3xl mr-3  my-2 ${isLightMode ? "text-black" : "text-white"} mx-0`} />
                    </a>

                    <a href="https://twitter.com/akhoz69" target="_blank" rel="noopener noreferrer">
                        <BsTwitterX className={`text-3xl my-2 ${isLightMode ? "text-black" : "text-white"}`} />
                    </a>

                    <a href="https://www.instagram.com/adrian_jvp25/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className={`text-3xl my-2 ${isLightMode ? "text-black" : "text-white"}`}/>
                    </a>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default App;