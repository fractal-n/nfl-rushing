import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function RushingTable(props) {
  const columns = props.columnHeaders.map((column) => {
    return { field: column, headerName: column, width: 150 };
  });

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={props.rows}
        autoPageSize
        pagination
        components={{ Toolbar: GridToolbar }}
      ></DataGrid>
    </div>
  );
}

export default RushingTable;
