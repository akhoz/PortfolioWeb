import { Link, useLocation } from 'react-router-dom';

import { useTheme } from '../contexts/ThemeContext.jsx';
import ThemeToggle from './ThemeToggle.jsx';

function Header() {
    const { isLightMode, toggleTheme } = useTheme();

    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={`flex flex-row justify-between items-center mb-3 fixed top-0 left-0 right-0 z-10 p-4 transition-all duration-300 backdrop-blur-sm ${isLightMode ? 'bg-lightGray' : 'bg-darkBlue'}`}>
            <Link to ='/PortfolioWeb/' onClick={handleButtonClick} className={`${isLightMode ? 'text-black' : 'text-white'}`}>
                AkhozDev
            </Link>
            <div className='flex flex-row space-x-2 md:space-x-5 items-center'>
                <Link to ='/PortfolioWeb/' onClick={handleButtonClick} className={`${isLightMode ? 'text-black' : 'text-white'}`}>
                    Home
                </Link>
                <ThemeToggle />
            </div>  
        </div>
    );
}

export default Header;