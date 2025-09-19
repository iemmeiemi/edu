import { Button } from "@mui/material";
import React from "react";

function CustomButton({ currentButton, setButton, buttonName, color }) {
  const isSelected = currentButton === buttonName;

  const handleButtonChange = (button) => {
    setButton(button);
  };
  return (
    <Button
      sx={{
        backgroundColor: isSelected ? color : "#FFFFFF",
        color: isSelected ? "#FFFFFF" : color,
        border: isSelected ? "none" : `1px solid ${color}`,
      }}
      onClick={() => handleButtonChange(buttonName)}
    >
      {buttonName}
    </Button>
  );
}

export default CustomButton;
