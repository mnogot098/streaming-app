import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video1 from "../assets/videos/video1.mp4";

const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center w-full">
        <Video autoPlay loop>
          <source src={video1} type="video/webm"/>
        </Video>
    </div>
    
  );
};

export default VideoPlayer;
