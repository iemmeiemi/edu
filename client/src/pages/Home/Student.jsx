import { Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  no,
  lastName,
  firstName,
  studentId,
  dateOfBirth,
  sex,
  classSt,
  phone,
  email
) {
  return {
    no,
    lastName,
    firstName,
    studentId,
    dateOfBirth,
    sex,
    classSt,
    phone,
    email,
  };
}

const rows = [
  createData(
    "1",
    "Nguyễn Văn",
    "A",
    "22IT001",
    "12/09/2004",
    "Nam",
    "22KIT",
    "0123456789",
    "anv.22it@vku.udn.vn"
  ),
  createData(
    "2",
    "Nguyễn Văn",
    "A",
    "22IT001",
    "12/09/2004",
    "Nam",
    "22KIT",
    "0123456789",
    "anv.22it@vku.udn.vn"
  ),
  createData(
    "3",
    "Nguyễn Văn",
    "A",
    "22IT001",
    "12/09/2004",
    "Nam",
    "22KIT",
    "0123456789",
    "anv.22it@vku.udn.vn"
  ),
];

function Student() {
  return (
    <>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Danh sách sinh viên theo lớp
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#1C3369" }}>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="left">Họ đệm</TableCell>
              <TableCell align="center">Tên</TableCell>
              <TableCell align="center">Mã SV</TableCell>
              <TableCell align="center">Ngày sinh</TableCell>
              <TableCell align="center">Giới tính</TableCell>
              <TableCell align="center">Lớp</TableCell>
              <TableCell align="center">SĐT</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.no}
                </TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.studentId}</TableCell>
                <TableCell align="center">{row.dateOfBirth}</TableCell>
                <TableCell align="center">{row.sex}</TableCell>
                <TableCell align="center">{row.classSt}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Student;
