import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { MediaContext } from './../../Context/MediaStore';
import { Helmet } from "react-helmet";


export default function Movies() {
  let { trendingMovies } = useContext(MediaContext);

  // const [trendingMovies, setTrendingMovies] = useState([]);
  // let getTrendingMovies = async () => {
  //   let { data } = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c636ed7787cc302d96bf88ccf334e0d8");
  //   setTrendingMovies(data.results)
  //   console.log(data.results)

  // }
  // useEffect(() => {
  //   getTrendingMovies()
  // }, [])


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MOVIES</title>
      </Helmet>
      <div className="row">
        <div className="col-md-4 mt-5">
          <div className="w-25 my-3 line" ></div>
          <h2>Trending <br /> Movies <br /> to Watch Now</h2>
          <span className="span">Most watched movies by days</span>
          <div className="w-100 my-3 line"></div>
        </div>
        {trendingMovies.slice(0, 16).map((item, index) =>
          <div key={index} className="col-md-2 mt-5">
            <Link className="nav-link" to={`/details/${item.id}/${item.media_type}`}>
              <div className="item my-1 position-relative">
                <img className="w-100" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                <h2 className="mt-2 h6">{item.title}{item.name}</h2>
                <span className="position-absolute top-0 end-0 p-1 bg-primary">{item.vote_average.toFixed(1)}</span>
              </div>
            </Link>
          </div>
        )}
      </div >
    </>
  )
}
