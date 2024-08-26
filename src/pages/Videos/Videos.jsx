import React from 'react'
import './videos.css'
import Playvideo from '../../components/Playvideo/Playvideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Videos = () => {

  const {videoId, categoryId} = useParams()
  return (
    <div className='play-container'>
        <Playvideo videoId={videoId}/>
        <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Videos