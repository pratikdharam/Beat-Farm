import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar/Navbar';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import HeroSection from './components/HeroSection/HeroSection';

// Import your page components for routing
import AllBeats from './pages/AllBeats';
import FreeBeats from './pages/FreeBeats';
import PremiumBeats from './pages/PremiumBeats';
import LicenseInfo from './pages/LicenseInfo';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import SignUpLogin from './pages/SignUpLogin';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} /> {/* Default Hero Section */}
          <Route path="/all-beats" element={<AllBeats />} />
          <Route path="/free-beats" element={<FreeBeats />} />
          <Route path="/premium-beats" element={<PremiumBeats />} />
          <Route path="/license-info" element={<LicenseInfo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup-login" element={<SignUpLogin />} />
        </Routes>
        <MusicPlayer />
      </div>
    </Router>
  );
}

export default App;
