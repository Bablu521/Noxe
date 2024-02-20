import React from "react";
import { Helmet } from "react-helmet";


export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ABOUT</title>
      </Helmet>
      <div className="mt-5 w-50 h-50 bg mx-auto rounded">
        <h1 className="text-center p-4">About Component</h1>
      </div>;
    </>
  )
}
