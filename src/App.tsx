import React from 'react';
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          description="Um video muito massa"
          song="Artista - Música"
          likes={512}
          shares={112}
          messages={162}
          url="https://v25.tiktokcdn.com/cf7c135661bfc54ff6e795e83af72315/5f5a9698/video/tos/useast2a/tos-useast2a-pve-0068/ed4efbf2bcd24aa2b7f06e2db4d12563/?a=1180&br=2780&bt=1390&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202009101511300101152280810519B6E7&lr=&mime_type=video_mp4&qs=0&rc=ajU4Ong1bWUzdTMzOzczM0ApaTY3ZGczPDs2Nzk1NGk2O2dfbm0tcGBocDJfLS1fMTZzcy4xNV9fYTE2YGItLy82YC06Yw%3D%3D&vl=&vr="
          channel="vbeloti"
        />
        <Video
          channel="marvel"
          description="Um video muito massa"
          song="Artista 2 - Música 2"
          likes={4614}
          shares={1056}
          messages={2013}
          url="https://v25.tiktokcdn.com/78f01f4a392fc32fd44350610a8bf549/5f5a9675/video/tos/useast2a/tos-useast2a-ve-0068c004/63dff3542a0d4393b9fcf0225987adbd/?a=1180&br=2060&bt=1030&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=20200910151103010234104132141808B8&lr=&mime_type=video_mp4&qs=5&rc=M2tod2x5eTNkdTMzOzczM0ApZjk7aDU3N2VnNzc7ZmQ1NWcwXl9lMV9nZDNfLS01MTZzc18wNDIwYGFhYTEyMjBeNl46Yw%3D%3D&vl=&vr="
        />
        <Video
          channel="marvel 2"
          description="Um video muito massa 3"
          song="Artista 3 - Música 3"
          likes={150}
          shares={245}
          messages={200}
          url="https://v16.tiktokcdn.com/a9410b2e994898ddae1985b666149a89/5f5a9654/video/tos/alisg/tos-alisg-pve-0037/34b79cc67d174147addc1dd66590d739/?a=1180&br=1966&bt=983&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=2020091015103101011507905717186C21&lr=&mime_type=video_mp4&qs=0&rc=amt3aTlodTp5dzMzZzczM0ApZTRmZGk0N2VoNzRpZWY3NmdhbHAtX2IxbjFfLS01MTRzcy02LTA2NjE0NjE2YF42YDE6Yw%3D%3D&vl=&vr="
        />
      </div>
    </div>
  );
}

export default App;
