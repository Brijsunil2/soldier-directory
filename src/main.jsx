import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import App from "./App.jsx";
import "./styles/colors.css";
import "./styles/breakpoints.css";
import "./styles/global.css";

const mode = import.meta.env.APP_ENV;

if (mode === "development") {
  console.log("Running in development mode");
} else {
  disableReactDevTools();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
