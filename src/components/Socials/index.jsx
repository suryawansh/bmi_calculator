import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

import { IconButton } from "@mui/material";
const Socials = (props) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <IconButton
        color="inherit"
        onClick={() => {
          window.open("https://github.com/suryawansh", "_blank");
        }}
      >
        <GitHub />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/kavita-suryawanshi/",
            "_blank"
          );
        }}
      >
        <LinkedIn />
      </IconButton>
    </Grid>
  );
};

export default Socials;
