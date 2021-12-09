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
export const CourseList = () => {
  const { id } = useParams();
  console.log(id);
  const [courseData, setcourseData] = useState();
  useEffect(() => {
    axios
      .get(`https://colleges--info.herokuapp.com/college/courses/${id}`)
      .then((res) => {
        console.log(res.data);
        setcourseData(res.data);
      });
  }, []);
  return (
    <React.Fragment>
      <Typography variant="h4" color="primary">
        This is the list of all the college belonging to {id} course.
      </Typography>
      {courseData ? (
        <Grid container>
          {courseData.map((data) => (
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
