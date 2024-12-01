import React from "react";
import { Card } from "@/components/ui/card";
import { Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react";

const VideoDemo = ({ videoUrl, description }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button
              onClick={toggleMute}
              className="text-white hover:text-blue-400 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
          </div>

          <button
            onClick={handleFullscreen}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Full screen"
          >
            <Maximize2 size={24} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-center text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

export default VideoDemo;
