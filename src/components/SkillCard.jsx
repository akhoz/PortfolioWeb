import PropTypes from 'prop-types';
import {useTheme} from "../contexts/ThemeContext.jsx";

function SkillCard(props) {
    const { isLightMode } = useTheme();

    return(
        <div className="max-w-md overflow-hidden flex flex-col items-center justify-center p-4" >
            <div className={`flex justify-center items-center w-20 h-20 rounded-full ${isLightMode ? "bg-gradient-to-r from-lightGradientInit to-lightGradientEnd" : "bg-gradient-to-r from-darkGradientInit to-darkGradientEnd"}`}>
                <img className='w-7/12 h-7/12' src={props.imgSrc}></img>
            </div>
            <p className={`${isLightMode ? "text-black" : "text-white"} text-center font-bold text-xl mt-1`}>
                {props.title}
            </p>
            <p className={`${isLightMode ? "text-black" : "text-white"} text-base text-center max-w-xs`}>
                {props.text}
            </p>
        </div>
    );
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default SkillCard;