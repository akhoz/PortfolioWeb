import {useTheme} from "../contexts/ThemeContext.jsx";
import classNames from "classnames";

function ThemeToggle() {
    const { isLightMode, toggleTheme } = useTheme();

    return (
        <div>
            <div
                className={`flex items-center ${isLightMode ? "bg-gradient-to-r from-lightGradientInit to-lightGradientEnd" : "bg-gradient-to-r from-darkGradientInit to-darkGradientEnd"} w-10 h-5 rounded-full md:w-14 md:h-7 transition-all duration-300`}
                onClick={toggleTheme}
            >
        <span
            className={classNames(
                `w-4 h-4 mx-1 bg-lightGray rounded-full transition-all duration-300 md:w-6 md:h-6`,
                {
                    "bg-darkBlue": isLightMode,
                    "translate-x-4": isLightMode,
                    "md:translate-x-6": isLightMode,
                }
            )}
        />
            </div>
        </div>
    );
}

export default ThemeToggle;