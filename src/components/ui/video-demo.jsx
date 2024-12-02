import React from "react";
import { Card } from "@/components/ui/card";

const VideoDemo = ({ videoUrl, posterUrl, description }) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <video
          className="w-full h-full"
          poster={posterUrl}
          controls
          playsInline
          controlsList="nodownload"
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="p-4">
        <p className="text-center text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

export default VideoDemo;
