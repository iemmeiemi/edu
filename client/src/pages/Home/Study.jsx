import React from "react";
import Header from "../../Components/Header";
import { Box, Button, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DetailButton() {}

function SelectSmallTerm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          displayEmpty // Cho phép hiển thị placeholder khi giá trị rỗng
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
                borderRadius: "10px",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
            "& .MuiSelect-select": {
              padding: "10px !important",
              height: "auto",
            },
          }}
        >
          {/* Đây là Placeholder của bạn */}
          <MenuItem value="" disabled sx={{ display: "none" }}>
            Học kỳ
          </MenuItem>

          <MenuItem value={1}>Học kỳ 1</MenuItem>
          <MenuItem value={2}>Học kỳ 2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function SelectSmallYear() {
  const [year, setYear] = React.useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={year}
          onChange={handleChange}
          displayEmpty // Cho phép hiển thị placeholder khi giá trị rỗng
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
                borderRadius: "10px",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
            "& .MuiSelect-select": {
              padding: "10px !important",
              height: "auto",
            },
          }}
        >
          {/* Đây là Placeholder của bạn */}
          <MenuItem value="" disabled sx={{ display: "none" }}>
            Năm học
          </MenuItem>

          <MenuItem value={1}>2024-2025</MenuItem>
          <MenuItem value={2}>2025-2026</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function createDataCourses(no, courseName, number, teacher, week, numWeek) {
  return { no, courseName, number, teacher, week, numWeek };
}

const rowsCourses = [
  createDataCourses(
    "1",
    "Chủ nghĩa xã hội khoa học",
    "2",
    "ThS. Lương Xuân Thành",
    "15",
    "(3/15 tuần)"
  ),
  createDataCourses(
    "2",
    "Đảm bảo chất lượng và Kiểm thử phần mềm",
    "2",
    "ThS. Lương Xuân Thành",
    "15",
    "(3/15 tuần)"
  ),
  createDataCourses(
    "3",
    "Điện toán đám mây",
    "2",
    "ThS. Lương Xuân Thành",
    "15",
    "(3/15 tuần)"
  ),
  createDataCourses(
    "4",
    "Phát triển ứng dụng đa nền tảng",
    "2",
    "ThS. Lương Xuân Thành",
    "15",
    "(3/15 tuần)"
  ),
  createDataCourses(
    "5",
    "Quản trị dự án",
    "2",
    "ThS. Lương Xuân Thành",
    "15",
    "(3/15 tuần)"
  ),
];

function createDataPoint(
  no,
  courseName,
  cc,
  baiTap,
  giuaKy,
  cuoiKy,
  t10,
  diemChu
) {
  return { no, courseName, cc, baiTap, giuaKy, cuoiKy, t10, diemChu };
}

const rowsPoint = [
  createDataPoint(
    "1",
    "Chủ nghĩa xã hội khoa học",
    "10",
    "10",
    "10",
    "10",
    "10",
    "A"
  ),
  createDataPoint(
    "2",
    "Đảm bảo chất lượng và Kiểm thử phần mềm",
    "10",
    "10",
    "10",
    "10",
    "10",
    "A"
  ),
  createDataPoint("3", "Điện toán đám mây", "10", "10", "10", "10", "10", "A"),
  createDataPoint(
    "4",
    "Phát triển ứng dụng đa nền tảng",
    "10",
    "10",
    "10",
    "10",
    "10",
    "A"
  ),
  createDataPoint("5", "Quản trị dự án", "10", "10", "10", "10", "10", "A"),
];

function BasicTableCourses() {
  return (
    <Box sx={{ marginTop: "10px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#1C3369" }}>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="left">Tên lớp học phần</TableCell>
              <TableCell align="center">Số tín chỉ </TableCell>
              <TableCell align="center">Giảng viên phụ trách</TableCell>
              <TableCell align="center">Số tuần học</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsCourses.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.no}
                </TableCell>
                <TableCell align="left">{row.courseName}</TableCell>
                <TableCell align="center">{row.number}</TableCell>
                <TableCell align="center">{row.teacher}</TableCell>
                <TableCell align="center">
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography>{row.week} &nbsp;</Typography>
                    <Typography sx={{ color: "#949494ff" }}>
                      {row.numWeek}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Button
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.main,
                      color: "#FFFFFF",
                      borderRadius: "10px",
                      width: "80px",
                    }}
                  >
                    Chi tiết
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function BasicTablePoint() {
  return (
    <Box sx={{ marginTop: "10px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#1C3369" }}>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="left">Tên lớp học phần</TableCell>
              <TableCell align="center">CC</TableCell>
              <TableCell align="center">Bài tập</TableCell>
              <TableCell align="center">Giữa kỳ</TableCell>
              <TableCell align="center">Cuối kỳ</TableCell>
              <TableCell align="center">Điểm T10</TableCell>
              <TableCell align="center">Điểm chữ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsPoint.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.no}
                </TableCell>
                <TableCell align="left">{row.courseName}</TableCell>
                <TableCell align="center">{row.cc}</TableCell>
                <TableCell align="center">{row.baiTap}</TableCell>
                <TableCell align="center">{row.giuaKy}</TableCell>
                <TableCell align="center">{row.cuoiKy}</TableCell>
                <TableCell align="center">{row.t10}</TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#14AE5C", fontWeight: "bold" }}
                >
                  {row.diemChu}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function Study() {
  return (
    <>
      {/* Header */}
      <Header currentPage={"Study"} />

      {/* Content */}
      <Box>
        {/* Tất cả học phần */}
        <Box
          sx={{
            borderRadius: "10px",
            border: "1px solid #cfcfcf79",
            padding: "10px 20px",
            marginTop: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #cfcfcf79",
              padding: "10px 10px",
            }}
          >
            <Typography sx={{ fontSize: "20px", color: "#555555" }}>
              Tất cả học phần
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box
                sx={{
                  border: "1px solid #c9c9c9ff",
                  borderRadius: "5px",
                }}
              >
                <SelectSmallTerm />
              </Box>
              <Box
                sx={{
                  border: "1px solid #c9c9c9ff",
                  borderRadius: "5px",
                }}
              >
                <SelectSmallYear />
              </Box>
            </Box>
          </Box>

          <BasicTableCourses sx={{ marginTop: "10px" }} />

          <Box
            sx={{
              display: "flex",
              margin: "20px 0",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "bold" }}>Tổng: &nbsp;</Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                16 tín chỉ
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Đã học: &nbsp;
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                128/148 tín chỉ
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Điểm học phần */}
        <Box
          sx={{
            borderRadius: "10px",
            border: "1px solid #cfcfcf79",
            padding: "10px 20px",
            marginTop: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #cfcfcf79",
              padding: "10px 10px",
            }}
          >
            <Typography sx={{ fontSize: "20px", color: "#555555" }}>
              Điểm các lớp học phần
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box
                sx={{
                  border: "1px solid #c9c9c9ff",
                  borderRadius: "5px",
                }}
              >
                <SelectSmallTerm />
              </Box>
              <Box
                sx={{
                  border: "1px solid #c9c9c9ff",
                  borderRadius: "5px",
                }}
              >
                <SelectSmallYear />
              </Box>
            </Box>
          </Box>

          <BasicTablePoint sx={{ marginTop: "10px" }} />

          <Box
            sx={{
              display: "flex",
              margin: "20px 0",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "25px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Điểm TB: &nbsp;
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  10
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontWeight: "bold" }}>GPA: &nbsp;</Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  4.0
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Xếp loại: &nbsp;
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  Xuất sắc
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "25px" }}>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Điểm TB TL: &nbsp;
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  10
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  GPA TL: &nbsp;
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  4.0
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Study;
