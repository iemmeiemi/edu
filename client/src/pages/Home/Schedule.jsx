import React from "react";
import Header from "../../Components/Header";
import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { hours, classes } from "./data.js";

const getWeekData = () => {
  const dates = [];
  const daysOfWeek = ["Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "CN"];

  const today = new Date();
  const currentDayOfWeek = today.getDay(); // CN=0, T2=1, ..., T7=6

  // Tính toán ngày của Thứ Hai đầu tuần
  const monday = new Date(today);
  const diff =
    today.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1);
  monday.setDate(diff);

  // Lặp qua 7 ngày để lấy dữ liệu
  for (let i = 0; i < 7; i++) {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);

    const formattedDate = [
      String(day.getDate()).padStart(2, "0"),
      String(day.getMonth() + 1).padStart(2, "0"),
      day.getFullYear(),
    ].join("/");

    dates.push(formattedDate);
  }

  return { dates, daysOfWeek };
};

const getDayColumn = (day) => {
  const dayIndex = getWeekData().daysOfWeek.indexOf(day);
  return dayIndex !== -1 ? dayIndex + 2 : "auto";
};

const HeaderCell = ({ children, sx }) => (
  <Box
    sx={{
      p: 1,
      fontWeight: "bold",
      display: "flex",
      flexDirection: "column",
      borderBottom: "1px solid #cfcfcfff",
      width: "100%",
      ...sx,
    }}
  >
    {children}
  </Box>
);

const ClassBlock = ({ course }) => (
  <Box
    sx={{
      gridColumn: getDayColumn(course.day),
      gridRow: `${course.startHour + 1} / span ${course.duration}`,
      bgcolor: course.color,
      p: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      zIndex: 1,
    }}
  >
    <Typography variant="body2" sx={{ color: "#FFFFFF", fontSize: "15px" }}>
      {course.name}
    </Typography>
    <Typography variant="caption" sx={{ fontWeight: "bold", color: "#FFFFFF" }}>
      {course.room}
    </Typography>
  </Box>
);

function Schedule() {
  const { dates, daysOfWeek } = getWeekData();
  return (
    <>
      {/* Header */}
      <Header currentPage={"Schedule"} />

      {/* Content */}
      <Box sx={{ marginTop: "10px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: (theme) => theme.palette.primary.table,
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <KeyboardDoubleArrowLeftIcon
            sx={{
              color: "#827D7D",
              marginRight: "10px",
            }}
          />
          <Typography
            sx={{
              fontSize: "19px",
              color: "#827D7D",
            }}
          >
            Tuần 5
          </Typography>
          <Typography
            sx={{
              margin: "0 20px",
              color: (theme) => theme.palette.primary.main,
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            TUẦN 6
          </Typography>
          <Typography
            sx={{
              fontSize: "19px",
              color: "#827D7D",
            }}
          >
            Tuần 7
          </Typography>
          <KeyboardDoubleArrowRightIcon
            sx={{
              color: "#827D7D",
              marginLeft: "10px",
            }}
          />
        </Box>

        {/* Schedule Table */}
        <Box
          sx={{
            width: "100%",
            marginTop: "10px",
            display: "grid",
            gridTemplateColumns: `40px repeat(${daysOfWeek.length}, 1fr)`,
            gridTemplateRows: `40px repeat(${hours.length}, 1fr)`,
            // gap: "2px",
            overflow: "hidden",
          }}
        >
          {/* Góc trống */}
          <Box
            sx={{
              gridColumn: 1,
              gridRow: 1,
              borderBottom: "1px solid #cfcfcfff",
            }}
          />

          {/* Header Ngày và Ngày */}
          {daysOfWeek.map((day, index) => (
            <HeaderCell
              key={index}
              sx={{
                gridColumn: index + 2,
                gridRow: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1">{day}</Typography>
              <Typography variant="caption">{dates[index]}</Typography>
            </HeaderCell>
          ))}

          {/* Header Tiết */}
          {hours.map((hour, index) => (
            <HeaderCell
              key={index}
              sx={{
                gridColumn: 1,
                gridRow: index + 2,
                borderBottom: "1px solid #cfcfcfff",
                justifyContent: "center",
                marginLeft: "6px",
                width: "1223px",
                textAlign: "left",
              }}
            >
              {hour}
            </HeaderCell>
          ))}

          {/* Các khối lớp học */}
          {classes.map((course) => (
            <ClassBlock key={course.id} course={course} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Schedule;
