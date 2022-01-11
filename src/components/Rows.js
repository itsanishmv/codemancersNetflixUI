import React from 'react'
import RowContents from './Rowcontents/RowContents'
import Requests from '../Requests'
export default function Rows() {
  

    return (
        <div >
            <RowContents title="Trending Movies" apiCall={Requests.trending} />
            <RowContents title="Trending TV shows" apiCall={Requests.fetchAllTv} />  
            <RowContents title="Romance" apiCall={Requests.Romance} />  
            <RowContents title="Comedy" apiCall={Requests.Comedy} />  
            <RowContents title="Adventure" apiCall={Requests.Adventure} />  
            <RowContents title="Action" apiCall={Requests.ActionMovies} />  
        </div>
    )
}
