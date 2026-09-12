import { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { coupleData } from '../data/couple';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={coupleData.favoriteSong} autoPlay loop />
      <button 
        onClick={toggleMusic}
        className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-primary-200 hover:text-white transition-colors shadow-lg flex items-center gap-2"
      >
        {isPlaying ? <Music size={20} className="animate-pulse" /> : <VolumeX size={20} />}
        <span className="text-xs font-sans hidden md:inline">
          {isPlaying ? "ON" : "OFF"}
        </span>
      </button>
    </div>
  );
}
