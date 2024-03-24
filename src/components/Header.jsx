import { Link, useLocation } from 'react-router-dom';

import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import { BsList} from 'react-icons/bs';

function Header() {
    const { isLightMode, toggleTheme } = useTheme();

    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            {['md'].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className={`mb-3 fixed top-0 left-0 right-0 z-10 p-4 transition-all duration-300 ${
                        isLightMode
                            ? 'bg-lightGray backdrop-blur-md backdrop-filter-saturate opacity-80'
                            : 'bg-darkBlue backdrop-blur-md backdrop-filter-saturate opacity-80'
                    }`}
                >
                    <Container fluid>
                        <Navbar.Brand href="#" className={`${isLightMode ? 'text-black' : 'text-white'}`}>
                            <Link to ='/PortfolioWeb/' onClick={handleButtonClick}>
                                AkhozDev
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            className={`${isLightMode ? 'text-black' : 'text-white'}`}
                        >
                            <BsList />
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className={`transition-all duration-300 ${isLightMode ? 'bg-lightGray' : 'bg-darkBlue'}`}
                        >
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                    className={`${isLightMode ? 'text-black' : 'text-white'}`}
                                >
                                    AkhozDev
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="items-center">
                                <hr className={`border-t-2 mx-auto mb-4 ${isLightMode ? "border-lightGradientInit" : "border-darkGradientInit"}`}/>
                                <Nav className={`justify-content-end flex-grow-1 pe-3`}>
                                    <Nav.Link href="" className={`${isLightMode ? 'text-black' : 'text-white'}`} onClick={handleButtonClick}>
                                    <Link to ='/PortfolioWeb/' onClick={handleButtonClick}>

                                        Home
                                    </Link>
                                    </Nav.Link>
                                </Nav>
                                <ThemeToggle />
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header;