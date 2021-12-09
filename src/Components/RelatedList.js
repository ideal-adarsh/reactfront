import { Card, Grid, Link } from "@material-ui/core";
import {
  Paper,
  CardHeader,
  Avatar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import relatedList from "./related.json";
const axios = require("axios");

const RelatedList = ({ id }) => {
  console.log(relatedList);
  // const [relatedList, setRelatedList] = useState([]);
  // useEffect(() => {
  //   const url = `https://colleges--info.herokuapp.com/college/get/${id}/similar/id2`;
  //   axios.get(url).then((res) => {
  //     setRelatedList(res.data);
  //   });
  // }, []);
  return (
    <Grid container spacing={1}>
      {relatedList.map((college) => (
        <Grid item xs={12} sm={6} key={college._id} key={relatedList.name}>
          <Link component={RouterLink} to={`/college/${college.number} `}>
            <Paper elevation={4}>
              <Card>
                <CardHeader title={college.name} subheader="college state" />
              </Card>
            </Paper>
          </Link>
        </Grid>
      ))}

      {/* <Grid item xs={12}>
        <Paper elevation={24}>
          <CircularProgress color="secondary" />
          asdasdas
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default RelatedList;
