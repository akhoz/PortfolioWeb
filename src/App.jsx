import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx"
import Experience from './pages/Experience.jsx';
import Projects from "./pages/Projects.jsx"

function App() {
  const root = "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <div>
          <Header className='opacity-90' />
          <Routes>
            <Route path={`${root}`} element={<Home />} />
            <Route path={`${root}/Experience`} element={<Experience />} />
            <Route path={`${root}/Projects`} element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
