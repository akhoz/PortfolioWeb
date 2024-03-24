import {FaGithub} from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext.jsx";

function Footer() {
    const { isLightMode } = useTheme();

    return (
        <footer className={`flex justify-center items-center py-3 md:h-10 ${isLightMode ? "bg-lightGray" : "bg-darkBlue"}`}>
            <p className={`${isLightMode ? 'text-black' : 'text-white'} opacity-70`}>
                &copy; 2023 AkhozDev
            </p>
        </footer>
    );
}

export default Footer;