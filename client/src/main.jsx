import { StrictMode } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
