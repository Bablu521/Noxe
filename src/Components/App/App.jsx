import React, { useEffect, useState } from "react";
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import MasterLayout from "./../MasterLayout/MasterLayout";
import Movies from "./../Movies/Movies";
import Home from "./../Home/Home";
import People from "./../People/People";
import About from "./../About/About";
import Register from "./../Register/Register";
import Login from "./../Login/Login";
import Logout from "./../Logout/Logout";
import "../App/App.scss";
import NotFound from "../NotFound/NotFound";
import TvShow from './../TvShow/TvShow';
import { jwtDecode } from "jwt-decode";
import ProtectedRoute from './../ProtectedRoute/ProtectedRoute';
import Details from './../Details/Details';
import { useContext } from "react";
import { AuthContext } from './../../Context/AuthStore';
import { Online, Offline } from "react-detect-offline";







export default function App() {
  let { userData, saveUserData, logout } = useContext(AuthContext)


  // const [userData, setUserData] = useState(null)
  // let saveUserData = () => {
  //   let encodedToken = localStorage.getItem("token");
  //   let decodedToken = jwtDecode(encodedToken)
  //   setUserData(decodedToken)
  // }
  // let logout = () => {
  //   localStorage.removeItem("token");
  //   setUserData(null);
  //   return <Navigate to="login" />
  // }
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     saveUserData()
  //   }
  // }, [])

  let routes = createHashRouter([
    {
      path: "/",
      element: <MasterLayout userData={userData} logout={logout} />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: "movies", element: <ProtectedRoute userData={userData}> <Movies /> </ProtectedRoute> },
        { path: "tvshow", element: <ProtectedRoute userData={userData}> <TvShow /> </ProtectedRoute> },
        { path: "people", element: <ProtectedRoute userData={userData}> <People /> </ProtectedRoute> },
        { path: "details/:id/:mediaType", element: <ProtectedRoute userData={userData}> <Details /> </ProtectedRoute> },
        { path: "about", element: <ProtectedRoute userData={userData}> <About /> </ProtectedRoute> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "logout", element: <Logout /> },
      ],
    },
  ]);
  return (
    <>
      <Online><RouterProvider router={routes} /></Online>
      <Offline>
        <div className=" w-50 h-50 bg mx-auto rounded" style={{ marginTop: 250 }}>
          <h1 className="text-center p-4">You Are Offline</h1>
        </div>
      </Offline>

    </>
  );
}
