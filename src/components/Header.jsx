import { Link, useLocation } from 'react-router-dom';

import { useTheme } from '../contexts/ThemeContext.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import { CiMenuBurger } from "react-icons/ci";

function Header() {
  const { isLightMode, toggleTheme } = useTheme();

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={`flex flex-row justify-between items-center mb-3 fixed top-0 left-0 right-0 z-10 py-8 px-10 md:px-28 transition-all duration-300 opacity-90 ${isLightMode ? 'bg-lightGray' : 'bg-darkBlue'}`}>
      <Link to='/' onClick={handleButtonClick} className={`${isLightMode ? 'text-black' : 'text-white'}`}>
        AkhozDev
      </Link>
      <div className='hidden md:flex flex-row space-x-2 md:space-x-5 items-center'>
        <Link to='/' onClick={handleButtonClick} className={`${isLightMode ? 'text-black' : 'text-white'}`}>
          Home
        </Link>
        <Link to='/Experience/' onClick={handleButtonClick} className={`${isLightMode ? 'text-black' : 'text-white'}`}>
          Experience
        </Link>
        <Link to='/Projects/' onClick={handleButtonClick} className={`${isLightMode ? 'text-black' : 'text-white'}`}>
          Projects
        </Link>
      </div>
      <div className='flex flex-col items-end justify-center text-white md:hidden'>
        <CiMenuBurger />
      </div>
    </div>
  );
}

export default Header;
