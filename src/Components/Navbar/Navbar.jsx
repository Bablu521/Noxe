import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss"

export default function Navbar({ userData, logout }) {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg ${styles.navbg} `}>
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold fs-4" to="">Noxe</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {userData ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="movies">Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="tvshow">TvShows</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">People</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">About</Link>
                </li>
              </ul> : ""}
              <form className=" d-flex mx-lg-auto  w-25 me-auto mb-lg-0 mb-3 ">
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
              </form>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <div className="d-flex align-content-center align-items-center ">
                  <i className="fab fa-facebook mx-2"></i>
                  <i className="fab fa-spotify mx-2"></i>
                  <i className="fab fa-instagram mx-2"></i>
                  <i className="fab fa-youtube mx-2"></i>
                </div>
                {userData ? <li className="nav-item"><Link className="nav-link" onClick={logout}>Logout</Link></li>
                  : <>
                    <li className="nav-item">
                      <Link className="nav-link" to="login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="register">Register</Link>
                    </li>
                  </>}


              </ul>

            </div>
          </div>
        </nav>

      </div>

    </>
  );
}
