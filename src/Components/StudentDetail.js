import { CardContent } from "@material-ui/core";
import { Paper, CardHeader, Avatar, Typography, Card } from "@mui/material";
import React from "react";

const StudentDetail = ({ student }) => {
  console.log(student);
  return (
    <React.Fragment>
      {student && Object.keys(student).length === 0 ? (
        <Paper elevation={4}>
          <Typography variant="paragraph" color="Secondary">
            Please select a student from the list using the arrow icon
          </Typography>
        </Paper>
      ) : (
        <Paper elevation={4}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label=""></Avatar>}
              title={student.name}
              subheader={`Year of Batch -> ${student.yearofbatch} `}
            />
            <CardContent>
              <Typography variant="body1" color="secondary">
                {`  Student Skills -${student.skills}`}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      )}
    </React.Fragment>
  );
};

export default StudentDetail;
