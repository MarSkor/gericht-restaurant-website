import React, { useRef, useState } from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if(playVideo){
      vidRef.current.pause();
    } else{
      vidRef.current.play();
    }
  }

  return(
    <div className='app__video'>
    <video 
    ref={vidRef}
    src={meal}
    type="video/mp4"
    loop
    controls={false}
    muted
    />
    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
        {playVideo ?  <BsFillPauseCircleFill color="#fff" fontSize={50}/> : <BsFillPlayCircleFill color="#fff" fontSize={50}/>}
      </div>
    </div>
  </div>
  )
};

export default Intro;
