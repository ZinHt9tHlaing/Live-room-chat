import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import GeneralContextProvider from "./context/GeneralContext";

createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
