import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import Projects from "./pages/Projects.jsx"
import Skills from "./pages/Skills.jsx"

function App() {
    const root = "/PortfolioWeb";

    return (
        <div className="flex flex-col min-h-screen">
            <Router>
                <div>
                    <Header />
                    <Routes>
                            <Route path={`${root}`} element={<Home />} />
                            <Route path={`${root}/AboutMe`} element={<AboutMe />} />
                            <Route path={`${root}/Projects`} element={<Projects />} />
                            <Route path={`${root}/Skills`} element={<Skills />} />
                            
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;