import { useRef, useState, useEffect } from "react";
import MusicCard from "./components/MusicCard";
import "./App.css";

const musicData = [
  {
    id: 1,
    title: "Birds of a Feather",
    artist: "Billie Eilish",
    duration: "3:17",
    image: "/images/songCover1.jpeg",
    audio: "/songs/song1.mp3",
    lyrics: [
      {time: 1, text: "I want you to stay"},
      {time: 8, text: "'Till I'm in the grave"},
      {time: 13, text: "'Til I rot away, dead and buried"},
      {time: 17, text: "'Till I'm in the casket you carry"},
      {time: 21,text: "If you go, I'm going too"},
      {time: 26,text: "Cause it was always you, alright"},
      {time: 31,text: "And if I'm turnin' blue, please don't save me"},
      {time: 35,text: "Nothing left to lose without my baby"},
      {time: 41,text: "Birds of a feather, we should stick together, I know"},
      {time: 46,text: "I said I'd never think I wasn't better alone"},
      {time: 50,text: "Can't change the weather, might not be forever"},
      {time: 54,text: "But if it's forever, it's even better"},
      {time: 60,text: "And I don't know what I'm cryin' for"},
      {time: 64,text: "I don't think I could love you more"},
      {time: 69,text: "It might not be long, but baby, I"},
      {time: 75,text: "I'll love you 'til the day that I die"},
      {time: 80,text: "'Til the day that I die"},
      {time: 85,text: "'Til the light leaves my eyes"},
      {time: 89,text: "'Til the day that I die"},
      {time: 95,text: "I want you to see, hm"},
      {time: 99,text: "How you look to me, hm"},
      {time: 104,text: "You wouldn't believe if I told ya"},
      {time: 108,text: "You would keep the compliments I throw ya"},
      {time: 113,text: "But you're so full of shit, uh"},
      {time: 118,text: "Tell me it's a bit, no"},
      {time: 122,text: "Say you don't see it, your mind's polluted"},
      {time: 127,text: "Say you wanna quit, don't be stupid"},
      {time: 132,text: "And I don't know what I'm cryin' for"},
      {time: 137,text: "I don't think I could love you more"},
      {time: 142,text: "Might not be long, but baby, I"},
      {time: 148,text: "Don't wanna say goodbye"},
      {time: 151,text: "Birds of a feather, we should stick together, I know ('til the day that I die)"},
      {time: 156,text: "I said I'd never think I wasn't better alone ('til the light leaves my eyes)"},
      {time: 160,text: "Can't change the weather, might not be forever ('til the day I die)"},
      {time: 165,text: "But if it's forever, it's even better"},
      {time: 169,text: "I knew you in another life"},
      {time: 174,text: "You had that same look in your eyes"},
      {time: 179,text: "I love you, don't act so surprised"},
      ]
  },
  {
    id: 2,
    title: "Messy",
    artist: "Lola Young",
    duration: "2:58",
    image: "/images/songCover2.jpg",
    audio: "/songs/song2.mp3",
    lyrics: [
      {time: 1, text: "You know I'm impatient"},
      {time: 22, text: "So why would you leave me waitin outside the station"},
      {time: 25, text: "When it was like minus four degrees?"},
      {time: 27, text: "And I, I get what you're sayin'"},
      {time: 31, text: "I just really don't wanna hear it right now"},
      {time: 34, text: "Can you shut up for like once in your life?"},
      {time: 37, text: "Listen to me, I took your nice words of advice about"},
      {time: 41, text: "How you think I'm gonna die lucky if I turn 33"},
      {time: 44, text: "Okay, so yeah, I smoke like a chimney"},
      {time: 46, text: "I'm not skinny, and I pull a Britney every other week"},
      {time: 50, text: "But cut me some slack, who do you want me to be?"},
      {time: 54, text: "'Cause I'm too messy, and then I'm too fucking clean"},
      {time: 58, text: "You told me, Get a job, then you ask where the hell I've been"},
      {time: 62, text: "And I'm too perfect 'til I open my big mouth"},
      {time: 67, text: "I want to be me, is that not allowed?"},
      {time: 71, text: "And I'm too clever, and then I'm too fucking dumb"},
      {time: 75, text: "You hate it when I cry, unless it's that time of the month"},
      {time: 80, text: "And I'm too perfect 'til I show you that I'm not"},
      {time: 84, text: "A thousand people I could be for you, and you hate the fucking lot"},
      {time: 91, text: "You hate the fucking lot"},
      {time: 95, text: "You hate the fucking lot"},
      {time: 99, text: "You hate, you hate"},
      {time: 106, text: "It's taking you ages"},
      {time: 108, text: "You still don't get the hint, I'm not askin' for pages"},
      {time: 112, text: "But one text or two would be nice"},
      {time: 114, text: "And please, don't pull those faces"},
      {time: 117, text: "When I've been out working my arse off all day"},
      {time: 120, text: "It's just one bottle of wine or two"},
      {time: 123, text: "But, hey, you can't even talk"},
      {time: 125, text: "You smoke weed just to help you sleep"},
      {time: 127, text: "Then why you out gettin' stoned at four o'clock?"},
      {time: 129, text: "And then you come home to me"},
      {time: 132, text: "And don't say hello, 'cause I got high again"},
      {time: 135, text: "And forgot to fold my clothes"},
      {time: 140, text: "'Cause I'm too messy, and then I'm too fucking clean"},
      {time: 145, text: "You told me, Get a job, then you ask where the hell I've been"},
      {time: 149, text: "And I'm too perfect 'til I open my big mouth"},
      {time: 154, text: "I want to be me, is that not allowed?"},
      {time: 158, text: "And I'm too clever, and then I'm too fucking dumb"},
      {time: 162, text: "You hate it when I cry, unless it's that time of the month"},
      {time: 166, text: "And I'm too perfect 'til I show you that I'm not"},
      {time: 170, text: "A thousand people I could be for you, and you hate the fucking lot"},
      {time: 177, text: "You hate the fucking lot"},
      {time: 182, text: "You hate the fucking lot"},
      {time: 208, text: "Oh-ooh, and I'm too messy, and then I'm too fucking clean"},
      {time: 214, text: "You told me, Get a job, then you ask where the hell I've been"},
      {time: 218, text: "And I'm too perfect 'til I open my big mouth"},
      {time: 223, text: "I want to be me, is that not allowed?"},
      {time: 227, text: "And I'm too clever, and then I'm too fucking dumb"},
      {time: 231, text: "You hate it when I cry, unless it's that time of the month"},
      {time: 235, text: "And I'm too perfect 'til I show you that I'm not"},
      {time: 240, text: "A thousand people I could be for you, and you hate the fucking lot"},
      {time: 246, text: "You hate the fucking lot"},
      {time: 251, text: "You hate the fucking lot"},
      {time: 255, text: "You hate the fucking lot"},
      {time: 259, text: "You hate the fucking lot"},
    ]
  },
  {
    id: 3,
    title: "Those Eyes",
    artist: "New West",
    duration: "2:58",
    image: "/images/songCover3.jpeg",
    audio: "/songs/song3.mp3",
    lyrics: [
    {time: 1, text: "When we're out in a crowd laughing loud"},
    {time: 5, text: "And nobody knows why"},
    {time: 12, text: "When we're lost at a club, getting drunk"},
    {time: 16, text: "And you give me that smile"},
    {time: 24, text: "Going home in the back of a car"},
    {time: 29, text: "And your hand touches mine"},
    {time: 36, text: "When we're done making love"},
    {time: 39, text: "And you look up and give me those eyes"},
    {time: 47, text: "'Cause all of the small things that you do"},
    {time: 53, text: "Are what remind me why I fell for you"},
    {time: 59, text: "And when we're apart, and I'm missing you"},
    {time: 66, text: "I close my eyes and all I see is you"},
    {time: 71, text: "And the small things you do"},
    {time: 84, text: "When you call me at night while you're out"},
    {time: 89, text: "Getting high with your friends (high with your friends)"},
    {time: 97, text: "Every hi, every bye, every I love you you've ever said"},
    {time: 105, text: "(You've ever said)"},
    {time: 108, text: "'Cause all of the small things that you do"},
    {time: 114, text: "Are what remind me why I fell for you"},
    {time: 119, text: "And when we're apart, and I'm missing you"},
    {time: 125, text: "I close my eyes and all I see is you"},
    {time: 131, text: "And the small things you do"},
    {time: 157, text: "When we're done making love"},
    {time: 159, text: "And you look up and give me those eyes"},
    {time: 167, text: "'Cause all of the small things that you do"},
    {time: 173, text: "Are what remind me why I fell for you"},
    {time: 179, text: "And when we're apart, and I'm missing you"},
    {time: 185, text: "I close my eyes and all I see is you"},
    {time: 191, text: "And the small things you do"},
    {time: 203, text: "All the small things you do"},
    ]
  }
 
];

const App = () => {
  const audioRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);
  const [activeLyric, setActiveLyric] = useState(0);

  useEffect(() => {
   
  const current = audioRef.current.currentTime;
  const song = musicData[currentIndex];
  
    song.lyrics.forEach((line, index) => {
      if (current >= line.time) {
        setActiveLyric(index);
      }
    });
  }, [currentTime]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) return songs.length - 1; // Go to last song
      return prevIndex - 1;
    });
  
    // Reset progress + current time
    setCurrentTime(0);

    setIsPlaying(true);
    
    // Play the new song automatically
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 200);
  };
  
  const handlePlayPause = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === musicData.length - 1 ? 0 : prev + 1
    );
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentIndex]);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/b8/b3/ce/b8b3ce7ff0e1c182bd6225c0cb918f61.jpg')"
      }}
    >
  
  {/* ❄️ Snow Effect */}
  <div className="snow"></div>

      <audio
        ref={audioRef}
        src={musicData[currentIndex].audio}
        onTimeUpdate={() =>
          setCurrentTime(audioRef.current.currentTime)
        }
        onEnded={handleNext}
      />

      <MusicCard
        song={musicData[currentIndex]}
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        handleNext={handleNext}
        handlePrevious={handlePrevious} 
        currentTime={currentTime}
        duration={audioRef.current?.duration || 0}
        setCurrentTime={setCurrentTime}
        audioRef={audioRef}
        showLyrics={showLyrics}
        setShowLyrics={setShowLyrics}
        activeLyric={activeLyric}
      />
    </div>
  );
};

export default App;

