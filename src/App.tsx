import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import api from './services/api';

interface IData {
  _id: string;
  url: string;
  channel: string;
  description: string;
  song: string;
  likes: number;
  shares: number;
  messages: number;
}

function App() {
  const [videos, setVideos] = useState<IData[]>([]);

  useEffect(() => {
    async function getVideos() {
      const response = await api.get('/api/v1/videos');
      setVideos(response.data);
    }
    getVideos();
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            key={video._id}
            description={video.description}
            song={video.song}
            likes={video.likes}
            shares={video.shares}
            messages={video.messages}
            url={video.url}
            channel={video.channel}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
