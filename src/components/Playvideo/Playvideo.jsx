import React from 'react'
import './playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jummy from '../../assets/IMG_2817-1.jpeg'
import user_profile from '../../assets/user_profile.jpg'
import { AiFillEye } from 'react-icons/ai'

const Playvideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoplay muted loop></video>
        <h3>How to install React</h3>
        <div className='play-video-info'>
            <p>25 views <AiFillEye size={12}/> 2 days ago</p>
            <div>
                <span><img src={like} alt=''/>200</span>
                <span><img src={dislike} alt=''/>6</span>
                <span><img src={share} alt=''/>Share</span>
                <span><img src={save} alt=''/>Save</span>
            </div>
        </div>
        <hr/>
        <div className='publisher'>
            <img className='jummy-img' src={jummy} alt=''/>
            <div>
                <p>StackOverFlow</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-describe'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <hr/>
            <h4>100 Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt='' />
                <div>
                    <h3>Thomas Stone<span> 1 day ago</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga?</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>250</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt='' />
                <div>
                    <h3>Thomas Stone<span> 1 day ago</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga?</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>250</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt='' />
                <div>
                    <h3>Thomas Stone<span> 1 day ago</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga?</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>250</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt='' />
                <div>
                    <h3>Thomas Stone<span> 1 day ago</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga?</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>250</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt='' />
                <div>
                    <h3>Thomas Stone<span> 1 day ago</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga?</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>250</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt='' />
                <div>
                    <h3>Thomas Stone<span> 1 day ago</span></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, fuga?</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>250</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playvideo