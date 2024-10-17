import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import HeroSection from './components/HeroSection/HeroSection';
import AllBeats from './pages/AllBeats';
import FreeBeats from './pages/FreeBeats';
import PremiumBeats from './pages/PremiumBeats';
import LicenseInfo from './pages/LicenseInfo';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import SignUpLogin from './pages/SignUpLogin';


function Layout({ isModalOpen }) {
    const location = useLocation();

    // Define an array of paths where the MusicPlayer should NOT appear
    const noMusicPlayerPaths = ['/contact', '/faq', '/license-info'];

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/all-beats" element={<AllBeats />} />
                <Route path="/free-beats" element={<FreeBeats />} />
                <Route path="/premium-beats" element={<PremiumBeats />} />
                <Route path="/license-info" element={<LicenseInfo />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup-login" element={<SignUpLogin />} />
            </Routes>

            {/* Conditionally render the MusicPlayer based on the current path and modal state */}
            {!noMusicPlayerPaths.includes(location.pathname) && !isModalOpen && <MusicPlayer />}
        </div>
    );
}

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState); // Toggle modal state
    };

    return (
        <Router>
            <Navbar toggleModal={toggleModal} /> {/* Pass toggleModal to Navbar */}
            <Layout isModalOpen={isModalOpen} /> {/* Pass the modal state to Layout */}
        </Router>
    );
}

export default App;
