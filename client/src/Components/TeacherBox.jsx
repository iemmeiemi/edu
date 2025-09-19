import { Box, Button, Typography } from "@mui/material";
import React from "react";

function TeacherBox() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #b7b7b78f",
          width: "28%",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            fontStyle: "italic",
            textAlign: "left",
            margin: "10px",
          }}
        >
          Giảng viên
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            PGS.TS. Huỳnh Công Pháp
          </Typography>
          <Box
            sx={{
              borderRadius: "50%",
              width: "110px",
              height: "130px",
              overflow: "hidden",
              border: "1px solid #b7b7b78f",
            }}
          >
            <img
              src="https://daotao.vku.udn.vn/uploads/cocau/hcphap.png"
              alt="avatar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F4F4F4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
            }}
          >
            hcphap@vku.udn.vn
          </Typography>
          <Typography>Phone: 0905114500</Typography>
          <Box sx={{ display: "flex", gap: "15px", margin: "10px" }}>
            <Button
              sx={{
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              Website
            </Button>
            <Button
              sx={{
                backgroundColor: "#14AE5C",
                color: "#FFFFFF",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              Scholar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TeacherBox;
