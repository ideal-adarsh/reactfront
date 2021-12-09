import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import {
  Card,
  CardHeader,
  Grid,
  IconButton,
  Typography,
  CardContent,
  Collapse,
  styled,
  Container,
  Paper,
  CircularProgress,
  CssBaseline,
} from "@mui/material";
import { ExpandMoreOutlined } from "@material-ui/icons";
import StudentDetail from "../Components/StudentDetail";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Box } from "@mui/system";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import RelatedList from "../Components/RelatedList";
// import { styled } from "@mui/material/styles";

// import MoreVertIcon from "@mui/icons-material/MoreVert";

const axios = require("axios");

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const IndiCollege = (data) => {
  const [selectedStudent, setSelectedStudent] = useState({});
  const { id } = useParams();
  const [indiCollege, setIndiCollege] = useState();
  useEffect(() => {
    const url = `https://colleges--info.herokuapp.com/college/get/${id}`;
    axios.get(url).then((res) => {
      setIndiCollege(res.data);
    });
  }, []);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <Container maxWidth="lg" style={{ padding: "5px 10px" }}>
      {indiCollege ? (
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Paper elevation={2}>
                <Card>
                  <CardHeader
                    title={`College Name -${indiCollege.name}`}
                    subheader={`Year Founded -${indiCollege.yearfounded}`}
                  />
                  <CardContent style={{ display: "flex" }}>
                    <Typography
                      variant="body"
                      color="textsecondary"
                      style={{ flexGrow: 1 }}
                    >
                      {`State-${indiCollege.state} Country-${indiCollege.country}`}
                    </Typography>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show student list"
                    >
                      <ExpandMoreOutlined />
                    </ExpandMore>
                  </CardContent>

                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Box>
                        <List
                          style={{
                            overflowY: "scroll",
                            height: "200px",
                          }}
                        >
                          {/* {indiCollege.Students.map((student) => ( */}
                          {indiCollege.Students.map((student) => (
                            <ListItem key={student.name}>
                              <ListItemText
                                primary={student.name}
                                secondary={student.yearofbatch}
                              />
                              <IconButton
                                primary
                                edge="end"
                                aria-label="delete"
                                onClick={(e) => handleClick(student)}
                              >
                                <ReadMoreIcon />
                              </IconButton>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </CardContent>
                  </Collapse>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <StudentDetail student={selectedStudent} />;
            </Grid>
            <Grid item xs={12}>
              <RelatedList id={indiCollege.number} />
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </Container>
  );
};

export default IndiCollege;
