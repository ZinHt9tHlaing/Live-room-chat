import { createBrowserRouter } from "react-router-dom";

import { Room, Welcome } from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/chat", element: <Room /> },
]);

export default router;
