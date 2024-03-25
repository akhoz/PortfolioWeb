import { Link, useLocation } from 'react-router-dom';

import ProfilePicture from "../components/ProfilePicture.jsx";
import OutlineButton from '../components/OutlineButton.jsx';
import CustomCard from '../components/CustomCard.jsx';

import {useTheme} from "../contexts/ThemeContext.jsx";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Home() {
    const { isLightMode, toggleTheme } = useTheme();
    const location = useLocation();

    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
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

                <div className='flex flex-grow flex-col justify-center text-center space-y-5 mb-5 px-3 md:mb-36 lg:space-y-0 lg:space-x-5 lg:flex-row lg:w-fit'>
                    <Link to='./AboutMe' onClick={handleButtonClick}>
                        <CustomCard  imgSrc='/aboutme.webp' alt='AboutMeIMG' title='About Me' description='Here you can find general information about me.' />
                    </Link>
                    <Link to ='./Projects' onClick={handleButtonClick}>
                        <CustomCard  imgSrc='/projects.webp' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    </Link>
                    <Link to='./Skills' onClick={handleButtonClick}>
                        <CustomCard  imgSrc='/skills.webp' alt='SkillsIMG' title='Skills' description='Discover my skills in tech and math.' />
                    </Link>
                </div>
            </div>
    );
}

export default Home;