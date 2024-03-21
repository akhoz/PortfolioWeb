import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleTheme = () => {
        setIsLightMode((prevMode) => !prevMode);
        document.body.classList.toggle("light-mode", !isLightMode);
    };

    return (
        <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useTheme = () => {
    console.log(useContext(ThemeContext));
    return useContext(ThemeContext);
};