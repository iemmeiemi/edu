import { Container } from "@mui/material";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SideBar from "../../Components/SideBar";
import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Study from "./Study";
import Assignment from "./Assignment";
import Contact from "./Contact";

function Layout() {
  const [currentPage, setCurrentPage] = useState("Contact");

  const renderContent = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "Schedule":
        return <Schedule />;
      case "Study":
        return <Study />;
      case "Assignment":
        return <Assignment />;
      case "Contact":
        return <Contact />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        backgroundColor: (theme) => theme.palette.secondary.main,
        height: "100vh",
      }}
    >
      {/* Sidebar */}
      <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: (theme) => theme.webSize.sidebarWidth,
          width: (theme) => theme.webSize.mainContentWidth,
          height: "100%",
          overflowY: "auto",
          padding: "30px 60px",
        }}
      >
        {renderContent()}
      </Box>
    </Container>
  );
}

export default Layout;
