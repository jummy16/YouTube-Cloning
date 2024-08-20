import React from 'react'
import './navbar.css'
import { FaBars } from 'react-icons/fa'
import logo from '../../assets/youtube-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdApps, MdNotifications } from 'react-icons/md'
import picture from '../../assets/IMG_5103.jpeg'
import upload_icons from '../../assets/upload.png'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <FaBars className='header-menu' onClick={()=>setSidebar(prev=>prev===false?true:false)} size={22}/>
            <Link to='/'><img className='header-logo' src={logo} alt=''/></Link>
        </div>
        <form className='nav-middle flex-div'>
          <div className='search-box flex-div'>
              <input type='text' placeholder='Search'/>
              <AiOutlineSearch className='form-icon' size={22}/>
          </div>
            
        </form>
        <div className='header-icons flex-div'>
            <img className='nav-right-img' src={upload_icons} alt=''/>
            <MdApps className='header-icon' size={25}/>
            <MdNotifications className='header-icon' size={25}/>
            <img className='nav-right' src={picture} alt='my-picture'/>
        </div>
    </nav>
  )
}

export default Navbar