import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import OutlinedCard from "./OutlinedCard";

import axios from "axios";

export default function Home() {
  const [data, setData] = React.useState([]);
  // const data = [];
  useEffect(() => {
    const baseURL = "https://refermeagain.herokuapp.com/";
    axios.get(baseURL).then((response) => {
      console.log(response);
      setData(response.data);
      // data = response.data;
    });
  }, []);
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
