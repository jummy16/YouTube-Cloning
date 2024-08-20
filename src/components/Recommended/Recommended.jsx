import React, { useState } from 'react'
import './recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../Data'

const Recommended = ({categoryId}) => {
    const [apiData, setApiData] = useState([]);
        const fetchData = async ()=>{
            const relatedVideo_Url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
            await fetch(relatedVideo_Url)
            .then(res=>res.json())
            .then(data=>setApiData(data.items))
        }
        useEffect(() => {
            fetchData()
            .catch((err)=>{
                // console.log(err);
              });
        },[])
    
  return (
    <div className='recommend'>
        {apiData.map((item,index)=>{
            return(
                <div className='side-video-list'>
                    <img src={thumbnail1} alt=''/>
                <div className='vid-info'>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <p>StackOverFlow</p>
                    <p>200k views</p>
                </div>
            </div>
            )
        })}
        
    </div>
  )
}

export default Recommended