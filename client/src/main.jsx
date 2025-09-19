import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./theme.js";
import Layout from "./pages/Home/Layout";
import Study from "./pages/Home/Study";

createRoot(document.getElementById("root")).render(
  <CssVarsProvider theme={theme}>
    {/* <RouterProvider router={router} /> */}
    <CssBaseline>
      <Layout />
    </CssBaseline>
  </CssVarsProvider>
);
