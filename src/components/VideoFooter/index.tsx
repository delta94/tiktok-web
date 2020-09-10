import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import './styles.css';

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@vbeloti</h3>
        <p>Description...</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
