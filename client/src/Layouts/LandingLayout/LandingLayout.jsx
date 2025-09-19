import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { GlobalSpinner } from "../../Components/GlobalSpinner";
import { Toolbar } from "@mui/material";

export const LandingLayout = () => {
  return (
    <div>
      <GlobalSpinner />
      <Header />
      <div>
        <Toolbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
