import { useTheme } from "../contexts/ThemeContext";
import PropTypes from 'prop-types';

function OutlineButton(props) {
    const { isLightMode } = useTheme();

    return (
        <div className="rounded-md p-px bg-gradient-to-r from-gradientInit to-gradientEnd inline-block transition-transform transform hover:scale-105">
            <a
                href={props.link}
                className={`${isLightMode ? "bg-gradient-to-r from-lightGradientInit to-lightGradientEnd" : "bg-gradient-to-r from-darkGradientInit to-darkGradientEnd"} rounded-md text-white text-center font-semi-bold px-6 py-3 text-lg`}
                target="_blank"
                rel="noopener noreferrer" 
            >
                {props.text}
            </a>
        </div>
    );
}

OutlineButton.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default OutlineButton;