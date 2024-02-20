import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { createContext } from "react";

export let AuthContext = createContext(0)

export default function AuthContextProvider(props) {

    const [userData, setUserData] = useState(null)
    let saveUserData = () => {
        let encodedToken = localStorage.getItem("token");
        let decodedToken = jwtDecode(encodedToken)
        setUserData(decodedToken)
    }
    let logout = () => {
        localStorage.removeItem("token");
        setUserData(null);
        return <Navigate to="login" />
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            saveUserData()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ userData, saveUserData, logout }}>
            {props.children}
        </AuthContext.Provider>

    )
}