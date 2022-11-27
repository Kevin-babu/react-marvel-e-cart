import React, { StrictMode } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const rootelement= document.getElementById("root");
createRoot(rootelement).render(
<StrictMode>
    <App />
</StrictMode>
);