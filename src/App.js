import React, { useState } from "react";
import rushingStatList from "./rushing.json";

import { Container, Typography } from "@mui/material";

import RushingTable from "./RushingTable";

function App() {
  const [players] = useState(() =>
    rushingStatList.map((player, index) => {
      return { id: index, ...player };
    })
  );

  const columnHeaders =
    players.length > 0
      ? Object.entries(players[0]).map(([key]) => key)
      : [
          "Id",
          "Player",
          "Team",
          "Pos",
          "Att",
          "Att/G",
          "Yds",
          "Avg",
          "Yds/G",
          "TD",
          "Lng",
          "1st",
          "1st%",
          "20+",
          "40+",
          "FUM",
        ];

  return (
    <div>
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          NFL Rushing Code Challenge
        </Typography>

        

        <RushingTable
          rows={players}
          columnHeaders={columnHeaders}
        ></RushingTable>
      </Container>
    </div>
  );
}

export default App;
