import React from 'react';
import './Banner.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import { useState,useEffect } from 'react';

function Banner({fetchUrl}) {
  // movie vaiable at initial is an object empty
  const [movie,setMovie]=useState({})
  const base_url = "https://image.tmdb.org/t/p/original/";
  const fetch_Data=async()=>{
    const {data}=await tmdbAxiosInstance.get(fetchUrl)

    // console.log("random movie",data.results[Math.floor(Math.random()*data.results.length)])
    setMovie(data.results[Math.floor(Math.random()*data.results.length)])
  }
  useEffect(()=>{fetch_Data()},[])
  return (
    <div style={{height:"600px",
    backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
    backgroundSize:"cover",
    backgroundAttachment:"fixed"
    }}>
      
      <div className="banner-content">
      
        <h1>{movie?.name}</h1>
        <h3>{movie?.overview?.slice(0,200)}...</h3>
      </div>
    </div>
  )
}

export default Banner
