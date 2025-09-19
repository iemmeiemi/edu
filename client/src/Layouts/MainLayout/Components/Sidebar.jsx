import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreateIcon from "@mui/icons-material/Create";
import AssignmentIcon from "@mui/icons-material/Assignment";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuItem from "../../../Components/MenuItem";

function SideBar({ currentPage, setCurrentPage }) {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(#2563EB 0%, #153885 60%)",
          p: "50px",
          width: (theme) => theme.webSize.sidebarWidth,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "210px",
            height: "210px",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src="https://genk.mediacdn.vn/zoom/700_438/139269124445442048/2024/5/24/73x6dacwjzc4hmkxklys2rtwpa-1716538725285748542169-0-70-594-1020-crop-17165387303591233547512.jpg"
            alt="avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
        </Box>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "bold",
            color: "#FFFFFF",
            mt: "20px",
          }}
        >
          Xin chào, Nguyễn Văn A!
        </Typography>

        {/* Menu */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "305px",
            mt: "50px",
          }}
        >
          <MenuItem
            icon={DashboardIcon}
            text="Trang chủ"
            page="dashboard"
            currentPage={currentPage}
          />
          <MenuItem
            icon={CalendarMonthIcon}
            text="Thời khóa biểu"
            page="schedule"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <MenuItem
            icon={CreateIcon}
            text="Học tập"
            page="study"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <MenuItem
            icon={AssignmentIcon}
            text="Bài tập"
            page="assignment"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <MenuItem
            icon={RecentActorsIcon}
            text="Liên lạc"
            page="contact"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            mt: "150px",
            alignItems: "center",
            color: "#F59E0B",
          }}
        >
          <LogoutIcon sx={{ fontSize: "30px" }} />
          <Typography
            sx={{
              marginLeft: "10px",
              cursor: "pointer",
              fontSize: "20px",
              mt: "5px",
              color: "#F59E0B",
            }}
          >
            Đăng xuất
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SideBar;
