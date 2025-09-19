import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MenuItem({
  icon: IconComponent,
  text,
  page,
  currentPage,
  setCurrentPage,
}) {
  const navigate = useNavigate();
  const isSelected = currentPage === page;
  const handlePageChange = (pageName) => {
    navigate(pageName);
    setCurrentPage(pageName);
  };
  console.log(currentPage);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "51px",
        borderRadius: "10px",
        backgroundColor: isSelected ? "#CCD7F1" : "transparent",
        paddingLeft: "20px",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: isSelected ? "#CCD7F1" : "#ffffff2b",
        },
      }}
      onClick={() => handlePageChange(page)}
    >
      <Box
        sx={{
          width: "35px",
          height: "35px",
          backgroundColor: isSelected ? "#3328BF" : "rgba(255, 255, 255, 0.52)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconComponent sx={{ color: isSelected ? "white" : "#2563EB" }} />
      </Box>
      <Typography
        sx={{
          fontWeight: "600",
          color: isSelected ? "#2563EB" : "white",
          marginLeft: "15px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default MenuItem;
