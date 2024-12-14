import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import GeneralContextProvider from "./context/GeneralContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralContextProvider>
      <App />
    </GeneralContextProvider>
  </StrictMode>
);
