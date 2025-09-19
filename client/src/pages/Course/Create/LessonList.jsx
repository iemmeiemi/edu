import React from "react";
import Paper from "@mui/material/Paper";
import { Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../../Components/TableComponents";
import { IoMdMore } from "react-icons/io";

export const LessonList = ({ data }) => {
  const truncate = (str, n) => (str.length > n ? str.slice(0, n) + "..." : str);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">STT</StyledTableCell>
            <StyledTableCell align="left">Đề mục</StyledTableCell>
            <StyledTableCell align="left">Nội dung</StyledTableCell>
            <StyledTableCell align="left">Số bài</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((c) => (
            <StyledTableRow key={c.id}>
              <StyledTableCell component="th" scope="row">
                {c.order}
              </StyledTableCell>
              <StyledTableCell align="left">{c.title}</StyledTableCell>
              <StyledTableCell align="left">
                {truncate(c.content, 50)}
              </StyledTableCell>
              <StyledTableCell align="right">{c.duration}</StyledTableCell>
              <StyledTableCell align="left">
                <IoMdMore size={30} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
