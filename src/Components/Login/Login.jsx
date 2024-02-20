import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import joi from "joi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";



export default function Login({ saveUserData }) {
  let [user, setUser] = useState({
    "email": "",
    "password": ""
  })

  let [errorMsg, setErrorMsg] = useState("")

  let [validateError, setValidateError] = useState([])

  let navigate = useNavigate();

  let goToHome = () => {
    navigate("/")
  }

  let validateFormData = () => {
    const schema = joi.object({
      email: joi.string().required().email({ tlds: ["com", "net"] }),
      password: joi.string().required(),
    })
    return schema.validate(user, { abortEarly: false });
  }

  let sumbitFormData = async (e) => {
    e.preventDefault();
    let validateReponse = validateFormData()
    console.log(validateReponse)
    if (validateReponse.error) {
      setValidateError(validateReponse.error.details)
    } else {
      let { data } = await axios.post("https://movie-app-l0g2.onrender.com/login", user);
      if (data.success == true) {
        localStorage.setItem("token", data.token);
        saveUserData();
        goToHome();

      } else {
        setErrorMsg(data.message)
      }
    }

  }

  let getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser)
    console.log(myUser);
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LOGIN</title>
      </Helmet>
      <div className="w-75 mx-auto py-5">
        <h2>Login Form</h2>
        {validateError.map((error, index) =>
          <div key={index} className="alert alert-danger my-2">{error.message}</div>
        )}
        {errorMsg ? <div className="alert alert-danger my-2">{errorMsg}</div> : ""}
        <form onSubmit={sumbitFormData}>
          <div className="input-data my-2">
            <label htmlFor="email">Email:</label>
            <input onChange={getInputValue} type="email" className="form-control my-2" name="email" />
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password:</label>
            <input onChange={getInputValue} type="password" className="form-control my-2" name="password" />
          </div>
          <button className="btn btn-sm btn-primary my-3 float-end">login</button>
          <p className="my-4">Don't have an account? <Link className="text-primary text-decoration-none" to="/register">Register</Link></p>
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  )
}

