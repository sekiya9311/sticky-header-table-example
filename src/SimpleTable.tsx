import React from "react";
import { headers, items } from "./data";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const styles: CSSProperties = {
  position: "sticky",
  top: 0,
};
const headerCellStyles: CSSProperties = {
  ...styles,
  backgroundColor: "white",
};
const tableStyles: CSSProperties = {
  ...styles,
  overflowY: "scroll",
};

export const SimpleTable: React.FC = () => {
  return (
    <div style={{ height: "100%", overflowX: "auto" }}>
      <table style={tableStyles}>
        <thead>
          <tr>
            {headers.map((x) => (
              <th key={x} style={headerCellStyles}>
                {x}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((x, i) => (
            <tr key={i}>
              <td>{x.a}</td>
              <td>{x.bc}</td>
              <td>{x.def}</td>
              <td>{x.ghij}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
