import CustomCard from "../components/CustomCard.jsx";
import OutlineButton from '../components/OutlineButton.jsx';
import { useTheme } from "../contexts/ThemeContext.jsx";
import { PiCrownSimpleFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import ProjectCard from "../components/ProjectCard.jsx";

function Projects() {
    const { isLightMode } = useTheme();

    return (
        <>
            <div className="flex flex-grow flex-col items-center lg:items-left mt-36 mb-5">
                    <div className={`${isLightMode ? 'text-black' : 'text-white'} flex flex-row text-2xl md:text-4xl font-bold justify-start items-center lg:w-screen lg:max-w-screen-lg xl:max-w-screen-xl`}>
                        <span>Hall of Fame</span>
                        <PiCrownSimpleFill className='text-3xl md:text-5xl ml-2' />
                    </div>

                    <div className={`flex flex-col justify-center items-center space-y-5 my-3 w-80 md:max-w-screen-lg md:w-screen lg:flex-row lg:space-x-5 lg:space-y-0  lg:max-w-screen-lg xl:max-w-screen-xl`}>
                        <ProjectCard 
                            imgSrc='./images/cards/portfolio.webp' 
                            title='Web Portfolio'
                            description='The creation of this website is one of my best projects. On this website, you can find information about me.'
                            link="https://github.com/akhoz/PortfolioWeb"
                            technologies='https://skillicons.dev/icons?i=html,css,js,react,tailwindcss,vite&perline=3'/>
                        <ProjectCard 
                            imgSrc='./images/cards/COMINGSOON.png' 
                            title='Coming soon'
                            description='I am working on new projects. Stay tuned for updates to this section.'
                            link="https://github.com/akhoz/PortfolioWeb"
                            technologies=''/>
                        <ProjectCard 
                            imgSrc='./images/cards/COMINGSOON.png' 
                            title='Coming soon'
                            description='I am working on new projects. Stay tuned for updates to this section.'
                            link="https://github.com/akhoz/PortfolioWeb"
                            technologies=''/>
                    </div>

                    <div className={`${isLightMode ? 'text-black' : 'text-white'} flex flex-row text-2xl mt-5 md:text-4xl font-bold justify-start items-center lg:w-screen lg:max-w-screen-lg xl:max-w-screen-xl`}>
                        <span>Personal Projects</span>
                        <FaStar className='text-3xl md:text-5xl ml-2' />
                    </div>

                    <div className={`flex flex-col justify-center items-center space-y-5 my-3 w-80 md:max-w-screen-lg md:w-screen lg:flex-row lg:space-x-5 lg:space-y-0  lg:max-w-screen-lg xl:max-w-screen-xl`}>
                        <ProjectCard 
                            imgSrc='./images/cards/MarkerLandingPage.png' 
                            title='Marker Landing Page'
                            description='Pre-release page of "Marker". This project marks my first foray into using TypeScript within React environments.'
                            link="https://akhoz.github.io/MarkerLandingPage/"
                            technologies='https://skillicons.dev/icons?i=html,css,ts,react,tailwindcss,vite&perline=3'/>
                        <ProjectCard 
                            imgSrc='./images/cards/COMINGSOON.png' 
                            title='Coming soon'
                            description='I am working on new projects. Stay tuned for updates to this section.'
                            link="https://github.com/akhoz/PortfolioWeb"
                            technologies=''/>
                        <ProjectCard 
                            imgSrc='./images/cards/COMINGSOON.png' 
                            title='Coming soon'
                            description='I am working on new projects. Stay tuned for updates to this section.'
                            link="https://github.com/akhoz/PortfolioWeb"
                            technologies=''/>
                    </div>

                    <div className={`${isLightMode ? 'text-black' : 'text-white'} flex flex-row text-2xl mt-5 md:text-4xl font-bold justify-start items-center lg:w-screen lg:max-w-screen-lg xl:max-w-screen-xl`}>
                        <span>Academic Projects</span>
                        <IoIosPaper className='text-3xl md:text-5xl ml-2' />
                    </div>

                    <div className={`flex flex-col justify-center items-center space-y-5 my-3 w-80 md:max-w-screen-lg md:w-screen lg:flex-row lg:space-x-5 lg:space-y-0  lg:max-w-screen-lg xl:max-w-screen-xl`}>
                        <ProjectCard 
                            imgSrc='./images/cards/webscrapping.webp' 
                            title='Web Scraping: Game Crawler'
                            description='A web scraper gathers game listings from various platforms, displaying the cheapest options on a public site with Metascore and Time to Achieve data."'
                            link="https://github.com/akhoz/Web-Scraping-Game-Crawler"
                            technologies='https://skillicons.dev/icons?i=python,vue,ts'/>
                        <ProjectCard 
                            imgSrc='./images/cards/COMINGSOON.png' 
                            title='Coming soon'
                            description='I am working on new projects. Stay tuned for updates to this section.'
                            link="https://github.com/akhoz/PortfolioWeb"
                            technologies=''/>
                        <ProjectCard 
                            imgSrc='./images/cards/COMINGSOON.png' 
                            title='Coming soon'
                            description='I am working on new projects. Stay tuned for updates to this section.'
                            link="https://github.com/akhoz/Web-Scraping-Game-Crawler"
                            technologies=''/>                                                
                    </div>

                    <div className='mt-5 my-3'>
                        <OutlineButton text="Find all my projects on GitHub" link="https://github.com/akhoz" />
                    </div>
            </div>
            <div className={`flex flex-row justify-start items-center lg:items-start mx-5 md:mx-32 mb-5 ${isLightMode ? "text-black" : "text-white"}`}>
                    <p>
                        Many of my projects have been collaborated on with these colleagues; 
                        I recommend checking out their profiles: <a href="https://github.com/iZackk26" target="_blank" rel="noopener noreferrer" className={`border-b ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}>
                        iZack,</a> <a href="https://github.com/hectorcaravacavargas" target="_blank" rel="noopener noreferrer" className={`border-b ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}>
                        Hector</a> & <a href="https://github.com/RamchelOrtiz" target="_blank" rel="noopener noreferrer" className={`border-b ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}> 
                        Ram. </a>
                    </p>
            </div>
        </>
    );
}

export default Projects;
