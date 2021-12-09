import React from "react";
import { State } from "../Components/State";
import { Courses } from "../Components/Courses";
import { Grid } from "@mui/material";
const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <State />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Courses />
      </Grid>
    </Grid>
  );
};

export default Home;
