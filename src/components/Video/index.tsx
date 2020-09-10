import React, { useRef, useState } from 'react';

import './styles.css';
import VideoFooter from '../VideoFooter';
import VideoSidebar from '../VideoSidebar';

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef?.current?.pause();
      setPlaying(false);
    } else {
      videoRef?.current?.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video__player"
        loop
        src="https://v25.tiktokcdn.com/cf7c135661bfc54ff6e795e83af72315/5f5a9698/video/tos/useast2a/tos-useast2a-pve-0068/ed4efbf2bcd24aa2b7f06e2db4d12563/?a=1180&br=2780&bt=1390&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202009101511300101152280810519B6E7&lr=&mime_type=video_mp4&qs=0&rc=ajU4Ong1bWUzdTMzOzczM0ApaTY3ZGczPDs2Nzk1NGk2O2dfbm0tcGBocDJfLS1fMTZzcy4xNV9fYTE2YGItLy82YC06Yw%3D%3D&vl=&vr="
      ></video>

      <VideoFooter />
      <VideoSidebar />
    </div>
  );
};

export default Video;
