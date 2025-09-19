import React, { useState } from "react";
import Header from "../../Components/Header";
import { Box, Button, Typography } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CustomButton from "../../Components/CustomButton";

function Assignment() {
  const [button, setButton] = useState("Tất cả");

  return (
    <>
      {/* Header */}
      <Header currentPage={"Assignment"} />

      {/* Content */}
      <Box sx={{ marginTop: "20px" }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <CustomButton
            currentButton={button}
            setButton={setButton}
            buttonName="Tất cả"
            color="#2563EB"
          />
          <CustomButton
            currentButton={button}
            setButton={setButton}
            buttonName="Chưa nộp"
            color="#FF0000"
          />
          <CustomButton
            currentButton={button}
            setButton={setButton}
            buttonName="Đã nộp"
            color="#FFEE00"
          />
          <CustomButton
            currentButton={button}
            setButton={setButton}
            buttonName="Đã chấm"
            color="#00FF15"
          />
        </Box>

        <Box>
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.primary.table,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "20px",
              padding: "10px 50px",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                Bài tập Tiếng Hàn doanh nghiệp
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  borderBottom: "1px solid #cbcbcbff",
                  padding: "5px 0",
                }}
              >
                Tiếng Hàn doanh nghiệp - CN. Nguyễn Ngân Hoa
              </Typography>
              <Typography
                sx={{ fontSize: "15px", color: "#6B7280", margin: "5px 0" }}
              >
                Hạn nộp: 10/09/2025
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <AccessTimeFilledIcon sx={{ color: "#14AE5C" }} />
                <Typography
                  sx={{
                    margin: "5px 0 0 5px ",
                    color: "#6a6a6aff",
                    fontSize: "16px",
                  }}
                >
                  Còn 4 ngày
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FF0000",
                  width: "90px",
                  height: "38px",
                  borderRadius: "10px",
                }}
              >
                <Typography sx={{ color: "#FFFFFF", fontSize: "15px" }}>
                  Chưa nộp
                </Typography>
              </Box>
              <Button
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  width: "100px",
                }}
              >
                Xem chi tiết
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Assignment;
