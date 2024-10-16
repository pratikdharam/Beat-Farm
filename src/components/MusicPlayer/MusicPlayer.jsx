import React, { useState, useEffect, useRef } from "react";
import { FaHeart, FaPlay, FaPause, FaStepBackward, FaStepForward, FaEllipsisV, FaShareAlt, FaPlus, FaDownload, FaMusic, FaInfoCircle, FaRandom, FaRedo, FaVolumeUp, FaBackward, FaForward, FaStar } from "react-icons/fa";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const MusicPlayer = () => {
  const songs = [
    { name: "Song 1", file: "/Music/song1.mp3", icon: img1 },
    { name: "Song 2", file: "/Music/song2.mp3", icon: img2 },
    { name: "Song 3", file: "/Music/song3.mp3", icon: img3 },
    { name: "Song 4", file: "/Music/song4.mp3", icon: img4 },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [rating, setRating] = useState({});
  const [hoveredStar, setHoveredStar] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const audioRef = useRef(new Audio(songs[currentSongIndex].file));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleLike = () => setIsLiked(!isLiked);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const playNextSong = () => {
    if (isLooping) {
      // If looping is enabled, replay the current song
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      // Normal behavior: play the next song in the list or shuffle if enabled
      let nextIndex;
      if (isShuffling) {
        nextIndex = Math.floor(Math.random() * songs.length);
      } else {
        nextIndex = (currentSongIndex + 1) % songs.length;
      }
      setCurrentSongIndex(nextIndex);
      audioRef.current.src = songs[nextIndex].file;
      audioRef.current.play();
    }
    setIsPlaying(true);
  };

  const playSongAtIndex = (index) => {
    setCurrentSongIndex(index);
    audioRef.current.src = songs[index].file;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const toggleShuffle = () => setIsShuffling(!isShuffling);
  const toggleLoop = () => setIsLooping(!isLooping);

  const skipBackward = () => {
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 3);
  };

  const skipForward = () => {
    audioRef.current.currentTime = Math.min(audioRef.current.duration, audioRef.current.currentTime + 3);
  };

  useEffect(() => {
    const updateTimer = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    audioRef.current.addEventListener("timeupdate", updateTimer);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateTimer);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    // Set source and load the new song
    audio.src = songs[currentSongIndex].file;
    audio.load();

    // Play the song if it's already playing
    if (isPlaying) {
      audio.play();
    }

    // Cleanup on unmount or song change
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [currentSongIndex, isPlaying]);


  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex].file;
    audioRef.current.load();
    audioRef.current.playbackRate = speed;
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex, speed]);

  useEffect(() => {
    audioRef.current.loop = isLooping;
  }, [isLooping]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  useEffect(() => {
    const handleSongEnd = () => {
      playNextSong(); // This will play the next song or loop depending on your logic
    };

    audioRef.current.addEventListener("ended", handleSongEnd);

    return () => {
      audioRef.current.removeEventListener("ended", handleSongEnd);
    };
  }, [currentSongIndex, isLooping, isShuffling]); // Ensure that it reacts to index or shuffle/loop changes


  const handleSpeedChange = (e) => {
    const selectedSpeed = parseFloat(e.target.value);
    setSpeed(selectedSpeed);
    audioRef.current.playbackRate = selectedSpeed;
  };


  const handleRating = (ratingValue) => {
    setRating((prev) => ({ ...prev, [songs[currentSongIndex].name]: ratingValue }));

  };

  return (


    <div className="fixed bottom-0 left-0 right-0 bg-[#F5E6D3] p-4 rounded-t-lg shadow-lg z-50 sm:p-6  ">


      {/* Current Song and Next Song */}
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <img src={songs[currentSongIndex].icon} alt="Current Song" className="w-10 h-10 mr-2" />
          <span className="text-lg">{songs[currentSongIndex].name}</span>
        </div>

        {/* Next Song Component, hidden on smaller screens, visible on md and larger */}
        <div
          className="hidden md:flex items-center cursor-pointer"
          onClick={() => playSongAtIndex((currentSongIndex + 1) % songs.length)}
        >
          <span className="text-lg">{songs[(currentSongIndex + 1) % songs.length].name}</span>
          <img src={songs[(currentSongIndex + 1) % songs.length].icon} alt="Next Song" className="w-10 h-10 ml-2" />
        </div>
      </div>


      {/* Progress Bar */}
      <div className="mb-0 hidden md:block">
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

      {/* Controls
      <div className="flex items-center justify-center space-x-20 mb-0">
        <button onClick={toggleLike} className="hover:text-red-500">
          <FaHeart className={`${isLiked ? "text-red-500" : ""}`} />
        </button>
        <button onClick={skipBackward} className="hover:text-blue-500">
          <FaBackward />
        </button>
        <button className="hover:text-blue-500" onClick={() => setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length)}>
          <FaStepBackward />
        </button>
        <button onClick={togglePlayPause} className="hover:text-blue-500">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className="hover:text-blue-500" onClick={playNextSong}>
          <FaStepForward />
        </button>
        <button onClick={skipForward} className="hover:text-blue-500">
          <FaForward />
        </button>
      </div> */}

      {/* Volume, Shuffle, Loop, Speed, and Rating */}
      <div className="flex justify-between items-center">
        <div className="justify-between hidden md:flex items-center gap-4">
          <div className="flex items-center ">
            <FaVolumeUp />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => {
                setVolume(e.target.value);
                audioRef.current.volume = e.target.value;
              }}
              className="ml-2"
            />
          </div>

          {/* Speed Selector */}
          <div className="flex items-center">
            <label htmlFor="speed" className="mr-2 text-sm">Speed</label>
            <select id="speed" value={speed} onChange={handleSpeedChange} className="p-1 border rounded">
              <option value="0.5">0.5x</option>
              <option value="0.75">0.75x</option>
              <option value="1">Normal</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>
        </div>



        {/* Controls */}
        <div className="flex items-center justify-evenly md:justify-center space-x-20 mb-0">
          <button onClick={toggleLike} className="hover:text-red-500 hidden md:block">
            <FaHeart className={`${isLiked ? "text-red-600" : ""}`} />
          </button>
          <button onClick={skipBackward} className="hover:text-blue-500 hidden md:block">
            <FaBackward />
          </button>
          <button className="hover:text-blue-500" onClick={() => setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length)}>
            <FaStepBackward />
          </button>
          <button onClick={togglePlayPause} className="hover:text-blue-500">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="hover:text-blue-500" onClick={playNextSong}>
            <FaStepForward />
          </button>
          <button onClick={skipForward} className="hover:text-blue-500 hidden md:block">
            <FaForward />
          </button>

          {/* 3 dots */}


          <div className="relative hidden md:block">
            <button onClick={toggleDropdown} className="focus:outline-none ">
              <FaEllipsisV />
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 right-0 w-48 z-10 max-h-40 overflow-y-auto">
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

        <div className="hidden md:flex space-x-6 ">
          <button onClick={toggleShuffle} className={`${isShuffling ? "text-blue-500" : ""}`}>
            <FaRandom />
          </button>
          <button onClick={toggleLoop} className={`${isLooping ? "text-blue-500" : ""}`}>
            <FaRedo />
          </button>



          {/* Rating */}
          <div className=" hidden md:flex items-center gap-2 ">
            <span>Rate this song</span>
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={`${hoveredStar > index || rating[songs[currentSongIndex].name] > index ? "text-yellow-500" : "text-gray-400"} cursor-pointer`}
                onMouseEnter={() => setHoveredStar(index + 1)}
                onMouseLeave={() => setHoveredStar(null)}
                onClick={() => handleRating(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>


    </div>

  );
};

export default MusicPlayer;
