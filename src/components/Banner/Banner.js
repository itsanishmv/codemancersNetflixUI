import React from 'react'
import './Banner.css'
import { useSelector } from 'react-redux'

export default function Banner() {

    const trendingMovies = useSelector((state) => state.allTrending.trendingMovies)
    const randomBanner = trendingMovies[Math.floor(Math.random() * trendingMovies?.length - 1)]

    return (
        <div className='banner__container' style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",  
            backgroundBlendMode:"overlay",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomBanner?.backdrop_path})`,
            backgroundPosition: "center ",
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat"
        }}>
            <div style={{color:"white"}} className='banner__contents'>
                <h1 className='banner__title'>{randomBanner?.title}</h1>
                <div style={{display:"flex"}}>
                   <p className='vote__average'>Vote {randomBanner?.vote_average}</p>
                </div>
                
                <p className='banner__overview'>{ randomBanner?.overview}</p>
           </div>
        </div>
    )
}
