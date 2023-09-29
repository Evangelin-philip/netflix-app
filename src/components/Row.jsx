import React, { useEffect, useState } from "react";
import tmdbAxiosInstance from "../tmdbAxiosInstance";
import './Row.css'

// function Row arguments is object(PROPS) with two key value pair here  passing from app jsx(parent) to row jsx(child)
// instead of function Row(props) {
// here we are destructuring as below {title,fetchUrl}
function Row({ isPoster,title, fetchUrl }) {
  // console.log(fetchUrl);

  // creating state  for accessing response from API CAll outside fetch_Data
  const [allMovies, setAllMovies] = useState();
  const base_url = "https://image.tmdb.org/t/p/original/";
  // API CALLING FUNCTION
  const fetch_Data = async () => {
    // const response_recived = await tmdbAxiosInstance.get(fetchUrl)
    // the variable response_recived will get data from the url  but the data key in the response recived has the success data/result so instead of craeting a variable undwandedly we can destructure as
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    // console.log(data)
    // console.log(data.results)

    //  need to show these images from results in browser, so need to give to jsx part, but as the data.results is there in fetch_url, no scope outside function , so we need to give to state
    // so create a state
    setAllMovies(data.results);
  };
  // console.log("all movies", allMovies);

  //  we need to call the function fetch_Data to get the response along with Row () which is pure and fetch_Data() is inpure having a side effect(data fetching/dom updation/time out) so to call a inpure function n class component it is possible but not in functional compnent-----------so a hook is predefine-
  // UseEffect(function , dependnecies)
  // dependency =[] if only render at first time see w3schools
  useEffect(() => {
    fetch_Data();
  }, []);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="movies-row">
          {/* ? for knowing wheather allmovies having data or not? if data present proceed.bcos if any delay to get data during api it miight through error so to avoid that */}
          {allMovies?.map((item) => (
            // <img className="movie" src={`${base_url}/${isPoster? item?.poster_path:item?.backdrop_path}`} alt="No_image"></img>
            //  adding extra one more class name to img tag if its Isposter true
            <img className={`movie ${isPoster && 'movie-poster'}`} src={`${base_url}/${isPoster? item?.poster_path:item?.backdrop_path}`} alt="No_image"></img>
          ))}
        
      </div>
    </div>
  );
}
export default Row;
