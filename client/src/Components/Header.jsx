import { Box, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import TextField from "@mui/material/TextField";

function Header({ currentPage }) {
  let pageTitle = "Trang Chủ";
  switch (currentPage) {
    case "Dashboard":
      pageTitle = "Trang Chủ";
      break;
    case "Schedule":
      pageTitle = "Thời Khóa Biểu";
      break;
    case "Study":
      pageTitle = "Học Tập";
      break;
    case "Assignment":
      pageTitle = "Bài Tập";
      break;
    case "Contact":
      pageTitle = "Liên Lạc";
      break;
    default:
      pageTitle = "none";
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#6B7280",
              }}
            >
              Pages/
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
              }}
            >
              {pageTitle}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            {pageTitle}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(131, 168, 247, 0.5)",
              borderRadius: "10px",
              backgroundColor: "#F4F4F4",
              height: "51px",
              width: "360px",
            }}
          >
            <SearchIcon
              sx={{
                margin: "0 -10px 0 10px",
                color: (theme) => theme.palette.primary.main,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Tìm kiếm..."
              variant="outlined"
              sx={{
                border: "none",
                height: "100%",
                width: "100%",
              }}
            />
          </Box>
          <NotificationsNoneIcon
            sx={{
              fontSize: "30px",
              color: (theme) => theme.palette.primary.main,
            }}
          />
          <SettingsIcon
            sx={{
              fontSize: "30px",
              color: (theme) => theme.palette.primary.main,
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Header;
