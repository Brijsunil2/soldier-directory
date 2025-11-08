import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import App from "./App.jsx";
import "./styles/colors.css";
import "./styles/breakpoints.css";
import "./styles/global.css";

if (process.env.NODE_ENV === "production") disableReactDevTools();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
