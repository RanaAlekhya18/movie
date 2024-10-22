import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
const MovieSearch=() => {
  var location=useLocation();
  let specificmovie=location.state.x;
  
  let [trailer,setTrailer]=useState("");
  async function getTrailer(id) {
    fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=45862568038e861b5ac52603dcbc7a21`)
    .then(y=>y.json()).then(y=>setTrailer(y.results[0].key)).catch((e)=>console.log(e))
  }
  return (
    // <div>hii</div>
    <div>
        <section style={{marginTop:"80px",width:"450px",padding:"10px",marginLeft:"170px"}}>
        <img src={`https://image.tmdb.org/t/p/original/${specificmovie.backdrop_path}`} alt="" style={{height:"350px",width:"450px",borderRadius:"10px"}}/>
        <h2>--{specificmovie.title}--</h2>
        <p style={{}}>{specificmovie.overview}</p>
        <strong>{specificmovie.vote_average}</strong>
        <button onClick={()=>getTrailer(specificmovie.id)} style={{backgroundColor:"white",padding:"5px",margin:"10px",marginLeft:"170px",borderRadius:"6px"}}>Play Triler</button>
        </section>
        <div style={{marginTop:"30px",marginLeft:"390px"}}>
            {trailer&& <YouTube videoId={trailer} ></YouTube>}
        </div>
        

    </div>
  )
}

export default MovieSearch