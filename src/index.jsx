import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";
import MediaContextProvider from "./Context/MediaStore";
import AuthContextProvider from "./Context/AuthStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MediaContextProvider>
        <App />
      </MediaContextProvider>
    </AuthContextProvider>


  </React.StrictMode>
);
