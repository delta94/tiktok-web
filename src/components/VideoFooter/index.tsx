import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import spin from '../../assets/img/spin.png';
import './styles.css';

interface IVideoFooter {
  channel: string;
  description: string;
  song: string;
}

const VideoFooter = ({ channel, description, song }: IVideoFooter) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img src={spin} alt="Spin Icon" className="videoFooter__record" />
    </div>
  );
};

export default VideoFooter;
