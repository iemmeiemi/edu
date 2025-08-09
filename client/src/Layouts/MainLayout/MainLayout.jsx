import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { GlobalSpinner } from "../../Components/GlobalSpinner";

export const MainLayout = () => {
  return (
    <div>
      <GlobalSpinner />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
