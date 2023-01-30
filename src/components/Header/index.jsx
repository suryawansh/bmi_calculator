import React from "react";
import Socials from "../Socials";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = (props) => {
  return (
    <AppBar>
      <container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            item
            container
            direction="row"
            justifyContent="center                    "
            alignItems="center"
          >
            <Typography variant="h6" component="h1">
              BMI Calculator
            </Typography>
          </Grid>

          <Socials />
        </Toolbar>
      </container>
    </AppBar>
  );
};

export default Header;
