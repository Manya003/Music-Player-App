import LyricsPanel from "./LyricsPanel";

const MusicCard = ({
  song,
  isPlaying,
  handlePlayPause,
  handleNext,
  handlePrevious,
  currentTime,
  duration,
  setCurrentTime,
  audioRef,
  showLyrics,
  setShowLyrics,
  activeLyric,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">

      {/* 🎵 Music Card */}
      <div className="backdrop-blur-xl bg-white/25 p-6 rounded-3xl w-80 text-black shadow-xl">

        <img src={song.image} className="rounded-2xl mb-4" />

        <h2 className="text-lg font-semibold">{song.title}</h2>
        <p className="text-sm opacity-80">{song.artist}</p>

        {/* Progress Bar */}
        <input
          type="range"
          value={currentTime}
          max={duration}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
          className="w-full mt-4"
        />

        {/* Controls */}
        <div className="flex justify-between items-center mt-4">
          
          {/* Previous button */}
          <button onClick={handlePrevious} className="active:scale-90 transition">
            <i className="ri-skip-back-fill text-4xl"></i>
          </button>

          {/* Play / Pause */}
          <button onClick={handlePlayPause}>
            <i className={`${isPlaying ? "ri-pause-circle-fill" : "ri-play-circle-fill"} text-5xl`}></i>
            {/* {isPlaying ? "⏸" : "<i className="ri-play-circle-fill"></i>"} */}
          </button>

          {/* <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="text-md opacity-80"
          >
            {showLyrics ? "Hide Lyrics" : "Show Lyrics"}
          </button>  */}

          {/* Next button */}
          <button onClick={handleNext} className="active:scale-90 transition">
            <i className={"ri-skip-forward-fill text-4xl"}></i>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="text-md opacity-80"
          >
            {showLyrics ? "Hide Lyrics" : "Show Lyrics"}
          </button>
        </div>
      </div>

      {showLyrics && (<div className="backdrop-blur-xl bg-white/20 p-4 rounded-2xl w-80 text-gray-500 text-sm max-h-60 overflow-y-auto shadow-lg transition-all duration-300 ease-in-out">
        {song.lyrics.map((line, index) => (
          <p
            key={index}
            ref={el => {
              if (index === activeLyric && el) {
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }
            }}
            className={`transition-all duration-300 ${index === activeLyric
                ? "text-black font-semibold scale-100"
                : "text-gray-800"
              }`}
          >
            {line.text}
          </p>
        ))}
      </div>
      )}
    </div>
  );
};

export default MusicCard;
