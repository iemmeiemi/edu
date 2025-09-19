import React from "react";

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
import { useNavigate } from "react-router-dom";

export default function CourseList({ data }) {
  const navigate = useNavigate();
  const list = data.data;
  const truncate = (str, n) => (str.length > n ? str.slice(0, n) + "..." : str);
  const fieldNames = Object.keys(list[0] || {});
  const detailCourseNavigate = (id) => {
    const uri = "course/" + id;
    navigate(uri);
  };

  return (
    <div className="flex flex-col gap-4">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Code</StyledTableCell>
              <StyledTableCell align="left">Tên</StyledTableCell>
              <StyledTableCell align="left">Mô tả</StyledTableCell>
              <StyledTableCell align="left">Tín chỉ</StyledTableCell>
              <StyledTableCell align="left">Bộ phận</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list ? (
              list.map((c) => (
                <StyledTableRow
                  key={c.id}
                  onClick={() => detailCourseNavigate(c.id)}
                >
                  <StyledTableCell component="th" scope="row">
                    {c.code}
                  </StyledTableCell>
                  <StyledTableCell align="left">{c.name}</StyledTableCell>
                  <StyledTableCell align="left">
                    {truncate(c.description, 50)}
                  </StyledTableCell>
                  <StyledTableCell align="right">{c.credits}</StyledTableCell>
                  <StyledTableCell align="left">{c.department}</StyledTableCell>
                  <StyledTableCell align="left">
                    <IoMdMore size={30} />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <p>Không có Môn học nào. Hãy tạo thêm!</p>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        length={list.length}
        total={data.total}
        page={data.page}
        totalPages={data.totalPages}
      />
    </div>
  );
}
