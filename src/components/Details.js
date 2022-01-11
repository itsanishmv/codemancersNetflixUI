import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BaseUrl from './BaseUrl'
import './details.css'
import Rows from './Rows'

export default function Details() {
    const [details, setDetails] = useState()
    
    const params = useParams()
    console.log(params.ID)

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
         
        });
      };
    useEffect(() => {
        scrollToTop()
        BaseUrl.get(`/movie/${params.ID}?api_key=bd622775d4f33ea0b48a854b6648c933&language=en-US`).then(data=>setDetails(data.data))
    }, [params])
    console.log(details)

    return (
        <div className='details__container'>
            <div className='details__info'>
                <div className='details__info__wrapper'>
                    <h1>{details?.title}</h1>
                    <div className='details__metrics'>
                        <span>{ details?.release_date.slice(0,-6)}</span>
                        <span style={{ marginLeft: "20px" }}>|</span>
                        <span style={{ marginLeft: "20px", marginRight: "20px" }}>{details?.adult === false ? "13+" : "18+"}</span>
                        <span style={{  marginRight: "20px" }}>|</span>
                        <span>{details?.original_language}</span>
                        <span style={{ marginLeft: "20px" }}>|</span>
                        <span style={{marginLeft:"20px"}}>{ details?.status}</span>
                    </div>
                    <h4 className='details__overview'>{details?.overview}</h4>
                </div>
            </div>
            <div className='details__banner' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${details?.backdrop_path})` }}>
                <div style={{marginTop:"1000px",marginLeft:"-350px",width:"1400px"}}>
                    <Rows/>
                </div>
              
                </div>
           
        </div>
    )
}
