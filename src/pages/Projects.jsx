import CustomCard from "../components/CustomCard.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { PiCrownSimpleFill } from "react-icons/pi";
import { IoIosPaper } from "react-icons/io";

function Projects() {
    const { isLightMode } = useTheme();

    return (
        <div className="flex flex-grow flex-col items-center md:items-left mt-36">
            <div>
                <div className={`${isLightMode ? 'text-black' : 'text-white'} flex flex-row text-2xl md:text-4xl font-bold justify-start items-center`}>
                    <span>Hall of Fame</span>
                    <PiCrownSimpleFill className='text-3xl md:text-5xl ml-2' />
                </div>

                <div className={`flex flex-wrap justify-center items-center space-x-5 space-y-5 my-5 w-80 md:max-w-screen-xl md:w-screen`}>
                <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                </div>

                <div className={`${isLightMode ? 'text-black' : 'text-white'} flex flex-row text-2xl md:text-4xl font-bold justify-start items-center mt-12`}>
                    <span>My Projects</span>
                    <IoIosPaper className='text-2xl md:text-4xl ml-2' />
                </div>

                <div className={`flex flex-wrap justify-center items-center text-center space-x-5 space-y-5 my-5 w-full md:max-w-screen-xl md:w-screen`}>

                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />

                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                    <CustomCard  imgSrc='/wallhaven-3lyrvy_1920x1080.png' alt='ProjectIMG' title='Projects' description='Explore the projects I&apos;ve developed in this section.' />
                </div>


            </div>
        </div>
    );
}

export default Projects;
