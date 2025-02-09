import React, { useEffect } from "react";
import Moviecard from "./MovieCard/Moviecard";
import axios from "axios";
import Pegination from "./Pegination/Pegination";

function Mymovies() {

  useEffect(() => {
    
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=32a3d89`)
      .then((res) => {
        if (res.data.Response === "True") {
          console.log(res.data.Search);  // Logs an array of movies
        } else {
          console.log("No movies found.");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    
    <div className="p-3">
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>
      <div>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>
      <Moviecard/>

    </div>
    <Pegination/>
   </div>
   
  ) 
  
}

export default Mymovies;
