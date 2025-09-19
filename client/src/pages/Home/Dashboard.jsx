import { Box, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Header from "../../Components/Header";

function createData(stt, hocPhan, giangVien, phongHoc, tietHoc) {
  return { stt, hocPhan, giangVien, phongHoc, tietHoc };
}

const rows = [
  createData(
    1,
    "Đảm bảo chất lượng và Kiểm thử phần mềm (4)",
    "ThS. Dương Thị Mai Nga",
    "K.A106",
    "Hai/1->4"
  ),
  createData(
    2,
    "Phát triển ứng dụng di động đa nền tảng (2)",
    "TS. Nguyễn Thanh Tuấn",
    "V.A401",
    "Hai/6->8"
  ),
];

function Dashboard() {
  return (
    <>
      {/* Header */}
      <Header currentPage={"Dashboard"} />

      {/* Content */}
      <Box sx={{ marginTop: "30px" }}>
        {/* Thời khóa biểu */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
              Lịch học hôm nay
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                Thời khóa biểu đầy đủ
              </Typography>
              <KeyboardDoubleArrowRightIcon
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </Box>
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
              marginTop: "20px",
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
              >
                <TableRow>
                  <TableCell align="center">STT</TableCell>
                  <TableCell align="left">Tên học phần</TableCell>
                  <TableCell align="left">Giảng viên</TableCell>
                  <TableCell align="left">Phòng học</TableCell>
                  <TableCell align="left">Thứ/Tiết</TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.table,
                }}
              >
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.stt}
                    </TableCell>
                    <TableCell align="left">{row.hocPhan}</TableCell>
                    <TableCell align="left">{row.giangVien}</TableCell>
                    <TableCell align="left">{row.phongHoc}</TableCell>
                    <TableCell align="left">{row.tietHoc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* Bài tập + Tiến độ */}
        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            width: "100%",
            gap: "5%",
          }}
        >
          {/* Bài tập */}
          <Box sx={{ width: "45%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Bài tập & Deadline sắp tới
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: (theme) => theme.palette.primary.main,
                    display: "flex",
                  }}
                >
                  Xem chi tiết
                </Typography>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 0,
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.table,
                  padding: "20px 30px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography sx={{ fontSize: "19px", fontWeight: "bold" }}>
                  Bài tập Tiếng Hàn doanh nghiệp
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "#6a6a6aff",
                  }}
                >
                  Hạn nộp: 20/09/2024
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "5px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AccessTimeFilledIcon sx={{ color: "#14AE5C" }} />
                    <Typography
                      sx={{ margin: "5px 0 0 5px ", color: "#6a6a6aff" }}
                    >
                      Còn 4 ngày
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.main,
                      borderRadius: "10px",
                      height: "30px",
                    }}
                  >
                    <EastIcon />
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.table,
                  padding: "20px 30px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography sx={{ fontSize: "19px", fontWeight: "bold" }}>
                  Bài tập Tiếng Hàn doanh nghiệp
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "#6a6a6aff",
                  }}
                >
                  Hạn nộp: 20/09/2024
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "5px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AccessTimeFilledIcon sx={{ color: "#14AE5C" }} />
                    <Typography
                      sx={{ margin: "5px 0 0 5px ", color: "#6a6a6aff" }}
                    >
                      Còn 4 ngày
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.main,
                      borderRadius: "10px",
                      height: "30px",
                    }}
                  >
                    <EastIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Tiến độ học tập */}
          <Box sx={{ width: "50%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Tiến độ học tập
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: (theme) => theme.palette.primary.main,
                    display: "flex",
                  }}
                >
                  Xem chi tiết
                </Typography>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: (theme) => theme.palette.primary.main }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: (theme) => theme.palette.primary.table,
                padding: "22px 105px",
                borderRadius: "10px",
                marginTop: "20px",
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "180px",
                    width: "180px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    border: "30px solid rgba(234, 245, 255, 1)",
                  }}
                >
                  <Typography sx={{ fontSize: "28px" }}>GPA</Typography>
                  <Typography
                    sx={{
                      fontSize: "45px",
                      fontWeight: "bold",
                      marginTop: "-15px",
                    }}
                  >
                    3.5
                  </Typography>
                  <CircularProgress
                    thickness={7}
                    size={180}
                    variant="determinate"
                    value={86}
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      position: "absolute",
                    }}
                  />
                </Box>
                <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>
                  Đã hoàn thành
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    128/148
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    &nbsp;Tín chỉ
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: "50px 0 0 20px",
                  fontSize: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  Mục tiêu:{" "}
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    &nbsp;148
                  </Typography>{" "}
                  &nbsp;Tín chỉ
                </Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  Còn lại:{" "}
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    &nbsp;20
                  </Typography>{" "}
                  &nbsp;Tín chỉ
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Thông báo */}
        <Box sx={{ marginTop: "30px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Thông báo
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                Xem tất cả
              </Typography>
              <KeyboardDoubleArrowRightIcon
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: "15px",
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(131, 168, 247, 0.5)",
                borderRadius: "10px",
                backgroundColor: "#F4F4F4",
                height: "51px",
                width: "500px",
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
                  height: "100%",
                  width: "100%",
                  border: "none",
                }}
              />
            </Box>

            <Button
              sx={{
                width: "112px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Đào tạo
            </Button>
            <Button
              sx={{
                width: "112px",
                backgroundColor: "#F59E0B",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(246, 179, 64, 1)",
                },
              }}
            >
              Khảo thí
            </Button>
            <Button
              sx={{
                width: "112px",
                backgroundColor: "#14AE5C",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Tài chính
            </Button>
            <Button
              sx={{
                width: "112px",
                backgroundColor: "#FD1818",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Khoa
            </Button>
          </Box>

          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              backgroundColor: (theme) => theme.palette.primary.table,
              boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "20px 30px",
              borderRadius: "10px",
            }}
          >
            <Button
              sx={{
                width: "112px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Đào tạo
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Phòng Đào tạo thông báo danh sách sinh viên được thực hiện khóa
                luận tốt nghiệp - Ngành Quản trị kinh doanh trình độ đại học,
                học kỳ 1 năm học 2025 - 2026
              </Typography>
              <KeyboardArrowRightIcon
                sx={{ fontSize: "40px", color: "#A7A7A7" }}
              />
            </Box>
            <Typography sx={{ color: "#868686", fontStyle: "italic" }}>
              05/09/2004
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
