import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
} from "@material-ui/core";
import { headers, items } from "./data";

export const MaterialTable: React.FC = () => {
  return (
    <TableContainer component={Paper} style={{ height: "100%" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((x) => (
              <TableCell key={x}>{x}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((x, i) => (
            <TableRow key={i}>
              <TableCell>{x.a}</TableCell>
              <TableCell>{x.bc}</TableCell>
              <TableCell>{x.def}</TableCell>
              <TableCell>{x.ghij}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
