import CustomCard from "../components/CustomCard.jsx";
import OutlineButton from '../components/OutlineButton.jsx';
import { useTheme } from "../contexts/ThemeContext.jsx";
import { PiCrownSimpleFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

function Projects() {
    const { isLightMode } = useTheme();

    return (
        <div className="flex flex-grow flex-col items-center lg:items-left mt-36 mb-5">
                <div className={`${isLightMode ? 'text-black' : 'text-white'} flex flex-row text-2xl md:text-4xl font-bold justify-start items-center lg:w-screen lg:max-w-screen-lg xl:max-w-screen-xl`}>
                    <span>Hall of Fame</span>
                    <PiCrownSimpleFill className='text-3xl md:text-5xl ml-2' />
                </div>

                <div className={`flex flex-col justify-center items-center space-y-5 my-3 w-80 md:max-w-screen-lg md:w-screen lg:flex-row lg:space-x-5 lg:space-y-0  lg:max-w-screen-lg xl:max-w-screen-xl`}>
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                </div>

                <div className={`${isLightMode ? 'text-black' : 'text-white'} flex flex-row text-2xl mt-5 md:text-4xl font-bold justify-start items-center lg:w-screen lg:max-w-screen-lg xl:max-w-screen-xl`}>
                    <span>Personal Projects</span>
                    <FaStar className='text-3xl md:text-5xl ml-2' />
                </div>

                <div className={`flex flex-col justify-center items-center space-y-5 my-3 w-80 md:max-w-screen-lg md:w-screen lg:flex-row lg:space-x-5 lg:space-y-0  lg:max-w-screen-lg xl:max-w-screen-xl`}>
                    
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                </div>

                <div className={`${isLightMode ? 'text-black' : 'text-white'} flex flex-row text-2xl mt-5 md:text-4xl font-bold justify-start items-center lg:w-screen lg:max-w-screen-lg xl:max-w-screen-xl`}>
                    <span>Academic Projects</span>
                    <IoIosPaper className='text-3xl md:text-5xl ml-2' />
                </div>

                <div className={`flex flex-col justify-center items-center space-y-5 my-3 w-80 md:max-w-screen-lg md:w-screen lg:flex-row lg:space-x-5 lg:space-y-0  lg:max-w-screen-lg xl:max-w-screen-xl`}>
                    
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                </div>

                <div className='mt-5 my-3'>
                    <OutlineButton text="Find the rest of my projects on GitHub" link="https://github.com/akhoz"/>
                </div>
        </div>
    );
}

export default Projects;
