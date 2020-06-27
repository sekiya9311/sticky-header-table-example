import React, { useState } from "react";
import { SimpleTable } from "./SimpleTable";
import { MaterialTable } from "./MaterialTable";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
// import "./App.css";

enum TableType {
  Simple = "Simple",
  Material = "Material",
}
const App = () => {
  const [tableType, setTableType] = useState(TableType.Simple);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
      }}
    >
      <form>
        <RadioGroup
          value={tableType}
          onChange={(e) => {
            setTableType(e.target.value as TableType);
          }}
        >
          <FormControlLabel
            value={TableType.Simple}
            control={<Radio />}
            label={TableType.Simple}
          />
          <FormControlLabel
            value={TableType.Material}
            control={<Radio />}
            label={TableType.Material}
          />
        </RadioGroup>
      </form>
      <main style={{ flexGrow: 1, overflowY: "auto" }}>
        {tableType === TableType.Simple ? <SimpleTable /> : <MaterialTable />}
      </main>
    </div>
  );
};

export default App;
