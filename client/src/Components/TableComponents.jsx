import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { IoMdMore } from "react-icons/io";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { Slider } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TablePagination = ({ length, total, page, totalPages }) => (
  <div className="flex flex-row ">
    <div className="flex-1/2 text-sm text-gray-700 text-left">
      Hiển thị {length} trong số {total} kết quả
    </div>
    <div className=" flex-1/2 flex justify-end mt-4 gap-4 text-blue-600 cursor-pointer">
      <FaChevronCircleLeft className="text-2xl" />
      <input
        type="number"
        value={page}
        className="w-10 border-2 border-black rounded-md"
      ></input>
      /<p>{totalPages}</p>
      <FaChevronCircleRight className="text-2xl" />
    </div>
  </div>
);

export default function MUITable({ data }) {
  const list = data.data;
  const truncate = (str, n) => (str.length > n ? str.slice(0, n) + "..." : str);
  const fieldNames = Object.keys(list[0] || {});

  return (
    <div className="flex flex-col gap-4">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {fieldNames.map((fieldName) => (
                <StyledTableCell align="left">{fieldName}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((c) => (
              <StyledTableRow key={c.code}>
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
            ))}
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
