import * as React from "react";
import { useNavigation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const GlobalSpinner = () => {
  const navigation = useNavigation();
  const isLoading =
    navigation.state === "loading" || navigation.state === "submitting";

  if (!isLoading) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 1300, // MUI default modal z-index
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(2px)",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}
