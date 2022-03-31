import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Content from "./Content";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookProvider, { ShareButton } from "react-facebook-sdk";
const card = (data) => {
  return (
    <React.Fragment>
      <Content data={data} />
      <Box sx={{ width: "100%" }} className="wrapper">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <FacebookProvider appId="514390620038471">
            <ShareButton href="http://www.facebook.com" />
          </FacebookProvider>
          <Button variant="contained" color="info">
            Message On LinkedIn
          </Button>
          <Button
            variant="contained"
            className="darkblue"
            onClick={() => {
              console.log(data);
            }}
          >
            Message On Facebook
          </Button>
          <Button variant="contained" color="info" startIcon={<TwitterIcon />}>
            Tweet
          </Button>
          <Typography variant="body1" gutterBottom>
            Enable automatic sharing to periodically share your referral link on
            linkedIn
          </Typography>
          <Button variant="contained" color="info">
            Auto share On LinkedIn
          </Button>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default function OutlinedCard(props) {
  return (
    <Box sx={{ width: "70%", minWidth: 275 }}>
      <p>{props.obj}</p>
      <Card variant="outlined">{card(props.data)}</Card>
    </Box>
  );
}
