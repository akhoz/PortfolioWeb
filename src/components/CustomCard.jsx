import PropTypes from 'prop-types';
import {useTheme} from "../contexts/ThemeContext.jsx";

function CustomCard(props) {
    const { isLightMode } = useTheme();

    return (
        <div className="max-w-md rounded-xl object-cover overflow-hidden shadow-lg md:transition-transform md:transform md:hover:scale-105" >
            <img className="w-full h-56" src={`./images/cards${props.imgSrc}`} alt={props.alt} />
            <div className={`px-6 py-4 ${isLightMode ? "bg-lightGray" : "bg-darkBlue"}`}>
                <div className={`${isLightMode ? "text-black" : "text-white"} font-bold text-xl mb-2`}>
                    {props.title}
                </div>

                <hr className={`border-t-1 mx-auto mb-2 ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
                
                <p className={`${isLightMode ? "text-black" : "text-white"} text-base italic text-center`}>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

CustomCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CustomCard;