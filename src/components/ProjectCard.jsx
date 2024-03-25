import { useTheme } from "../contexts/ThemeContext.jsx";
import PropTypes from 'prop-types';

function ProjectCard(props) {
    const { isLightMode } = useTheme();

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className="h-full w-full rounded-xl object-cover overflow-hidden" src={props.imgSrc} alt="" />
                </div>
                    <div className={`absolute inset-0 h-full w-full rounded-xl overflow-hidden ${isLightMode ? "bg-gradient-to-bl from-lightGradientInit to-lightGradientEnd" : "bg-gradient-to-bl from-darkGradientInit to-darkGradientEnd"} px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                        <div className="flex min-h-full flex-col items-center justify-start py-5">
                            <h1 className="text-3xl font-bold">{props.title}</h1>
                            <hr className={`border-t-2 w-full px-2 my-2 bg-white`}/>
                            <p className="text-base">{props.description}</p>
                            <hr className={`border-t-2 w-full px-2 mt-2 mb-3 bg-white`}/>
                            <img className='w-3/4' src={props.technologies} />
                        </div>
                </div>
            </div>
        </div>  
        </a>
    );
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired
};

export default ProjectCard;