import React from 'react'
import RowContents from './RowContents'
import Requests from '../Requests'

function Movies() {
    return (
        <div style={{ marginTop: "150px",marginLeft:"100px"}}>
            <h1 style={{ color: "white", marginLeft: "25px",fontSize: "3.25rem" }}>MOVIES</h1>
            <p style={{ color: "white", marginLeft: "25px",fontSize:"16px",fontWeight:"600",width:"500px" }}>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
            <RowContents styling={true} apiCall={Requests.fetchAllMovies}/>
        </div>
    )
}

export default Movies
