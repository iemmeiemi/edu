import React, { useState } from "react";

import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { IoMdMore } from "react-icons/io";
import {
  StyledTableCell,
  StyledTableRow,
  TablePagination,
} from "../../../Components/TableComponents";


export default function ClassList({ data }) {
  const list = data.data;

  return (
    <div className="flex flex-col gap-4">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Tên</StyledTableCell>
              <StyledTableCell align="left">Môn học</StyledTableCell>
              <StyledTableCell align="left">Giáo viên</StyledTableCell>
              <StyledTableCell align="left">Phòng</StyledTableCell>
              <StyledTableCell align="left">Trạng thái</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list ? (
              list.map((c) => (
                <StyledTableRow key={c.code}>
                  <StyledTableCell component="th" scope="row">
                    {c.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{c.org_course}</StyledTableCell>
                  <StyledTableCell align="left">{c.teacher}</StyledTableCell>
                  <StyledTableCell align="left">{c.room}</StyledTableCell>
                  <StyledTableCell align="left">{c.status}</StyledTableCell>
                  <StyledTableCell align="left">
                    <IoMdMore size={30} />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <p>Không có Tài liệu nào. Hãy tạo thêm!</p>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        length={list.length}
        total={list.total}
        page={list.page}
        totalPages={list.totalPages}
      />
    </div>
  );
}
