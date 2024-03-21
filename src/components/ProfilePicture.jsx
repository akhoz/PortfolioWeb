import {useTheme} from "../contexts/ThemeContext.jsx";

function ProfilePicture() {
    const { isLightMode, toggleTheme } = useTheme();

    return (
        <div className={`w-48 h-48 rounded-full overflow-hidden flex items-center justify-center ${isLightMode ? "bg-gradient-to-r from-lightGradientInit to-lightGradientEnd" : "bg-gradient-to-r from-darkGradientInit to-darkGradientEnd"}`}>
            <img src="/images/pfp.jpg" alt="Profile Picture" className="w-11/12 h-11/12 object-cover rounded-full"/>
        </div>
    );
}

export default ProfilePicture;