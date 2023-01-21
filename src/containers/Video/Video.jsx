import React from 'react'
import video from '../../assets/video1.mp4';
import './video.css';

export default function () {
  return (
    <div className='container__video'>
        <video src={video} type='video/mp4' loop autoPlay muted></video>
    </div>
  )
}
