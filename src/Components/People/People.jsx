import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { MediaContext } from './../../Context/MediaStore';
import { Helmet } from "react-helmet";


export default function People() {
  let { trendingPersons } = useContext(MediaContext)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PEOPLE</title>
      </Helmet>
      <div className="row">
        <div className="col-md-4 mt-5">
          <div className="w-25 my-3 line" ></div>
          <h2>Trending <br /> People <br /> to Watch Now</h2>
          <span className="span">Most watched movies by days</span>
          <div className="w-100 my-3 line"></div>
        </div>
        {trendingPersons.slice(0, 16).map((item, index) =>
          <div key={index} className="col-md-2 mt-5">
            <Link className="nav-link" to={`/details/${item.id}/${item.media_type}`}>
              <div className="item my-1 position-relative">
                <img className="w-100" src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" />
                <h2 className="mt-2 h6">{item.title}{item.name}</h2>
              </div>
            </Link>
          </div>
        )}
      </div >
    </>
  )
}
