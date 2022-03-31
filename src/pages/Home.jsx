import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import OutlinedCard from "./OutlinedCard";
import axios from "axios";
import data from "../dummydata";
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const postonfb = (data) => {
  axios.get(baseURL).then((response) => {
    console.log(response.data);
  });
};

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={4} justifyContent="center" alignItems="center">
        {data.map((obj) => {
          console.log(obj);
          return <OutlinedCard data={obj} />;
        })}
      </Stack>
    </Box>
  );
}
