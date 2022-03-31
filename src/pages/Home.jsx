import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import OutlinedCard from "./OutlinedCard";
import data from "../dummydata";

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={4} justifyContent="center" alignItems="center">
        {data.map((obj) => {
          return <OutlinedCard data={obj} />;
        })}
      </Stack>
    </Box>
  );
}
