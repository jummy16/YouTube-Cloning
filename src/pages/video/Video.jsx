import React from 'react'
import './video.css'
import Playvideo from '../../components/Playvideo/Playvideo'
import Recommended from '../../components/Recommended/Recommended'

const Video = () => {
  return (
    <div className='play-container'>
        <Playvideo/>
        <Recommended/>
    </div>
  )
}

export default Video