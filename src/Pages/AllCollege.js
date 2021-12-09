import React, { useEffect, useState } from "react";
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

const AllCollege = () => {
  const [allCollege, setallCollege] = useState([]);
  useEffect(() => {
    const url = "https://colleges--info.herokuapp.com/college";
    axios.get(url).then((res) => {
      setallCollege(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Container>
      {allCollege ? (
        <Grid container spacing={1}>
          {allCollege.map((data) => (
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
        <h1> loading </h1>
      )}
    </Container>
  );
};

export default AllCollege;
