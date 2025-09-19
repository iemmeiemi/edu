import { Box } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../Components/CustomButton";
import TeacherBox from "../../Components/TeacherBox";

function Teacher() {
  const [button, setButton] = useState("Tất cả");
  return (
    <>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <CustomButton
          currentButton={button}
          setButton={setButton}
          buttonName="Tất cả"
          color="#2563EB"
          sx={{}}
        />
        <CustomButton
          currentButton={button}
          setButton={setButton}
          buttonName="Khoa học máy tính"
          color="#FF0F00"
          sx={{ width: "300px !important" }}
        />
        <CustomButton
          currentButton={button}
          setButton={setButton}
          buttonName="Kinh tế số"
          color="#FFEE00"
        />
        <CustomButton
          currentButton={button}
          setButton={setButton}
          buttonName="Kỹ thuật máy tính"
          color="#00FF15"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // Center the cards horizontally
          gap: "20px", // Adjust spacing between cards
          p: 2,
        }}
      >
        <TeacherBox />
        <TeacherBox />
        <TeacherBox />
        <TeacherBox />
        <TeacherBox />
        <TeacherBox />
      </Box>
    </>
  );
}

export default Teacher;
