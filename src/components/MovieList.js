import React, { useState, useEffect } from "react";

const MovieList = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const URL = `http://www.omdbapi.com/?s=${title}&apikey=d703c7c1`;
      const response = await fetch(URL);
      const final_Data = await response.json();
      console.log(final_Data.Search);
      setData(final_Data.Search);
    };
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClicked]);


  return (
    <>
      <div>
        <div className="header">
          <h2>Movie HUB!🎥</h2>
        </div>
        <div className="body">
          <input type="text" name="search" 
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button  onClick={() => { setIsClicked((prevState) => !prevState); }}
            className="searchBtn"> Search
          </button>
        </div>
        <div className="body-container">
          <p>Sharing a few of our favourite movies</p>
        </div>
        <div className="display">
          {data.map((item, i) => {
            return (
              <div key={i} className="display-cards">
                <h4>{item.Title}</h4>
                <img src={item.Poster} className="poster" alt="poster"/>
                <p>Year- {item.Year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieList;