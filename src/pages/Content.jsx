import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Content(props) {
  const content = props.data.minQualification;
  const content2 = props.data.prefQualification;

  return (
    <Grid container className="cover">
      <Grid item xs className="left ">
        <Typography variant="h6" gutterBottom component="div">
          Minimum Qualification:
        </Typography>
        {content}
      </Grid>
      <Divider orientation="vertical" flexItem></Divider>
      <Grid item xs className="left ">
        <Typography variant="h6" gutterBottom component="div">
          Prefered Qualification:
        </Typography>
        {content2}
      </Grid>
    </Grid>
  );
}
