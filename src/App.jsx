import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import HeroSection from './components/HeroSection/HeroSection'
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <MusicPlayer />
    </div>
  );
}

export default App;
