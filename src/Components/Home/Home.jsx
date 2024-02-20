import React, { useEffect, useState } from "react";

import Movies from "../Movies/Movies";
import TvShow from './../TvShow/TvShow';
import People from './../People/People';
import { Helmet } from "react-helmet";


export default function Home() {
  // useEffect(() => {
  //   document.title = "HOME"

  // }, [])

  return (
    <>

      <Movies />
      <TvShow />
      <People />
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOME</title>
      </Helmet>
    </>
  )
}
