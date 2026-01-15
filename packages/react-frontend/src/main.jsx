import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./myapp";
import "./main.css";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(<MyApp />);