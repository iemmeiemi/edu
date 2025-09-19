import React, { useState } from "react";
import Header from "../../Components/Header";
import { Box, Button, Typography } from "@mui/material";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import Teacher from "./Teacher";
import SchoolIcon from "@mui/icons-material/School";
import Student from "./Student";

function PeopleChangeLayout({
  people,
  currentPeople,
  setPeople,
  icon: IconComponent,
}) {
  const isSelected = people === currentPeople;

  const handleButtonChangeLayout = (people) => {
    setPeople(people);
  };
  return (
    <>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isSelected
            ? "#3328BF"
            : (theme) => theme.palette.primary.table,
          color: isSelected ? "#FFFFFF" : (theme) => theme.palette.primary.main,
          borderRadius: "10px",
          width: "45%",
          padding: "30px 20px",
          gap: "10px",
        }}
        onClick={() => handleButtonChangeLayout(people)}
      >
        <IconComponent sx={{ fontSize: "40px" }} />
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            color: isSelected
              ? "#FFFFFF"
              : (theme) => theme.palette.primary.main,
          }}
        >
          {people}
        </Typography>
      </Button>
    </>
  );
}

function Contact() {
  const [currentPeople, setPeople] = useState("Giảng viên");
  const renderContent = () => {
    switch (currentPeople) {
      case "Giảng viên":
        return <Teacher />;
      case "Sinh viên":
        return <Student />;
      default:
        return <Teacher />;
    }
  };
  return (
    <>
      {/* Header */}
      <Header currentPage={"Contact"} />

      {/* Content */}
      <Box sx={{ display: "flex", gap: "10%", marginTop: "30px" }}>
        <PeopleChangeLayout
          people="Giảng viên"
          currentPeople={currentPeople}
          setPeople={setPeople}
          icon={CoPresentIcon}
        />

        <PeopleChangeLayout
          people="Sinh viên"
          currentPeople={currentPeople}
          setPeople={setPeople}
          icon={SchoolIcon}
        />
      </Box>

      <Box sx={{ marginTop: "20px" }}>{renderContent()}</Box>
    </>
  );
}

export default Contact;
