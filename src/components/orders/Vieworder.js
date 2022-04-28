import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Vieworder = (props) => {

  
  const renderTable = ({ medicinedata }) => {
    if (medicinedata) {
      return medicinedata.map((item) => {
        return (
          <TableRow
            key={item.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            className="table-row"
            style={{fontSize: "20px"}}
          >
            <TableCell component="th" scope="row" style={{fontSize: "1.5rem"}}>
              {item.id}
            </TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem"}}>{item.hotel_name}</TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem"}}>Rs/-{item.amount}</TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem"}}>{item.status}</TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem"}}>{item.bank}</TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem"}}>{item.bank_status}</TableCell>
          </TableRow>
        );
      });
    }
  };
  return (
    <TableContainer  component={Paper}>
      <Table  className="tableOrders" sx={{ minWidth: 650 }} size="large" aria-label=" table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize: "1.5rem", fontWeight: "bold"}}>OrderId</TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem", fontWeight: "bold"}}>Name</TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem", fontWeight: "bold"}}>Price</TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem", fontWeight: "bold"}}>Status</TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem", fontWeight: "bold"}}>Bank</TableCell>
            <TableCell align="right" style={{fontSize: "1.5rem", fontWeight: "bold"}}>Bank status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTable(props)}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default Vieworder;
