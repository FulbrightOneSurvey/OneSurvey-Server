import React from "react";
import ReactDOMClient from "react-dom/client";
import { LandingPageLogin } from "./screens/LandingPageLogin";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LandingPageLogin />);
