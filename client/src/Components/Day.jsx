import React from "react";
import { Box, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";

function Day({ day, date }) {
  return (
    <>
      <TableCell align="center">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography>{day}</Typography>
          <Typography>{date}</Typography>
        </Box>
      </TableCell>
    </>
  );
}

export default Day;
