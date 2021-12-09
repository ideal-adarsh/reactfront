import React, { useEffect, useState } from "react";
import { Link, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  Grid,
  CardHeader,
  Button,
  Card,
  CardActions,
  Paper,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Container } from "@material-ui/core";
// import allCollege from "./collegelist.json";
const axios = require("axios");

//  /state/up =>all coolege
export const Statelist = () => {
  const { id } = useParams();
  const [collegeData, setcollegeData] = useState();
  useEffect(() => {
    axios
      .get(`https://colleges--info.herokuapp.com/college/state/${id}`)
      .then((res) => {
        console.log(res.data);
        setcollegeData(res.data);
      });
  }, []);
  return (
    <React.Fragment>
      <Typography variant="h4" color="primary">
        This is the list of all the college belonging to {id} state.
      </Typography>
      {collegeData ? (
        <Grid container>
          {collegeData.map((data) => (
            <Grid item key={data._id} xs={12} sm={3}>
              <Paper elevation={2}>
                <Card>
                  <CardHeader
                    title={data.name}
                    subheader={`Founded in - ${data.yearfounded}`}
                  />
                  <CardActions>
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/college/${data.number} `}
                      state={data}
                    >
                      More Info
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <h1>loading</h1>
      )}
    </React.Fragment>
  );
};
