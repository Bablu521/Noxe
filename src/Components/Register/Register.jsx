import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import joi from "joi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


export default function Register() {
  let [user, setUser] = useState({
    "username": "",
    "phone": "",
    "email": "",
    "password": ""
  })

  let [errorMsg, setErrorMsg] = useState("")

  let [validateError, setValidateError] = useState([])

  let navigate = useNavigate();

  let goToLogin = () => {
    navigate("/Login")
  }

  let validateFormData = () => {
    const schema = joi.object({
      username: joi.string().required().min(3).max(20),
      email: joi.string().required().email({ tlds: ["com", "net"] }),
      password: joi.string().required(),
      phone: joi.number().required()
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
      let { data } = await axios.post("https://movie-app-l0g2.onrender.com/register", user);
      if (data.success == true) {
        goToLogin()
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
        <title>REGISTER</title>
      </Helmet>
      <div className="w-75 mx-auto py-5">
        <h2>Registeration Form</h2>
        {validateError.map((error, index) =>
          <div key={index} className="alert alert-danger my-2">{error.message}</div>
        )}
        {errorMsg ? <div className="alert alert-danger my-2">{errorMsg}</div> : ""}
        <form onSubmit={sumbitFormData}>
          <div className="input-data my-2">
            <label htmlFor="username">Name:</label>
            <input onChange={getInputValue} type="text" className="form-control my-2" name="username" />
          </div>
          <div className="input-data my-2">
            <label htmlFor="email">Email:</label>
            <input onChange={getInputValue} type="email" className="form-control my-2" name="email" />
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password:</label>
            <input onChange={getInputValue} type="password" className="form-control my-2" name="password" />
          </div>
          <div className="input-data my-2">
            <label htmlFor="phone">Phone:</label>
            <input onChange={getInputValue} type="number" className="form-control my-2" name="phone" />
          </div>
          <button className="btn btn-sm btn-primary my-3 float-end">register</button>
          <p className="my-4">Have an account? <Link className="text-primary text-decoration-none" to="/login">Login</Link></p>
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  )
}
