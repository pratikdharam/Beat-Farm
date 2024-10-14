import React, { useState, useEffect, useRef } from "react";
import { FaHeart, FaPlay, FaPause, FaStepBackward, FaStepForward, FaEllipsisV, FaShareAlt, FaPlus, FaDownload, FaMusic, FaInfoCircle, FaRandom, FaRedo, FaVolumeUp } from "react-icons/fa";
import songFile from "/Music/test.mp3"; // This is just a placeholder; you can use it as an example.
import img1 from "../../assets/img1.jpg"; // Move two directories up to access assets
import img2 from "../../assets/img2.jpg"; // Move two directories up to access assets



const MusicPlayer = () => {
  const songs = [
    {
      name: "Song 1",
      file: "/Music/song1.mp3",
      icon: img1 // Replace with the actual path or URL to the icon image
    },
    {
      name: "Song 2",
      file: "/Music/song2.mp3",
      icon: img2 // Replace with the actual path or URL to the icon image
    },
    // Add more songs as needed
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(new Audio(songs[currentSongIndex].file)); // Use the current song file
  const [isLiked, setIsLiked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Play/Pause Function
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Like/Unlike Function
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // Dropdown Function
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Update Current Time
  useEffect(() => {
    const updateTimer = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener("timeupdate", updateTimer);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateTimer);
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  // Function to play the next song
  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song
    setCurrentSongIndex(nextIndex);
    audioRef.current.src = songs[nextIndex].file; // Update the audio source
    audioRef.current.play(); // Play the next song
    setIsPlaying(true); // Update playing status
  };

  // Update the audio source when the song changes
  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex].file; // Set the audio source
    audioRef.current.load(); // Load the new song
    if (isPlaying) {
      audioRef.current.play(); // Play the new song if it was playing
    }
  }, [currentSongIndex]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-lg shadow-lg z-50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Now Playing</h2>
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <FaEllipsisV />
          </button>
          {dropdownOpen && (
            <div className="absolute bg-white shadow-lg rounded mt-2 right-0 w-48 z-10">
              <ul className="py-1">
                <li className="flex items-center px-2 py-2 hover:bg-gray-200">
                  <FaShareAlt className="mr-2" /> Share
                </li>
                <li className="flex items-center px-2 py-2 hover:bg-gray-200">
                  <FaPlus className="mr-2" /> Add to Playlist
                </li>
                <li className="flex items-center px-2 py-2 hover:bg-gray-200">
                  <FaDownload className="mr-2" /> Download
                </li>
                <li className="flex items-center px-2 py-2 hover:bg-gray-200">
                  <FaMusic className="mr-2" /> View Lyrics
                </li>
                <li className="flex items-center px-2 py-2 hover:bg-gray-200">
                  <FaMusic className="mr-2" /> Play Similar Song
                </li>
                <li className="flex items-center px-2 py-2 hover:bg-gray-200">
                  <FaInfoCircle className="mr-2" /> Get Song Info
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Current Song and Next Song */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <img src={songs[currentSongIndex].icon} alt="Current Song" className="w-10 h-10 mr-2" />
          <span className="text-lg">{songs[currentSongIndex].name}</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg">{songs[(currentSongIndex + 1) % songs.length].name}</span>
          <img src={songs[(currentSongIndex + 1) % songs.length].icon} alt="Next Song" className="w-10 h-10 ml-2" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <input
          type="range"
          className="w-full"
          value={(currentTime / audioRef.current.duration) * 100 || 0}
          onChange={(e) => {
            const newTime = (e.target.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
          }}
        />
        <div className="flex justify-between text-sm">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(audioRef.current.duration || 0)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button onClick={toggleLike} className="hover:text-red-500">
          <FaHeart className={`${isLiked ? "text-red-500" : ""}`} />
        </button>
        <button onClick={togglePlayPause} className="hover:text-blue-500">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className="hover:text-blue-500" onClick={() => setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length)}>
          <FaStepBackward />
        </button>
        <button className="hover:text-blue-500" onClick={playNextSong}>
          <FaStepForward />
        </button>
        <button className="hover:text-blue-500">
          <FaRandom />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center">
        <FaVolumeUp />
        <input
          type="range"
          className="w-32 mx-2"
          value={volume * 100}
          onChange={(e) => {
            const newVolume = e.target.value / 100;
            setVolume(newVolume);
            audioRef.current.volume = newVolume;
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
