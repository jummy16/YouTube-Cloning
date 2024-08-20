import React from 'react'
import './sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blog from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jummy from '../../assets/49.jpg'
import simon from '../../assets/IMG_1632.jpeg'
import tom from '../../assets/IMG_2817-1.jpeg'
import megan from '../../assets/IMG_5103.jpeg'
import cameron from '../../assets/IMG_5159.jpeg'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?'':"small-sidebar"}`}>
        <div className='shortcut-links'>
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt=''/>
                <span>Home</span>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt=''/>
                <span>Gaming</span>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt=''/>
                <span>Automobiles</span>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt=''/>
                <span>Sports</span>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt=''/>
                <span>Entertainment</span>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt=''/>
                <span>Technology</span>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt=''/>
                <span>Music</span>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blog} alt=''/>
                <span>Blogs</span>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt=''/>
                <span>News</span>
            </div>
            <hr/>
        </div>
        <div className='subscribed-list'>
            <h3>Subscribed</h3>
            <div className='side-link'>
                <img src={jummy} alt=''/>
                <span>Exquisite</span>
            </div>
            <div className='side-link'>
                <img src={simon} alt=''/>
                <span>MissPretty</span>
            </div>
            <div className='side-link'>
                <img src={tom} alt=''/>
                <span>Simi</span>
            </div>
            <div className='side-link'>
                <img src={megan} alt=''/>
                <span>5-Minute Crafts</span>
            </div>
            <div className='side-link'>
                <img src={cameron} alt=''/>
                <span>Nas Daily</span>
            </div>

        </div>
    </div>
  )
}

export default Sidebar