import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Grid from "@mui/material/Grid";

import { IconButton } from "@mui/material";
const Socials = (props) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <IconButton color="inherit">
        <GitHub />
      </IconButton>
      <IconButton color="inherit">
        <LinkedIn />
      </IconButton>
    </Grid>
  );
};

export default Socials;
