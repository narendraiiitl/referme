import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Content from "./Content";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { appid, appsecret } from "../config.js";
import axios from "axios";
import FacebookLogin from "react-facebook-login";

const postonfb = (accessToken) => {
  const baseURL = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${appid}&
client_secret=${appsecret}&fb_exchange_token=${accessToken}`;
  axios.get(baseURL).then((response) => {
    console.log(response.data);
  });
};

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
          <Button variant="contained" color="info">
            Message On LinkedIn
          </Button>
          <Button
            variant="contained"
            className="darkblue"
            onClick={() => {
              postonfb();
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
  const [login, setLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(false);
  const responseFacebook = (response) => {
    console.log(response);
    if (response.accessToken) {
      setLogin(true);
      setAccessToken(response.accessToken);
      postonfb(accessToken);
    } else {
      setLogin(false);
      setAccessToken(false);
    }
  };
  return (
    <Box sx={{ width: "70%", minWidth: 275 }}>
      <p>{props.obj}</p>
      <Card variant="outlined">{card(props.data)}</Card>
      {!login && (
        <FacebookLogin
          appId="691328388673523"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
        />
      )}
    </Box>
  );
}
