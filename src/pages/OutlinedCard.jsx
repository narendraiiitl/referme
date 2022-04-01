import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Content from "./Content";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

export default function OutlinedCard(props) {
  const data = `Minimum Qualifications:
  ${props.data.minQualification}

  Preferred qualifications:
  ${props.data.prefQualification}
  `;
  const [isfb, setIsfb] = useState(false);
  const [istwitter, setIstwitter] = useState(false);

  return (
    <Box sx={{ width: "70%", minWidth: 275 }}>
      <p>{props.obj}</p>
      <Card variant="outlined">
        {" "}
        <Content data={props.data} />
        <Box sx={{ width: "100%" }} className="wrapper">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <LinkedinShareButton url={props.data.link} quote={data}>
              <Button variant="contained" color="info">
                Message On LinkedIn
              </Button>
            </LinkedinShareButton>

            <FacebookShareButton
              url={props.data.link}
              quote={data}
              className="Demo__some-network__share-button"
              disabled={isfb}
              onShareWindowClose={(obj) => {
                setIsfb(true);
              }}
            >
              <Button variant="contained" className="darkblue" disabled={isfb}>
                Message On Facebook
              </Button>
            </FacebookShareButton>

            <TwitterShareButton
              title={data}
              url={props.data.link}
              disabled={istwitter}
              onShareWindowClose={(obj) => {
                setIstwitter(true);
              }}
            >
              <Button
                variant="contained"
                color="info"
                startIcon={<TwitterIcon />}
              >
                Tweet
              </Button>
            </TwitterShareButton>
            <Typography variant="body1" gutterBottom>
              Enable automatic sharing to periodically share your referral link
              on linkedIn
            </Typography>
            <LinkedinShareButton url={props.data.link} quote={data}>
              <Button variant="contained" color="info">
                Auto share On LinkedIn
              </Button>
            </LinkedinShareButton>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
}
